import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NarBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";


const mailboxExample = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Alex',
};


const App = () => {
  const [mailboxes, setMailboxes] = useState([mailboxExample]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.lenght + 1
    setMailboxes([ ...mailboxes, newMailbox ])
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={ <main><h1> Post Office </h1></main> } />
        <Route path="/mailboxes" element={ <MailboxList mailboxes={mailboxes} /> } />
        <Route path="/new-mailbox" element={ <MailboxForm addBox={addBox} /> } />
        <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails mailboxes={mailboxes} /> } />
      </Routes>

    </>
  );
};

export default App;

