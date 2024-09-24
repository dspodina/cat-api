import dotenv from 'dotenv';
import express from 'express';
import router from './routes/cat.js';

// Configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5000;

// Initialize express
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log('Request received');
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', router);

// Handle 404
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

// Listen to the port
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
