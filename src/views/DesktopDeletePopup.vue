<template>
    <div class="desktop-delete">
      <div class="overlap-wrapper">
        <div class="overlap">
          <div class="background-home">
            <div class="top-bar">
              <div class="overlap-group">
                <img class="accounticon" alt="Accounticon" src="accounticon-1.svg" />
                <img class="oclogomaroon" alt="Oclogomaroon" src="oclogomaroon-1.png" />
                <div class="text-wrapper">Course Listing</div>
                <div class="div">
                  <div class="list-button">
                    <div class="div-wrapper">
                      <div class="text-wrapper-2">LIST</div>
                    </div>
                  </div>
                  <div class="text-wrapper-3">ADD COURSE</div>
                  <div class="rectangle" />
                </div>
                <div class="text-wrapper-4">IMPORT COURSES</div>
              </div>
            </div>
            <div class="greetings">
              <div class="hello-name-here-wrapper">
                <div class="hello-name-here">Hello, &lt;name here&gt;!</div>
              </div>
            </div>
            <div class="course-listing">
              <div class="overlap-2">
                <div class="text-wrapper-5">Courses</div>
                <div class="search-edit-or">Search,&nbsp;&nbsp;edit, or delete courses</div>
                <div class="text-wrapper-6">Title</div>
                <div class="text-wrapper-7">Description</div>
                <div class="text-wrapper-8">Actions</div>
                <div class="overlap-group-2">
                  <div class="text-wrapper-9">Temp</div>
                  <div class="text-wrapper-10">Temp Desc.</div>
                  <img class="pencil" alt="Pencil" src="pencil-1.svg" />
                  <img class="list" alt="List" src="list-1.svg" />
                  <img class="delete" alt="Delete" src="delete-1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="delete-popup">
            <div class="overlap-3">
              <ButtonPrimary
                buttonClassName="button-primary-instance"
                className="CANCEL"
                outline="false"
                roundness="default"
                size="extra-small"
                state="default"
                text="CANCEL"
                type="default"
              />
              <ButtonPrimary
                buttonClassName="button-primary-instance"
                className="DELETE"
                outline="false"
                roundness="default"
                size="extra-small"
                state="default"
                text="DELETE"
                type="default"
              />
              <p class="do-you-want-to">Do you want to delete &lt;course name&gt;?</p>
              <img class="close" alt="Close" src="close-24dp-666666-fill0-wght400-grad0-opsz24-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonPrimary from './ButtonPrimary.vue';
  
  export default {
    name: 'DesktopDelete',
    components: {
      ButtonPrimary
    }
  };
  </script>
  
  <style>
  .desktop-delete {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .desktop-delete .overlap-wrapper {
    background-color: #ffffff;
    height: 1024px;
    width: 1440px;
  }
  
  .desktop-delete .overlap {
    height: 838px;
    position: relative;
  }
  
  .desktop-delete .background-home {
    height: 592px;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 1440px;
  }
  
  .desktop-delete .top-bar {
    height: 114px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1446px;
  }
  
  .desktop-delete .overlap-group {
    background-color: var(--white);
    box-shadow: 0px 10px 4px #00000040;
    height: 114px;
    position: relative;
    width: 1440px;
  }
  
  .desktop-delete .accounticon {
    height: 84px;
    left: 1332px;
    position: absolute;
    top: 15px;
    width: 84px;
  }
  
  .desktop-delete .oclogomaroon {
    height: 64px;
    left: 20px;
    object-fit: cover;
    position: absolute;
    top: 25px;
    width: 100px;
  }
  
  .desktop-delete .text-wrapper {
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
  
  .desktop-delete .div {
    height: 81px;
    left: 758px;
    position: absolute;
    top: 17px;
    width: 326px;
  }
  
  .desktop-delete .list-button {
    height: 58px;
    left: 0;
    position: absolute;
    top: 11px;
    width: 124px;
  }
  
  .desktop-delete .div-wrapper {
    background-color: #d9d9d9;
    border-radius: 6px;
    height: 58px;
    position: relative;
    width: 122px;
  }
  
  .desktop-delete .text-wrapper-2 {
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
  
  .desktop-delete .text-wrapper-3 {
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
  
  .desktop-delete .rectangle {
    background-color: var(--white);
    border: 1px solid;
    border-color: #000000;
    height: 71px;
    left: 320px;
    position: absolute;
    top: 4px;
    transform: rotate(180deg);
    width: 1px;
  }
  
  .desktop-delete .text-wrapper-4 {
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
  
  .desktop-delete .greetings {
    height: 91px;
    left: 115px;
    position: absolute;
    top: 155px;
    width: 1212px;
  }
  
  .desktop-delete .hello-name-here-wrapper {
    background-color: var(--light-gray);
    height: 91px;
    position: relative;
    width: 1210px;
  }
  
  .desktop-delete .hello-name-here {
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
  
  .desktop-delete .course-listing {
    height: 301px;
    left: 115px;
    position: absolute;
    top: 291px;
    width: 1224px;
  }
  
  .desktop-delete .overlap-2 {
    background-color: var(--white);
    box-shadow: 0px 4px 8px 2px #00000040;
    height: 301px;
    position: relative;
    width: 1210px;
  }
  
  .desktop-delete .text-wrapper-5 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 35px;
    font-weight: 500;
    height: 49px;
    left: 23px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 11px;
    width: 226px;
  }
  
  .desktop-delete .search-edit-or {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 25px;
    font-weight: 500;
    height: 29px;
    left: 23px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 70px;
    white-space: nowrap;
    width: 397px;
  }
  
  .desktop-delete .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 59px;
    left: 17px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 139px;
    width: 71px;
  }
  
  .desktop-delete .text-wrapper-7 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 59px;
    left: 273px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 139px;
    width: 188px;
  }
  
  .desktop-delete .text-wrapper-8 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 59px;
    left: 563px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 139px;
    width: 188px;
  }
  
  .desktop-delete .overlap-group-2 {
    background-color: var(--white);
    border: 1px solid;
    border-color: #00000045;
    height: 80px;
    left: 0;
    position: absolute;
    top: 221px;
    width: 1210px;
  }
  
  .desktop-delete .text-wrapper-9 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 80px;
    left: 16px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 107px;
  }
  
  .desktop-delete .text-wrapper-10 {
    color: #000000;
    font-family: "Inter-Medium", Helvetica;
    font-size: 30px;
    font-weight: 500;
    height: 80px;
    left: 272px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 188px;
  }
  
  .desktop-delete .pencil {
    height: 46px;
    left: 562px;
    position: absolute;
    top: 16px;
    width: 46px;
  }
  
  .desktop-delete .list {
    height: 60px;
    left: 626px;
    position: absolute;
    top: 9px;
    width: 60px;
  }
  
  .desktop-delete .delete {
    height: 50px;
    left: 704px;
    position: absolute;
    top: 16px;
    width: 50px;
  }
  
  .desktop-delete .delete-popup {
    height: 573px;
    left: 168px;
    position: absolute;
    top: 265px;
    width: 1105px;
  }
  
  .desktop-delete .overlap-3 {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 10px 4px #00000040;
    height: 573px;
    position: relative;
    width: 1103px;
  }
  
  .desktop-delete .CANCEL {
    background-color: var(--oc-dark-maroon) !important;
    display: flex !important;
    height: 171px !important;
    left: 604px !important;
    position: absolute !important;
    top: 315px !important;
    width: 325px !important;
  }
  
  .desktop-delete .button-primary-instance {
    font-size: 48px !important;
  }
  
  .desktop-delete .DELETE {
    background-color: var(--primary-red-darken-2) !important;
    display: flex !important;
    height: 171px !important;
    left: 151px !important;
    position: absolute !important;
    top: 315px !important;
    width: 325px !important;
  }
  
  .desktop-delete .do-you-want-to {
    color: var(--black);
    font-family: "Inter-Medium", Helvetica;
    font-size: 64px;
    font-weight: 500;
    height: 154px;
    left: 96px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 64px;
    width: 911px;
  }
  
  .desktop-delete .close {
    height: 36px;
    left: 1040px;
    position: absolute;
    top: 26px;
    width: 36px;
  }
  </style>