import { Pool } from 'pg';

const pool = new Pool({
//sbko remove kr ke url de shakte h

    user: 'neondb_owner',
    password: 'UHtgvX9WQE8J',
    host: 'ep-red-boat-a5xnyp3g.us-east-2.aws.neon.tech',
    port: 5432,
    database: 'neondb',
    ssl: { rejectUnauthorized: false },
});

async function queryDB() {
    const client = await pool.connect(); // Get a connection from the pool
    console.log("Database connected"); // Log message to show connection success
    try {
        const res = await client.query('SELECT * FROM users');
        console.log("Query results:", res.rows); // Display query results
    } catch (err) {
        if (err instanceof Error) {
            console.error("Error during query:", err.stack); // Handle query errors
        } else {
            console.error("Unexpected error:", err); // Handle unexpected errors
        }
    } 
    
    // finally {
        // client.release(); // Return the connection to the pool
        // console.log("Connection released"); // Confirm the connection is released
    // }
}

queryDB();
