## Description
A simple service that pulls in from hotel's third part api and list hotels with available rooms by relevant date

## Some details before start the service
The postman (a really simple documentation) collection is in the project's root and named to Intinerary-planner.postman_collection.json you have to import it to the app  to make a request to list hotels by start and end date or not passing any params.

*To run* the project you must have node and npm installed in your environment
## Installation

```bash
$ npm install
```
### You should install mongodb if you are using a linux distro named ubuntu
```bash
$ sudo apt install mongodb 
```

### As alternative you can use docker 
```bash
$ docker run --name my-mongo -e MONGO_INITDB_ROOT_USERNAME={your-user-name} -e MONGO_INITDB_ROOT_PASSWORD=123 mongo 
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Caio Cutrim](https://linkedin.com/in/caiocutrim)

## License

MIT License [MIT licensed](LICENSE).
