import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    console.log(props);

    const {mailboxId} = useParams();
    console.log('mailboxId:', mailboxId);

    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    console.log('SelectedBox:', selectedBox)

    return (
        <>
        <h2> Details </h2>
        <dl>
            <dt> Boxholder: </dt>
            <dd> {selectedBox.boxholder} </dd> <dt> Box size: </dt>
            <dd> {selectedBox.boxSize} </dd>
        </dl>
        </>
    );
};

export default MailboxDetails;