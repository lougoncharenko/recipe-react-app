import React, {useState} from 'react';
import './Recipe.css'

const Recipe = () => {
    const [recipe, setRecipe] = useState()

    const fetchRecipeApi = () => {
        fetch ("https://www.themealdb.com/api/json/v1/1/random.php") 
        .then(response =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('NETWORK RESPONSE ERROR')
            }   
        })
        .then(data =>{
            console.log(data)
        })
        .catch(error=> console.log('Fetch Error:', error));
    }
  return (
    <div>
      <div className="recipe">
        <h1></h1>
        <img></img>
        <div className='ingredients'></div>
        <div className='instructions'></div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Recipe;
