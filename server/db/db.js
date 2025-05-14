import mysql from 'mysql2/promise';
// connect to database
const conn = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "stage",
    waitForConnections: true,
})
conn.getConnection()
    .then((res) => console.log("connected to database well"))
    .catch((error) => console.log("Not Connected to Database"))

export default conn