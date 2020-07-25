# role-auth
Simple middleware for routes to check roles and allow only request with valid roles to go forward.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install role-auth
```

## Usage

```javascript
const validateRole = require('role-auth'); // In Javascript
// OR
import validateRole from 'role-auth'; // In Typescript
```

Adding role check at application level

```javascript
const express = require('express');
const validateRole = require('role-auth');
const app = express();


const rolesAllowed = ['admin', 'developer'];
app.use(validateRole(rolesAllowed)); // Allows only with request which has role in request headers.
```

Adding role check at the route level

```javascript
const rolesForRoot = ['Admin', 'Developer'];
app.get('/', validateRole(rolesAllowed), (req, res) => {
    // Logic after the user with Admin/Developer role in the request header
});

const rolesForTestRoute = ['Tester'];
app.get('/testing', validateRole(rolesForTestRoute), (req, res) => {
    // Logic after the user with Tester role in the request header
});
```