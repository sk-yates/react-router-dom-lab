import { Link } from 'react-router-dom';

const MailboxList = (props) => {

    console.log(props.mailboxes)

    return (
        <>
        <h2> Mailbox List </h2>
        <ul>
            {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox._id}>
                <Link to={`/mailboxes/${currentMailbox._id}`}>
                Mailbox {currentMailbox._id}
                </Link>
            </li>
        ))}
        </ul>
        </>
    );
};

export default MailboxList;