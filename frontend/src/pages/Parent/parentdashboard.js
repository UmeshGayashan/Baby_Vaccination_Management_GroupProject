import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext'; 

const ParentDashboard = () => {
    const { user } = useAuth();
    const [babies, setBabies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBabies = async () => {
            try {
                const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/parent/get/${user.nic}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const data = await response.json();

                if (response.ok) {
                    setBabies(data);
                    fetchVaccinationsForBabies(data);
                } else {
                    throw new Error(data.error || 'Invalid response format');
                }
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        const fetchVaccinationsForBabies = async (babies) => {
            const babiesWithVaccinations = await Promise.all(babies.map(async (baby) => {
                const vacResponse = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/parent/vac/${baby.bid}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const vacData = await vacResponse.json();
                if (vacResponse.ok) {
                    return { ...baby, vaccinations: vacData };
                } else {
                    return { ...baby, vaccinations: [] }; // No vaccinations found or error occurred
                }
            }));
            setBabies(babiesWithVaccinations);
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
                                    <div>
                                        <h4>Vaccinations:</h4>
                                        <ul>
                                            {baby.vaccinations && baby.vaccinations.length > 0 ? baby.vaccinations.map((vaccination, vIndex) => (
                                                <li key={vIndex}>{vaccination.name} - {new Date(vaccination.date).toLocaleDateString()}</li>
                                            )) : <li>No vaccinations recorded.</li>}
                                        </ul>
                                    </div>
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
