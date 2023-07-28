import app from './app';
import { connectToDatabase } from './config/database';
import { PORT } from './config/envConfig';

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error Connecting to database', err);
  });
