document.addEventListener('DOMContentLoaded', event => {

questionElems  = document.getElementsByClassName("question")

for(i=0; i < questionElems.length; ++i) {
    questionElems[i].addEventListener("click", event => {
        console.log(event);
    });
}
});