import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Navbar from '../components/Navbar';
import MHeader from '../components/meetmentoheader';
import Footer from '../components/Footer';
import { MdArrowRight } from 'react-icons/md';

export default function MCard() {
  const cardData = [
    { id: 1, title: "Hambanthota", image: "/d1.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com" },
    { id: 2, title: "Colombo", image: "/d2.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 3, title: "Matara", image: "/d3.jpg", description1:  "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 4, title: "Galle", image: "/d4.jpg", description1:  "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 5, title: "Anuradapura", image: "/d1.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 6, title: "Kurunegala", image: "/d2.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 7, title: "Rathnapura", image: "/d3.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 8, title: "Kandy", image: "/d4.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 9, title: "Hambanthota", image: "/d1.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com" },
    { id: 10, title: "Colombo", image: "/d2.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 11, title: "Matara", image: "/d3.jpg", description1:  "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 12, title: "Galle", image: "/d4.jpg", description1:  "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 13, title: "Anuradapura", image: "/d1.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 14, title: "Kurunegala", image: "/d2.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 15, title: "Rathnapura", image: "/d3.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    { id: 16, title: "Kandy", image: "/d4.jpg", description1: "Name : Dr.Harsha Dasanayaka",description2: "District : Hambanthota", description3: "Telephone No : 070-8767789" , description4: "Email : abcd@gmail.com"},
    // Add more card data as needed
  ];

  return (
    <div style={{backgroundColor:"#fff9c7"}}>
            <Navbar/>
            <MHeader/>
        
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom:"80px" , backgroundColor:"#fff9c7",  marginLeft:"20px", marginRight:"20px"}}>
        
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
                {card.description1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description2}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {card.description3}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description4}
              </Typography>

            </CardContent>
          </CardActionArea>
         
        </Card>
      ))}
    </div>
    <Footer/>
    </div>
  );
}
