class fetchDogs{
    constructor(){
        this._dog = []
   }
//An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise
//fetch is a built in function for javascript  
    async fetchBreeds(){
    try {

            const response = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10");
            const data = await response.json();
            console.log(data)
            this._breeds = data.results;
            // Array.isarray checks to see if its an array
            console.log(Array.isArray(data.results));{
           
            }
    } catch(error){
        console.error(error);
    }
   }
}

const dogFetch = new fetchDogs()

dogFetch.fetchBreeds()