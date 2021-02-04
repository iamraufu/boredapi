function findTask() {
    fetch("http://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => { document.getElementById("task").innerText = data.activity })
        .catch(error => alert("Please Try Again Later"))
}
setInterval(() => { findTask() }, 3000)