import React from 'react';

export const FetchRecipeURL = (keyword: string) => {
  let url = `www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
  return url
}


