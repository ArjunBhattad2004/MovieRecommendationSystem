const movieIds = [9560,
    125587,
    10396,
    169,
    11398,
    1547,
    9016,
    35987,
    13969,
    31511,
    2440,
    773,
    11205,
    34300,
    38031,
    75761,
    265177,
    240566,
    296524,
    401246
];

let movies = []

const addMovie = (item) => {
    movies.push(item)
}
const fetchData = async () => {
    for(i = 0;i<movieIds.length;i++){
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieIds[i]}?api_key=d3c4bc3d77d23d1f7650d02f90a06567&language=en-US`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
    //   setData(jsonData);

      const obj = {
          id : movieIds[i],
          src : "https://image.tmdb.org/t/p/w500" + jsonData["poster_path"],
          title : jsonData["original_title"],
          year : jsonData["release_date"],
          vote : jsonData["vote_average"]
      }

      addMovie(obj);


      console.log(jsonData["original_title"]);
      console.log(movies)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

};

fetchData();

console.log(movies.length)