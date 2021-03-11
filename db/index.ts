import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'fantasy.cz1tzgmyk84q.us-east-2.rds.amazonaws.com',
    database: 'fantasy',
    password: 'modernfantasy',
    port: 5432,
});

interface Query {
    query: (text: string, params: any[]) => Promise<pg.QueryResult<any>>;
}

const query: Query = {
    query: (text: string, params: any[]) => {
        return pool.query(text, params);
    }
}

export default query;