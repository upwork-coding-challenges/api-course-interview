# CRUD Operations

## MongoDB basics refresher
We'll briefly go over the basics and concepts around using MongoDB so you have a good idea of what we're doing when we implement the code. A MongoDB database is one big object containing collections. Each collection could be like a contextual item, like for example, contacts for the database we'll create. Then inside a collection we have documents which are the contacts themselves. So my contact information would be in a document, yours in another, et cetera. And then inside each document we have the data for each contact, such as address, telephone, email, et cetera. The document looks like a JSON object with a key-value pair approach or arrays of data. So where does Mongoose fit into this? Well, Mongoose will allow us to set a schema for a collection and predefine what each key-value pair takes as type. For example, the first name of a contact will take a string.

## Schema setup
The Schema is what dictates what types of data and the structure of your data your database takes.In other words if you define the first name key to take only strings as data the database will not accept anything else. Therefore the Schema defines the rules related to what your database can accept.

what we're going to do is first import mongoose because this is what we're going to use to define the Schema. And then we create an object called Schema with mongoose.Schema. And then we're exporting an object that we'll call ContactSchema with a new Schema. So basically we're leveraging the Schema from mongoose to create a new Schema like so.

## Create POST endpoint
## Create all items GET endpoint
## Create specific ID GET endpoint
## Create PUT endpoint
## Create DELETE endpoint