import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CharacterStats from './CharacterStats';

import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const colors = {
  "White": grey[700],
  "Red": red[900],
  "Green": green[900],
  "Purple": deepPurple[800],
  "Blue": blue[800],
  "Yellow": yellow[900]
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 6,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class FullWidthGrid extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.props.characters.map(c=>{
            return(
              <Grid item xs={12} sm={12} md={6} lg={4} key={c.name}>
                <Paper className={classes.paper} style={{backgroundColor:colors[c.color]}}>
                  <CharacterStats character={c} deleteCharacter={this.props.deleteCharacter} />
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
