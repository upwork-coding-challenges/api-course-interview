# Question and Answer with REST

Answer of the Q&A REST is given below.

- Explain what is REST and RESTful?

REST represents REpresentational State Transfer; it is a relatively new aspect of writing web API.

RESTFUL is referred for web services written by applying REST architectural concept are called RESTful services, it focuses on system resources and how state of resource should be transported over HTTP protocol to different clients written in different language. In RESTFUL web service HTTP methods like GET, POST, PUT and DELETE can be used to perform CRUD operations.


- Write down common response code along with what they represent?

200 (OK) - This is the standard response for successful HTTP requests.

201 (CREATED) - This is the standard response for an HTTP request that resulted in an item being successfully created.

204 (NO CONTENT) - This is the standard response for successful HTTP requests, where nothing is being returned in the response body.

400 (BAD REQUEST) - The request cannot be processed because of bad request syntax, excessive size, or another client error.

403 (FORBIDDEN) - The client does not have permission to access this resource.

404 (NOT FOUND) - The resource could not be found at this time. It is possible it was deleted, or does not exist yet.

500 (INTERNAL SERVER ERROR) - The generic answer for an unexpected failure if there is no more specific information available.


- What are guiding principle of REST?

Client-Server, Stateless, Cacheable, Uniform interface, Layered system, Code on demand.


- What is HTTP VERB?

An HTTP verb, which defines what kind of operation to perform.