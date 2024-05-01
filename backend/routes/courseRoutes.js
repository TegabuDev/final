import express from "express";
import {
  getAllCourses,
  addCourse,
  addnew,
} from "../controllers/courseControllers.js";
const router = express.Router();

router.route("/all").get(getAllCourses);
router.route("/addnewcourse").get(addnew);
router.route("/add").post(addCourse);

export default router;
