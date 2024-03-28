const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const {MONGO_URI, PORT} = process.env;

mongoose
    .connect(MONGO_URI)
    .then(()=>console.log("MongoDB is connected successfully"))
    .catch((err)=>console.error(err));

app.get("/",(req,res)=>res.send("hello"))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});

app.use(cors({origin:["http://localhost:3000"], methods:["GET", "POST", "PUT", "DELETE"], credentials: true,}));
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImages = document.querySelectorAll('.lazy');
//     var lazyLoad = function() {
//     lazyImages.forEach(function(img) {
//         if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
//         img.src = img.dataset.src;
//         img.classList.remove('lazy');
//         }
//     });
//     };

<<<<<<< Updated upstream
    lazyLoad(); 
    window.addEventListener('scroll', lazyLoad);
});

=======
//     lazyLoad(); 
//     window.addEventListener('scroll', lazyLoad);
// });
>>>>>>> Stashed changes
