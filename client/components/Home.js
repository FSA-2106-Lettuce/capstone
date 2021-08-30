import React from 'react';
import { useSelector } from 'react-redux';
import FilterRuns from './FilterRuns';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CallMissedSharp } from '@material-ui/icons';

/**
 * COMPONENT
 */

const useStyles = makeStyles((theme) => ({
  banner: {
    marginLeft: theme.spacing(2),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  console.log('user: ', user);

  return (
    <div>
      <h2 className={classes.banner}>
        Welcome to Flock! The runs in your area are shown below:{' '}
      </h2>
      <FilterRuns user={user} />

      <Footer />
    </div>
  );
};

export default Home;
