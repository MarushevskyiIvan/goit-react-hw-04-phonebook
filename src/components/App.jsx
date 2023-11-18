import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './filter/FormFilter';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactsList/ContactsList';
import { ItemWrapper, Wrapper } from './App.styled';
import { GlobalStyle } from 'GlobalStaled';

const storageKey = 'contactsArr';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem(storageKey) !== null) {
      this.setState({ contacts: JSON.parse(localStorage.getItem(storageKey)) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(storageKey, JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contacts => contacts.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      alert(`${name} is already  in contact`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
      };
    });
  };

  onFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };
  getFilterAddContacts = ({ contacts, filter } = this.state) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    console.log(this.getFilterAddContacts());
    return (
      <Wrapper>
        <h1>Phone book</h1>
        <ContactForm submit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} updateFilter={this.onFilter} />

        {this.getFilterAddContacts().length > 0 && (
          <ItemWrapper>
            <ContactsList
              contacts={this.getFilterAddContacts()}
              onDelete={this.deleteContact}
            />
          </ItemWrapper>
        )}
        <GlobalStyle />
      </Wrapper>
    );
  }
}
