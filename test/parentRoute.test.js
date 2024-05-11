const express = require('express');
const request = require('supertest');
const babySchema = require('../schemas/babySchema'); // Assuming this is where the schema is defined.

// Mock the babySchema
jest.mock('../schemas/babySchema');

const app = express();
const router = express.Router();

router.get("/get/:motherorGuardianNIC", async (req, res) => {
    const motherorGuardianNIC = req.params.motherorGuardianNIC;

    try {
      const babies = await babySchema.find({ motherorGuardianNIC });

      if (!babies || babies.length === 0) {
        return res.status(404).json({ error: "No Babies found" });
      }

      return res.status(200).json(babies);
    } catch (err) {
      return res.status(500).json({
        error: "Error while fetching babies",
        message: err.message,
      });
    }
});

app.use(router); // Use the router on the app

describe('GET /get/:motherorGuardianNIC', () => {
  test('should return a list of babies', async () => {
    const babies = [{ name: 'Baby1' }, { name: 'Baby2' }];
    babySchema.find.mockResolvedValue(babies);

    const response = await request(app)
      .get('/get/123456789V')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual(babies);
    expect(babySchema.find).toHaveBeenCalledWith({ motherorGuardianNIC: '123456789V' });
  });

  test('should return 404 if no babies are found', async () => {
    babySchema.find.mockResolvedValue([]);

    const response = await request(app)
      .get('/get/123456789V')
      .expect(404);

    expect(response.body).toEqual({ error: "No Babies found" });
  });

  test('should handle errors', async () => {
    babySchema.find.mockRejectedValue(new Error('Failed to fetch'));

    const response = await request(app)
      .get('/get/123456789V')
      .expect(500);

    expect(response.body).toEqual({
      error: "Error while fetching babies",
      message: "Failed to fetch"
    });
  });
});