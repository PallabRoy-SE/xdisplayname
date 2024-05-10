import { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    };
    return (
        <section style={{ marginLeft: '1rem' }}>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit} style={{ marginBlock: '1rem' }}>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        id='firstName'
                        name='first name'
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        id='lastName'
                        name='last name'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            {fullName ? <span style={{ fontWeight: '500' }}>Full Name: {fullName}</span> : null}
        </section>
    );
}

export default App;
