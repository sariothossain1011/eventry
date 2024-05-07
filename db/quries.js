import { EventModel } from "@/modals/EventModal";
import { UserModel } from "@/modals/UserModal";
import {
  ReplaceMongoIdInArray,
  ReplaceMongoIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";

// export const getAllEvents = async (query) => {
//   console.log(query,"..........")
//   let allEvents = [];
//   if(query){
//     const regex = new RegExp(query,"i");
//     allEvents = await EventModel.find({name:{$regex:regex}}).lean();

//   }else{
//     allEvents = await EventModel.find().lean();
//   }
//   return ReplaceMongoIdInArray(allEvents);
// };
export async function getAllEvents(query) {
  let allEvents = [];
  if (query) {
      const regex = new RegExp(query, "i");
      allEvents = await EventModel.find({ name: { $regex: regex } }).lean();
  } else {
      allEvents = await EventModel.find().lean();
  }
  return ReplaceMongoIdInArray(allEvents);
}

export const getEvent = async (id) => {
  const event = await EventModel.findById(id).lean();
  return ReplaceMongoIdInObject(event);
};
export const getEventById =async(eventId) =>{
  const event = await EventModel.findById(eventId).lean();
  return ReplaceMongoIdInObject(event);
}
export const CreateUser = async (user) => {
  return await UserModel.create(user);
};

export const FindUserByCredentials = async (credentials) => {
  const user = await UserModel.findOne(credentials).lean();
  if (user) {
    return ReplaceMongoIdInObject(user);
  }
  return null;
};

export const UpdateInterested = async (evnetId, authId) => {
  const event = await EventModel.findById(evnetId);

  if (event) {
    const userFound = event.interested_ids.find(
      (id) => id.toString() === authId
    );
    if (userFound) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
    await event.save();
  }
};


export async function UpdatedGoingIds(eventId, authId) {
  const event = await EventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));
  event.save();
}

