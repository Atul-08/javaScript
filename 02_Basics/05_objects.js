//  object de-structure

const course = {
    courseName : "javaScript",
    coursePrice : 999,
    courseInstructor : "atul"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

