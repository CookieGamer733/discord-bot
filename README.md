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
