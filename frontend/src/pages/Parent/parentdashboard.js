import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Adjust the import path as necessary

const ParentDashboard = () => {
    const { user } = useAuth();
    const [babies, setBabies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBabies = async () => {
            try {
                const response = await fetch(`http://localhost:4000/parent/get/${user.nic}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const data = await response.json();
                console.log('API response:', data); // Log the response data

                if (response.ok) {
                    setBabies(data);
                } else {
                    throw new Error(data.error || 'Invalid response format');
                }
            } catch (error) {
                console.error('Error:', error);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        if (user && user.userType === 'Guardian') {
            fetchBabies();
        }
    }, [user]);

    return (
        <div>
            <h1>Welcome, {user?.username}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h2>Your Babies:</h2>
                    {babies.length > 0 ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            {babies.map((baby, index) => (
                                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                                    <h3>{baby.babyName.firstName} {baby.babyName.lastName}</h3>
                                    <p><strong>Birth Date:</strong> {new Date(baby.birthDate).toLocaleDateString()}</p>
                                    <p><strong>Birth Time:</strong> {baby.birthTime}</p>
                                    <p><strong>Hospital:</strong> {baby.hospitalName}</p>
                                    <p><strong>Weight:</strong> {baby.weight} kg</p>
                                    <p><strong>Gender:</strong> {baby.gender}</p>
                                    <p><strong>BabyID:</strong> {baby.bid}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No babies found.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default ParentDashboard;
