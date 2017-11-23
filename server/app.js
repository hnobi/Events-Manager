
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
            message: 'Welcome to EventsManager',
        });
});

app.use('/api/v1', eventsRoute);
// app.use('/api/v1/', (req, res) => {
//     res.status(404);
//     res.json({
//         status: 'Failed',
//         message: 'Page not found'
//     });
// });

app.use('*', (req, res) => {
    res.status(404);
    res.json({
        status: 'Failed',
        message: 'Page not found'
    });
});

app.listen(port, () => console.log(`Application listening  on port ${port}`));

export default app;
