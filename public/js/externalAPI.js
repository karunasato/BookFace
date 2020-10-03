//   require("dotenv").config();
//   const axios = require("axios");
//   const router = require("express").Router();

//   router.get("/", (req,res) => {
//     // console.log(req.body);
//     // res.json(req.body);
//     const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
//     const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${isbn10}`;
//   })

// module.exports=router
//     // GOOGLE API
//     // function googleAPI(isbn10) {
//     //   const GOOGLE_API_URL= 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
//     //   // const GOOGLE_API_KEY = '&key=AIzaSyAYeIrbfE6DDlKyaoiBQQS2_IlW1fbz9vk';
//     //   console.log("ISBN10_______________", isbn10)
//     //   const GOOGLE_ENTIRE_API_URL = `${GOOGLE_API_URL}${isbn10}`;
//     //   console.log("GOOGLE URL", GOOGLE_ENTIRE_API_URL)
//     //   fetch(`${GOOGLE_ENTIRE_API_URL}`, {
//     //       method: 'get',
//     //     })
//     //     .then(response => { return response.json(); })
//     //     .then(json => {
//     //     let img = json.items[0].volumeInfo.imageLinks.thumbnail;
//     //     $('#cover-').attr('src', img);
//     //     console.log("-------IMAGE-------", img)
//     //   })
//     //     .catch(error => {
//     //       console.log('GOOGLE API Error' + error);
//     //     });
//    // end of Google API
