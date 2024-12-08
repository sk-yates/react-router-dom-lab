import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    console.log(props);

    const { mailboxId } = useParams();
    console.log('mailboxId:', mailboxId);

    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    console.log('SelectedBox:', selectedBox)

    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
    );
    console.log('selectedLetter:',)


    return (
        <>
            <h2> Details </h2>
            <dl key={mailboxId}>
                <dt> Boxholder: </dt>
                <dd> {selectedBox.boxholder} </dd>
                <dt> Box size: </dt>
                <dd> {selectedBox.boxSize} </dd>
            </dl>
            <h2> Letters </h2>
            {selectedLetters.map((letter) => (
                <dl key={letter.mailboxId}>
                    <dd> Dear {letter.recipient} </dd>
                    <dd> {letter.message}</dd>
                </dl>

            ))}
        </>
    );
};

export default MailboxDetails;