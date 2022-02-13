import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Valdir Silva'
  })
 
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Valdir Silva',
    duration: 12
  })

  return response.send()
}