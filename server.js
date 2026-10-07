import express from 'express';

const app = express();

app.get('/api/health', (request, response) => {
    response.status(200).json({ success: {
        status: 200,
        message: 'Server is running.'
    } });
});

app.listen(3000);
