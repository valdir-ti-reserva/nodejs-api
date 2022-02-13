interface Course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration = 6, educator }: Course){
    console.log('Create course ==>', name, duration, educator)
  }
}

export default new CreateCourseService()