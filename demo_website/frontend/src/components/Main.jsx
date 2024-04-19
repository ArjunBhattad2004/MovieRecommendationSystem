import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
const Main = () => {
const movies = [
    {
      id: 9560,
      src: 'https://image.tmdb.org/t/p/w500/xencQzZnUWDRAOUydjf9PWet8Ae.jpg',
      title: 'A Walk in the Clouds',
      year: '1995-05-27',
      vote: 7.252
    },
    {
      id: 125587,
      src: 'https://image.tmdb.org/t/p/w500/mvQ6sXAftEX1UsFvvNKF89ubd6F.jpg',
      title: 'Nothing Personal',
      year: '1996-10-18',
      vote: 4.5
    },
    {
      id: 10396,
      src: 'https://image.tmdb.org/t/p/w500/8LoG0GL5N5e7zvvXezwwGnUfRHL.jpg',
      title: 'Tequila Sunrise',
      year: '1988-12-02',
      vote: 6
    },
    {
      id: 169,
      src: 'https://image.tmdb.org/t/p/w500/83X4VwY9sdSJykskmsplIVG0a4h.jpg',
      title: 'Predator 2',
      year: '1990-11-21',
      vote: 6.275
    },
    {
      id: 11398,
      src: 'https://image.tmdb.org/t/p/w500/m3DsrJC3qzm1GPzjDeb5dRXN6AF.jpg',
      title: 'The Art of War',
      year: '2000-08-25',
      vote: 5.7
    },
    {
      id: 1547,
      src: 'https://image.tmdb.org/t/p/w500/nH1lvyQvfbL5GKScTtT6zkIvDEn.jpg',
      title: 'The Lost Boys',
      year: '1987-07-31',
      vote: 7.065
    },
    {
      id: 9016,
      src: 'https://image.tmdb.org/t/p/w500/qKpxGBkksllc2oe6Y0YDKc1A232.jpg',
      title: 'Treasure Planet',
      year: '2002-11-26',
      vote: 7.542
    },
    {
      id: 35987,
      src: 'https://image.tmdb.org/t/p/w500/ycePcddfSvqaalyPxMvFYT5D8wV.jpg',
      title: 'Lola Montès',
      year: '1955-12-23',
      vote: 6.7
    },
    {
      id: 13969,
      src: 'https://image.tmdb.org/t/p/w500/iUZ3hDMo8SGY2IoujCKwVt8ukm9.jpg',
      title: 'First Daughter',
      year: '2004-09-24',
      vote: 6.1
    },
    {
      id: 31511,
      src: 'https://image.tmdb.org/t/p/w500/sXsUJsW9fcVT15hfBu9LyU22qmG.jpg',
      title: 'Gold Diggers of 1933',
      year: '1933-05-27',
      vote: 7.2
    },
    {
      id: 2440,
      src: 'https://image.tmdb.org/t/p/w500/etoPOj0bXzfw0LBNslCxqO7MHuv.jpg',
      title: '공동경비구역 JSA',
      year: '2000-09-09',
      vote: 7.846
    },
    {
      id: 773,
      src: 'https://image.tmdb.org/t/p/w500/wKn7AJw730emlmzLSmJtzquwaeW.jpg',
      title: 'Little Miss Sunshine',
      year: '2006-07-26',
      vote: 7.686
    },
    {
      id: 11205,
      src: 'https://image.tmdb.org/t/p/w500/i5iZVBfOqlRs4g50dm2G6YGfhYD.jpg',
      title: '快餐車',
      year: '1984-08-17',
      vote: 6.9
    },
    {
      id: 34300,
      src: 'https://image.tmdb.org/t/p/w500/uG10zkhrngAa6Ogph6LVc8a5bET.jpg',
      title: 'Ernest Rides Again',
      year: '1993-11-12',
      vote: 4
    },
    {
      id: 38031,
      src: 'https://image.tmdb.org/t/p/w500/oBhnI8UZQzTkAH1LMEtrBUmfpjS.jpg',
      title: 'You Will Meet a Tall Dark Stranger',
      year: '2010-09-22',
      vote: 5.9
    },
    {
      id: 75761,
      src: 'https://image.tmdb.org/t/p/w500/1IsviP0Tb05xUAFWz5b7FJ0qIHP.jpg',
      title: 'John Dies at the End',
      year: '2013-01-25',
      vote: 6.3
    },
    {
      id: 265177,
      src: 'https://image.tmdb.org/t/p/w500/nT4VJ6MfSwUoCorYmkcLVaIenya.jpg',
      title: 'Mommy',
      year: '2014-09-19',
      vote: 8.238
    },
    {
      id: 240566,
      src: 'https://image.tmdb.org/t/p/w500/cpvQrnZwGvzG0moL4oMdmKMYKDB.jpg',
      title: 'トウキョウ トライブ',
      year: '2014-08-30',
      vote: 6.5
    },
    {
      id: 296524,
      src: 'https://image.tmdb.org/t/p/w500/jgBIYCZACe3iaS9TL2XzVGkO5p5.jpg',
      title: 'Deepwater Horizon',
      year: '2016-09-28',
      vote: 6.864
    },
    {
      id: 401246,
      src: 'https://image.tmdb.org/t/p/w500/pefcv5VNspSK4Dt8doei5bJmmln.jpg',
      title: 'The Square',
      year: '2017-08-25',
      vote: 6.8
    }
  ]



  return (
    <>
      <div className="main-container flex flex-col bg-main-back w-[100%] absolute h-screen p-8 overflow-y-scroll font-ubuntu">
        
        <Navbar/>
        <div className="main-sad bg-sidebar-back rounded p-2 mt-6">
          <h1 className="text-left text-white font-bold text-3xl pl-6">
            Top Movies
          </h1>
          <div className="happy-cards p-4 text-left">
            <div
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12
      sm:px-0"
            >
              {movies.map(({id, src, title, year, vote}) => (
                <div key={title} className="shadow-md shadow-gray-700 rounded-lg bg-card-back p-2">
                  <div className="image-container w-full relative mb-3">
                    <img
                      src={src}
                      alt="song-image"
                      className="rounded-md  object-contain w-full"
                    />
                    <div className="fav-icon absolute bg-gray-500 top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-gray-900 shadow-md hover:scale-105"><i className="fa-solid fa-heart text-white"></i></div>
                    
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="m-2 text-gray-200 text-left font-bold">{title}</h3>
                    <div className="song-info flex flex-row justify-around">
                       <div className="singer-name text-white"> Vote : {vote} </div>
                       <div className="song-year text-white"> Release : {year}  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>


      </>
  );
};

export default Main;
