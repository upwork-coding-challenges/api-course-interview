# Importance Of REST API

This lesson is full of theory where we will learn about RESTFUL API and it's importance. If we want to build a RESTFUL API service then we must have enough knowledge about REST API concepts.

**Agenda:**

-   What is REST API
-   Why do We Need API
-   Six Constraints of REST API
    -   Uniform Interfaces
    -   Stateless
    -   Cacheable
    -   Client-Server
    -   Layered System
    -   Code on Demand
-   HTTP, HTTP Methods, HTTP Status Codes
-   Advantage and Disadvantage of REST API
-   REST API Alternatives
-   Should I Learn REST API in 2021

## What is REST API?

This term “REST” was first defined by Roy Fielding in 2000. It stands for Representational State Transfer(REST). Actually, REST is an architectural model and design for server network applications. The most common application of REST is the World Wide Web itself, which used REST as a basis for HTTP 1.1 development.

A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. Representational state transfer (REST), which is used by browsers, can be thought of as the language of the Internet.

## Why do We need API

Before understanding the necessity of API we should understand how old looking multi page web applications work. Every web application has two main stakeholder. The first one is browser from where we send request, usually we called browser as client. The second one is server who actually process our request and response back the actual website that includes html, css, javascript, images and other necessary files. Let examine the process once again. Browser sends a request by entering an URL to the search bar, server get called to create the response. Here server do the rest of the tasks. It queries in the database, make html file from template with actual data getting from database and response back a complete html file with real data. Then browser will just render this html file.

This traditional old approach is good. But it arises two major problems -

1. For every request server needs to generate a completely new html file and sends back that html file with css, javascript, images and other files. So for every request a lot of bandwidth will be wasted, a lot of extra time will be need to get response back and a lot of extra time and effort will be need to repaint the same thing again and again for every new request. You can't request partially for a specific data. You have to ask for complete page. This is a big problem.
2. The second problem is mobile application. Now a days every company that belongs to a website is want to build their own mobile application. To build mobile application there are two main options for them. Either they use the existing server that is using to server web pages or build a new server. If they use their existing server they should create a scraping service that can extract data from html page that their backend server is responding. Because the data is serving from server is not plain text, they are html code. HTML is only workable inside browser. For mobile application they need plain text, or formatted text that is formatted using xml, json, yml or any other format. So using the same web server for mobile application is not so easy. It can produce latency in mobile application and spoil users experience. The second option is good, they can build another server for mobile. In that case they have write almost same backend code twice for every resources. It can produce other problems too. like -
    1. Now they need to manage two both separate server that will cost more
    2. They have to manage two different code base that is almost same. They have to update both server when they fix some bugs, implement new features, simply any change made on any server should reflect on the other servers too.
    3. Near future if they want to build a desktop application, or application for other platforms what will happen? Should they copy and paste same server with few differences again and again?

These two issues are very critical with traditional approach for building modern applications. So they change the way to build modern web applications. Now they separate and abstract the server application. Server application won't return html code at all. It will return JSON formatted code that contains only the actual data. It won't contain any css codes or links, any tag or attributes, any script, nothing at all. It will contain the plain data formatted using xml or JSON. At the beginning we used XML and SOAP, now we are mostly using JSON and RESTFUL API.

The format of the API will remain same, you can use this API with frontend applications, mobile applications on any platform, desktop application for any platform, even browser extensions with the same api, same server code.
Now you can assume how powerful and important REST API is?

## Six Constraints of REST API

There are six architectural constraints which makes any web service are listed below:

-   Uniform Interface
-   Stateless
-   Cacheable
-   Client-Server
-   Layered System
-   Code on Demand

The only optional constraint of REST architecture is code on demand. If a service violates any other constraint, it cannot strictly be referred to as RESTful.

### Uniform Interface:

It is a key constraint that differentiate between a REST API and Non-REST API. It suggests that there should be an uniform way of interacting with a given server irrespective of device or type of application (website, mobile app).
There are four guidelines principle of Uniform Interface are:

