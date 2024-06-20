export async function fetchBreeds() {
    try {
      const response = await fetch(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
      );
      const data = await response.json();
      console.log(data);
       
    } catch (error) {
      console.error(error);
    }
  }
  
  console.log(fetchBreeds())