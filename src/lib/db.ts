import pg from 'pg';

let pool: pg.Pool;
let client: pg.PoolClient;

export async function init() {
    pool = new pg.Pool({
        connectionString: process.env.POSTGRES_URL
    });
    client = await pool.connect();
}

export async function addUserCode(userId: string, code: string) {
    await client.query("INSERT INTO user_oauth (user_id, code) VALUES ($1, $2)", [userId, code]);
}