# Node Express Mongo TypeScript Starter Kit

This is a starter kit for building Node.js applications with Express, MongoDB, and TypeScript. It provides a solid foundation for quickly setting up a Node.js server with TypeScript support and MongoDB integration.

## Features and Included Libraries

This starter kit comes with a variety of features and includes several essential libraries to help you kickstart your Node.js project. Here's an overview of the key features and libraries included:

- **ExpressJS**: The foundation of the application, Express is a fast and minimalist web framework for Node.js, making it easy to build robust and scalable APIs.

- **Mongoose**: Mongoose is used as the MongoDB client, providing an elegant way to interact with MongoDB databases and define data schemas.

- **axios**: Axios is included for making HTTP requests, simplifying the process of fetching data from external sources or APIs.

- **bcrypt**: This library is used for encrypting and decrypting sensitive data, such as passwords and tokens, enhancing the security of your application.

- **cors**: The `cors` npm package is included to handle Cross-Origin Resource Sharing, allowing your API to be accessed by clients from different domains.

- **helmet**: Helmet helps secure your Express apps by setting various HTTP headers to protect against common web vulnerabilities.

- **morgan**: Morgan is used for logging HTTP requests, making it easier to debug and monitor your application.

- **http-errors**: The `http-errors` package simplifies the creation of HTTP error responses, improving error handling in your application.

- **nodemon**: Nodemon is a utility that monitors for changes in your code and automatically restarts the server during development, saving you time and effort.

- **ts-node**: TypeScript Node.js is used to execute TypeScript files directly, making it easy to write and run TypeScript code without transpiling.

- **TypeScript**: TypeScript is a strongly typed superset of JavaScript that enhances code quality and provides better tooling for modern JavaScript development.

- **ESLint**: ESLint is included to enforce code style and maintainability rules, ensuring your code follows best practices and stays consistent.

These libraries and features are carefully selected to provide you with a solid foundation for building secure, maintainable, and scalable Node.js applications with TypeScript. You can further customize and extend this starter kit to meet your specific project requirements.

## Requirements

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) - Package managers for Node.js
- [MongoDB CLI](https://docs.mongodb.com/manual/installation/) (optional) - If you want to connect to a MongoDB database on your local system.

## Usage

Follow these steps to get started with this starter kit:

1. Clone the project to your local machine:

   ```shell
   git clone git@github.com:hamidyfine/node-express-mongo-ts-starter-kit.git
   ```

2. Navigate to the project directory:

   ```shell
   cd node-express-mongo-ts-starter-kit
   ```

3. Install the required dependencies using either Yarn or npm:

   ```shell
   yarn
   # or
   npm install
   ```

4. Create a copy of the `.env.example` file and name it `.env`:

   ```shell
   cp .env.example .env
   ```

5. Configure the environment variables in the `.env` file according to your project's requirements. This file stores sensitive information like database credentials and API keys, so make sure to keep it secure.

6. Start the development server:

   ```shell
   yarn dev
   # or
   npm run dev
   ```

Now, your Node.js server is up and running!

## License

This starter kit is available under the [MIT License](LICENSE). Feel free to use it as a foundation for your Node.js projects.