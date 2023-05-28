import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/user-reservation', userRoutes);

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://d12gayen:eB8pcAG5zRiDigRn@cluster0.lsrh9kf.mongodb.net/probuddyDatabase',
    {
      //useNewUrlParser: true,
      // useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(8080, () => {
      console.log('Server started on port 8080');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

export default app;
