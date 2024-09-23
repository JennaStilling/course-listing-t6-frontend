<template>
    <div class="desktop-add-course">
      <div class="div-2">
        <ButtonSecondary
          class="button-secondary-instance"
          :outline="false"
          roundness="default"
          size="medium"
          state="default"
          text="CANCEL"
          type="default"
        />
        <ButtonPrimary
          class="button-primary-instance"
          :outline="false"
          roundness="default"
          size="medium"
          state="default"
          text="SAVE"
          type="default"
        />
        <FormInputsFilled
          class="description"
          :dense="false"
          line="line-2-6.svg"
          options="default"
          :prefix="false"
          text="Description"
        />
        <FormInputsFilled
          class="name"
          :dense="false"
          line="line-2-5.svg"
          options="default"
          :prefix="false"
          text="Name"
        />
        <FormInputsFilled
          class="hours"
          :dense="false"
          line="line-2-4.svg"
          options="default"
          :prefix="false"
          text="Hours"
        />
        <FormInputsFilled
          class="level"
          :dense="false"
          line="line-2-3.svg"
          options="default"
          :prefix="false"
          text="Level"
        />
        <FormInputsFilled
          class="course-number"
          :dense="false"
          line="line-2-2.svg"
          options="default"
          :prefix="false"
          text="Course Number"
        />
        <FormInputsFilled
          class="department"
          :dense="false"
          line="image.svg"
          options="default"
          :prefix="false"
          text="Department"
        />
        <div class="add-course">
          <div class="overlap-group">
            <div class="text-wrapper-2">Add Course</div>
          </div>
        </div>
        <div class="top-bar">
          <div class="overlap">
            <img class="accounticon" alt="Accounticon" src="accounticon-1.svg" />
            <img class="oclogomaroon" alt="Oclogomaroon" src="oclogomaroon-1.png" />
            <div class="text-wrapper-3">Course Listing</div>
            <div class="overlap-2">
              <div class="list-button">
                <div class="div-wrapper">
                  <div class="text-wrapper-4">LIST</div>
                </div>
              </div>
              <div class="text-wrapper-5">ADD COURSE</div>
              <div class="rectangle" />
            </div>
            <div class="text-wrapper-6">IMPORT COURSES</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonPrimary from './ButtonPrimary.vue';
  import ButtonSecondary from './ButtonSecondary.vue';
  import FormInputsFilled from './FormInputsFilled.vue';
  
  export default {
    name: 'DesktopAddCourse',
    components: {
      ButtonPrimary,
      ButtonSecondary,
      FormInputsFilled,
    },
  };
  </script>
  
  <style>
  .desktop-add-course {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .desktop-add-course .div-2 {
    background-color: #ffffff;
    height: 1024px;
    overflow: hidden;
    position: relative;
    width: 1440px;
  }
  
  .desktop-add-course .button-secondary-instance {
    background-color: var(--primary-red-darken-2) !important;
    box-shadow: var(--elevation-03-dp) !important;
    display: flex !important;
    left: 248px !important;
    position: absolute !important;
    top: 809px !important;
    width: 93px !important;
  }
  
  .desktop-add-course .button-primary-instance {
    background-color: var(--oc-dark-maroon) !important;
    box-shadow: var(--elevation-03-dp) !important;
    display: flex !important;
    left: 116px !important;
    position: absolute !important;
    top: 809px !important;
    width: 93px !important;
  }
  
  .desktop-add-course .description {
    left: 115px !important;
    position: absolute !important;
    top: 730px !important;
    width: 641px !important;
  }
  
  .desktop-add-course .name {
    left: 115px !important;
    position: absolute !important;
    top: 648px !important;
    width: 641px !important;
  }
  
  .desktop-add-course .hours {
    left: 115px !important;
    position: absolute !important;
    top: 566px !important;
    width: 641px !important;
  }
  
  .desktop-add-course .level {
    left: 115px !important;
    position: absolute !important;
    top: 484px !important;
    width: 641px !important;
  }
  
  .desktop-add-course .course-number {
    left: 115px !important;
    position: absolute !important;
    top: 402px !important;
    width: 641px !important;
  }
  
  .desktop-add-course .department {
    left: 115px !important;
    position: absolute !important;
    top: 320px !important;
    width: 641px !important;
  }
  
  .desktop-add-course .add-course {
    height: 91px;
    left: 115px;
    position: absolute;
    top: 165px;
    width: 1212px;
  }
  
  .desktop-add-course .overlap-group {
    background-color: var(--light-gray);
    height: 91px;
    position: relative;
    width: 1210px;
  }
  
  .desktop-add-course .text-wrapper-2 {
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
  
  .desktop-add-course .top-bar {
    height: 114px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1446px;
  }
  
  .desktop-add-course .overlap {
    background-color: var(--white);
    box-shadow: 0px 10px 4px #00000040;
    height: 114px;
    position: relative;
    width: 1440px;
  }
  
  .desktop-add-course .accounticon {
    height: 84px;
    left: 1332px;
    position: absolute;
    top: 15px;
    width: 84px;
  }
  
  .desktop-add-course .oclogomaroon {
    height: 64px;
    left: 20px;
    object-fit: cover;
    position: absolute;
    top: 25px;
    width: 100px;
  }
  
  .desktop-add-course .text-wrapper-3 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 40px;
    font-weight: 500;
    height: 58px;
    left: 135px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 28px;
    width: 313px;
  }
  
  .desktop-add-course .overlap-2 {
    height: 81px;
    left: 758px;
    position: absolute;
    top: 17px;
    width: 326px;
  }
  
  .desktop-add-course .list-button {
    height: 58px;
    left: 0;
    position: absolute;
    top: 11px;
    width: 124px;
  }
  
  .desktop-add-course .div-wrapper {
    background-color: #d9d9d9;
    border-radius: 6px;
    height: 58px;
    position: relative;
    width: 122px;
  }
  
  .desktop-add-course .text-wrapper-4 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 58px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 122px;
  }
  
  .desktop-add-course .text-wrapper-5 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 25px;
    font-weight: 500;
    height: 81px;
    left: 122px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 204px;
  }
  
  .desktop-add-course .rectangle {
    background-color: var(--white);
    border: 1px solid;
    border-color: #000000;
    height: 71px;
    left: 320px;
    position: absolute;
    top: 3px;
    transform: rotate(180deg);
    width: 1px;
  }
  
  .desktop-add-course .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 25px;
    font-weight: 500;
    height: 81px;
    left: 1084px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 17px;
    width: 241px;
  }
  </style>