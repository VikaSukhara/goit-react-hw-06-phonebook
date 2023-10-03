import React from 'react';
import { List, Item, Paragraph, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/store';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  const filterNumbers = contacts.filter(user =>
    user.name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {filterNumbers.map(contact => {
        return (
          <Item key={contact.id}>
            <Paragraph>
              {contact.name} : {contact.number}
            </Paragraph>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
