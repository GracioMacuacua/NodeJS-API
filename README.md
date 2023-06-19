# Node JS REST API

This is a REST API project for server-side data processing using NodeJS as the main technology.

---

## Technologies and ORMs Used:

- NodeJS
- ExpressJS
- MySQL
- JWT

## How to configure?

As a prerequisite, to use this API you need to have the NodeJS client installed in your workspace and/or development environment and a MySQL database.

Having all the tools installed, follow the steps below:

1. Clone this project from my GitHub profile [here](https://github.com/GracioMacuacua/NodeJS-REST-API.git);
2. In your environment's console, navigate to the project's folder and run the `npm install` command to install the project's dependencies;

<img src="install.gif" alt="Install dependencies">

3. Edit the file [.env.example](./.env.example) putting in `SECRET_KEY` a strong key of your choice to validate the application users;

#### Example

```
SECRET_KEY = ebM2Hy-fFmd4c-8fezu-EuFHMnQMFyfaTj2
```
4. Still in the file [.env.example](./env.example) put in `CONNECTION_STRING` the connection link to your MySQL database;

#### Example

```
CONNECTION_STRING = mysql://user:password@localhost:3306/database_name
```
5. Change the file name [.env.example](./.env.example) to `.env`;
6. In your environment's console, execute the `npm start` command to start the application.

<img src="start.gif" alt="Application execution">

---

Open [http://localhost:3000](http://localhost:3000) to see if it is working in your browser.