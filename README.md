# Angular, NodeJS, MongoDB Customers Service

This project provides a look at getting started using Angular Http functionality and how it can be used
to call a Node.js RESTful service. The code is for the Integrating Angular with Node.js RESTful Services
available on Pluralsight at https://www.pluralsight.com/courses/angular-nodejs-restful-services.

## Angular Concepts Covered

* Using the Angular CLI
* Using TypeScript classes and modules
* Using Custom Components
* Using the Http object for Ajax calls along with RxJS observables
* Performing GET, PUT, POST and DELETE requests to the server
* Working with Angular service classes for Ajax calls
* Using Angular databinding and built-in directives
* Creating a RESTful Service using Node.js
* (Optional) Using Docker containers

## Software Requirements To Run Locally (there's a Docker option below as well)

* Node.js 10.16 or higher
* MongoDB 3.4 or higher

### Running the Application Locally

1. Install Node.js (10.16 or higher) and MongoDB (3.4 or higher) on your dev box

    * Node.js: https://nodejs.org
    * MongoDB: https://docs.mongodb.com/manual/administration/install-community

1. Execute `mongod` to start the MongoDB daemon if it's not already running (read the installation instructions above if you are new to MongoDB or have issues running it)

1. Run `npm install -g @angular/cli nodemon` to install the Angular CLI and nodemon.

1. Run `npm install` at the project root to install the app dependencies

1. Run the following task to build the Angular app (and watch for any changes you make) and copy the built code to the `public` folder: 

    `ng build --watch`

1. Run `npm run server` in another console window to start the Node.js server

1. Browse to http://localhost:3000


## Running the Application with Docker

1. Install Node.js (10.16 or higher) and Docker for Mac/Windows or Docker Toolbox - https://www.docker.com/products/overview

1. Open `config/config.development.json` and change the host from `localhost` to `mongodb`

1. Run `npm install`

1. Run `ng build --watch`

1. Open another command window and navigate to this application's root folder in the command window

1. Run `docker-compose build` to build the images

1. Run `docker-compose up` to run the containers

1. Navigate to http://localhost:3000


