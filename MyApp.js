
const Students = [
    {StudentId: 1 , StudentName: "Hamza" , RegistrationNumber: "1201544" , Age: 23 , PhoneNumber: "0785650189" , Email: "hamza1@gmail.com" , LoginId: 1 },
    {StudentId: 2 , StudentName: "Ahmad" , RegistrationNumber: "1201545" , Age: 24 , PhoneNumber: "0785656884" , Email: "ahmad1@gmail.com" , LoginId: 2 },
    {StudentId: 3 , StudentName: "Ali"   , RegistrationNumber: "1201546" , Age: 21 , PhoneNumber: "0785650445" , Email: "ali1@gmail.com"   , LoginId: 3 },
    {StudentId: 4 , StudentName: "Omar"  , RegistrationNumber: "1201547" , Age: 23 , PhoneNumber: "0785465598" , Email: "omar1@gmail.com"  , LoginId: 4 }

];

const Courses = [
    {CourseId: 1 , CourseName: "Node js" , Duration: "60H" , StartingDate: "12-12-2025"}
];

const UserLogin = [
    {LoginId: 1 , UserName: "hamza" , Password: "H1234" },
    {LoginId: 2 , UserName: "ahmad" , Password: "A1234" },
    {LoginId: 3 , UserName: "ali"   , Password: "A1234" },
    {LoginId: 4 , UserName: "omar"  , Password: "O1234" }
];


const Enrollments = [
    {enrollmentId: 1 , StudentId: 1 , CourseId: 1 },
];


function getCourseByName (courseName)
{
    const course = Courses.find((c) => c.CourseName.toLowerCase() === courseName.toLowerCase());
    if (course)
    {
        return course;
    }
    else
    {
         return "The Course Not Found" ;
    }

}

function addNewCourse (courseName , duration , startingDate)
{
    const newCourse =
    {
        CourseId : Courses.length +1 ,
        CourseName : courseName ,
        Duration : duration ,
        StartingDate : startingDate
    };
    Courses.push(newCourse);
    return `The Course "${courseName}" added successfully. `;
}

function enrollStudent (studentId , courseId)
{
    const student = Students.find((s) => s.StudentId === studentId);
    const course  = Courses.find((c) => c.CourseId === courseId);

    if ( !student || !course)
    {
        return "Not found Student or Course" ;
    }

    const existingEnrollment = Enrollments.find((e) => e.StudentId === studentId && e.CourseId === courseId);
    if(!existingEnrollment)
    {
        const newEnrollment =
        {
            EnrollmentId : Enrollments.length + 1,
            StudentId : studentId ,
            CourseId : courseId
        };

        Enrollments.push(newEnrollment);
        return `"${student.StudentName}" Enrolled in "${course.CourseName}" Course successful !`;
    }
    else
    {
        return `${student.StudentName} is already enrolled in ${course.CourseName}.`;
    }

}

function getEnrollmentsByStudentId(studentId) {
    const student = Students.find((s) => s.StudentId === studentId);
    if (!student) {
      return "Student not found.";
    }
  
    const studentEnrollments = Enrollments.filter((e) => e.StudentId === studentId);
    if (studentEnrollments.length === 0) {
      return `${student.StudentName} has no enrollments.`;
    }
  
    const enrolledCourses = studentEnrollments.map((e) => {
      const course = Courses.find((c) => c.CourseId === e.CourseId);
      return course.CourseName;
    });
  
    return `${student.StudentName} is enrolled in: ${enrolledCourses.join(", ")}`;
  }


    ///-----Test-----///
// console.log(getCourseByName("Node js")); // Get course info
// console.log(addNewCourse("React js", "50H", "01-01-2026")); // Add a new course
// console.log(enrollStudent(1, 2)); // Enroll a student in a course

// console.log(getCourseByName("Node js")); // Get course info
// console.log(addNewCourse("React js", "50H", "01-01-2026")); // Add a new course
// console.log(enrollStudent(2, 1)); // Enroll a student in a course
// console.log(getEnrollmentsByStudentId(1)); // List enrollments for a student
