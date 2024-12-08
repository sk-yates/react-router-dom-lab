import { useState } from 'react';
import { useNavigate } from "react-router"

const initialState = { boxholder: "", boxSize: "" }

const MailboxForm = (props) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate("/mailboxes")
    };

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    };

    return (
        <>
            <h2> Make a new Mailbox </h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='boxholderName'> Name: </label>
                    <input
                        name='boxholder'
                        type='text'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='boxSize'> Mailbox size: </label>
                    <select
                        name="boxSize"
                        onChange={handleChange}
                        required>
                        <option value=""> Select size </option>
                        <option value="Small"> Small </option>
                        <option value="Medium"> Medium </option>
                        <option value="Large"> Large </option>
                    </select>
                </div>

                <button type="submit"> Submit </button>
            </form>
        </>
    );
};

export default MailboxForm;