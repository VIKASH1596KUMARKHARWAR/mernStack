import { Pool } from 'pg';

// Setup PostgreSQL connection
const pool = new Pool({
    user: 'neondb_owner',
    password: 'UHtgvX9WQE8J',
    host: 'ep-red-boat-a5xnyp3g.us-east-2.aws.neon.tech',
    port: 5432,
    database: 'neondb',
    ssl: { rejectUnauthorized: false },
});

// Insert data into the users table
async function insertData(username: string, email: string): Promise<void> {
    const client = await pool.connect();
    try {
        const res = await client.query(
            'INSERT INTO users (username, email, created_at) VALUES ($1, $2, NOW()) RETURNING *',
            [username, email]
        );
        console.log('Inserted data:', res.rows);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error during insertion:', err.stack);
        } else {
            console.error('Unknown error during insertion');
        }
    } finally {
        client.release();
    }
}

// Update user's email by username
async function updateData(username: string, newEmail: string): Promise<void> {
    const client = await pool.connect();
    try {
        const res = await client.query(
            'UPDATE users SET email = $1 WHERE username = $2 RETURNING *',
            [newEmail, username]
        );
        console.log('Updated data:', res.rows);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error during update:', err.stack);
        } else {
            console.error('Unknown error during update');
        }
    } finally {
        client.release();
    }
}

// Select all users from the users table
async function selectData(): Promise<void> {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM users');
        console.log('Users:', res.rows);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error during query:', err.stack);
        } else {
            console.error('Unknown error during query');
        }
    } finally {
        client.release();
    }
}

// Example Usage
async function run() {
    // Insert two users
    await insertData('alice_jones', 'alice.jones@example.com');
    await insertData('bob_brown', 'bob.brown@example.com');

    // Update email for john_doe
    await updateData('john_doe', 'john.doe@newdomain.com');

    // Select all users from the table
    await selectData();
}

run();


/*
try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
        console.error('Error during the insertion:', err);
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);*/