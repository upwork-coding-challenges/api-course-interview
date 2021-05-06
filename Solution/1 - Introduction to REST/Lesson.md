# Introduction to REST

REST is a acronym for REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

## Guiding Principle of REST

There are 6 guiding constraint which must be satisfied if an interface needs to be referred as RESTful. Following are the principles listed below:-

- Client-Server - By separating the user interface concerns from the data storage concerns, we improve the portability of the user interfac}e across multiple platforms and improve scalability by simplifying the server components.

- Stateless – Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.

- Cacheable – Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.

- Uniform interface – By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. In order to obtain a uniform interface, multiple architectural constraints are needed to guide the behavior of components. REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state.

- Layered system – The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.

- Code on demand (optional) – REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.

## Working of REST

In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests. Let’s take a look at the standard ways to make requests and send responses.

## Making Requests

REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

- An HTTP verb, which defines what kind of operation to perform
- A header, which allows the client to pass along information about the request
- A path to a resource
- An optional message body containing data (Response)

## HTTP VERB

There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

- GET — retrieve a specific resource (by id) or a collection of resources
- POST — create a new resource
- PUT — update a specific resource (by id)
- DELETE — remove a specific resource by id

## Headers and Accept parameters

In the header of the request, the client sends the type of content that it is able to receive from the server. This is called the Accept field, and it ensures that the server does not send data that cannot be understood or processed by the client.

## Paths

Requests must contain a path to a resource that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on.

## Response and Response Code

Responses from the server contain status codes to alert the client to information about the success of the operation. As a developer, you do not need to know every status code, but you should know the most common ones and how they are used:

- 200 (OK) - This is the standard response for successful HTTP requests.
- 201 (CREATED) - This is the standard response for an HTTP request that resulted in an item being successfully created.
- 204 (NO CONTENT) - This is the standard response for successful HTTP requests, where nothing is being returned in the response body.
- 400 (BAD REQUEST) - The request cannot be processed because of bad request syntax, excessive size, or another client error.
- 403 (FORBIDDEN) - The client does not have permission to access this resource.
- 404 (NOT FOUND) - The resource could not be found at this time. It is possible it was deleted, or does not exist yet.
- 500 (INTERNAL SERVER ERROR) - The generic answer for an unexpected failure if there is no more specific information available.