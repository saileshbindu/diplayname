import React, { useState } from "react";

const DisplayFullName = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullNameDisplay, setFullNameDisplay] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleFullname = (event) => {
        event.preventDefault();
        const fullName = `${firstName} ${lastName}`;
        setFullNameDisplay(fullName);
    }

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleFullname}>
                <div style={{ marginBottom: "10px" }}>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstName} required />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastName} required />
                </div>
                <button type="submit">Submit</button>
            </form>

            {fullNameDisplay && <p>Full Name: {fullNameDisplay}</p>}
        </div>
    );
}

export default DisplayFullName;
