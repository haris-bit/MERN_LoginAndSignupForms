require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./connectDB"); // Import your MongoDB connection setup
const EmployeeModel = require("./models/Employee");
const UserModel = require("./models/User");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());



app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({email: email}).then(user => {
    if(user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password was incorrect");
      }
    } else {
      res.json("No entry exists");
    }
  })
})




app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((PakLabors) => res.json(PakLabors))
    .catch((err) => res.json(err));
});


app.post("/api/users", (req, res) => {
  UserModel.create(req.body)
    .then((Person) => {
      // Handle success and send the created user as a JSON response
      res.json(Person);
      console.log(Person); // This will log the created user
    })
    .catch((err) => {
      // Handle error and send an error response as needed
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


// app.post('/api/users', (req, res) => {
//   const { firstName, lastName, username, city, agreeToTerms } = req.body;
//   EmployeeModel.findOne({email: email}).then(user => {
//     if(user) {
//       if (user.password === password) {
//         res.json("Success");
//       } else {
//         res.json("The password was incorrect");
//       }
//     } else {
//       res.json("No entry exists");
//     }
//   })
// })



// Create a new user
// app.post("/api/users", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Define the MongoDB connection URI
const uri =
  "mongodb+srv://aneebraza2021:WVVQQZ42N2rZnQ2c@cluster0.lnu4wmf.mongodb.net/"; // Replace with your actual URI

// GET route to fetch sample users
app.get("/api/sample-users", async (req, res) => {
  try {
    const client = await connectDB(uri); // Reuse the existing connection setup
    const collection = client.db().collection("users");
    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error("Error fetching sample users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
