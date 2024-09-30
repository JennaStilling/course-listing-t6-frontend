<script setup>
import CourseServices from "../services/CourseServices.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const courses = ref(null);
const message = ref("Search, Edit or Delete Courses");

const getCourses = () => {
    CourseServices.getCourses()
        .then((res) => {
            courses.value = res.data;
            message.value = "";
        })
        .catch((err) => {
            message.value = "Error: " + err.code + ":" + err.message;
            console.log(err);
        });
}

const editCourse = (course) => {
    router.push({name: "editCourse", params: { id: course.id } });
}

const viewCourse = (course) => {
    router.push({ name: "course", params: { id: course.id } });
}

getCourses();
</script>

<template>
    <div>
        <div class="header">
            Hello User!
        </div>

        <br /><br />

        <div class="course-list-body">
            <div class="course-list-title">Courses</div>
            <br />
            <div class="course-list-subtext">{{ message }}</div>

            <table class="table-title">
                <thead>
                    <tr>
                        <th class="table-column">Title</th>
                        <th class="table-column">Description</th>
                        <th class="table-column">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in courses" :key="item.department">
                        <td class="table-content">{{ item.department }}</td>
                        <td class="table-content">{{ item.description }}</td>
                        <td class="table-content">
                            <img src="../assets/pencil.svg" @click="viewCourse(item)">
                            <img src="../assets/file.svg" @click="editCourse(item)">
                            <img src="../assets/trash.svg" @click="viewCourse(item)">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>