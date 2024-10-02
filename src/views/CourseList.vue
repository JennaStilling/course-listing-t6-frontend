<script setup>
import CourseServices from "../services/CourseServices.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const courses = ref(null);
const course = ref(null);
const displayDelete = ref(false); // Displays the delete modal
const deleteError = ref(false); // Checks for any error when deleting course
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

const deleteDisplay = (item) => {
    course.value = item;
    displayDelete.value = true;
}

const deleteCourse = (course) => {
    CourseServices.deleteCourse(course.id)
        .then(() => {
            displayDelete.value = false;
            deleteError.value = false;
            getCourses();
        })
        .catch((e) => {
            message.value = e.response.data.message;
            deleteError.value = true;
        });
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
                        <th class="table-column">Course Number</th>
                        <th class="table-column">Name</th>
                        <th class="table-column">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in courses" :key="item.department">
                        <td class="table-content">{{ item.courseNumber }}</td>
                        <td class="table-content">{{ item.name }}</td>
                        <td class="table-content">
                            <img src="../assets/pencil.svg" @click="viewCourse(item)">
                            <img src="../assets/file.svg" @click="editCourse(item)">
                            <img src="../assets/trash.svg" @click="deleteDisplay(item)">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <!-- Hidden Delete Confirmation Pop-up -->
    <div v-if="displayDelete" class="modal">

        <div class="modal-content">
            <span @click="displayDelete = false" class="close">&times;</span>
            <div class="modal-header">
                
                <p v-if="!deleteError">
                Are you sure you want to delete <br />
                {{ course.courseNumber }}: {{ course.name }}?
                </p>
                <p v-if="deleteError">
                Error deleting<br />{{ course.courseNumber }}
                {{ course.name }}.
                </p>
            </div>

            <br />
            <div class="modal-body">
                <button v-if="!deleteError" v-on:click="displayDelete = false" class="modal-button">
                No, cancel
                </button>
                <button
                v-if="!deleteError"
                class="error modal-button"
                v-on:click="deleteCourse(course)"
                >
                Yes, delete
                </button>
                <button
                v-if="deleteError"
                v-on:click="
                    deleteError = false;
                    displayDelete = false;
                "
                class="modal-button"
                >
                Close
                </button>
            </div>
        </div>
    </div>
</template>