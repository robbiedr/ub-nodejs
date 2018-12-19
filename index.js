require('marko/node-require');
let express         = require('express');
let markoExpress    = require('marko/express');
let app             = express();
let port            = 8800;

let path            = require('path');
let bodyParser      = require('body-parser');
let viewsDirectory  = path.join(__dirname, '/server/views');
let publicDirectory = path.join(__dirname, '/public');

let noOfComments    = 0;
let commentsList    = [];
let noOfCaps        = 0;
let capsList        = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDirectory));
app.use(markoExpress());

app.get('/', function(req, res) {
    let view = require(path.join(viewsDirectory, 'index.marko'));

    // res.type('html');
    // res.sendFile(view);
    let data = {
        caps: capsList
    };
    res.marko(view, data);
});

app.get('/comments', function(req, res) {
    let view = require(path.join(viewsDirectory, 'comment.marko'));

    // res.type('html');
    // res.sendFile(view);
    let data = {
        title: 'Comments',
        comments: commentsList,
        count: noOfComments
    };
    res.marko(view, data);
});

app.post('/comments', function(req, res) {
    let body = req.body;
    noOfComments++;
    commentsList.push({
        name: body.name,
        comment: body.comment
    });
    console.log('Name: ', body.name);
    console.log('Comment: ', body.comment);
    console.log('No. of Comments: ', noOfComments);
    console.log('Comments: ', commentsList);
    res.redirect('/comments');
});

app.post('/caps', function(req, res) {
    let body = req.body;
    noOfCaps++;
    capsList.push({
        title: body.title,
        desc: body.desc,
        url: body.url,
        id: body.title.toLowerCase().replace(/\s/g,'') + new Date().getTime()
    });
    console.log('Caps: ', capsList);
    res.redirect('/');
});

app.post('/caps/:id', function(req, res) {
    let body = req.body;
    let cap = capsList.find((c) => {
        return c.id === req.params.id;
    });
    if(cap) {
        cap.title = body.title;
        cap.desc = body.desc;
        cap.url = body.url;
    }
    console.log('Cap: ', cap);
    res.redirect('/');
});

app.listen(port, function(err) {
    if(err) {
        return console.error(err);
    }
    console.log('Listening to ' + port);
});