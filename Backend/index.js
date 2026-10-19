import express from 'express';
import cors from 'cors';
import validateGraph from './workflowValidator.js';
import executionEngine from './executionEngine.js';
const app = express();
const PORT = 5000;

// Middleware

app.use(cors());
app.use(express.json());

console.log(express.json())

// Health check route

app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'NCAP Backend is running!' });
});

app.post('/create-automation', async (req, res) => {
    const { nodes, edges } = req.body;
    try {
        await validateGraph(nodes, edges);
        res.status(200).json({ status: 'ok', message: 'Graph Successfully validated' });
    }
    catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }

})

app.post('/run-automation', async (req, res) => {
    const { nodes, edges } = req.body;
    try {
        const result = await executionEngine(nodes, edges);
        res.status(200).json({
            status: 'ok',
            message: 'Graph Successfully executed',
            result: result
        });
    }
    catch (err) {
        res.status(400).json({ status: 'error', message: err.message });
    }
})

// Start listening

app.listen(PORT, () => {
    console.log(`🚀 NCAP Backend server running at http://localhost:${PORT}`);
});
