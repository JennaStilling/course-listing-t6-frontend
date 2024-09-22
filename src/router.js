import { createRouter, createWebHistory } from "vue-router";

import CourseList from "./views/CourseList.vue";
import DisplayCourse from "./views/DisplayCourse.vue";
import AddCourse from "./views/AddCourse.vue";
import EditCourse from "./views/EditCourse.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "courses",
      component: CourseList,
    },
    {
      path: "/course/:id",
      name: "course",
      component: DisplayCourse,
	    props: true,
    },
    {
      path: "/add",
      name: "addCourse",
      component: AddCourse,
    },
    {
      path: "/edit/:id",
      name: "editCourse",
      component: EditCourse,
      props: true,
    },
  ],
});

export default router;