-   **Resource-Based:** Individual resources are identified in requests. For example: API/users.
-   **Manipulation of Resources Through Representations:** Client has representation of resource and it contains enough information to modify or delete the resource on the server, provided it has permission to do so. Example: Usually user get a user id when user request for a list of users and then use that id to delete or modify that particular user.
-   **Self-descriptive Messages:** Each message includes enough information to describe how to process the message so that server can easily analyses the request.
-   **Hypermedia as the Engine of Application State (HATEOAS):** It need to include links for each response so that client can discover other resources easily.

### Stateless:

It means that the necessary state to handle the request is contained within the request itself and server would not store anything related to the session. In REST, the client must include all information for the server to fulfill the request whether as a part of query params, headers or URI. Statelessness enables greater availability since the server does not have to maintain, update or communicate that session state. There is a drawback when the client need to send too much data to the server so it reduces the scope of network optimization and requires more bandwidth.

### Cacheable:

Every response should include whether the response is cacheable or not and for how much duration responses can be cached at the client side. Client will return the data from its cache for any subsequent request and there would be no need to send the request again to the server. A well-managed caching partially or completely eliminates some client–server interactions, further improving availability and performance. But sometime there are chances that user may receive stale data.

### Client-Server:

REST application should have a client-server architecture. A Client is someone who is requesting resources and are not concerned with data storage, which remains internal to each server, and server is someone who holds the resources and are not concerned with the user interface or user state. They can evolve independently. Client doesn’t need to know anything about business logic and server doesn’t need to know anything about frontend UI.

### Layered system:

An application architecture needs to be composed of multiple layers. Each layer doesn’t know any thing about any layer other than that of immediate layer and there can be lot of intermediate servers between client and the end server. Intermediary servers may improve system availability by enabling load-balancing and by providing shared caches.

### Code on demand:

It is an optional feature. According to this, servers can also provide executable code to the client. The examples of code on demand may include the compiled components such as Java applets and client-side scripts such as JavaScript.

### Rules of REST API:

There are certain rules which should be kept in mind while creating REST API endpoints.

-   REST is based on the resource or noun instead of action or verb based. It means that a URI of a REST API should always end with a noun. Example: /api/users is a good example, but /api?type=users is a bad example of creating a REST API.
-   HTTP verbs are used to identify the action. Some of the HTTP verbs are – GET, PUT, POST, DELETE, UPDATE, PATCH.
-   A web application should be organized into resources like users and then uses HTTP verbs like – GET, PUT, POST, DELETE to modify those resources. And as a developer it should be clear that what needs to be done just by looking at the endpoint and HTTP method used.

| URI         | HTTP Verb | Description             |
| ----------- | --------- | ----------------------- |
| api/users   | GET       | get all users           |
| api/users   | POST      | add a new user          |
| api/users/1 | GET       | get a user with id=1    |
| api/users/1 | PUT       | update a user with id=1 |
| api/users/1 | DELETE    | delete a user with id=1 |

-   Always use plurals in URL to keep an API URI consistent throughout the application.
-   Send a proper HTTP code to indicate a success or error status.

## HTTP, HTTP Methods, HTTP Status Codes

to work with REST API we must understand the basic concepts of HTTP. Because REST API is totally depends on HTTP protocol.

### HTTP:

Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes.

### HTTP Methods:

The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently. Of those less-frequent methods, OPTIONS and HEAD are used more often than others.

Below is a table summarizing recommended return values of the primary HTTP methods in combination with the resource URIs:

**Note:** HTTP methods are often called as HTTP Verbs.

