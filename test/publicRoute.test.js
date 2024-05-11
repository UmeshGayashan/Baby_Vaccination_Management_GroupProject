const request = require('supertest');
const express = require('express');
const router = express.Router; // Import your Express router

// Create a new Express app and use the router
const app = express();
app.use(express.json());
app.use(router);

// Define base URL
const baseURL = "http://localhost:4000/public";

// Check whether the authentication is working properly
describe('POST /login', () => {
    test('Try to login Empty username & password', async () => {
        const response = await request(baseURL)
          .post('/login')
          .send({ username: '', password: '' });
        
        expect(response.status).toBe(400);
        expect(response.text).toBe("Username and Password required");
      });
  test('Login as Admin user and Return status 200', async () => {
    const response = await request(baseURL)
      .post('/login')
      .send({ username: 'Umesh', password: '123456' });
    
    expect(response.status).toBe(200);
  });
  test('Login as Healthcare Professional user and Return status 200', async () => {
    const response = await request(baseURL)
      .post('/login')
      .send({ username: 'Doctor2', password: 'DC12345' });
    
    expect(response.status).toBe(200);
  });
  test('Login as Healthcare Professional and Return status 200', async () => {
    const response = await request(baseURL)
      .post('/login')
      .send({ username: 'Doctor2', password: 'DC12345' });
    
    expect(response.status).toBe(200);
  });
  test('Login as Perant and Return status 200', async () => {
    const response = await request(baseURL)
      .post('/login')
      .send({ username: 'Amma', password: 'AM12345' });
    
    expect(response.status).toBe(200);
  });
  
});


