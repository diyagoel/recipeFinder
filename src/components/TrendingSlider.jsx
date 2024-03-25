import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const TrendingSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const data = await api.json();
      setData(data.meals);
    };
    fetchData();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows:false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 5,
          infinite: true,
        }
      },

      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll:1,
          adaptiveHeight: true,
        }
      },
    ]
  };

  return (
    <>
      <div style={{
        height:'25vh',
        width:'99%',
        margin:'auto',
        overflowX:'hidden',
        overflowY:'hidden',
      }}>
        <Slider {...settings}
        style={{
            margin:'1rem',
          }}
        >
          {
            data.map((d)=>{
                return(
                    <Link to={`/${d.idMeal}`} key={d.idMeal}>
                    <div className='slider2'>
                        <img src={d.strMealThumb} alt="" style={{width:'10rem', height:'7rem'}}/>
                    </div>
                    </Link>
                )
            })
          }
        </Slider>
      </div>
    </>
  );
};

export default TrendingSlider;
