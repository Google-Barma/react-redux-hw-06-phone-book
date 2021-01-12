import { useState } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';
import propTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <>
      <label className={s.text} name="filter" htmlFor="filter" value={value}>
        Find contacts by name
      </label>
      <input
        value={value}
        type="text"
        id="filter"
        onChange={e => onChangeFilter(e.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChangeFilter: propTypes.func,
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = {
  onChangeFilter: value => dispatchEvent(changeFilter(value)),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
