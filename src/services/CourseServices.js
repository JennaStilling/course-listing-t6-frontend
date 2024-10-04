import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3016/course-t6";
} else {
  baseurl = "/nodeapps/2024/project2/t6/localhost:3016/course-t6";

}

const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true,
  },
});

export default {
  getCourses() {
    return apiClient.get("/courses");
  },
  getCourse(id) {
    return apiClient.get("/courses/" + id);
  },
  addCourse(course) {
    return apiClient.post("/courses", course);
  },
  updateCourse(courseId, course) {
    return apiClient.put("/courses/" + courseId, course);
  },
  deleteCourse(id) {
    return apiClient.delete("/courses/" + id);
  },
};