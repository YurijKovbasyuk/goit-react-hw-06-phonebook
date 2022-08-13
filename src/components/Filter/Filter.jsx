import { Fragment } from 'react';
import css from './Filter.module.css';
// import PropTypes from 'prop-types';
// import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

// incoming props'props'

function Filter() {
  // const { filter } = props.filter;
  const value = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const handleChange = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <Fragment>
      <p className={css.p}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </Fragment>
  );
}

// Filter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
export default Filter;
