import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: 0,
  },
  cssRoot: {
    width: '11%',
    minWidth: '11%',
    maxWidth: '11%',
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CustomizedInputs extends React.Component {

  componentWillMount = () => {
    this.setState({
      nums: this.props.numbers,
      default: this.props.default,
      current: this.props.default
    })
  }

  setCurrentNumber = i => {
    this.setState({
      current: i
    })
  }

  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
      <div className={classes.container}>
        {this.state.nums.map((n,i)=>{
          let other = i === this.state.default ? "outlined" : "flat";
          let variant = i === this.state.current ? "contained" : other;
          return(
            <Button
            variant={variant}
            color="primary"
            className={classNames(classes.margin, classes.cssRoot)}
            onClick={()=> this.setCurrentNumber(i)}
            key={i}
            >
            {n}
            </Button>
          )
        })}
      </div>
      </Paper>
    );
  }

}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);
