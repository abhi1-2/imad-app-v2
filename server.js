var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articles={ 
    article1:{
    title: 'article 1',
    heading: 'hi',
    content:` <p>
        hi i'm abhishek
    </p>    
    <p>
        hi i'm abhishek
    </p>
    <p>
        hi i'm abhishek
    </p>`
    
    
    
},
    article2:{title: 'article 2',
    heading: 'hi2',
    content:` <p>
        hi i'm aritro
    </p>    
    <p>
        hi i'm abhishek
    </p>
    <p>
        hi i'm abhishek
    </p>`},
    article3:{title: 'article 3',
    heading: 'hi3',
    content:` <p>
        hi i'm aritro
    </p>    
    <p>
        hi i'm aritro
    </p>
    <p>
        hi i'm abhishek
    </p>`}
};
var createTemplate=function(data){
        var content=data.content;
        var title=data.title;
        var heading=data.heading;
        var htmltemplate=`
        <html>
        <head> 
        <title>${title}</title>
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="new">
        <h1>${heading} </h1>
        <div>
        <a href="/">home</a>
        </div>
        <hr/>
        <div >
            
                <h3>intro</h3>
           ${content}
        </div>
        </div>
        </body>
        
        </html>`;
return htmltemplate;
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1',function(req,res){
   res.send(createTemplate(article1));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article2',function(req,res){
   res.send(createTemplate(article2)); 
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article3',function(req,res){
    res.send(createTemplate(article1));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
