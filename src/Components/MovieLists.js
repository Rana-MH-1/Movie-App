import React from 'react'
import MovieCard2 from './MovieCard2'

const MovieLists = ({dataMovie}) => {
  return (
    <div>
        {dataMovie.map(movie=> <MovieCard2 dataMovie={movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieLists