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

module.exports = router; // Export the router instance
