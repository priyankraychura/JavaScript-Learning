

function fetchData(){
    document.querySelector("h1").style.display = "block";
    document.querySelector("img").src = "";
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => {
        console.log(res.message);
        document.querySelector("img").src = res.message
        document.querySelector("h1").style.display = "none";
    })
    .catch((err) => {
        console.log(err);
    })
}

document.querySelector("button").addEventListener("click", () => {
    fetchData()
})

fetchData();

setInterval(() => {
    fetchData()
}, 10000)

