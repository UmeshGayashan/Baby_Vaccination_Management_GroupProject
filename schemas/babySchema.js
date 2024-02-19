// models/Baby.js

const mongoose = require('mongoose');

const babySchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  motherorGuardianNIC: { 
    type: String,
    required: true 
  },
  gender: { 
    type: String, 
    required: true 
  },
  fatherNIC: { 
    type: String, 
    required: true 
  },
  fatherName: {
    type: String, 
    required: true 
  },
  ofc: { 
    type: String 
  }, 
  birthTime: { 
    type: String, 
    required: true 
  },
  birthDate: { 
    type: Date, 
    required: true 
  },
  weight: { 
    type: Number, 
    required: true 
  },
  hospitalName: { 
    type: String, 
    required: true 
  }
});

module.exports = mongoose.model('Baby', babySchema);
