# TypeScript GraphQL Example with Apollo Server and Express

This project demonstrates how to set up a GraphQL server using Apollo Server and Express. It provides query and mutation operations related to products and orders.

## Project Structure

- **src**: Contains the TypeScript source files for the project.
- **products**: Contains GraphQL schemas, resolvers, and TypeScript models for products.
- **orders**: Contains GraphQL schemas, resolvers, and TypeScript models for orders.

## Getting Started

### 1. Install Dependencies

Before running the project, you need to install the required packages:

npm install

### 2. Start the Server

Start the GraphQL server with:

npm start

The server will start on port 3000. Access the GraphQL playground at [http://localhost:3000/graphql](http://localhost:3000/graphql).

## Available GraphQL Operations

### Queries

- **products**: Fetch all products.
- **productsByPrice(min, max)**: Fetch products within a specific price range.
- **product(id)**: Fetch a specific product by its ID.

### Mutations

- **newProduct(product)**: Add a new product. The `product` input should match the `ProductInput` structure.
