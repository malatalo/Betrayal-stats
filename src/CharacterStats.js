import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StatNumbers from './StatNumbers';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    paddingTop: 10,
    opacity: 0.5,
  },
  values: {
    fontSize: 22,
    opacity: 0.75,
  },
  delete: {
    cursor: 'pointer',
    float: 'left'
  },
  info: {
    cursor: 'help',
    float: 'right'
  },
  popover: {
    pointerEvents: 'none',
  },
});

class FullWidthGrid extends React.Component {
  state = {
    anchorEl: null,
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };
  componentWillMount = () => {
    let pc = this.props.character;
    this.setState({
      name: pc.name,
      imageUrl: pc.imageUrl,
      color: pc.color,
      might: {default: pc.might.default,
        current: pc.might.default,
        values: pc.might.value},
      speed: {default: pc.speed.default,
        current: pc.speed.default,
        values: pc.speed.value},
      sanity: {default: pc.sanity.default,
        current: pc.sanity.default,
        values: pc.sanity.value},
      knowledge: {default: pc.knowledge.default,
        current: pc.knowledge.default,
        values: pc.knowledge.value},
      age: pc.age,
      height: pc.height,
      weight: pc.weight,
      hobbies: pc.hobbies,
      birthday: pc.birthday
    });
  }

  render(){
    const { classes } = this.props;
    const { anchorEl, name, age, weight, height, hobbies, birthday, speed, might, sanity, knowledge } = this.state;
    const open = Boolean(anchorEl);
    return (
        <div>
        <div className={classes.container}>
          <div className={classes.name}>
          <DeleteIcon className={classes.delete} onClick={()=>this.props.deleteCharacter(name)}>delete</DeleteIcon>
          <InfoIcon className={classes.info} onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>info</InfoIcon>
          <Popover
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={this.handlePopoverClose}
            disableRestoreFocus
          >
          <List dense>
            <ListItem>
              <ListItemText primary={age} secondary="age"/>
            </ListItem>
            <ListItem>
              <ListItemText primary={height} secondary="height"/>
            </ListItem>
            <ListItem>
              <ListItemText primary={weight} secondary="weight"/>
            </ListItem>
            <ListItem>
              <ListItemText primary={hobbies} secondary="hobbies"/>
            </ListItem>
            <ListItem>
              <ListItemText primary={birthday} secondary="birthday"/>
            </ListItem>
          </List>
          </Popover>
            {name}
          </div>
          <div className={classes.title}>
            <Paper>Speed</Paper>
          </div>
          <div className={classes.values}>
            <StatNumbers numbers={speed.values} default={speed.default}/>
          </div>
          <div className={classes.title}>
            <Paper>Might</Paper>
          </div>
          <div className={classes.values}>
            <StatNumbers numbers={might.values} default={might.default}/>
          </div>
          <div className={classes.title}>
            <Paper>Sanity</Paper>
          </div>
          <div className={classes.values}>
            <StatNumbers numbers={sanity.values} default={sanity.default}/>
          </div>
          <div className={classes.title}>
            <Paper>Knowledge</Paper>
          </div>
          <div className={classes.values}>
            <StatNumbers numbers={knowledge.values} default={knowledge.default}/>
          </div>
        </div>
      </div>
    );
  }
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
