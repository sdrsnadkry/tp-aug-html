// console.log(document.getElementById("jobId"))

function changeJob() {
  const jobEle = document.getElementById("jobId");

  jobEle.innerText = "Software Engineer";
}

// const a  = document.getElementsByClassName("designation")

// a[0].innerText = "Software Engineer"
// console.log(a[0])


// const query =document.querySelector(".designation")
const query =document.querySelectorAll("#jobId")
// query.innerText = "Software Engineer"

console.log(query)