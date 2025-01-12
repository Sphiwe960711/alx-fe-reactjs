import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;
