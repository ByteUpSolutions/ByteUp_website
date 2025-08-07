// js/server.js - CÓDIGO DE BACKEND

const path = require('path');

// volte um diretório para trás ('../') e encontre o ficheiro .env".
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testDatabase() {
  console.log("Tentando conectar ao banco de dados Neon...");
  let client;
  try {
    client = await pool.connect();
    console.log("✅ Conectado ao banco de dados Neon com sucesso!");
    
    const result = await client.query('SELECT NOW()');
    console.log("Hora atual do servidor do banco de dados:", result.rows[0].now);
    
  } catch (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.stack);
  } finally {
    if (client) {
        client.release();
    }
    await pool.end();
  }
}

testDatabase();