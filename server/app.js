
import express from 'express';
import bodyParser from 'body-parser';
import eventsRoute from './routes/events';

const app = express();
const port = parseInt((process.env.PORT), 10) || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.status(404)
        .json({
            message: 'Welcome Message ,serve working perfectly',
        });
});


app.use('/api/v1', eventsRoute);

app.listen(port, () => console.log(`Application listening  on port ${port}`));

export default app;
