import React, {useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
const Category = () => {
    const {name}=useParams()
    const [data,setData]=useState([])
    useEffect(() => {
            const fetchData = async () => {
              const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
              const data = await api.json();
              setData(data.meals);
              console.log(data)
            };
            fetchData();
          }, [name]);
  return (
    <>
    <Navbar/>
    <div style={{
                    display:'grid',
                    width:'90%',
                    margin:'auto',
                    gridTemplateColumns:'repeat(auto-fit,minmax(15rem,1fr))',
                    gridGap:'1.5rem',
                    marginTop:'2rem',
                  }}>
      {
            data.map((d)=>{
                return(
                  <Link to={`/${d.idMeal}`} className='link'>
                    <div key={d.idMeal} style={{
                      textAlign:'center',
                    }}>
                      <div className='img'>
                        <img src={d.strMealThumb} alt={d.strMeal} style={{
                          width:'13rem',
                        }} />
                      </div>
                      <h3>{d.strMeal}</h3>
                    </div>
                  </Link>
                )
            })
        }
    </div>
    <TrendingSlider/>
    </>
  )
}

export default Category
