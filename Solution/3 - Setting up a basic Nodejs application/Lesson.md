# Setting up a basic Nodejs Application

In this lesson we will start getting our hands dirty. We will focus on setting up a basic nodejs application and making it up and running.

## Steps to make your Nodejs Server up and running

Step 1 - Download [Nodejs](https://nodejs.org/en).

Step 2 - Once you've downloaded. Install nodejs to your computer.

Step 3 - Create a node js file. Name the file anything you like.

Step 4 - Write the following script in the file 
```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

Step 5 - Open terminal/command prompt and navigate to the folder where the script is kept.

Step 6 - Initiate the script using following command ```node <filename>```

Step 7 - Start your browser and type in the address ```http://localhost:8080/```