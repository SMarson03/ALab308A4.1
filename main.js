//I found  a youtube tutorial that was help compared to what I had initially which
//was a mish mosh of nonsensical code and chatGPT foolishness this was a great help
//I wish I found it earlier so I could do something more align with what I initially 
//wanted to do which didn't entail dogs. I had a difficult time with the modules so
//I reverted back to what I initially had and just kept it all on one page. I was super
//frustrated with this project as I didn't grasp it right away. Still uncomfortable with
//the syntax however I completed the basics of the task.

async function start(){
  const response = await fetch 
  ("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  createBreedList(data.message)
}
//start function fetches breed list
start()

function createBreedList(breedList){
document.getElementById("breed").innerHTML = `
<select onchange="loadByBreed(this.value)">
          <option>Choose A Dog Breed</option>
         ${Object.keys(breedList).map(function(breed){
          return `<option>${breed}</option>`
         }).join("")}
      </select>
`
}

async function loadByBreed(breed){
if(breed != "Choose A Dog Breed"){
const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
const data = await response.json()
createSlideshow(data.message)
}
}

function createSlideshow(images){
  document.getElementById("slideshow").innerHTML = `
  <div class = "slide" style = "background-image: url('${images[0]}')"></div>
  `

}
  