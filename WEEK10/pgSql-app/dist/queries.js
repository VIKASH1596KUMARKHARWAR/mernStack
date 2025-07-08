"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'neondb_owner',
    password: 'UHtgvX9WQE8J',
    host: 'ep-red-boat-a5xnyp3g.us-east-2.aws.neon.tech',
    port: 5432,
    database: 'neondb',
    ssl: { rejectUnauthorized: false },
});
function insertData(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            const res = yield client.query('INSERT INTO users (username, email, created_at) VALUES ($1, $2, NOW()) RETURNING *', [username, email]);
            console.log('Inserted data:', res.rows);
        }
        catch (err) {
            if (err instanceof Error) {
                console.error('Error during insertion:', err.stack);
            }
            else {
                console.error('Unknown error during insertion');
            }
        }
        finally {
            client.release();
        }
    });
}
function updateData(username, newEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            const res = yield client.query('UPDATE users SET email = $1 WHERE username = $2 RETURNING *', [newEmail, username]);
            console.log('Updated data:', res.rows);
        }
        catch (err) {
            if (err instanceof Error) {
                console.error('Error during update:', err.stack);
            }
            else {
                console.error('Unknown error during update');
            }
        }
        finally {
            client.release();
        }
    });
}
function selectData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            const res = yield client.query('SELECT * FROM users');
            console.log('Users:', res.rows);
        }
        catch (err) {
            if (err instanceof Error) {
                console.error('Error during query:', err.stack);
            }
            else {
                console.error('Unknown error during query');
            }
        }
        finally {
            client.release();
        }
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield insertData('alice_jones', 'alice.jones@example.com');
        yield insertData('bob_brown', 'bob.brown@example.com');
        yield updateData('john_doe', 'john.doe@newdomain.com');
        yield selectData();
    });
}
run();
