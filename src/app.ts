import express from 'express';
import bodyParser from 'body-parser';
import {getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher} from './db';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});
app.get('/teachers', getTeachers);
app.get('/teachers/:id', getTeacherById);
app.post('/teachers', createTeacher);
app.put('/teachers/:id', updateTeacher);
app.delete('/teachers/:id', deleteTeacher);
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
