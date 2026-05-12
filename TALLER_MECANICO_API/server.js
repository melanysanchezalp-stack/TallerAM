// ============================================
// ENTRY POINT - SERVER
// ============================================
import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import { connectDB } from './src/database/connection.js';

const PORT = process.env.PORT || 4000;

// Conectar a la base de datos y levantar servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚗 Servidor del Taller corriendo en puerto ${PORT}`);
    console.log(`📡 Entorno: ${process.env.NODE_ENV || 'development'}`);
  });
});
