<script setup>
import CourseServices from "../services/CourseServices.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const message = ref("");

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
      course.value = response.data[0];
      message.value = "";
    })
    .catch((error) => {
      course.value = "Error: " + error.code + ":" + error.message;
      console.log(error);
    });
});

function cancel() {
  router.push({ name: "editCourse" });
}

function cancel() {
  router.push({ name: "courses" });
}
</script>

<template>
    <div id="body">
      <h1>Display Course</h1>
      <h2>{{ message }}</h2>
      <br />
      <div class="form">
        <div class="form-group">
          <label for="department">
            Department
            <span id="dmptErr" class="text-error">{{
             errors.department || "*"
            }}</span>
          </label>
          <input v-model="course.department" type="text" id="department" />
        </div>
  
        <div class="form-group">
          <label for="courseNumber">
            Course Number
            <span id="courseNumError" class="text-error">{{
             errors.courseNumber || "*"
            }}</span>
          </label>
          <input v-model="course.courseNumber" type="text" id="courseNumber" />
        </div>
  
        <div class="form-group">
          <label for="level">
            Level
            <span id="levelErr" class="text-error">{{
             errors.level || "*"
            }}</span>
          </label>
          <input v-model="course.level" type="text" id="level" />
        </div>
  
        <div class="form-group">
          <label for="hours">
            Hours
            <span id="hoursErr" class="text-error">{{
             errors.hours || "*" 
            }}</span>
          </label>
          <input v-model="course.hours" type="text" id="hours"/>
        </div>
  
        <div class="form-group">
          <label for="name">
            Name
            <span id="nameErr" class="text-error">{{
             errors.name || "*" 
            }}</span>
          </label>
          <input v-model="course.name" type="text" id="name" />
        </div>
  
        <div class="form-group">
          <label for="description">
            Description
            <span id="descriptionErr" class="text-error">{{ errors.state || "*"}}</span>
          </label>
          <input v-model="course.description" type="text" id="description" />
        </div>
      </div>
      <br />
      <button class="success" name="editCourse" v-on:click.prevent="edit()">
        Edit
      </button>
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </div>
  </template>
  