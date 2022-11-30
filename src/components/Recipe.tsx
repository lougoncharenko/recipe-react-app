import React, {ChangeEvent, useState} from 'react';
import { FetchRecipeURL } from './FetchRecipeURL';
import './Recipe.css'

interface Recipe {
    header: string,
    image: string
}

const Recipe = () => {
    const [recipe, setRecipe] = useState<Recipe>()
    const [input, setInput] = useState('')

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
      }

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
            const RecipeData: Recipe = {
                header: data.meals[0].strMeal,
                image: data.meals[0].strMealThumb
            }
            setRecipe(RecipeData)
        })
        .catch(error=> console.log('Fetch Error:', error));
    }
    

   const markup = recipe? (
    <>
       <h3>{recipe.header}</h3>
        <img src={recipe.image} alt={recipe.header}></img> 
    </>): <> <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*'></img> </>
  
  return (
      <div className="recipe">
        <h1>Recipe Finder</h1>
        <section id='input-section'>
            <input 
            type='text'
            value = {input}
            placeholder = 'enter a recipe' 
            className='input_box'
            onChange = {handleInputChange}
            ></input>
            <button onClick= {fetchRecipeApi} className='input_submit' type='submit'>Add</button> 
        </section>
     {markup}
      </div>
  );
}

export default Recipe;
