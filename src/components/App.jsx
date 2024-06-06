import './App.css'

import { ContactsSection } from './ContactsSection/ContactSecrion';
import { PhoneBook } from './PhoneBook/PhoneBook';

export const App = () => {
     
  return (
    <>
      <div className='divForm'> 
        <PhoneBook />
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        <ContactsSection/>
      </div>
    </>
  );
};

