import React, {ChangeEvent, useState} from 'react';
import { FetchRecipeURL } from './FetchRecipeURL';
import './Recipe.css'

interface Recipe {
    header: string,
    image: string,
    instructions: string,
    ingredientsList: any
}

export const Recipe = () => {
    const [recipe, setRecipe] = useState<Recipe>()

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
            const recipe=data.meals[0];
            const getIngredients=Object.keys(recipe)
                .filter((ingredient)=>{
                    return ingredient.indexOf('strIngredient') ==0;
                })
                .reduce((ingredients:any, ingredient) => {
                    if (recipe[ingredient] != null) {
                        ingredients[ingredient] = recipe[ingredient];
                    }
                    return ingredients;
                }, {});
            const ingredientList = []
            for(let key in getIngredients){
                let value=getIngredients[key];
                ingredientList.push(value)
            }
            const RecipeData: Recipe = {
                header: data.meals[0].strMeal,
                image: data.meals[0].strMealThumb,
                instructions: data.meals[0].strInstructions,
                ingredientsList: ingredientList
            }
            console.log(getIngredients)
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
    
    const paragraph = recipe? (
        <p id='para'>Ingredients List:</p> 
    ): null

    const ingredients = recipe? (
        recipe.ingredientsList.map((ingredient: any) => {
            return <> <ul><li>{ingredient}</li></ul></>
        })
    ):null
   

    return (
      <div className="recipe">
        {header}
        <section id='input-section'>
            <button onClick= {fetchRecipeApi} className='input_submit' type='submit'>Generate Random Recipe</button> 
        </section>
     {image}
     {paragraph}
     {ingredients}
      </div>
  );
}
