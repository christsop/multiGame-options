"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const types = `
  # Agile Actor user type
  type User {
    id: String!
    email: String!
    name: String
    firstName: String
    lastName: String
    displayName: String
    provider: String
    createdAt: String
  }

  # Array of User type elements
  type Users {
    all: [User]
  }
`;

exports.default = types;