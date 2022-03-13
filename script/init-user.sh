#!/bin/bash
psql -U postgres <<-EOSQL
    CREATE ROLE root;
    CREATE DATABASE talkiedb;
    GRANT ALL PRIVILEGES ON DATABASE talkiedb TO root;
EOSQL