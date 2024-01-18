import React, { useEffect, useState } from 'react';

const Alias = () => {
  const [movies,setMovies]=useState([])
  const [text,setText]=useState("")
  const fetchData = async () => {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=30';
    const apiKey = 'd7adfbe554mshb50eefa9b4a87d3p144633jsnc027a517f483';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      //   credentials: 'include', // equivalent to xhr.withCredentials = true;
      });

      const result = await response.json();
      console.log(result.results);
      setMovies(result.results)

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }

      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div style={{backgroundColor:'black',width:'100vw'}} >
      <form>
      <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
      <buttom type="submit"/>
      </form>

      <div style={{display:'flex',flexWrap:'wrap'}}>
        {
          movies.filter( (movie)=> (movie.titleText.text.includes(text))).map((movie)=>(
            <div id='card'>
              <div id='card-img'>
                <img className='img-card' src={movie.primaryImage===null?'none':movie.primaryImage.url} alt='paper plane' style={{objectFit:"cover",width:"100%",height:"100%", borderRadius:'20px'}}/>
              </div>
             { movie.titleText.text} 
            </div>
            
          ))
        }
      </div>
    </div>
  );
};

export default Alias;
