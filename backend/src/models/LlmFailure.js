import mongoose from "mongoose";

const FailureSchema = new mongoose.Schema({
  failures_id: {
    type: Number,
    unique: true,
  },
  failures: {
    type: String,
  },
});

const LlmFailure = mongoose.model('llm_failure', FailureSchema);

export default LlmFailure;