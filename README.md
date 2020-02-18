<h1 align="center">
  <img alt="Node Express" title="Node Express" src="https://codeandunicorns.com/wp-content/uploads/2017/11/node-express.png" width="400px" />
</h1>


<p align = "center">
   <a href="#bookmark_tabs-instructions">Instructions</a>&nbsp;|&nbsp;
   <a href="#file_folder-features">Features</a>&nbsp;|&nbsp;
   <a href="#scroll-scripts">Scripts</a>&nbsp;
</p>

## :bookmark_tabs: Instructions
1. Install:
    * [Node](https://nodejs.org/)
    * [Yarn](https://classic.yarnpkg.com/en/docs/install) or [Npm](https://www.npmjs.com/get-npm)
    * [Docker](https://docs.docker.com/install/) (Optional)
    * [Postbird](https://www.electronjs.org/apps/postbird) / [pgAdmin](https://www.pgadmin.org/download/) (Optional)
    * [Insomnia](https://insomnia.rest/download/) (Optional)
1. Clone the repository to some folder:
    * > git clone https://github.com/navarrotheus/node-api-rest-boilerplate.git
    * Or
    * > git clone git@github.com:navarrotheus/node-api-rest-boilerplate.git
1. Install the depedencies running the following command at the repository folder:
    * > yarn
1. Create the local database with docker:
    1. > docker run --name ${container_name} -e POSTGRES_PASSWORD=${container_password} -p ${port_acess}:5432 -d postgres
      * More info: [Docker - Postgres](https://hub.docker.com/_/postgres)
      * Useful commands:
        * > docker ps (list the running containers)
        * > docker ps -a (list all the containers)
        * > docker start ${container_name} (start the container, remember to start after rebooting your machine)
        * > docker stop ${container_name} (stop the container)
        * > docker rm ${container_name} (or ${container_id}: remove the container)
1. Create the environment variables:
    1. Create the ***.env*** file at the folder's root
    1. Create the variables based on the [.env.example](https://github.com/navarrotheus/node-api-rest-boilerplate/blob/master/.env.example)
1. Create the database:
    * You can use the Postgres GUI client (Postbird / pgAdmin)
      1. Connect with the container
          * Host: DB_HOST
          * Port: DB_PORT
          * Username: DB_USER
          * Password: DB_PASS
      1. Create the database with the GUI
      1. Change the DB_NAME at [.env.example](https://github.com/navarrotheus/node-api-rest-boilerplate/blob/master/.env.example) to the name of the database that you created
1. Start your server with nodemon:
    * > yarn dev
1. Create the database:
    * > yarn createAll
    * [Check more scripts](https://github.com/navarrotheus/node-api-rest-boilerplate#scroll-scripts)
1. Open the insomnia to test your [routes](https://github.com/navarrotheus/node-api-rest-boilerplate/blob/master/src/routes.js)
    * [How to use](https://support.brightcove.com/use-insomnia-api-requests)
1. Code :)
   * MVC Architecture
   1. Create your [Models](https://github.com/navarrotheus/node-api-rest-boilerplate/tree/master/src/app/models)
   1. Create your [Controllers](https://github.com/navarrotheus/node-api-rest-boilerplate/tree/master/src/app/controllers)
   1. Create your [Routes](https://github.com/navarrotheus/node-api-rest-boilerplate/blob/master/src/routes.js)
   1. Create your [Middlewares](https://github.com/navarrotheus/node-api-rest-boilerplate/tree/master/src/app/middlewares)
  
## :file_folder: Features
* [Nodemon](https://www.npmjs.com/package/nodemon)
  * [Sucrase](https://github.com/alangpierce/sucrase)
* [ESLint](https://eslint.org/)
  * Using AirBnB style guide
  * Remember to add the ESLint's extention on VSCode
  * At your settings.json add:
    * > "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
    "eslint.alwaysShowStatus": true,
* [Prettier](https://prettier.io/)
* [EditorConfig](https://editorconfig.org/)
* [Sentry](https://sentry.io/welcome/)
  * Change the S_DNS at [.env.example](https://github.com/navarrotheus/node-api-rest-boilerplate/blob/master/.env.example) if you with to use
* [Multer](https://github.com/expressjs/multer)
    * File upload
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    * JWT Authentication
* [Cors](https://github.com/expressjs/cors)
* [Youch](https://www.npmjs.com/package/youch)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
  * Password hash
* [Yup](https://github.com/jquense/yup)
* [Express async errors](https://www.npmjs.com/package/express-async-errors)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Pg](https://www.npmjs.com/package/pg)
   * [Pg-hstore](https://www.npmjs.com/package/pg-hstore)

## :scroll: Scripts
* > yarn dev
  * Initiate the server
* > yarn createAll
  * Create tables and triggers
* > yarn dropSchema
  * Delete all database's tables, triggers and functions
* > yarn resetDb
  * yarn createAll && yarn dropSchema
* Check more at "scripts" on [package.json](https://github.com/navarrotheus/node-api-rest-boilerplate/blob/master/package.json)


