🌦 Weather App – Associate Software Engineer Assignment
📌 Project Overview

This project is a React-based Weather Application developed as part of the Associate Software Engineer Front-End Assignment.

The application:

Reads city data from a provided cities.json file

Extracts CityCode values

Fetches real-time weather data from the OpenWeather API

Displays weather information according to the provided UI design

Implements a responsive layout for desktop and mobile resolutions

The application integrates with OpenWeather REST APIs to retrieve live weather data.

🚀 Technologies Used

React (Vite)

JavaScript (ES6+)

HTML5 & CSS3

Fetch API

OpenWeather REST API

📂 Project Structure
weather-app/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── assets/
│   └── cities.json
│
├── .env
├── package.json
└── README.md
🧩 Features Implemented
✅ Step 1 – Extract City Codes

The application reads the provided cities.json

Extracts all CityCode values

Stores them in an array for API calls

✅ Step 2 – Fetch Weather Data

Weather data is fetched using OpenWeather API.

Depending on API plan compatibility, the following endpoint is used:

GET https://api.openweathermap.org/data/2.5/weather

Parameters:

id – City ID

units=metric

appid – API key

Multiple cities are fetched using Promise.all for concurrent API requests.

✅ Step 3 – UI Implementation

The UI:

Matches the provided PSD design

Displays:

City Name

Temperature

Weather Condition

Weather Icon

Humidity

Wind Speed

Last Updated Time

Fully responsive (Desktop & Mobile)

Tested on:

Chrome

Firefox

Safari

🌍 API Response Data Used

From the OpenWeather API response, the following fields are extracted and displayed:

{
  "coord": { "lon": 37.62, "lat": 55.75 },
  "weather": [
    { "main": "Clear", "description": "Sky is Clear", "icon": "01d" }
  ],
  "main": {
    "temp": 7.75,
    "pressure": 1026,
    "humidity": 57
  },
  "wind": { "speed": 3 },
  "dt": 1457609400,
  "name": "Moscow"
}

Displayed Fields:

City Name (name)

Temperature (main.temp)

Weather Description (weather[0].description)

Weather Icon (weather[0].icon)

Humidity (main.humidity)

Wind Speed (wind.speed)

Last Updated Timestamp (dt)

Longitude & Latitude (coord.lon, coord.lat)

🔐 Environment Variables

Create a .env file in the root directory:

VITE_API_KEY=6627502f93c7bf654f425866f15a40e8

The API key is accessed using:

import.meta.env.VITE_API_KEY

🛠 Installation & Setup
1️⃣ Clone the repository
git clone <https://github.com/abdulazoor/react-weather-dashboard.git>
cd weather-app
2️⃣ Install dependencies
npm install
3️⃣ Run development server
npm run dev

Default dev port:
http://localhost:5173
4️⃣ Build for production
npm run build
5️⃣ Preview production build
npm run preview

Default preview port:
http://localhost:4173

📱 Responsive Design

The application adapts automatically to:

Desktop screens

Tablets

Mobile devices

Layout adjustments are handled using CSS media queries and flexible grid structure.

🧪 Cross-Browser Compatibility

Tested successfully on:

Latest Chrome

Latest Firefox

Latest Safari

🎯 Assignment Requirements Coverage
Requirement	Status
Extract CityCode from cities.json	✅ Completed
Call OpenWeather API	✅ Completed
Display required weather fields	✅ Completed
Responsive UI (Desktop & Mobile)	✅ Completed
Cross-browser compatibility	✅ Completed
GitHub Repository	✅ Completed
Docker Deployment	Optional


👨‍💻 Author

Abdul Azoor
Associate Software Engineer Candidate
