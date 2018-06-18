# Maat

## Running

### UI
1. Run yarn start

### Server
1. bazel build maat
2. bazel run maat

### DATABASE
1. RUN: 
`sudo docker run --detach=true -p 5432:5432 --name maat-postgres -e -d postgres`
 You may want to change the password 

2. Setup users and schema's.
`CREATE USER MAAT WITH PASSWORD 'test';`
`CREATE TABLESPACE MAAT
        OWNER MAAT
        LOCATION '/var/lib/postgresql/data/';`

3. Run `liquibase --defaultsFile=liquibase.properties update` in the src/resources/db folder. Your probably going to have to change the classpath for the driver.
