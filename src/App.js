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

  const [limitReached, setlimitReached] = useState(false);
  

  const addNominee = (movie)=>{

    if(nominees.length < 5){

      const nomineeToAdd ={
        Title: movie.Title,
        Year: movie.Year,
        Type: movie.Type,
        Poster: movie.Poster
      }
      return setNominees([...nominees,nomineeToAdd]);
    }else{
      return setlimitReached(true);
    }
      
    
  }


  const delNominee =(movie)=>{
    // console.log("i am deleted: ",todo );
    
    setNominees(nominees.filter((e)=>{
      return e!==movie
    }));

    setlimitReached(false);


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
      
      <Header title="The Shoppies" doSearch={doSearch} searchDesc={searchDesc} nominees={nominees} delNominee={delNominee}/>
      {searchDesc === '' ?
      <LandingPage searchDesc = {searchDesc} doSearch={doSearch} addNominee={addNominee}/>
      :
      <>
      </>
    }

      {nominees.length >= 5 ?
        <div class="alert alert-success" role="alert">
        Nicely done! You have successfully nominated 5 movies.
        </div>
    :
        <></>
      }

      {limitReached ?
      <div class="alert alert-danger" role="alert">
      You have reached the limit of 5 nominations. To add another nominee, you must first remove a movie from the nominee list.
      </div>
      :
      <></>
      }
      
    
      <SearchResults searchResults={searchResults} searchDesc={searchDesc} addNominee={addNominee} nominees={nominees}/>
      <Footer/>
    </div>
  );
}

export default App;
