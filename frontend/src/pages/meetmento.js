import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MCard() {
  const cardData = [
    { id: 1, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 2, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 3, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 4, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 5, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 6, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 7, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    { id: 8, title: "Card 1", image: "/baby.png", description: "Description for card 1" },
    // Add more card data as needed
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
      {cardData.map(card => (
        <Card key={card.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt="Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
