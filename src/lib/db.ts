import { POSTGRES_DATABASE, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } from '$env/static/private';
import pg from 'pg';

let pool: pg.Pool;
let client: pg.PoolClient;

export async function init() {
    pool = new pg.Pool({
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        host: POSTGRES_HOST || 'localhost',
        port: Number(POSTGRES_PORT || 5432),
        database: POSTGRES_DATABASE
    });
    client = await pool.connect();
}

export async function addUserCode(userId: string, code: string) {
    await client.query("INSERT INTO user_oauth (user_id, code) VALUES ($1, $2)", [userId, code]);
}