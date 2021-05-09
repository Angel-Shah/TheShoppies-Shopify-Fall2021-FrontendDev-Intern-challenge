import React from 'react'

export const SingleNominee = ({movie,onRemove}) => {
    return (
        <div style={{backgroundColor:"whitesmoke",margin:"7px",height:"35vh",width:"20vw",borderRadius:"10px",padding:"10px",border:"1px solid lightgrey",boxShadow:"0px 5px 5px 0px #888888",display:"flex",flexDirection:"row"}} >
            
            <img src={movie.Poster} style={{height:"30vh",width:"12vw",margin :"0%",marginTop:"0",marginRight:"2%"}}></img>
            {/* <p>{movie.genre} </p> */}
            

            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-around"}}>


                {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",marginBottom:"10px"}}> */}
                    <h4 style={{fontSize:"1.1vw"}}>{movie.Title} </h4>

                    <p style={{}}>Year : <i>{movie.Year}</i></p>
                    <p style={{}}>Type : <i>{movie.Type}</i></p>
                {/* </div> */}
            <button className="btn btn-success btn-sm " style={{justifySelf:"flex-start"}}  onClick={()=>{onRemove(movie)}}>Nominate</button>
            </div>


        </div>
    )
}
