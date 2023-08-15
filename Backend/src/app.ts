import express from 'express';
import indexRouter from './routes/index.routes';
import cors from 'cors';
const app = express();

const allowedOrigins = ['http://localhost:5173'];
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Akses ditolak oleh kebijakan CORS'));
      }
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
export default app;
