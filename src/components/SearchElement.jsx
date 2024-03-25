import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams,Link} from 'react-router-dom'


const SearchElement = () => {
    // console.log(useParams())
    const {searchTerm} = useParams();
    // const [errorMessage, setErrorMessage] = useState(" ");
    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
          try {
                const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await api.json();
                if (!data.meals || data.meals.length === 0) {
                    // No results found
                    console.log('No dishes found for this search term.');
                    // setErrorMessage(`No dishes found for "${searchTerm}".`);
                } else {
                    setData(data.meals);
                }
              } catch (error) {
                  console.error('Error fetching data:', error);
                //   setErrorMessage('An error occurred while fetching data.');
              }
      }
      fetchData();
    }, [searchTerm])

  return (
    <>
    <Navbar />
    <div style={{
        width:'90%',
        margin:'auto',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
        gridGap:'1rem',
        marginTop:'2rem'
    }}>
        {data.length === 0 && (
            <div>
            <div style={{ textAlign: 'center', fontSize: '3.0rem', marginTop: '5rem', fontWeight:'bold', }}>
                No dishes found named as "{searchTerm}".            
            </div>

            <div style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '7rem', fontWeight:'bold', }}>
                Try Instead?
            </div>
          </div>
        )}
    {
        data.length > 0 && data.map((d)=>{
            return(
                <Link to={`/${d.idMeal}`} className='link'>
                <div style={{textAlign:'center'}}>
                    <div className="img">
                        <img src={d.strMealThumb} alt="" style={{width:'13rem'}} />
                    </div>
                    <h3>{d.strMeal}</h3>
                </div>
                </Link>
            )
        })
    }
   </div>
    <TrendingSlider />
    </>
  )
}

export default SearchElement