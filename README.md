# cmsvc
Service to handle cm requests

## Setup environment

### Install node modules
```
npm install
```

### Run node server
```
node_modules/nodemon/bin/nodemon.js index.js
```
This restarts the server whenever there are changes to any of the node files.

### Start postgres database
```
setup_db/setup_db.sh 
```
This script recreates (drop + create) the `cmdb` database and adds `users` and `team` tables.

## Testing

Use Postman.
