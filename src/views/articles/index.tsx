import React from 'react';
import {withStyles, WithStyles} from '@material-ui/core/styles';
import styles from './styles';

interface IProps extends WithStyles<typeof styles> {}
const Comp = (props: IProps) => {
  const { classes } = props;
  return (
    <div className={classes.container}>111</div>
  );
};

export default withStyles(styles)(Comp);