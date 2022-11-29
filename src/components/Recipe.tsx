import React, {useState} from 'react';
import './Recipe.css'

const Recipe = () => {
    const [recipe, setRecipe] = useState()
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
