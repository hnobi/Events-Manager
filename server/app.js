import express from 'express';
import bodyParser from 'body-parser';


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


// app.use('/api', recipeRoutes)

app.listen(port, console.log(`server running at ${port}`));

export default app;
