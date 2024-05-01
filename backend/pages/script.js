const addCourse = () => {
  let courseName = document.getElementById("coursename").value;
  let students = document.getElementById("students").value;
  let startDate = document.getElementById("startDate").value;
  fetch("/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      courseName,
      students,
      startDate,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data == null) {
        location.href = "/";
      } else {
        alert(data.message);
        location.href = "/";
      }
    })
    .catch((err) => console.log(err));
};
