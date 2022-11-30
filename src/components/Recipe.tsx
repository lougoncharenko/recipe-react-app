import React, {ChangeEvent, useState} from 'react';
import { FetchRecipeURL } from './FetchRecipeURL';
import './Recipe.css'

interface Recipe {
    header: string,
    image: string,
    instructions: string
}

export const Recipe = () => {
    const [recipe, setRecipe] = useState<Recipe>()
    const [input, setInput] = useState('')

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
      }

    const fetchRecipeApi = () => {
        fetch ("https://www.themealdb.com/api/json/v1/1/random.php") 
        // fetch(FetchRecipeURL(input))
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
                image: data.meals[0].strMealThumb,
                instructions: data.meals[0].strInstructions
            }
            setRecipe(RecipeData)
        })
        .catch(error=> console.log('Fetch Error:', error));
    }
   const header = recipe? (
       <h1>{recipe.header}</h1>
    ): <h1>Recipe Finder</h1>
  const image = recipe? (
        <>
        <img src={recipe.image} alt={recipe.header}></img>
        <div className='instructions'>
           <p> {recipe.instructions} </p> 
        </div>
        
        </>
    ): 
    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*'></img> 
    
    return (
      <div className="recipe">
        {header}
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
     {image}
      </div>
  );
}
