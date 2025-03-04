Game Review Site - Local Setup

Prerequisites

Before you start, make sure you have the following installed on your system:

Node.js 

PostgreSQL

Git

 Clone the Repository

git clone https://github.com/yourusername/gamereviewsite.git
cd gamereviewsite

 Set Up the Backend

Install Dependencies

cd backend
npm install

Run Database Migrations

npx prisma migrate dev --name init

Start the Backend Server

npm start

Backend will be running at http://localhost:3000.



Install Dependencies

npm install


Frontend will be running at http://localhost:3000.


 API Endpoints Overview

User Authentication

POST /api/users/register - Register a new user

POST /api/users/login - Login a user

Games

GET /api/games - Get all games

POST /api/games - Add a new game

Reviews

POST /api/reviews - Add a review

GET /api/reviews/:gameId - Get reviews for a game

