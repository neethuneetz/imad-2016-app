var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ 
    'article-one':{
    title:'article-one|neethu.a.n',
    heading:'article-one',
    date:'sep 5 2016',
    content:`
           <p>
             this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.
            </p>
            <p>
                 this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page. this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.
            </p>
            `
        },
        'article-two':{
            title:'article-two|neethu.a.n',
    heading:'article-two',
    date:'sep 10 2016',
    content:`
           <p>
             this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.
            </p>
            <p>
                 this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page. this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.
            </p>
            `
        },
        'article-three':{
            title:'article-three|neethu.a.n',
    heading:'article-three',
    date:'sep 15 2016',
    content:`
           <p>
             this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.
            </p>
            <p>
                 this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page. this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.this is the content of my fist html page.
            </p>
            `
        }
};
function createTemplate (data){ 
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
    <html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class='container'>
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
