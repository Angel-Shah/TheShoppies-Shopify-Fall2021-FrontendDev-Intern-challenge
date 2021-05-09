import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import { SearchResults } from './MyComponents/SearchResults';
import React,{useState, useEffect} from 'react';
import { LandingPage } from './MyComponents/LandingPage';

function App() {

  const [searchResults, setsearchResults] = useState([]);
  const [searchDesc, setsearchDesc] = useState('');
  const [nominees, setNominees] = useState([]);
  
  const addNominee = (movie)=>{
    const nomineeToAdd ={
      Title: movie.Title,
      Year: movie.Year,
      Type: movie.Type,
      Poster: movie.Poster
    }
    return setNominees([...nominees,nomineeToAdd]);
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



  return (
    <div>
      
      <Header title="The Shoppies" doSearch={doSearch} searchDesc={searchDesc} nominees={nominees}/>
      {searchDesc === '' ?
      <LandingPage searchDesc = {searchDesc} doSearch={doSearch} addNominee={addNominee}/>
      :
      <>
      </>
    }
      
    
      <SearchResults searchResults={searchResults} searchDesc={searchDesc} addNominee={addNominee} nominees={nominees}/>
      <Footer/>
    </div>
  );
}

export default App;
