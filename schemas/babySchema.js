

const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
  vacname: { 
    type: String,
    required: true 
  },
  vaccinator: { 
    type: String, 
    required: true 
  },
  bottle_code: { 
    type: String 
  },
  verification_code: { 
    type: String 
  },
  date: { 
    type: Date, 
    required: true 
  },
  place: { 
    type: String 
  }
});

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
  },

  vaccinations: [vaccinationSchema] // Define vaccinations as an array of objects using vaccinationSchema
});

module.exports = mongoose.model('Baby', babySchema);
