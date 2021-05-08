# Introduction : Servers & Clients, Where does the RESTful fit in ? Why Bother ?

We will learn briefly about how Servers & Clients interact with each other & Where does the REST APIs fit in & Why has it become a Go-To choice when developing any kind of applications.

## Servers & Clients 

###  What is a Server ?

In computing, a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients"

Specifically when we talk about internet, Servers are software that run on compute, They respond to requests made to them via protocols like http(s), These servers can send data back in several formats like XML, HTML, JSON among many others. 

Most Famous Server Specifically for web based application is Apache, Another Famous server that is often used as reverse proxy is called Nginx, These route request to application logic and respond back with data that is passed onto them.

(Apache Web Server Interaction with Application Server & HTTP Client)
![Apache](https://docs.bmc.com/docs/middlewaremonitor/9/files/928605251/928605252/1/1586504124291/worddavdd7ac7465a3f7fd63df27327e404a769.png)


### What is a Client ?

A Client is piece of software that makes requests to server upon user interaction and displays the response back to the user. A Classic Example would be web browser, They are all HTTP based clients that interact with web servers and display the response to the user. Response could be a HTML document or an XML file or a JSON Document.

Mobile Applications, IOT Devices & everyother platform that basically interacts with a web server can be tagged as a client. 

Clients can have different protocols when connecting with a suitable server example FTP (File transfer protocol) is used to access filesystem on a server.

(Browser Client Example)

![A Client Example](https://hackernoon.com/images/jot3yv6.jpg)


## So Where does the RESTful fit in and why should we bother.

If you are familair with some of the technologies like plain PHP based web application you must have known the complexity of making your server logic more accessible to other clients and not just the browser or maybe the server side rendering responds back with kbs of data in html format that slows down overall experience.

REST addresses these and a lot more problems, It has been used widely and still remain the most popular ways to create API endpoints.

***So Why REST ?***

- Client-Server: This constraint operates on the concept that the client and the server should be separate from each other and allowed to evolve individually.

- Stateless: REST APIs are stateless, meaning that calls can be made independently of one another, and each call contains all of the data necessary to complete itself successfully.

- Cache: Because a stateless API can increase request overhead by handling large loads of incoming and outbound calls, a REST API should be designed to encourage the storage of cacheable data.

- Uniform Interface: The key to the decoupling client from server is having a uniform interface that allows independent evolution of the application without having the application’s services, or models and actions, tightly coupled to the API layer itself.

- Layered System: REST APIs have different layers of their architecture working together to build a hierarchy that helps create a more scalable and modular application.

- Code on Demand: Code on Demand allows for code or applets to be transmitted via the API for use within the application.

Classic usage for REST apis happens in modern SPAs (Single Page Application), They are extremely fast once loaded cause they only send/recieve the data needed to change the application state prefrably in a simple format like JSON

## Conclusion

- REST is flexible, It can send data in various formats and is not restricted to a one format.

- REST is a great way to create scalable and performant api due its flexible design

- Modern Application development uses lot of async calls to update state of the application and REST api is a Go to choice.