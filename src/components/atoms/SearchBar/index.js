import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';

import styles from './styles';

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props;
    const { onChange } = this.props;

    return (
      <div>
        <Input
          className={classes.input}
          onChange={onChange}
          placeholder='Procure por nomes, tags e/ou donos dos repositórios'
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.any.isRequired,
};


export default withStyles(styles)(SearchBar);
