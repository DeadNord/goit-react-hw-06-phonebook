import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import Contact from './Contact';

import { connect } from 'react-redux';
import contactsActions from '../../../redux/contacts/contacts-actions';

const Contacts = ({ contacts, deleteContact }) => (
  <>
    {contacts.length > 0 && (
      <ul className={s.contactsList}>
        {contacts.map(item => (
          <Contact
            key={item.id}
            name={item.data.name}
            number={item.data.number}
            id={item.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    )}
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
const filterContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(item =>
    item.data.name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: filterContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
