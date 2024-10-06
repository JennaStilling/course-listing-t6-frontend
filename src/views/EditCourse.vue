<script setup>
import CourseServices from "../services/CourseServices.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const message = ref("Edit data and click save");

const props = defineProps({
  id: {
    required: true,
  },
});

const course = ref({});
const errors = ref({});

onMounted(() => {
  CourseServices.getCourse(props.id)
    .then((response) => {
      course.value = response.data;
    })
    .catch((error) => {
      course.value = "Error: " + error.code + ":" + error.message;
      console.log(error);
    });
});

function cancel() {
  router.push({ name: "course" });
}

function save() {
  CourseServices.updateCourse(props.id, course.value)
    .then(() => {
      router.push({ name: "course" });
    })
    .catch((error) => {
      if (error.response != null && error.response.status == "406") {
        for(let obj in errors.value) {
          errors.value[obj] = '*'
        }
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
</script>

<template>
    <div id="body">
      <h1>Edit Course</h1>
      <h2>{{ message }}</h2>
      <br />
      <div class="form">
        <div class="form-group">
          <label for="department">Department 
            <span class="text-error">{{ errors.department || "*" }}</span> 
          </label>
          <input v-model="course.department" type="text" id="department" />
        </div>
  
        <div class="form-group">
          <label for="courseNumber">Course Number
            <span class="text-error">{{ errors.courseNumber || "*" }}</span> 
          </label>
          <input v-model="course.courseNumber" type="text" id="courseNumber" />
        </div>
  
        <div class="form-group">
          <label for="level">Level
            <span class="text-error">{{ errors.level || "*" }}</span> 
          </label>
          <input v-model="course.level" type="text" id="level" />
        </div>
  
        <div class="form-group">
          <label for="hours">Hours
            <span class="text-error">{{ errors.hours || "*" }}</span> 
          </label>
          <input v-model="course.hours" type="text" id="hours" />
        </div>
  
        <div class="form-group">
          <label for="name">Name
            <span class="text-error">{{ errors.name || "*" }}</span> 
          </label>
          <input v-model="course.name" type="text" id="name" />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <input v-model="course.description" type="text" id="description" />
        </div>
      </div>

      <br />

      <button class="success" name="editCourse" v-on:click.prevent="save()">
        Save
      </button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </div>
  </template>
  