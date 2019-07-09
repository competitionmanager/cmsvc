#!/bin/bash

brew services start postgresql
dropdb cmdb
createdb cmdb
psql cmdb -f setup_db.txt
psql cmdb -c "\d" # Print all tables in 'cmdb'
