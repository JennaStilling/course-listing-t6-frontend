<script setup>
import CourseServices from "./services/CourseServices.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

import ocLogo from "./assets/oc-logo-white.png"
const logoURL = ocLogo;
</script>

<template>
  <div id="app">
    <nav class="navbar shadow">
      <ul class="nav-links">
        <div class="title">
          <li>
            <img :src="logoURL" contain/>
          </li>
          <li>
            <a>{{ "Course Listing" }}</a>
          </li>
        </div>
      </ul>
      <ul class="nav-links">
        <div class="menu">
          <li>
            <router-link :to="{name: 'courses'}"><a>LIST</a></router-link>
          </li>
          <li>
            <router-link :to="{name: 'addCourse'}"><a>ADD COURSE</a></router-link>
          </li>
        </div>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style></style>