let images = [
    "https://cdn.pixabay.com/photo/2023/09/05/20/37/owl-8235801_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/12/08/23/bird-8310172_1280.png",
    "https://cdn.pixabay.com/photo/2024/09/03/09/03/deer-9018759_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/08/18/14/34/folkstone-8978132_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/05/17/31/moutains-9025523_1280.jpg"
]
let img = document.querySelector('img');
let num = 0;

function prev(){
    if(num > 0){
        num--;
    } else{
        num = images.length - 1;
    }

    img.src = images[num];
}

function next(){
    if(num < images.length - 1){
        num++;
    } else{
        num = 0;
    }

    img.src = images[num];
}