import React,{useState} from 'react'

export default function Header(props) {
    
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

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                <img src="shoppies-transp.png" alt="shoppies logo" style={{alignSelf:"center",width:"20vw",padding:"15px"}}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                <form className="d-flex mx-auto" onSubmit={search} style={{width:"50vw"}}>
                        <input className="form-control " type="search" value={searchText} style={{borderRadius:"20px",border:"none"}}
                        onChange={(e)=>{setsearchText(e.target.value)}} placeholder="Search by movie title..." aria-label="Search" id="searchText"  />
                        <button className=" mx-2" type="submit" style={{backgroundColor:"#e5610e",color:"white",padding:"5px 15px 5px 15px",border:"none",borderRadius:"20px"}}>
                            Search</button>
                    </form>


                    <ul className="navbar-nav mx-auto ">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle active " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#e5610e"}}>
                                Your Selected Nominees
                                </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{height:"50vw"}}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    
                </div>
            </div>
        </nav>

    )
}
