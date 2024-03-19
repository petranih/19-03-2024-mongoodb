require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
}).then(con=>{
  console.log('sudah konek');
});

const customerSchema = new mongoose.Schema({
  nama: {
    type: String,
    require: [true, "name cannot be empty"]
  },
  email: {
    type: String,
    unique: true,
  },
  phonenumber: {
    type: String,
    require: true,
  },
  City: String,
  Country: {
    type: String,
    require: true,
    default: "Indonesia",
  },
});

const customer = mongoose.model('Customer', customerSchema);

const customerTest = new customer({
  nama: "dayat",
  email: "dayat@gmail.com",
  phonenumber: '1233221',
})

customerTest.save().then(doc=> {
  console.log(doc);
})
.catch((err) =>{
  console.log("error : " + err);
});

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
