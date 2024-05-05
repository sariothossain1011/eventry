const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  interested_ids: {
    required: true,
    type: Array,
  },
  going_ids: {
    required: true,
    type: Array,
  },
  swgs: {
    required: true,
    type: Array,
  },
});

export const EventModel = mongoose.models.events ?? mongoose.model("events", schema);