const request = require('supertest');
const express = require('express');
const bcrypt = require('bcrypt');
const router = require('../routes/adminRoute');

const app = require('../main'); // Adjust the path to your main Express app file

jest.mock('../schemas/healthcareProfessional');
const healthcareProfessionalSchema = require('../schemas/healthcareProfessional');

// Mock bcrypt.hash
jest.mock('bcrypt');

describe('Healthcare Professional Account Creation', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  test('should create a new account', async () => {
    // Mock request body
    const requestBody = {
      firstName: 'Doctor',
      lastName: 'A',
      nic: '991467427V',
      postalCode: '11630',
      email: 'doc1@gmail.com',
      username: 'Doctor2',
      password: 'DC12345',
    };

    // Mock hashed password
    const hashedPassword = 'hashed_password';
    bcrypt.hash.mockResolvedValue(hashedPassword);

    // Mock saved account data
    const savedHealthAccount = {
      _id: 'some_id',
      hcpName: {
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
      },
      hcpNIC: requestBody.nic,
      hcpPostalCode: requestBody.postalCode,
      hcpEmail: requestBody.email,
      username: requestBody.username,
      password: hashedPassword,
    };
    healthcareProfessionalSchema.mockReturnValue({
      save: jest.fn().mockResolvedValue(savedHealthAccount),
    });

    // Make a request to the endpoint using supertest
    const response = await request(router)
      .post('/create-health-acc')
      .send(requestBody);

    // Assertions
    expect(response.status).toBe(201); // Check if the response status is 201 (Created)
    expect(response.body).toEqual(savedHealthAccount); // Check if the response body matches the saved account data

    // Check if bcrypt.hash is called with the correct arguments
    expect(bcrypt.hash).toHaveBeenCalledWith(requestBody.password, 10);

    // Check if the healthcareProfessionalSchema is called with the correct arguments
    expect(healthcareProfessionalSchema).toHaveBeenCalledWith({
      hcpName: {
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
      },
      hcpNIC: requestBody.nic,
      hcpPostalCode: requestBody.postalCode,
      hcpEmail: requestBody.email,
      username: requestBody.username,
      password: hashedPassword,
    }, 10000);

    // Check if the save method is called on the healthcareProfessionalSchema instance
    expect(healthcareProfessionalSchema().save).toHaveBeenCalled();
  });
});
