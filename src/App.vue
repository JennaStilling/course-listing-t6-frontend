<script setup>
import CourseServices from "./services/CourseServices.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
</script>

<template>
  <div id="app">
    <div>
      <router-link :to="{ name: 'courses' }">
        <a>display Courses, </a>
      </router-link>

      <router-link :to="{ name: 'course', params: { id: 5 } }">
        <a>display Course, </a>
      </router-link>

      <router-link :to="{ name: 'addCourse' }">
        <a>add Course, </a>
      </router-link>

      <router-link :to="{ name: 'editCourse', params: { id: 5 } }">
        <a>edit Course</a>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>