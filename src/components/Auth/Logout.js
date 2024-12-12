import React from 'react';

const Logout = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>You have been logged out</h1>
            <p style={styles.message}>Thank you for visiting. See you again soon!</p>
            <img 
                src="https://via.placeholder.com/300" 
                alt="Goodbye" 
                style={styles.image} 
            />
            <a href="/" style={styles.button}>Return to Home</a>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    },
    heading: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    },
    message: {
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
    },
    image: {
        width: '300px',
        height: 'auto',
        marginBottom: '20px',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#0095f6',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#007bb5',
    },
};

export default Logout;
