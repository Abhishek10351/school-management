# school-management

A basic School Management system, that uses APIs to post and get data about schools in a region.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the server
4. Visit `http://localhost:3000` to view the application

## API Endpoints

1. `GET /listSchools` - Get a list of all schools within the given latitude and longitude , (payload: latitude, longitude)
2. `POST /addSchool` - Add a new school to the database, (payload: name, latitude, longitude, address)

## Environment Variables

1. `PORT` - The port on which the server should run
2. `DATABASE_URI` - The URI of the MYSQL database
3. `DATABASE_USER` - The username of the MYSQL database
4. `DATABASE_PASSWORD` - The password of the MYSQL database
5. `DATABASE_HOST` - The host of the MYSQL database
