import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'fantasy.cz1tzgmyk84q.us-east-2.rds.amazonaws.com',
    database: 'fantasy',
    password: 'modernfantasy',
    port: 5432,
});

const query = {
    query: (text, params) => {
        return pool.query(text, params);
    }
}

export default query;