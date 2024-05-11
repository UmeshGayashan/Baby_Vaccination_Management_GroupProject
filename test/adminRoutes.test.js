const express = require("express");
const request = require("supertest");
const bcrypt = require("bcrypt");
const app = express();
const router = require("../routes/adminRoute");
const healthcareProfessionalSchema = require("../schemas/healthcareProfessional");
const ParentSchema = require("../schemas/guardianSchema");
const babySchema = require("../schemas/babySchema");
const vaccinationSchema = require("../schemas/vaccinationSchema");

jest.mock("bcrypt");
jest.mock("../schemas/healthcareProfessional");
jest.mock("../schemas/guardianSchema");
jest.mock("../schemas/babySchema");
jest.mock("../schemas/vaccinationSchema");

app.use(express.json());
app.use(router);

describe("Healthcare Professional Account Creation", () => {
  test("should create a new healthcare professional account", async () => {
    const hashedPassword = "hashedPassword";
    bcrypt.hash.mockResolvedValue(hashedPassword);
    const newAccount = {
      firstName: "TestingHCP",
      lastName: "LastName",
      nic: "123456789V",
      postalCode: "12345",
      email: "testing@example.com",
      username: "Testing",
      password: "password",
    };
    const savedAccount = { ...newAccount, _id: "account_id", password: hashedPassword };
    healthcareProfessionalSchema.mockReturnValue({
      save: jest.fn().mockResolvedValue(savedAccount),
    });

    const response = await request(app)
      .post("/create-health-acc")
      .send(newAccount)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body).toEqual(savedAccount);
  });
});