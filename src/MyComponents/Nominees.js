import React from 'react'
import {SingleNominee} from "./SingleNominee";
import "./styles/Nominees.css";

export const Nominees = (props) => {
    return (
<>

        {props.searchDesc === '' ? 
        
                <h3>Search for something in the search bar above!</h3>
                
                :

                <div className="container" >
                    <h4 style={{margin:"10px"}}>Top 10 results for: '{props.searchDesc}'</h4>
                    {/* {props.searchResults.length>=5? <h3>You are done selecting 5 nominees! To select a different nominee, one must be deleted first</h3> : "" }  */}
                    

                    <div className="sidewaysWrap">

                    {props.searchResults.map((movie)=>{
                        // console.log("i am adding movie:", movie);

                return <SingleNominee movie={movie} key={movie.key} onRemove={props.onRemove}/>

                    })}
                    </div>
                </div>
        
         }
    </>

    );
    
}
  