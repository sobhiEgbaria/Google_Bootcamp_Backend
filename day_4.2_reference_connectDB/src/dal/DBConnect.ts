import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'spring',
  password: '2wsxzaq1',
  port: 5432, // default PostgreSQL port
});

async function connect() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  } 
}
connect();

export function getClient(): Client{
  return client;
}









// import 'dotenv/config';

// const client = new Client({
//   user: process.env.DB_USERNAME,
//   host: process.env.DB_HOST || 'localhost',
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432', 10), // default PostgreSQL port
// });