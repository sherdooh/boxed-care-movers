// testQuote.js
const axios = require("axios");

async function sendQuote() {
  try {
    const response = await axios.post("http://localhost:5000/api/quotes", {
      plan: "Premium",
      city: "New York",
      address: "123 Main St",
      date: "2026-03-01",
      phone: "1234567890"
    }, {
      headers: { "Content-Type": "application/json" }
    });

    console.log("Response:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}

sendQuote();