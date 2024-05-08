import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function VCard() {
    const [numOfCards, setNumOfCards] = useState(3); // Initially show all three cards
    const [maxWidth, setMaxWidth] = useState('345px');

    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of cards based on window width
            if (window.innerWidth <= 600) {
                setNumOfCards(1); // Show one card when window size is minimized
                setMaxWidth('80vw'); // Set max width for small screens
            } else {
                setNumOfCards(3); // Show all three cards when window size is normal
                setMaxWidth('345px'); // Set max width for larger screens
            }
        };

        // Call handleResize when window size changes
        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once to set initial number of cards and max width

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const titles = ['BCG', 'Polio', 'MMR'];
    const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.']; // Titles for the cards
    const links = ['/login', '/login', '/login']; // Links for the buttons

    return (
        <div style={{ marginBottom: "50px" }}>
            <div className="our-journey">
                <b className="our-journey1" style={{ marginLeft: "80px" }}>{`______ PROJECTS WE HAVE DONE`}</b>
                <h2 className="how-we-raised" style={{ marginLeft: "100px" }}> Most Important  </h2>
                <h2 className="how-we-raised" style={{ marginLeft: "100px" }}>Vaccination </h2>
                <h2 className="how-we-raised" style={{ marginLeft: "100px" }}> Details</h2>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "50px" }}>
                    {[...Array(numOfCards)].map((_, index) => (
                        <Card key={index} sx={{ width: 345, marginLeft: "100px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`/babyv${index + 1}.png`}
                                    alt={`Image ${index + 1}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {titles[index]} {/* Use title based on index */}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {descriptions[index]}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link href={links[index]}>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
