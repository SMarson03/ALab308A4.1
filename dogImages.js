import { fetchBreeds } from "./api.js";

const data = fetchBreeds()

function dogImages (){
    let doggies = document.getElementsByClassName("dogImage");
    doggies.src = data[0].url
}
