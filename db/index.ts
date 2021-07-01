import pg from "pg";

import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: parseInt(<string> process.env.DB_PORT),
});

const query = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};

export default query;
