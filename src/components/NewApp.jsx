import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { ItemWrapper, Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStaled';

const storageKey = 'contactsArr';

const useLocalStorage = () => {
  const saveContacts = localStorage.getItem(storageKey);
  if (saveContacts !== null) {
    return JSON.parse(saveContacts);
  }
  return [];
};

export const NewApp = () => {
  const [contacts, setContacts] = useState(useLocalStorage);
  const [contactFilter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    if (
      contacts.some(
        contacts => contacts.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      alert(`${name} is already  in contact`);
      return;
    }

    setContacts(prevState => {
      return [{ name, number, id: nanoid() }, ...prevState];
    });
  };

  const onFilter = newFilter => {
    setFilter(newFilter);
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return [...prevState.filter(item => item.id !== contactId)];
    });
  };

  const getFilterAddContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(contactFilter.toLowerCase());
    });
  };

  return (
    <Wrapper>
      <h1>Phone book</h1>
      <ContactForm submit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter filterValue={contactFilter} updateFilter={onFilter} />

      {getFilterAddContacts().length > 0 && (
        <ItemWrapper>
          <ContactsList
            contacts={getFilterAddContacts()}
            onDelete={deleteContact}
          />
        </ItemWrapper>
      )}
      <GlobalStyle />
    </Wrapper>
  );
};
