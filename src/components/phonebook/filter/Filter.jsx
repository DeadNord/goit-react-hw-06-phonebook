import PropTypes from 'prop-types';
import s from './Filter.module.css';

import { connect } from 'react-redux';
import contactsActions from '../../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p className={s.name}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
        value={value}
        className={s.input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// export default Filter;

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
