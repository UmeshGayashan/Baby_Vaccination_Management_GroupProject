const express = require("express");
const router = express.Router();
const babySchema = require("../schemas/babySchema");
const vaccinationSchema = require("../schemas/vaccinationSchema")

router.get("/get/:motherorGuardianNIC", async (req, res) => {
    const motherorGuardianNIC = req.params.motherorGuardianNIC;
  
    try {
      const babies = await babySchema.find({ motherorGuardianNIC });
  
      if (!babies) {
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

module.exports = router; // Export the router instance