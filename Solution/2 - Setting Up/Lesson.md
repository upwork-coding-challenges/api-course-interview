# Setting Up

## Brief introduction of the libraries
For building our APIs we'll use a list of standard libraries to get our server together, add persistence with a database, and finally, make sure we use ES6 JavaScript syntax by installing Babel. So first go to nodejs.org and You can explore Express on expressjs.com. So if you want to have more information on Express, feel free to go to the site, but we'll explore this library momentarily. Then you can go to mongodb.com. So what we'll use is MongoDB as our database so we can persist our data. And finally, we'll use Babel so we can use ES6 syntax and Babel will transpile our code for us so we don't have to worry about proper syntax. With these tools, we'll be able to build an API we can call in with any front end applications or tools, such as Postman

## Introduction to Postman
Because we're not using any front end and this course is about building a back end, we need to be able to test and use the API endpoints we'll create in this course. This is where Postman will be used to allow us to get data, post new items, update, or delete them.

## Install Node and Express
So the next step in the tools we need is to have Node and Express properly installed.

## Install Mongo
Now that we have the basic server dependencies for a project, we need to install Mongo so we add the database when we build a server. But also we'll use Mongo to simplify some of the initial boilerplate. So first, go to MongoDB.com. Then you also have mongoosejs.com. Mongoose basically is a library to help us with modeling our database and bring several built-in tools to help us with validation, business logic hooks, etc.

## Basic Babel ES6 setup
Babel is a tool we'll set up to help us work with ES6 without any issues