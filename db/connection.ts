import mysql from "mysql2/promise";
import { config } from "dotenv";
config();
// Create the connection to database

const createSchool =
    "CREATE TABLE if not exists school ( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100),  latitude FLOAT, longitude FLOAT )";
const connection = mysql.createConnection({
    uri: process.env.DATABASE_URI,
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "password",
});

(async () => {
    try {
        (await connection).query("CREATE DATABASE IF NOT EXISTS school");
        (await connection).query("USE school");
        (await connection).query(createSchool);
    } catch (error) {
        console.log(error);
    }
})();

export default connection;
