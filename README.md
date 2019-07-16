This project was created with NextJS.



## How to run locally
Make sure Node version 10+ (with npm included) is installed.

1. Create `config.json` from `config.template.json`.
2. Change the value of **apiKey***.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open browser and go to `http://localhost:3000`.

*Api key must be retrieved from https://openweathermap.org


## How to run tests

Tests can be run with **npm** or **npx**.

### npm
To run tests with **npm** run the command `npm test`.

*It is possible to run it in watch mode or coverage mode by running the commands `npm run test:watch` or `npm run test:coverage`*

### npx
To run tests with **npx** run the command `npx jest`

*Read jest documentation for command arguments*