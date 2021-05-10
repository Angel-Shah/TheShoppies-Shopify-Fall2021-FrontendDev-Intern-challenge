import React from 'react'
import {SingleResult} from "./SingleResult";
import "./styles/Nominees.css";

export const SearchResults = (props) => {
    return (
<>

        {props.searchDesc === '' ? 
        
                <div></div>
                
                :

                <div className="container" >
                    <h4 style={{margin:"10px"}}>Top 10 results for: '{props.searchDesc}'</h4>
                    <h5 style={{ textAlign:"end"}}>Nominations Remaining: <b style={{color:"#e5610e"}}>{ 5 - props.nominees.length}</b></h5>
                    {/* {props.searchResults.length>=5? <h3>You are done selecting 5 nominees! To select a different nominee, one must be deleted first</h3> : "" }  */}
                    

                    <div className="sidewaysWrap">

                    {props.searchResults.map((movie)=>{
                        // console.log("i am adding movie:", movie);

                         return <SingleResult movie={movie} key={movie.key} addNominee={props.addNominee} nominees={props.nominees}/>

                    })}
                    </div>
                </div>
        
         }
    </>

    );
    
}
  