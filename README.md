# J.A.R.V.I.S

# Getting Started

Welcome to project J.A.R.V.I.S an application to control any devices in your house

## Table of Contents

- [Installation](#installation) // Link
  - [Updating to New Releases](#updating-to-new-releases)

## Folder Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

| [Berry Free](https://berry-free-react-admin-template-git-v20-codedthemes.vercel.app/)    | [Berry](https://material-ui.com/store/items/berry-react-material-admin/) |
| ---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------|
| **9** Demo pages                                                                         | **45+** demo pages                                                       |
| -                                                                                        | ✓ Multi-language                                                         |
| -                                                                                        | ✓ Dark/Light Mode 🌓                                                    |
| -                                                                                        | ✓ TypeScript version                                                     |
| -                                                                                        | ✓ Design files (Figma)                                                   |
| -                                                                                        | ✓ 6+ color Options                                                       |
| -                                                                                        | ✓ RTL                                                                    |
| -                                                                                        | ✓ JWT, Firebase, Auth0 authentications                                   |
| -                                                                                        | ✓ [More components](https://berrydashboard.io/dashboard/default)         |  

## Installation
1. Generate the Prisma Data  
```npx generate prisma```
2. Install package
```yarn install / npm install```

## Launch in development server 
```bash
npm run dev
# or
yarn dev

```

> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
> [API routes] can be accessed on [http://localhost:3000/api/{$nameApi}]

* [http://localhost:3000/api/{$nameApi}](http://localhost:3000)
## Technology Stack

 - [Material UI V5](https://material-ui.com/)
 - Built with React Hooks API
 - Redux & React Context API for State Management
 - React Router for Navigation Routing
 - Support of react-script
 - Code Splitting
 - CSS-in-JS where CSS is composed using JavaScript instead of defined in external files
# Build the Front-end
1. Build the front-end
```yarn build / npm run build``` 
2. Start the server
```yarn start / npm run start```

### DOCKER LAUNCH
docker-compose up 

> Project JARVIS - EPITECH

## Build Server

Look README.md inside ./server

# Development Documentation

## Log ADMIN for sign in in administration account
> user : admin
> password : ChangeMe123

> user : saylaan
> password : ChangeMe123

## BACK-END
### SERVER
> Express
https://expressjs.com/

### API
> SQLite3 - Sequelize
https://www.sqlite.org/index.html
https://sequelize.org/master/manual/getting-started.html

> DB
file database in ./server/tabtracker.sqlite
can be open with https://sqliteonline.com/

### Authentication
> Passport : JWT
http://www.passportjs.org/packages/passport-jwt/

### Architecture and use of files

1. CONFIG
> all configuration for the database / authentication / port
2. CONTROLLERS
> all controlers use by route in ./routes
3. MODELS
> all database models use for the database sqlite
4. OBJECT
> all object need for the about.json
5. POLICIES
> AuthenticationController : Controller for checking policy of register
> isAuthenticated : made for checking the if user is authenticate in front-end to allow use of controller
> passport : all config for passport Strategy use in the app (JWT)
6. ROUTES
> All route enable for the back-end express server link with sequelize ORM
7. app.js
> main index.js for launching the server express
8. combined.log + error.log
> Logs for Api access such as imgur / google / amadeus using winston

### Tutorial
>Inside ./TutorialNodeVue
- ExpressNode (Back-end server)

### Documentation API 
https://documenter.getpostman.com/view/3997320/Tzm8DuDS


restart server while running with cmd 'rs'


# Dependencies back-end

- bluebird : Bluebird is a fully featured promise library with focus on innovative features and performance
- bodyparser : Node.js body parsing middleware.
- cors : CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- eslint : ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:
- express : Fast, unopinionated, minimalist web framework for node.
- ipaddr : ipaddr.js is a small (1.9K minified and gzipped) library for manipulating IP addresses in JavaScript environments. It runs on both CommonJS runtimes (e.g. nodejs) and in a web browser.
- joi : The most powerful schema description language and data validator for JavaScript.
- jsonwebtoken : This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws
- nodemon : nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- passport : Passport is Express-compatible authentication middleware for Node.js.
- passport-jwt : A Passport strategy for authenticating with a JSON Web Token.
- morgan : HTTP request logger middleware for node.js
- multer : Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
- sequelize: Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2 and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
- socket-io : Socket.IO enables real-time bidirectional event-based communication.
- winston : A logger for just about everything.
- sqlite3 : Asynchronous, non-blocking SQLite3 bindings for Node.js.