| HTTP Verb | CRUD           | Entire Collection (e.g. /customers)                                                                  | Specific Item (e.g. /customers/{id})                                       |
| --------- | -------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| POST      | Create         | 201 (Created), 'Location' header with link to /customers/{id} containing new ID.                     | 404 (Not Found), 409 (Conflict) if resource already exists..               |
| GET       | Read           | 200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists.            | 200 (OK), single customer. 404 (Not Found), if ID not found or invalid.    |
| PUT       | Update/Replace | 405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection. | 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid. |
| PATCH     | Update/Replace | 405 (Method Not Allowed), unless you want to modify the collection itself.                           | 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid. |
| DELETE    | Delete         | 405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.        | 200 (OK). 404 (Not Found), if ID not found or invalid.                     |

Below is a more-detailed discussion of the main HTTP methods. Click on a tab for more information about the desired HTTP method.

### POST

The POST verb is most-often utilized to **create** new resources. In particular, it's used to create subordinate resources. That is, subordinate to some other (e.g. parent) resource. In other words, when creating a new resource, POST to the parent and the service takes care of associating the new resource with the parent, assigning an ID (new resource URI), etc.

On successful creation, return HTTP status 201, returning a Location header with a link to the newly-created resource with the 201 HTTP status.

POST is neither safe nor idempotent. It is therefore recommended for non-idempotent resource requests. Making two identical POST requests will most-likely result in two resources containing the same information.

**Examples:**

-   POST http://www.example.com/customers
-   POST http://www.example.com/customers/12345/orders

### GET

The HTTP GET method is used to **read** (or retrieve) a representation of a resource. In the “happy” (or non-error) path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).

According to the design of the HTTP specification, GET (along with HEAD) requests are used only to read data and not change it. Therefore, when used this way, they are considered safe. That is, they can be called without risk of data modification or corruption—calling it once has the same effect as calling it 10 times, or none at all. Additionally, GET (and HEAD) is idempotent, which means that making multiple identical requests ends up having the same result as a single request.

Do not expose unsafe operations via GET—it should never modify any resources on the server.

**Examples:**

-   GET http://www.example.com/customers/12345
-   GET http://www.example.com/customers/12345/orders
-   GET http://www.example.com/buckets/sample

### PUT

PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource.

However, PUT can also be used to create a resource in the case where the resource ID is chosen by the client instead of by the server. In other words, if the PUT is to a URI that contains the value of a non-existent resource ID. Again, the request body contains a resource representation. Many feel this is convoluted and confusing. Consequently, this method of creation should be used sparingly, if at all.

Alternatively, use POST to create new resources and provide the client-defined ID in the body representation—presumably to a URI that doesn't include the ID of the resource (see POST below).

On successful update, return 200 (or 204 if not returning any content in the body) from a PUT. If using PUT for create, return HTTP status 201 on successful creation. A body in the response is optional—providing one consumes more bandwidth. It is not necessary to return a link via a Location header in the creation case since the client already set the resource ID.

PUT is not a safe operation, in that it modifies (or creates) state on the server, but it is idempotent. In other words, if you create or update a resource using PUT and then make that same call again, the resource is still there and still has the same state as it did with the first call.

If, for instance, calling PUT on a resource increments a counter within the resource, the call is no longer idempotent. Sometimes that happens and it may be enough to document that the call is not idempotent. However, it's recommended to keep PUT requests idempotent. It is strongly recommended to use POST for non-idempotent requests.

**Examples:**

-   PUT http://www.example.com/customers/12345
-   PUT http://www.example.com/customers/12345/orders/98765
-   PUT http://www.example.com/buckets/secret_stuff

### PATCH

PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource.

This resembles PUT, but the body contains a set of instructions describing how a resource currently residing on the server should be modified to produce a new version. This means that the PATCH body should not just be a modified part of the resource, but in some kind of patch language like JSON Patch or XML Patch.

PATCH is neither safe nor idempotent. However, a PATCH request can be issued in such a way as to be idempotent, which also helps prevent bad outcomes from collisions between two PATCH requests on the same resource in a similar time frame. Collisions from multiple PATCH requests may be more dangerous than PUT collisions because some patch formats need to operate from a known base-point or else they will corrupt the resource. Clients using this kind of patch application should use a conditional request such that the request will fail if the resource has been updated since the client last accessed the resource. For example, the client can use a strong ETag in an If-Match header on the PATCH request.

