/*

Sequelize

Need to install a couple packages
    npm install sequelize
    npm install sequelize-cli

Initialize sequelize
    npx sequelize init
    Migrations folder
    Models folder
    Seeders folder

File types
    Migrations
        For making changes to the DB structure
        Table name = Capitalized and Plural
            Table: Users
        CLI commands:
            npx dotenv sequelize db:migrate
            npx dotenv sequelize db:migrate:undo
            npx dotenv sequelize db:migrate:undo:all
        Important notes
            Every migrations file has an up and down
            Migrations act as version control
            Constraints are represented as KV pairs
            SequelizeMeta table keeps track of which migrations have been ran

    Models
        Class representations of each table, built in methods for queries
        Model name = Capitalized and Singular
            Model: User
        CLI Commands:
            npx sequelize model:generate --name ProductionStudio --attributes name:string,location:string,yearEstablished:integer
        Important notes
            We do not have to add an id attribute.
            Switching from snake_case to camelCase for cols


    Seeders
        For inserting initial data into our tables
        CLI Commands:

2 types of commands: 
    1. Commands that create files
    2. Commands that interact with DB
        These require us to add dotenv to the command


*/