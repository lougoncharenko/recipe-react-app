<div align="center">

# React Recipe Generator

</div>

|       |                                                                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| About | A web application that uses the React framework to generate a recipe using an API to load data.                                                                               |
| Author | [Louisa Goncharenko](https://github.com/lougoncharenko) |
| Goal  | Develop a robust REACT web application to practice using props, useState  , and an API.                                                                                                                       |
|       |                                                                                                                                                                                                     |


## Installation
- clone repo and run `npm install` in base directory

## Running Application
- `npm start` to start development environment
- `npm build` to build project to a '/dist' folder


## File Structure

```sh
Recipe-React-App/
├── Public         #  Folder that holds index.html file
Src/
├── components # Folder that holds all JSX components
├── App.tsx     # File that imports all component files and renders to App function.
├── index.tsx # Main File that renders React.dom
```
<br>
<br>

## Core Technologies & Concepts Used
- `TypeScript` 
- `React Framework`
- `HTML`
- `CSS`
-  API requests using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Free Meal API](https://www.themealdb.com/api.php)

## Features
- Ability to generate a random recipe onto the webpage
- Image changes based on recipe meal
- Ingredient list is generated for the user
- User is provided with instructions to make the recipe.

<br><br>
<div align="center">

## Preview of Web Application
<img src='Screen Shot 2022-11-29 at 10.35.31 PM.png'>


</div>
<br>

## Challenges and learnings
- My biggest challenge was filtering out the ingredients and displaying them as a list using useState.
- learning to useState to dynamically change things on the page.
- learning about react as a framework to develop a web application.

## Improvements:
- Adding an input field to search for a recipe
- Adding a filter to search for recipes containing an ingredient
- Filtering out recipes based on categories, main ingredients and countries.

