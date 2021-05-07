# Initial Server Build

## Initial server setup
Now the fun begins. And we'll start by creating our initial server code and making sure it is running properly.

## Initial server files and folders
So before we start adding endpoints to our server, let's set up our folder structure for our project. I personally put everything in a source folder and then start branching out the folders and files I'll use for the server, like controllers, models and routes. So let's get to it. Also, I'd like to mention that I'm going to leave my server running and that's why I'm using nodemon, because whenever I make changes in my server or in the code anywhere in the folder that the server is running, then it's going to restart it automatically for me. So if there's any errors or anything that I've done while I'm coding, I'm going to see it right here, that the server's not running. 

## Basic routing endpoints
Any application back end or front end needs routes in order to be able to call a URL and get something back in a web application. You can call a route and go to a specific page or you can also use routes to define your end points in an application. 

## Basics of middleware and uses
What is a middleware? In the context of our known and expressed server, how would it be used? Middleware are simply functions that have access to the request and response object in our express application and can run their code there. It can make changes to the request response objects, can end them, can call another function in the stack using next. we can add anything we want as middleware into our endpoints. It could also be a third party library where you want to do something special, your imagination is your limit.

