# apollo-server

## GraphQL
GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

## Why GraphQL
GraphQL is a syntax that describes how to ask for data, and is generally used to load data from a server to a client. GraphQL has three main characteristics:
1. It lets the client specify exactly what data it needs.
2. It makes it easier to aggregate data from multiple sources.
3. It uses a type system to describe data.

With GraphQL, the user is able to make a single call to fetch the required information rather than to construct several REST requests to fetch the same.

## GraphQL Vs REST
REST and GraphQL are two ways to send data over HTTP.
1. A REST API is an architectural concept for network-based software. GraphQL, on the other hand, is a query language, a specification, and a set of tools that operates over a single endpoint using HTTP.
2. In REST, the endpoint you call is the identity of that object. In GraphQL, the identity is separate from how you fetch it.
3. In REST, the shape and size of the resource is determined by the server. In GraphQL, the server declares what resources are available, and the client asks for what it needs at the time.

## Schema and Resolver
### GraphQL Schema
-  A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.
- The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.
    - Schema {  
   studentById(id:"S1001") {
      id
      firstName
      lastName
   }
}

### GraphQL Resolver
- Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler. Every resolver function in a GraphQL schema accepts four positional arguments as given below −
    - Resolver {
   "data": {
      "studentById": {
         "id": "S1001",
         "firstName": "Priyanka",
         "lastName": "Katiyar"
      }
   }
}

