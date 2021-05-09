import React,{useState} from 'react';
import './styles/landingpage.css';

export const LandingPage = (props) => {

    const [searchText, setsearchText] = useState("");
    const search =(e)=>{
        //prevents page from reloading on search
            e.preventDefault();
            if(!searchText){
                alert("Your search bar is blank");
            }else{
                props.doSearch(searchText);
            }
    };


    return (
        <div className="container d-flex flex-column" style={{marginTop:"20vh"}}>



        <img className="mx-auto" style={{width:"50vw", marginBottom:"20px"}} src="./shoppies-fullLogo-transp.png" alt="the shoppies full logo" />

        <form className="d-flex mx-auto " onSubmit={search} style={{width:"50vw"}}>
        <input className="form-control " type="search" value={searchText} style={{borderRadius:"20px",border:"1px solid black"}}
        onChange={(e)=>{setsearchText(e.target.value)}} placeholder="Search by movie title..." aria-label="Search" id="searchText"  />
        <button className=" mx-2" type="submit" style={{backgroundColor:"#e5610e",color:"white",padding:"5px 15px 5px 15px",border:"none",borderRadius:"20px"}}>
            Search</button>
    </form>
        </div>
    )
}
