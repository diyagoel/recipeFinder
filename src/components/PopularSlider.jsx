import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const PopularSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();
      console.log(data)
      setData(data.meals);
    };
    fetchData();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },

      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
          adaptiveHeight: true,
        }
      },
    ]
  };

  return (
    <>
      <div slider-container style={{
        height:'56vh',
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
                        <div className='slider1'>
                            <img src={d.strMealThumb} alt="" style={{width:'17rem', height:'16rem'}}/>
                        </div>
                    </Link>
                )
            })
          }
          </Slider>
          <style jsx>{`
        .slider-container {
          height: 56vh;
          width: 90%;
          margin: auto;
        }

        @media (min-width: 600px) and (max-width: 1020px) {
          .slider1 img {
            width: 18rem;
            height: 17rem;
          }
        }

        @media only screen and (min-width: 1020px) {
          .slider-container {
            height: 56vh;
            width: 90%;
            margin: auto;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default PopularSlider;
