// import { useState, useMemo } from 'react';
// import useLocalStorage from './hooks/useLocalStorage';

// importComponent
import Section from './components/phonebook/section/Section';
import Form from './components/phonebook/form/Form';
import Contacts from './components/phonebook/contacts/Contacts';
import Filter from './components/phonebook/filter/Filter';

// importScripts
// import { alert } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import { nanoid } from 'nanoid';

// Redux
// import { useSelector, useDispatch } from 'react-redux';
// import * as actions from './redux/contacts/contacts-actions';
// import {
//   filterContacts,
//   getFilter,
// } from './redux/contacts/phonebook-selectors';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // const changeFilter = e => {
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // };

  // const addContact = data => {
  //   const contactData = contacts.find(elem => elem.name.includes(data.name));

  //   if (contactData) {
  //     alert({
  //       title: 'Alert',
  //       text: `${contactData.name} is already in contacts`,
  //     });
  //   } else {
  //     const userId = { id: nanoid() };
  //     setContacts(contacts => [...contacts, { ...userId, ...data }]);
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactId),
  //   );
  // };

  // const filterContact = useMemo(() => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter),
  //   );
  // }, [contacts, filter]);

  return (
    <>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
