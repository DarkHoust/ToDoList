const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/toDo');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const toDoSchema = {
    task: String
};

const Tasks = mongoose.model("Task", toDoSchema);

const ExampleTask = new Tasks({
    task: "Here is example"
});

// Tasks.insertMany([ExampleTask]);

app.get('/', async (req, res) => {
    await Tasks.find({}).then(
        tasks => res.render(path.join(__dirname, 'public', 'views', 'toDoPage.ejs'), {Tasks: tasks})
    );
});

app.post('/', async (req, res) => {
    const newTask = new Tasks({ task: req.body.newTask });
    await newTask.save();
    console.log('New Task has been added!')
    res.redirect('/');
});

app.post('/delete', async (req, res) => {
    const taskId = req.body.checkbox;
    await Tasks.findByIdAndDelete(taskId).then(
        console.log("Task deleted successfully!")
    );
    res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Local server is running on http://localhost:${PORT}/`);
})