<template>
    <div class="desktop-edit-course">
      <div class="div-2">
        <ButtonSecondaryWrapper />
        <ButtonPrimaryWrapper />
        <DescriptionWrapper />
        <NameWrapper />
        <HoursWrapper />
        <LevelWrapper />
        <CourseNumberWrapper />
        <DepartmentWrapper />
        <div class="edit-course">
          <div class="add-course-wrapper">
            <div class="add-course">Edit Course</div>
          </div>
        </div>
        <TopBar />
      </div>
    </div>
  </template>
  
  <script>
  import ButtonPrimaryWrapper from './ButtonPrimaryWrapper.vue';
  import ButtonSecondaryWrapper from './ButtonSecondaryWrapper.vue';
  import CourseNumberWrapper from './CourseNumberWrapper.vue';
  import DepartmentWrapper from './DepartmentWrapper.vue';
  import DescriptionWrapper from './DescriptionWrapper.vue';
  import HoursWrapper from './HoursWrapper.vue';
  import LevelWrapper from './LevelWrapper.vue';
  import NameWrapper from './NameWrapper.vue';
  import TopBar from './TopBar.vue';
  
  export default {
    name: "DesktopEditCourse",
    components: {
      ButtonPrimaryWrapper,
      ButtonSecondaryWrapper,
      CourseNumberWrapper,
      DepartmentWrapper,
      DescriptionWrapper,
      HoursWrapper,
      LevelWrapper,
      NameWrapper,
      TopBar
    }
  };
  </script>
  
  <style>
  .desktop-edit-course {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .desktop-edit-course .div-2 {
    background-color: #ffffff;
    height: 1024px;
    overflow: hidden;
    position: relative;
    width: 1440px;
  }
  
  .desktop-edit-course .edit-course {
    height: 91px;
    left: 115px;
    position: absolute;
    top: 165px;
    width: 1212px;
  }
  
  .desktop-edit-course .add-course-wrapper {
    background-color: var(--light-gray);
    height: 91px;
    position: relative;
    width: 1210px;
  }
  
  .desktop-edit-course .add-course {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 91px;
    left: 24px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 497px;
  }
  </style>