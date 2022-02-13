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