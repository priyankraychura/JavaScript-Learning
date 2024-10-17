let searchBox = document.querySelector("input");
let type = document.querySelector("#type");

searchBox.addEventListener("input", () => {
    let movieName = searchBox.value;
    let cat = type.value;

    setTimeout(() => {
        fetchData(movieName, cat)
    }, 100);
})

type.addEventListener("change", () => {
    let movieName = searchBox.value;
    let cat = type.value;

    setTimeout(() => {
        fetchData(movieName, cat)
    }, 100);
})

function fetchData(movie="home", cat="movie"){
    fetch(`http://www.omdbapi.com/?apikey=370a2d1a&s=${movie}&type=${cat}`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res.Search);
        if(res.Response == "False"){
            document.querySelector(".movie").innerHTML = "Doesn't found anything"
        } else{
            document.querySelector(".movie").innerHTML = view(res.Search)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

fetchData();

function view(data){
    return data.map((el) => {
        return `<div class="movie">
                <h2>${el.Title}</h2> 
                <h3>${el.Year}</h3>
                <img src="${el.Poster}" alt="">
            </div>`
    }).join("");
}