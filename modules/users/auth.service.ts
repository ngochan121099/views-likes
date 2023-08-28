import { LOGICAL_ERRORS } from "../core/constants";
import { hashPassword } from "./helpers/encryption";
import UserCollection from "./user.collection";
import { UserList } from "./user.interface";


export const signUp = async (user: UserList) => {
  try {
    const existedUsername = await UserCollection.findOne({
      username: user.username,
    });

    if (existedUsername) {
      return LOGICAL_ERRORS.EXISTED_USERNAME;
    }

    const hashPwd = await hashPassword(user.password);

    const newUser = await UserCollection.create({
      username: user.username,
      password: hashPwd,
    });
    
    return {
      msg: 'Created successfully!',
      newUser,
    };
  } catch (error) {
    throw error;
  }
};