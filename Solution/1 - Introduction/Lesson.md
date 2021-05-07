# Introduction

Discover how to create a simple, RESTful web API with Node.js the popular JavaScript runtime environment and the Express web framework. Emmanuel Henri demonstrates how to set up the project, including the Express server and testing environment, and create the endpoints needed to add, update, and delete data from a MongoDB database. At the end of the course, he shows how to serve static files such as images with your new API, and explores additional libraries that can help streamline API development, such as Koa and LoopBack.

## Learning objectives
- Setting up a project and a server
- Setting up a database and schema
- Creating POST, GET, PUT, and DELETE endpoints
- Serving files

## Skills covered
- Node.js
- Express.js
- REST APIs

## What is a REST API (RESTful API)?
An API (application program interface) is a set of rules that enables different programs to communicate with one another. It outlines the appropriate way for a software developer to compose a program on a server that communicates with various client applications.

REST API is REpresentational State Transfer Application Programming Interface or REST API. It means when a RESTful API is called, the server will transfer a representation of the requested resource’s state to the client system.

REST APIs are commonly used by various websites like Amazon, Google, Facebook, LinkedIn, and Twitter, allowing users to communicate with these cloud services.

# How Does a REST API Work
REST determines the structure of the API. Developers oblige to a certain set of rules when constructing the API. For instance, one rule states that linking to a URL should return some information.

A REST API leverages HTTP methods described by the RFC 2616 protocol. It uses the following requests:
- GET to fetch data
- PUT to alter the state of data (such as an object, file or block)
- POST to create data
- DELETE methods to eliminate it

## REST API Features
- Scalability
- Flexibility and Portability
- Independence