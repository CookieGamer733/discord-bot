# Discord Bot

### Instructions for Code Installation


#### Step 1: Config Values
There are two options:
1. Use an ENV (recommended if your code is running publicly)
2. Use a config.json (don't use if your code is running publicly)

###### If using an ENV
Go to .env and add the following data:
 - TOKEN: This is your bot token.
 - PREFIX: Put the prefix you want for your bot.
 - OWNERID: This is your Discord ID.
After doing this, go through each file and replace config.<VALUE> with
###### If using a config.json
Go to config.json and add the following data:
 - TOKEN: This is your bot token.
 - PREFIX: Put the prefix you want for your bot.
 - OWNERID: This is your Discord ID.
If you do this, you can delete the .env file.

#### Complete
If you did the steps above correctly, you should be able to go run your discord bot no problem.

### File breakdown: What is each file?
 - index.ts
    - This is where a majority of the bots running code is. This is the main script.
 - .env
    - This are your hidden enviroment varibles.
 - database.ts
    - This is the handler for connecting to the Mongo database.
 - LICENSE
    - This is the licensing for my code.
 - tsconfig.json
    - This is the TypeScript config file. I would not recommend touching anything in here unless you know what you are doing.
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