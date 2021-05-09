import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import { Nominees } from './MyComponents/Nominees';
import React,{useState, useEffect} from 'react';

function App() {

  const [searchResults, setsearchResults] = useState([]);
  const [searchDesc, setsearchDesc] = useState('');

  const onRemove = (movie)=>{
    console.log("This has been removed",movie);
    setNominees(nominees.filter((e)=>{
      return e!==movie;
    })); 
  }

  const doSearch = async(searchText)=>{
    console.log("searching for",searchText);

      const respone = await fetch('http://www.omdbapi.com/?s='+searchText+'&apikey=b8a0efa7');
      const data = await respone.json();
      console.log("API URL is : ",'http://www.omdbapi.com/?s='+searchText+'&apikey=b8a0efa7' );
      console.log(data);
      console.log(data.Search);


      if(data.Response === "True"){
        
        const arrToAdd = data.Search;
        console.log("Trying to add :",arrToAdd);

        // data.Search.map((mov) => {
        //   console.log("added a movie");
        //   const searchResult = {
        //     title: mov.Title,
        //     year: mov.Year,
            
        //   };
        setsearchDesc(searchText);

          return setsearchResults(data.Search);
        // });

      }

  }

  const [nominees, setNominees] = useState(
      [
          {
            title:"Love and Monsters",
            genre:"action,fantasy",
            desc:"world is filled with mutated insects which have taken over civilization"
          },
          {
            title:"Nobody",
            genre:"action",
            desc:"A retired secret agent is bored of his life and seeks some action/violence"
          },
          {
            title:"Back to the Future",
            genre:"action,Sci-fi,Comedy",
            desc:"Marty and the Doc go to the past and accidentally mess things up which they must fix to balance the space-time continuum"
          },
          {
            title:"Love and Monster1s",
            genre:"action,fantasy",
            desc:"world is filled with mutated insects which have taken over civilization"
          },
          {
            title:"Love and Monsters4",
            genre:"action,fantasy",
            desc:"world is filled with mutated insects which have taken over civilization"
          }
      ]
  );


  return (
    <div>
      <Header title="The Shoppies" doSearch={doSearch}/>
      <Nominees searchResults={searchResults} searchDesc={searchDesc} onRemove={onRemove}/>
      <Footer/>
    </div>
  );
}

export default App;
