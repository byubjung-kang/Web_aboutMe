// get all the necessary HTML elements
const searchBar = document.getElementById("search-bar");
const levelFilter = document.getElementById("level-filter");
const sortSelect = document.getElementById("sort-select");
const courses = document.querySelectorAll(".course");

// function to filter the courses by level
function filterCourses() {
  const level = levelFilter.value;
  courses.forEach((course) => {
    const courseLevel = course.querySelector("h3").textContent.split(" ")[1];
    if (level === "" || courseLevel === level) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}

// function to sort the courses by level
function sortCourses() {
  const sortOrder = sortSelect.value;
  const courseList = document.querySelector(".course-list");
  const sortedCourses = Array.from(courses).sort((a, b) => {
    const aLevel = a.querySelector("h3").textContent.split(" ")[1];
    const bLevel = b.querySelector("h3").textContent.split(" ")[1];
    if (sortOrder === "low-to-high") {
      return aLevel - bLevel;
    } else if (sortOrder === "high-to-low") {
      return bLevel - aLevel;
    } else {
      return 0;
    }
  });
  sortedCourses.forEach((course) => {
    courseList.appendChild(course);
  });
}

// function to search for courses based on the input value
function searchCourses() {
  const searchValue = searchBar.value.toLowerCase();
  courses.forEach((course) => {
    const courseName = course.querySelector("h2").textContent.toLowerCase();
    if (courseName.includes(searchValue)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}

// add event listeners to the necessary HTML elements
searchBar.addEventListener("keyup", searchCourses);
levelFilter.addEventListener("change", filterCourses);
sortSelect.addEventListener("change", sortCourses);
