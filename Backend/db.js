const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/IMS";
mongoose.connect("mongodb+srv://shop:ICMYKvfhInCBZQYL@cluster0.covvwqe.mongodb.net/IMS?retryWrites=true&w=majority&appName=Cluster0")

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
