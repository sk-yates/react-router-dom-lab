import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = { mailboxId: "", recipient: "", message: "" }

const LetterForm = (props) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLetter(formData);
        setFormData(initialState);
        navigate(`/mailboxes/`);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.name === 'mailboxId'
                ? Number(event.target.value)
                : event.target.value
        })
    };

    return (
        <>
            <h2> New Letter </h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='mailboxId'> Select a Mailbox: </label>
                    <select
                        name="mailboxId"
                        value={formData.mailboxId}
                        onChange={handleChange}
                        required>

                        {props.mailboxes.map((mailbox) => (
                            <option key={mailbox._id} value={mailbox._id}>
                                {mailbox._id}
                            </option>
                        ))};
                    </select>
                </div>

                <div>
                    <label htmlFor='recipient'> Recipient: </label>
                    <input
                        name='recipient'
                        type='text'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='message'> Message: </label>
                    <textarea
                        name='message'
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit"> Submit </button>
            </form>
        </>
    );
};

export default LetterForm;