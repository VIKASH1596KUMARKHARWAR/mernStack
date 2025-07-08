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
function queryDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        console.log("Database connected");
        try {
            const res = yield client.query('SELECT * FROM users');
            console.log("Query results:", res.rows);
        }
        catch (err) {
            if (err instanceof Error) {
                console.error("Error during query:", err.stack);
            }
            else {
                console.error("Unexpected error:", err);
            }
        }
    });
}
queryDB();
