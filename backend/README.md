# Chronus - Backend


1. Create Node.JS new project (node 14) - https://expressjs.com/en/starter/generator.html
    1. Download Node.JS 14 (only even version - LTS)
    1. Use can use express.js app generator
    1. First use this: https://expressjs.com/en/starter/generator.html first page till https://expressjs.com/en/starter/static-files.html
    1. Follow the getting started guide from the link above.
    1. **Add Typescript support. - Use the typescript guide to transform the project - https://github.com/Microsoft/TypeScript-Node-Starter#typescript--node**
1. Create a REST API (based on express) that RECIEVES POST REQUEST from the FORM that Boaz did and prints it.
    1. Create the first basic API route - called "apiv1" **todo: fix the router prefix**
    1. Create a userRegister POST route that accepts the form from the FE. (user->fe->detials->submit form->POST REQUEST->BE route called apiv1/user/register)
    1. The form should return 200-OK. (read about HTTP CODES) - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
1. DB and integration
    1. Add a  docker container of Postgres 11 + docker-compose file for running it.
    1. Add an SQL orm - Sequelize - https://sequelize.org/v5/manual/getting-started
