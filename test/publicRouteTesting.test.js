const { router } = require('../routes/publicRoute');
const supertest = require('supertest');
const mongoose = require('mongoose');

// Importing schemas
const userSchema = require('../schemas/userSchema');
const guardianSchema = require('../schemas/guardianSchema');
const healthcareProfessionalSchema = require('../schemas/healthcareProfessional');

// Mocking user data for testing
const mockUser = {
  username: 'LionCode4x',
  password: 'Password123'
};

const mockGuardian = {
  parentAccountUsername: 'LA3855',
  parentAccountPassword: '124568'
};

const mockHealthcareProfessional = {
  hcpUsername: 'FistHCP',
  hcpPassword: '12345'
};

// Mocking mongoose findOne method
jest.mock('../schemas/userSchema');
jest.mock('../schemas/guardianSchema');
jest.mock('../schemas/healthcareProfessional');

userSchema.findOne.mockImplementation((criteria) => {
  if (criteria.username === mockUser.username && criteria.password === mockUser.password) {
    return Promise.resolve(mockUser);
  }
  return null;
});

guardianSchema.findOne.mockImplementation((criteria) => {
  if (criteria.parentAccountUsername === mockGuardian.parentAccountUsername && criteria.parentAccountPassword === mockGuardian.parentAccountPassword) {
    return Promise.resolve(mockGuardian);
  }
  return null;
});

healthcareProfessionalSchema.findOne.mockImplementation((criteria) => {
  if (criteria.hcpUsername === mockHealthcareProfessional.hcpUsername && criteria.hcpPassword === mockHealthcareProfessional.hcpPassword) {
    return Promise.resolve(mockHealthcareProfessional);
  }
  return null;
});

describe('Login Route Testing', () => {
  test('Login User Testing - Success', async () => {
    await supertest(router)
      .post('/public/login')
      .send({ username: 'LionCode4x', password: 'Password123' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toHaveProperty('userType', 'User');
        expect(response.body).toHaveProperty('token');
      });
  });

  test('Login Guardian Testing - Success', async () => {
    await supertest(router)
      .post('/public/login')
      .send({ username: 'LA3855', password: '124568' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toHaveProperty('userType', 'Guardian');
        expect(response.body).toHaveProperty('token');
      });
  });

  test('Login Healthcare Professional Testing - Success', async () => {
    await supertest(router)
      .post('/public/login')
      .send({ username: 'FistHCP', password: '12345' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toHaveProperty('userType', 'Healthcare Professional');
        expect(response.body).toHaveProperty('token');
      });
  });

  test('Login Testing - Invalid Credentials', async () => {
    await supertest(router)
      .post('/public/login')
      .send({ username: 'invaliduser', password: 'invalidpassword' })
      .expect(404)
      .expect('User not found');
  });

  test('Login Testing - Missing Username and Password', async () => {
    await supertest(router)
      .post('/public/login')
      .expect(400)
      .expect('Username and Password required');
  });

  test('Login Testing - Internal Server Error', async () => {
    // Mocking database error
    userSchema.findOne.mockRejectedValue(new Error('Database error'));

    await supertest(router)
      .post('/public/login')
      .send({ username: 'LionCode4x', password: 'Password123' })
      .expect(500)
      .expect('Login failed: Database error');
  });
});
