import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Import CSS externe

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Erreur lors de la récupération des utilisateurs');
                setLoading(false);
            });
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Chargement en cours...</p>;
    if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

    return (
        <div className="user-list-container">
            <h2>Liste des utilisateurs</h2>
            <ul className="user-list">
                {listOfUser.map(user => (
                    <li key={user.id}>
                        <div className="user-name">{user.name}</div>
                        <div className="user-contact">Email: {user.email}</div>
                        <div className="user-contact">Téléphone: {user.phone}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
