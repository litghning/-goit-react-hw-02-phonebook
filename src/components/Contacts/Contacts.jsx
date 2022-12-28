import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDelContact }) => (
  <ul className={css.List}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.ListItem}>
        <p className={css.Info}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onDelContact(id)}
          className={css.Btn}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;