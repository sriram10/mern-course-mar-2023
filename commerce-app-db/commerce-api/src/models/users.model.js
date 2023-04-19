
const usersValidationSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['email', 'password'],
    properties: {
      name: {
        bsonType: 'string',
        description: 'Name of the user',
      },
      email: {
        bsonType: 'string',
        description: 'Email of the user',
        pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
      },
      password: {
        bsonType: 'string',
        description: 'Password of the user',
        pattern: '[A-Za-Z0-9]{8,50}',
      },
      mobile: {
        bsonType: 'string',
        pattern: '^[0-9]{10}$',
        description: 'Must be a valid mobile number',
      }
    }
  }
}

module.exports = {
  usersValidationSchema
}