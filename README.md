# Maat

## Running

### UI
1. Run yarn start

### Server
Most Id's will build and start go program for you

Alternatively, from this folder run in terminal 
1. `go build -i ../Maat`
2. `./Maat`

### DATABASE
1. RUN: 
`docker run --name maat-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
 You may want to change POSTGRES_PASSWORD to what you want your password to be here and in dev.config.jsonsss