import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: '#77d4ed',
    borderRadius: 12,
    border: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: '104%',
    height: 45,
    padding: '0 30px',
    width: '100%',
    marginTop: '16px',
    letterSpacing: '1px',
    '&:hover': {
      background: '#67c4dd',
    }
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
