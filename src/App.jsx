import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NarBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import LetterForm from "./components/LetterForm";


const mailboxExample = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Alex',
};

const letterExample = {
  mailboxId: 1,
  recipient: 'Alex',
  message: 'This is a message for Alex!',
};


const App = () => {
  const [mailboxes, setMailboxes] = useState([mailboxExample]);
  const [letters, setLetters] = useState([letterExample]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  };

  const addLetter = (newLetter) => {
    newLetter._id = letters.length + 1
    setLetters([...letters, newLetter])
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<main><h1> Post Office </h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>

    </>
  );
};

export default App;

