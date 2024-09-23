<template>
	<div class="desktop-course">
	  <div class="div">
		<img class="top-bar" alt="Top bar" src="top-bar.png" />
		<div class="greetings">
		  <div class="overlap-group">
			<div class="hello-name-here">Hello, &lt;name here&gt;!</div>
		  </div>
		</div>
		<div class="course-listing">
		  <div class="overlap">
			<div class="text-wrapper">Courses</div>
			<div class="search-edit-or">Search,&nbsp;&nbsp;edit, or delete courses</div>
			<div class="text-wrapper-2">Title</div>
			<div class="text-wrapper-3">Description</div>
			<div class="text-wrapper-4">Actions</div>
			<div class="overlap-group-2">
			  <div class="text-wrapper-5">Temp</div>
			  <div class="text-wrapper-6">Temp Desc.</div>
			  <img class="pencil" alt="Pencil" src="./assets/AccountCircle.png" />
			  <img class="list" alt="List" src="./assets/List.png" />
			  <img class="delete" alt="Delete" src="./assets/Delete.png" />
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: "DesktopCourse",
  };
  </script>
  
  <style>
  .desktop-course {
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
  }
  
  .desktop-course .div {
	background-color: #ffffff;
	height: 1024px;
	position: relative;
	width: 1440px;
  }
  
  .desktop-course .top-bar {
	height: 128px;
	left: 0;
	position: absolute;
	top: 0;
	width: 1440px;
  }
  
  .desktop-course .greetings {
	height: 91px;
	left: 115px;
	position: absolute;
	top: 155px;
	width: 1212px;
  }
  
  .desktop-course .overlap-group {
	background-color: var(--light-gray);
	height: 91px;
	position: relative;
	width: 1210px;
  }
  
  .desktop-course .hello-name-here {
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
  
  .desktop-course .course-listing {
	height: 301px;
	left: 115px;
	position: absolute;
	top: 291px;
	width: 1224px;
  }
  
  .desktop-course .overlap {
	background-color: var(--white);
	box-shadow: 0px 4px 8px 2px #00000040;
	height: 301px;
	position: relative;
	width: 1210px;
  }
  
  .desktop-course .text-wrapper {
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
  
  .desktop-course .search-edit-or {
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
  
  .desktop-course .text-wrapper-2 {
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
  
  .desktop-course .text-wrapper-3 {
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
  
  .desktop-course .text-wrapper-4 {
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
  
  .desktop-course .overlap-group-2 {
	background-color: var(--white);
	border: 1px solid;
	border-color: #00000045;
	height: 80px;
	left: 0;
	position: absolute;
	top: 221px;
	width: 1210px;
  }
  
  .desktop-course .text-wrapper-5 {
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
  
  .desktop-course .text-wrapper-6 {
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
  
  .desktop-course .pencil {
	height: 46px;
	left: 562px;
	position: absolute;
	top: 16px;
	width: 46px;
  }
  
  .desktop-course .list {
	height: 60px;
	left: 626px;
	position: absolute;
	top: 9px;
	width: 60px;
  }
  
  .desktop-course .delete {
	height: 50px;
	left: 704px;
	position: absolute;
	top: 16px;
	width: 50px;
  }
  </style>