import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'
const Recipeid = () => {
 const {idMeal}=useParams()
 const [data,setData]=useState([])
 const [active,setActive]=useState('ingredient')
 useEffect(() => {
            const fetchData = async () => {
              const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
              const data = await api.json();
              console.log(data)
              setData(data.meals[0]);
              console.log(data)
            };
            fetchData();
          }, [idMeal]);
  return (
    <>
    <Navbar />
    <div className="recipe-container">
      <h1>{data.strMeal}</h1>
      <div className="recipe-content">
        <div className="recipe-image">
          <img src={data.strMealThumb} alt={data.strMeal} />
        </div>
        <div className="recipe-details">
          <div className="recipe-buttons">
            <button
              className={active === "ingredient" ? "active" : ""}
              onClick={() => setActive("ingredient")}
            >
              Ingredient
            </button>
            <button
              className={active === "instruction" ? "active" : ""}
              onClick={() => setActive("instruction")}
            >
              Instruction
            </button>
          </div>
          <div className="recipe-info">
            {active === "ingredient" ? (
              <div className="ingredient-list">
                <div>
                  <span className="ingredient-name">
                    {data.strIngredient1}
                  </span>{" "}
                  - {data.strMeasure1}
                </div>
                <div>
                  <span className="ingredient-name">
                    {data.strIngredient2}
                  </span>{" "}
                  - {data.strMeasure2}
                </div>
                <div>
                  <span className="ingredient-name">
                    {data.strIngredient3}
                  </span>{" "}
                  - {data.strMeasure3}
                </div>
                <div>
                  <span className="ingredient-name">
                    {data.strIngredient4}
                  </span>{" "}
                  - {data.strMeasure4}
                </div>
                <div>
                  <span className="ingredient-name">
                    {data.strIngredient5}
                  </span>{" "}
                  - {data.strMeasure5}
                </div>
                <div>
                  <span className="ingredient-name">
                    {data.strIngredient6}
                  </span>{" "}
                  - {data.strMeasure6}
                </div>
              </div>
            ) : (
              <p className="instructions">{data.strInstructions}</p>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="trending-slider">
      <TrendingSlider />
    </div>
  </>
  )
}

export default Recipeid
