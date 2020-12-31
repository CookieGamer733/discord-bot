import { pluralize, model, connect, Schema, Document } from "mongoose";

pluralize(s => s);
connect(process.env.MONGOURL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).catch(e => {
    console.error(e);
    console.log("Error while connecting to database, see above for full error");
    process.exit();
});

interface IUser extends Document {
  id: string;
  tag: string;
  level: number;
  xp: number;
};
const UserSchema = new Schema({
  id: String,
  tag: String,
  level: Number,
  xp: Number,
});
export const Users = model<IUser>("Users", UserSchema);