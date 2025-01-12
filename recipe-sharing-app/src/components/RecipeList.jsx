import React from 'react';
import RecipeCard from './RecipeCard';
import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom';
const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;



