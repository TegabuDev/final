import courseCollection from "../models/Course.js";

export const getAllCourses = async (req, res) => {
  try {
    const courses = await courseCollection.find({});
    if (!courses) {
      return res.status(404).json({ message: "empty " });
    }
    return res.status(200).json(courses);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const addCourse = async (req, res) => {
  try {
    const newCourse = {
      courseName: req.body.courseName,
      students: req.body.students,
      startDate: req.body.startDate,
    };
    await courseCollection.insertMany(newCourse);
    res.status(200).json(newCourse);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const addnew = (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
};
