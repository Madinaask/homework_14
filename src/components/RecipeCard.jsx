import { Link } from 'react-router-dom'
import './RecipeCard.css'

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-card-img"
      />
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <p className="recipe-card-cuisine">{recipe.cuisine}</p>
        <div className="recipe-card-meta">
          <span>&#9733; {recipe.rating}</span>
          <span>{recipe.cookTimeMinutes} мин</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
