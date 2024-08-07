import mongoose from "mongoose";

const CreatedDateSchema = new mongoose.Schema({
  created_date_id: {
    type: Number,
    unique: true,
  },
  created_date: {
    type: String,
  },
});

const LlmCreatedDate = mongoose.model('llm_created_date', CreatedDateSchema);

export default LlmCreatedDate;