**Examples:**

-   PATCH http://www.example.com/customers/12345
-   PATCH http://www.example.com/customers/12345/orders/98765
-   PATCH http://www.example.com/buckets/secret_stuff

### DELETE

DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.

On successful deletion, return HTTP status 200 (OK) along with a response body, perhaps the representation of the deleted item (often demands too much bandwidth), or a wrapped response (see Return Values below). Either that or return HTTP status 204 (NO CONTENT) with no response body. In other words, a 204 status with no body, or the JSEND-style response and HTTP status 200 are the recommended responses.

HTTP-spec-wise, DELETE operations are idempotent. If you DELETE a resource, it's removed. Repeatedly calling DELETE on that resource ends up the same: the resource is gone. If calling DELETE say, decrements a counter (within the resource), the DELETE call is no longer idempotent. As mentioned previously, usage statistics and measurements may be updated while still considering the service idempotent as long as no resource data is changed. Using POST for non-idempotent resource requests is recommended.

There is a caveat about DELETE idempotence, however. Calling DELETE on a resource a second time will often return a 404 (NOT FOUND) since it was already removed and therefore is no longer findable. This, by some opinions, makes DELETE operations no longer idempotent, however, the end-state of the resource is the same. Returning a 404 is acceptable and communicates accurately the status of the call.

**Examples:**

-   DELETE http://www.example.com/customers/12345
-   DELETE http://www.example.com/customers/12345/orders
-   DELETE http://www.example.com/bucket/sample

### HTTP Status Codes

HTTP Status codes are codes that represents the status of a given request. There are a lot of status codes available to specify a certain status of the request. But very few of them are commonly used.

Here you will find a list of all http status codes.
https://www.restapitutorial.com/httpstatuscodes.html

## Advantage and Disadvantage of REST API

Let's understand the good things and bad things of REST API.

### Advantage

-   REST API is easy to understand and learn, due to its simplicity, known API.
-   With REST API, being able to organize complicated applications & makes it easy to use resources.
-   The high load can be managed with help out of HTTP proxy server & cache.
-   REST API is easy to explore and discover.
-   It makes it simple for new clients to work on other applications, whether it is designed specifically for purpose or not.
-   Use standard HTTP procedure call- outs to retrieve data and requests.
-   REST API depends on codes, can use it to synchronize data with a website without any complications.
-   Users can avail access to the same standard objects and data model when compared to SOAP-based web services.
-   Brings flexibility formats by serializing data in XML or JSON format.
-   Allows Standard-based protection with the use of OAuth protocols to verify your REST requests.

### Disadvantage

-   Lack of state: most web applications require stateful mechanisms. Suppose you purchase a website which has a mechanism to have a shopping cart. It is required to know the number of items in the shopping cart before the actual purchase is made. This burden of maintaining the state lies on the client, which makes the client application heavy and difficult to maintain.
-   Last of security: REST doest impose security such as SOAP. That is the reason REST is appropriate for public URLs, but it is not good for confidential data passage between client and server.

## REST API Alternatives

REST API is good and it solves a lot of problems. But there are many problems with REST APIs that make them expensive, tedious and error-prone, but RESTful APIs are everywhere. So much so that you'd be forgiven for thinking there are still no competing alternatives in 2021. What are the most viable alternatives to REST APIs, you ask?

Let's see the top four alternatives of REST API.

-   GraphQL APIs
-   Falcor APIs
-   gRPC APIs
-   JSON-Pure APIs

### GraphQL APIs

GraphQL is data query language with a full spec. The language is front and center.

There is no getting away from it.

The language spec determines the validity of the schema in graph queries.

It is strongly typed. Declarative schema defines relationships between objects.

