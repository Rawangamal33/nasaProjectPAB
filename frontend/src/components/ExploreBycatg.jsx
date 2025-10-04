import { NavLink } from "react-router-dom";
import useGetData from "./Hooks/useGetData";
import { useState } from "react";

const animalImg =
  "https://images.pexels.com/photos/6492882/pexels-photo-6492882.jpeg?auto=compress&cs=tinysrgb&w=400";
const cellImg =
  "https://images.pexels.com/photos/26545224/pexels-photo-26545224.jpeg?auto=compress&cs=tinysrgb&w=400";
const humanImg =
  "https://images.pexels.com/photos/3939255/pexels-photo-3939255.jpeg?auto=compress&cs=tinysrgb&w=400";
const plantImg =
  "https://images.pexels.com/photos/1431192/pexels-photo-1431192.jpeg?auto=compress&cs=tinysrgb&w=400";
const microImg =
  "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400";

const ExploreBycatg = () => {
  const catgArr = [
    {
      name: "Animal Studies",
      img: animalImg,
    },
    {
      name: "Cellular & Molecular Biology",
      img: cellImg,
    },
    {
      name: "Human Health & Physiology",
      img: humanImg,
    },
    {
      name: "Plant Biology",
      img: plantImg,
    },
    {
      name: "Microbiology",
      img: microImg,
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <style>
        {`
          @keyframes horizontalSpin {
            from {
              transform: perspective(1200px) rotateY(0deg);
            }
            to {
              transform: perspective(1200px) rotateY(360deg);
            }
          }
          
          @media screen and (max-width: 1023px) {
            .carousel-container {
              width: 120px !important;
              height: 150px !important;
              margin-left: -60px !important;
              margin-top: -75px !important;
            }
            .carousel-item {
              width: 120px !important;
              height: 150px !important;
              transform: rotateY(calc(var(--index) * 72deg)) translateZ(200px) !important;
            }
          }
          
          @media screen and (max-width: 767px) {
            .carousel-container {
              width: 100px !important;
              height: 130px !important;
              margin-left: -50px !important;
              margin-top: -65px !important;
            }
            .carousel-item {
              width: 100px !important;
              height: 130px !important;
              transform: rotateY(calc(var(--index) * 72deg)) translateZ(150px) !important;
            }
            .carousel-item h2 {
              font-size: 0.6rem !important;
            }
          }
        `}
      </style>

      <h1 className="text-left font-semibold text-2xl pt-8 pl-8 mt-4">
        Explore by Topic
      </h1>

      <div
        className="carousel-container absolute top-1/2 left-1/2"
        style={{
          width: "200px",
          height: "250px",
          marginLeft: "-100px",
          marginTop: "-125px",
          transformStyle: "preserve-3d",
          animation: "horizontalSpin 20s linear infinite",
        }}
      >
        {catgArr.map((item, index) => (
          <div
            key={index}
            className="carousel-item absolute"
            style={{
              "--index": index,
              width: "200px",
              height: "250px",
              transform: `rotateY(${
                (index * 360) / catgArr.length
              }deg) translateZ(400px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <NavLink to={`categoryItems/${item.name}`}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </NavLink>
            <h2 className="text-center mt-2 text-xs font-bold px-2">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreBycatg;
