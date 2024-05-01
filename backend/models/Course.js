import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "pleas provide courseName "],
  },

  students: {
    type: Array,
    required: [true, "pleas provide field "],
  },
  startDate: {
    type: String,
  },
});

const courseCollection = new mongoose.model("Course", CourseSchema);

export default courseCollection;
