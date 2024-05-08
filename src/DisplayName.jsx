import { useState } from "react";

const DisplayFullName = () =>{
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [fullNamedisplay, setFullNameDisplay] = useState('')

const handleFirstName = (event) =>{
    setFirstName(event.target.value)
}
const handleLastName = (event) =>{
    setLastName(event.target.value)
}

const handleFullname = (event) =>{
    event.preventDefault();
    setFullNameDisplay(firstName +" " + lastName)
    setFirstName('')
    setLastName('')
}

return(<div>
    <h1>Full Name Display</h1>
    <form onSubmit={handleFullname}>
        <div style={{marginBottom:"10px"}}>
            <label>Full Name: </label>
            <input type="text" value={firstName} onChange={handleFirstName} required />
        </div>
        <div style={{marginBottom:"10px"}}> 
            <label>Last Name: </label>
            <input type="text" value={lastName} onChange={handleLastName} required />
        </div>
        <button type="submit">Submit</button>
    </form>

    {fullNamedisplay  && `Full Name : ${fullNamedisplay}`}
</div>)
}

export default DisplayFullName;