Since being open-sourced by Facebook it has gained some considerable traction over both Falcor and gRPC.

GraphQL continues to enjoy popular adoption since being popularly adopted by Github (now being bought by Microsoft).

GraphQL has the best developer experience of all five options because it has a polished query language, complete with type syntax.

This makes it more practical for most applications.

### Falcor APIs

For Falcor, the language is not nearly as prominent as GraphQL.

Falcor has not enjoyed popular adoption on the level of GraphQL since being being open-sourced by Netflix.

It tends towards being perceived as part of a larger stack used by Netflix.

Falcor represents your data in one huge JSON object.

It retains the idea of a path from REST APIs. The path is used to traverse the huge JSON Object with a cleaner faster and more decalarative API.

It retains the idea of references from REST APIs. Because JSON Objects are use a tree format, Falcor graphs the Objects with references, esentially creating cycles.

Paths and References make Falcor a perfect match for realtime applications because it can easily reference and match data in sent in separate chucks. This translates to an incredible ability to merge live updates as they stream in.

Again because the data comes identified with references, caching and consistency is so much easier in Falcor, than say GraphQL.

Falcor is less prescriptive and more dynamic than GraphQL because it lacks strong type is not a QL.

### gRPC APIs

While most both GraphQL and Falcor work on JSON, gRPC accepts and returns protocol buffer (protobuf) messages.

Protobuf is far more efficiently packed than JSON, but it is not a textual format.

When you compress JSON, you lose the textual benefit.

While REST depends heavily on the older HTTP/1.1 protocol, gRPC strictly enforces the HTTP/2 protocol.

Unlike REST which is intimately tied with the HTTP protocol, gRPC borrows its model directly from programming languages. Data structures such as functions and methods are heavily employed.

Building from programming languages, gRPC autogenerates the client libraries used for interfacting with the API.

Like Falcor, gRPC is a good fit for data streaming and live update apps.

Unlike Falcor, it's streaming features flow more from taking advantage for HTTP/2 streams than inherent design.

gRPC sends strongly typed messages that are converted from protobuf instead of JSON. Messages must adhere to a predefined structure designed to reduce performace overheads and the possibility of errors.

It is as widely supported by all major browser as the other alternatives. It thus mostly used for intranets rather than public facing APIs. There is however a gRPC Gateway that uses REST to expose APIs publicly.

Using gRPC with a gateway however however,erodes all its benefits.

### Pure JSON APIs

JSON-Pure APIs separate message(content and data) and tranmission channels.

All warnings, errors and data is placed in separate JSON request payloads.

The confusion of multiple HTTP codes is averted because they only confirm message receipt with a HTTP - Ok

They are almost always faster and more reliable than REST APIs because of this.

They easy to debug. Transactional data easily be found in JSON payload contains single domain specific vocabulary.

<br />

**If I was building a shiny new API in 2018, my focus would primarily lie on the unpararelled efficiency of graph queries and flexibility to rapid changes. GraphQL is much more mature than Falcor at the moment - a clear leader in this regard. Your API will be ready and stable within a few months due GraphQL contraints of GraphQL. If however I was building an API for data streaming apps requiring real time capabilities, Falcor's paths and references give it a considerable edge over GraphQL because of the ability to merge separate data chunks and live updates. Nothing would beat the gripping simplicity of modeling a single virtual JSON object on a server running Node.js then.**

## Should I Learn REST API in 2021

If you are a beginner don't think too much about alternatives, direct jump into learn REST API. You will need other alternatives when you will build large applications. But as beginner you should only focus on REST API. Because the world of technology communicates via REST API.

## Resources

https://www.redhat.com/en/topics/api/what-is-a-rest-api
https://www.restapitutorial.com/lessons/whatisrest.html
https://www.dineshonjava.com/what-is-rest-and-rest-architecture-and-rest-constraints/
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
https://krify.co/advantages-and-disadvantages-of-rest-api/
https://leapgraph.com/rest-api-alternatives/
