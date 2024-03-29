const express = require("express");
const router = express.Router();
const ParentSchema = require("../schemas/guardianSchema");


//Mother or Guardian Account Creation
router.post("/create-parent-acc", async (req, res) => {
    try {
        const { mfirstName, mlastName, mnic, address ,postalcode, email,telephone, username, password ,info} = req.body;

        const newParentAcc = new ParentSchema({
            motherorGuardianName: {
              firstName: mfirstName,
              lastName: mlastName,
            },
            motherorGuardianNIC: mnic,
            Address: address,
            PostalCode: postalcode,
            guardianEmail: email,
            guardianTelephoneNumber: telephone,
            parentAccountUsername: username,
            parentAccountPassword:password,
            additionalInfo:info
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

  //Baby Account Creation
router.post("/create-baby-acc", async (req, res) => {
  try {
    const {mfirstName, mlastName, mnic, gender, ofc, birthTime , birthDate ,birthweight , birthHospital} = req.body;
    const babyId = Math.floor(Math.random() * 100000000);

    const newBabyAcc = new babySchema({
      babyName: {
        firstName: mfirstName,
        lastName: mlastName,
      },
      motherorGuardianNIC: mnic,
      Bid: babyId,
      gender: gender,
      ofc: ofc,
      birthTime:birthTime,
      birthDate: birthDate,
      weight: birthweight,
      hospitalName: birthHospital
    });

    // Save the new account to the database using async/await
    const savedBabyAccount = await newBabyAcc.save();

    return res.status(201).send(savedBabyAccount); // Send HTTP 201 for resource creation along with the saved account's data
  } catch (err) {
    return res.status(500).send("Account creation failed: " + err.message); // Handle database errors
  }
});

//Edit Baby Account
router.put("/update-baby-acc/:babyId", async (req, res) => {
  try {
    const babyId = req.params.babyId;
    //In request body use Schema Attributes
    const updateData = req.body;
    console.log(updateData);
    const account = await babySchema.findOneAndUpdate(
      { Bid: babyId },
      updateData,
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
