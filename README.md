# Discord Bot

### Instructions for Code Installation


#### Step 1: ENV Values
Go to .env and add the following data:
 - TOKEN: This is your bot token.
 - PREFIX: Put the prefix you want for your bot.
 - OWNERID: This is your Discord ID.
 - MONGOURL: This is your URL for connecting to the database. This steps to setting this up is down below.

#### Step 2: Mongo Database
Go to [Mongo Database](https://account.mongodb.com/account/login) and login to your account, or create an account if you don't have one.
Create a cluster ([Instructions](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster)).
Add your IP address, or if you are using [repl.it](https://repl.it), click the no whitelist option ([Instructions](https://docs.atlas.mongodb.com/security/add-ip-address-to-list)).
Create a Database User ([Instructions](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster)).
Connect to the Cluster ([Instructions](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster)). Make sure you click Node.js driver. You should get an Atlas connection string. This is what MONGOURL in the ENV should be.

### File breakdown: What is each file?

 - index.ts
    - This is where a majority of the bots running code is. This is the main script.
 - .env
    - This are your hidden enviroment varibles.
 - database.ts
    - This is the handler for connecting to the Mongo database.
 - LICENSE
    - This is the licensing for my code.
      **WARNING: UNDER NO CIRCUMSTANCES ARE YOU TO DELETE THIS FILE**
 - tsconfig.json
    - This is the TypeScript config file. I would not recommend touching anything in here unless you know what you are doing.
 - xphandler.ts
    - This is the handler for the XP functions
 - commands/
    - disable.ts
       - Use this command to disable any command (usually if that particular command is malfunctioning)
         **NOTE:** Disable, Enable, Kill, and Eval commands cannot be disabled. If one of these commands are malfunctioning, shut down the bot.
          - Usage: disable <command name> - Disables the mentioned command
          - Usage: disable list - List all disabled commands
    - enable.ts
       - Use this command to enable any  disabled command
          - Usage: enable <command name> - Enables the mentioned command
    - eval.ts
       - This is a developer command. If you know how to use it, great! If you don't know how to use it, you don't need to use it.
    - kill.ts
       - This shuts down the bot. Simple as that.
    - xp.ts
       - This is used to show the xp of a user
          - Usage: xp <optional mention>
