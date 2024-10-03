<script setup>
import CourseServices from "../services/CourseServices.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const valid = ref(false);
const course = ref({
  id: null,
  department: "",
  courseNumber: "",
  level: "",
  hours: "",
  name: "",
  description: ""
});
const message = ref("Enter data and click save");
const errors = ref({});

function addCourse() {
  CourseServices.addCourse(course.value)
    .then(() => {
      router.push({ name: "courses" });
    })
    .catch((error) => {
      if (error.response != null && error.response.status == "406") {
        for (let obj of error.response.data) {
          if (obj.attributeName === undefined) {
            obj.attributeName = "idNumber";
          }
          errors.value[obj.attributeName] = obj.message;
        }
      } else {
        message.value = "Error: " + error.code + ":" + error.message;
        console.log(error);
        console.log(error);
      }
    });
}

// const addCourse = () => {
//   const data = {
//     department: course.value.department,
//     courseNumber: course.value.courseNumber,
//     level: course.value.level,
//     hours: course.value.hours,
//     name: course.value.name,
//     description: course.value.description,
//   };
//   CourseServices.addCourse(data)
//     .then((response) => {
//       course.value.id = response.data.id;
//       console.log("add " + response.data);
//       router.push({ name: "courses" });
//     })
//     .catch((e) => {
//       message.value = e.response.data.message;
//     });
// };

const cancel = () => {
  router.push({ name: "courses" });
};

</script>

<template>
    <div id="body">
      <h1>Add Course</h1>
      <h4>{{ message }}</h4>
      <br />
      <div class="form">
        <div class="form-group">
          <label for="department">Department 
            <span class="text-error">{{ errors.department || "*" }}</span> 
          </label>
          <input v-model="course.department" type="text" id="department" placeholder = "Department"/>
        </div>
        <div class="form-group">
          <label for="courseNumber">Course Number
            <span class="text-error">{{ errors.courseNumber || "*" }}</span> 
          </label>
          <input v-model="course.courseNumber" type="text" id="courseNumber" placeholder = "Course Number"/>
        </div>
        <div class="form-group">
          <label for="level">Level
            <span class="text-error">{{ errors.level || "*" }}</span> 
          </label>
          <input v-model="course.level" type="text" id="level" placeholder = "Level"/>
        </div>
        <div class="form-group">
          <label for="hours">Hours
            <span class="text-error">{{ errors.hours || "*" }}</span> 
          </label>
          <input v-model="course.hours" type="text" id="hours" placeholder = "Hours"/>
        </div>
        <div class="form-group">
          <label for="name">Name
            <span class="text-error">{{ errors.name || "*" }}</span> 
          </label>
          <input v-model="course.name" type="text" id="name" placeholder = "Name" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input v-model="course.description" type="text" id="description" placeholder = "Description"/>
        </div>
      </div>
      <br />
      <button class="success" name="Save" v-on:click.prevent="addCourse()">
        Add
      </button>
      <button name="Cancel" v-on:click.prevent="cancel()">Cancel</button>
    </div>
  </template>