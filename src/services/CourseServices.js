import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3016/course-t6/";
} else {
  baseurl = "/course-t6/";
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
  // transformRequest: (data, headers) => {
  //   let token = localStorage.getItem("token");
  //   let authHeader = "";
  //   if (token != null && token != "") {
  //     authHeader = "Bearer " + token;
  //     headers["Authorization"] = authHeader;
  //   }
  //   return JSON.stringify(data);
  // },
  // transformResponse: function (data) {
  //   data = JSON.parse(data);
  //   if (!data.success && data.code == "expired-session") {
  //     localStorage.removeItem("token");
  //   }
  //   return data;
  // },
});

export default {
  getCourses() {
    return apiClient.get("courses");
  },
  getCourse(id) {
    return apiClient.get("courses/" + id);
  },
  addCourse(course) {
    return apiClient.post("courses", course);
  },
  updateCourse(courseId, course) {
    return apiClient.put("courses/" + courseId, course);
  },
  // deleteList(listId) {
  //   return apiClient.delete("lists/" + listId);
  // },
  // getListItems(listId) {
  //   return apiClient.get("lists/" + listId + "/items");
  // },
  // addListItem(listId, item) {
  //   return apiClient.post("lists/" + listId + "/items", item);
  // },
  // updateListItem(listId, itemId, item) {
  //   return apiClient.put("lists/" + listId + "/items/" + itemId, item);
  // },
  // deleteListItem(listId, itemId) {
  //   return apiClient.delete("lists/" + listId + "/items/" + itemId);
  // },
  // getUser() {
  //   return apiClient.get("users");
  // },
  // addUser(user) {
  //   return apiClient.post("users", user);
  // },
  // loginUser(user) {
  //   return apiClient.post("users/login", user, {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "X-Requested-With": "XMLHttpRequest",
  //       crossDomain: true,
  //       Authorization: "Basic " + btoa(user.username + ":" + user.password),
  //     },
  //   });
  // },
  // logoutUser() {
  //   return apiClient.post("users/logout");
  // },
};