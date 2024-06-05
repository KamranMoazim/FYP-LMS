import { Response } from "express";
import CourseModel from "../models/course.model";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";

// create course
export const createCourse = CatchAsyncError(async(data:any,res:Response)=>{
  console.log(data)
  // data.createdBy = req.user._id;
    const course = await CourseModel.create(data);
    console.log(course)
    res.status(201).json({
        success:true,
        course
    });
})

// Get All Courses
export const getAllCoursesService = async (req:any, res: Response) => {
    const courses = await CourseModel.find({
      // createdBy: { $ne: req.user._id },
      createdBy: { $eq: req.user._id },
    }).sort({ createdAt: -1 });
  
    res.status(201).json({
      success: true,
      courses,
    });
  };
  