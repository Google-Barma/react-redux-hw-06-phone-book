import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';
import propTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, onChangeFilter }) {
  return (
    <>
      <label className={s.text} name="filter" htmlFor="filter" value={filter}>
        Find contacts by name
      </label>
      <input value={filter} type="text" id="filter" onChange={onChangeFilter} />
    </>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChangeFilter: propTypes.func,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
