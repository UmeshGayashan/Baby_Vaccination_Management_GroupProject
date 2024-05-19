import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function VCard() {
  const cardData = [
    { id: 1, title: "BCG", image: "/babyv1.png", description: "The Bacille Calmette-Guérin (BCG) vaccine is used to prevent tuberculosis (TB), a bacterial infection that primarily affects the lungs. While the vaccine is not widely used in countries with low TB prevalence, it is commonly administered in countries with high TB rates, ", link: "/vaccines/1" },
    { id: 2, title: "Polio", image: "/babyv2.png", description: "The polio vaccine protects against poliomyelitis, a highly contagious viral infection that can lead to paralysis. It comes in two forms: the oral polio vaccine (OPV) and the inactivated polio vaccine (IPV). Both vaccines are highly effective in preventing polio.", link: "/vaccines/3" },
    { id: 3, title: "Rubella", image: "/babyv3.png", description: "The rubella vaccine, also known as the German measles vaccine, protects against rubella, a contagious viral infection. Rubella can cause mild symptoms in adults but can be very harmful to unborn babies if contracted by pregnant women.", link: "/vaccines/7" },
    { id: 4, title: "Hep B", image: "/babyv1.png", description: "The hepatitis B vaccine protects against hepatitis B virus (HBV) infection, which can cause liver inflammation and potentially lead to liver damage or cancer. The vaccine is typically given in a series of shots and is highly effective in preventing hepatitis B infection.", link: "/vaccines/2" },
    // Add more card data as needed
  ];

  return (
    <div  style={{marginBottom:"80px"}}>
      <Typography variant="h4" style={{fontSize:"40px", fontWeight:"600", marginLeft:"150px" , marginBottom:"50px", marginTop:"-50px"}}> Vaccines</Typography>
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
                <Typography variant="body2" color="text.secondary" fontSize="18px">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={card.link}>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
