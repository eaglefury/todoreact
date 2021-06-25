import express from 'express';
const app = express();
const PORT = process.env.PORT || 5020;
app.get('/', (request, response) => {
    response.send('hello server! and test');
})

app.listen(PORT, ()=> console.log(`server started at http://localhost:${PORT}`));


