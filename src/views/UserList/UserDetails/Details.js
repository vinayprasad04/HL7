import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {CardDetails} from './Card';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserDetails = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <h1 className="MuiTypography-h3">Patients Details</h1>
      <div className={classes.content}>


        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CardDetails cardLevel={'Demographics'}/>
          </Grid>
          <Grid item xs={3}>
            <CardDetails cardLevel={'Medical Info'}/>
          </Grid>
          <Grid item xs={3}>
            <CardDetails cardLevel={'Demographics'}/>
          </Grid>
          <Grid item xs={3}>
            <CardDetails cardLevel={'Demographics'}/>
          </Grid>
        </Grid>



      </div>
    </div>
  );
};

export default UserDetails;
