import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '480px',
        margin: 'auto',
        background: 'aliceblue',
        padding: '30px',
        boxShadow: '0 4px 4px rgb(0 0 0 / 15%)',
      }}
    >
      <h1 style={{ marginTop: '0' }}>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
