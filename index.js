const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello again my lovely phone!! without auto restart')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sbana@gmail.com', phone: '017777777' },
    { id: 2, name: 'Sabana hasan', email: 'sbanah@gmail.com', phone: '017777777' },
    { id: 3, name: 'Sabananoor', email: 'sbananoor@gmail.com', phone: '017777777' },
    { id: 4, name: 'Sabanatoor', email: 'sbanatoor@gmail.com', phone: '017777777' },
    { id: 5, name: 'abana', email: 'abana@gmail.com', phone: '017777777' },
    { id: 6, name: 'kabana', email: 'kbana@gmail.com', phone: '017777777' },
    { id: 7, name: 'labana', email: 'lbana@gmail.com', phone: '017777777' }
]


app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log('Listening to port', port);
})