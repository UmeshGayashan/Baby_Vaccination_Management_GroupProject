const express = require("express");
const router = express.Router();
const ParentSchema = require("../schemas/guardianSchema");


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

module.exports = router; // Export the router instance
