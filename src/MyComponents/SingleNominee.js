import React from 'react'

export const SingleNominee = (props) => {
    return (
        <li className=" mx-2" style={{ backgroundColor:"whitesmoke"}} data-keepOpenOnClick>
            <div className="container" style={{display:"flex",flexDirection:"row", maxHeight:"10vh"}}>
                <img src={props.movie.Poster} style={{height:"11vh"}} alt="movie poster" />
                
                <div className="mx-2" style={{display:"flex", flexDirection:"column"}}> 
                <p className="" style={{fontSize:"1rem"}}> <b>{props.movie.Title}</b></p>
                <p><i>{props.movie.Year}</i></p>
                </div>
                
                
                <i className="fa fa-trash ms-auto" style={{color:"red",alignSelf:"center",fontSize:"1.5rem"}}
                onClick={()=>{props.delNominee(props.movie)}}></i>
               
            </div>
            <hr/>
        </li>
    )
}
