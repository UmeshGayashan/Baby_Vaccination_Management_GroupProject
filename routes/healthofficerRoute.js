const express = require("express");
const router = express.Router();
const ParentSchema = require("../schemas/guardianSchema");
const BabySchema = require("../schemas/babySchema"); // Import Baby Schema


//Mother or Guardian Account Creation
router.post("/create-parent-acc", async (req, res) => {
    try {
        const { mname, mnic, address ,postalcode, email,telephone, username, password } = req.body;

        const newParentAcc = new ParentSchema({
            motherorGuardianName: mname,
            motherorGuardianNIC: mnic,
            Address: address,
            PostalCode: postalcode,
            guardianEmail: email,
            guardianTelephoneNumber: telephone,
            parentAccountUsername: username,
            parentAccountPassword:password

        });

        // Save the new account to the database using async/await
        const savedParentAccount = await newParentAcc.save();

        return res.status(201).send(savedParentAccount); // Sending the saved account's data with HTTP 201
    } catch (err) {
        return res.status(500).send("Account creation failed: " + err.message); // Handle database errors
    }
});


//Edit Parent Account
router.put("/update-parent-acc/:nic", async (req, res) => {
    try {
      const nic = req.params.nic;
      //In request body use Schema Attributes
      const updateData = req.body;
      console.log(updateData);
      const account = await ParentSchema.findOneAndUpdate(
        { motherorGuardianNIC: nic },
        { $set: updateData },
        { new: true }
      );
  
      if (!account) {
        return res.status(404).send("Account not found");
      }
  
      return res.status(200).send(account);
    } catch (err) {
      return res
        .status(500)
        .send("Error while updating account information: " + err.message);
    }
  });

  // Create Baby Account
router.post("/create-baby-acc", async (req, res) => {
  try {
      const { parentNIC, babyName, gender, fatherNIC, fatherName, birthTime, birthDate, weight, hospitalName } = req.body;

      // Check if parent account exists
      const parentAccount = await ParentSchema.findOne({ motherorGuardianNIC: parentNIC });
      if (!parentAccount) {
          return res.status(404).send("Parent account not found");
      }

      const newBabyAcc = new BabySchema({
          parent: parentAccount._id, // Reference to the parent account
          name: babyName,
          motherorGuardianNIC: parentAccount.motherorGuardianNIC, // Use parent's NIC as guardian NIC
          gender,
          fatherNIC,
          fatherName,
          birthTime,
          birthDate,
          weight,
          hospitalName
      });

      // Save the new baby account to the database using async/await
      const savedBabyAccount = await newBabyAcc.save();

      return res.status(201).send(savedBabyAccount); // Sending the saved account's data with HTTP 201
  } catch (err) {
      return res.status(500).send("Baby account creation failed: " + err.message); // Handle database errors
  }
});


  // Update Baby Account
router.put("/update-baby-acc/:id", async (req, res) => {
  try {
      const babyId = req.params.id;
      const updateData = req.body;

      const updatedBabyAcc = await BabySchema.findByIdAndUpdate(babyId, updateData, { new: true });

      if (!updatedBabyAcc) {
          return res.status(404).send("Baby account not found");
      }

      return res.status(200).send(updatedBabyAcc);
  } catch (err) {
      return res.status(500).send("Error while updating baby account information: " + err.message);
  }
});

// Get All Babies Associated with a Parent Account
router.get("/get-parent-babies/:nic", async (req, res) => {
  try {
      const parentNIC = req.params.nic;

      const parentAccount = await ParentSchema.findOne({ motherorGuardianNIC: parentNIC });
      if (!parentAccount) {
          return res.status(404).send("Parent account not found");
      }

      const babies = await BabySchema.find({ parent: parentAccount._id });

      return res.status(200).send(babies);
  } catch (err) {
      return res.status(500).send("Error while retrieving babies: " + err.message);
  }
});



  

module.exports = router; // Export the router instance
