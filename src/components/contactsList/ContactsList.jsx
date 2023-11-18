import { ListBtn, ListItem, ListNumber, ListText } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return contacts.map(({ name, id, number }) => {
    return (
      <ListItem key={id}>
        <ListText>{name}</ListText> :<ListNumber>{number}</ListNumber>
        <ListBtn onClick={() => onDelete(id)} type="button">
          delete
        </ListBtn>
      </ListItem>
    );
  });
};
