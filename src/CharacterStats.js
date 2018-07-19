import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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
    paddingTop: 20,
  },
  values: {
    fontSize: 22,
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
          <Typography>{age}<br/>{height}<br/>{weight}<br/>{hobbies}<br/>{birthday}</Typography>
        </Popover>

        <div className={classes.container}>
          <div className={classes.name}>
            {name}
          </div>
          <div className={classes.title}>
            Speed
          </div>
          <div className={classes.values}>
            {speed.values}
          </div>
          <div className={classes.title}>
            Might
          </div>
          <div className={classes.values}>
            {might.values}
          </div>
          <div className={classes.title}>
            Speed
          </div>
          <div className={classes.values}>
            {sanity.values}
          </div>
          <div className={classes.title}>
            Knowledge
          </div>
          <div className={classes.values}>
            {knowledge.values}
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
