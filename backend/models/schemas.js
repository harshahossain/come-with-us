const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  website: { type: String },
  entryDate: { type: Date, default: Date.now },
}); //this is for the users table in cloud/mongodb users table inside nodecluster inside comewithus_db

const contactSchema = new Schema({
  email: { type: String, required: true },
  website: { type: String, required: true },
  message: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users", userSchema, "users"); //first one is for Users COnst, the userSchema so it takes the Schema, the last one is the actual db table(cloud/mongodb)
const Contact = mongoose.model("Contact", contactSchema, "contact_form");

const mySchemas = { Users: Users, Contact: Contact };

module.exports = mySchemas;
