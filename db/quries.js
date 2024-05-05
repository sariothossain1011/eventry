import { EventModel } from "@/modals/EventModal";
import { UserModel } from "@/modals/UserModal";
import {
  ReplaceMongoIdInArray,
  ReplaceMongoIdInObject,
} from "@/utils/data-utils";

export const getAllEvents = async () => {
  const allEvents = await EventModel.find().lean();
  return ReplaceMongoIdInArray(allEvents);
};

export const getEvent = async (id) => {
  const event = await EventModel.findById(id).lean();
  return ReplaceMongoIdInObject(event);
};

export const CreateUser = async (user) => {
  return await UserModel.create(user);
};

export const FindUserByCredentials = async (credentials) => {
  const user = await UserModel.findOne(credentials).lean();
  if(user){
    return ReplaceMongoIdInObject(user)
  }
  return null;
}