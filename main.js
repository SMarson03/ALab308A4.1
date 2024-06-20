export async function start(){
        const response = await fetch 
        ("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        createBreedList(data.message)
}
//start function fetches breed list
start()

function createBreedList(breedList){
document.getElementById("breed").innerHTML = `
<select onchange="">
                <option>Choose A Dog Breed</option>
               ${Object.keys(breedList).map(function(breed){
                return `<option>${breed}</option>`
               }).join("")}
            </select>
`
}

  
  