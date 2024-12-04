import { useState } from 'react';

const MailboxForm = (addBox) => {
    
    const [boxholderName, setBoxholderName] = useState("");
    const [boxSize, setBoxSize] = useState("Small");

    console.log(addBox)
    
    
    
    
    
    
    return (
        <>
        <h2> MailboxForm </h2>
        </>
    );
};

export default MailboxForm;