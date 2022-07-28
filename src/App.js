import './App.css';
import MovieCard from './Components/MovieCard';
import {data} from './Components/data'
import { useState } from 'react';
import Add from './Components/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Filtre } from './Components/Filtre';


function App() {
  const [dataMovie, setDataMovie] = useState(data)
  const AddMovie=(movie)=>{
    setDataMovie([...dataMovie,movie])
  }

  const [search,setSearch]= useState('');
  const [rate,setRate]= useState(0)
  
  
  
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <Add AddMovie={AddMovie}/>
      <Filtre setSearch={setSearch} setRate={setRate}  rate={rate}/>
      </div>
      
      <MovieCard dataMovie={dataMovie.filter(el=> el.title.trim().toLowerCase().includes(search.toLowerCase().trim()) && el.rating >= rate)}/> 
      {/* <MovieLists dataMovie={dataMovie}/> */}
    </div>
  );
}

export default App;
