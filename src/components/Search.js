import React, { useEffect, useState } from 'react';
import './style.css'

 export const Search = () => {
   const [search,setSearch] = useState('Indore')   
   const [city,setCity] = useState(null)   

   useEffect(() =>{
     const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=e7011d259a309ccd771cd9e4b2fe8334`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setCity(responseJson)
     };
     fetchApi();
   },[search])
  return(
      <>
     <div className="search row m-5 text-center">
        <div className="col-md-4 offset-md-4 col-12 badge-info card h-75 p-md-5 w-25 search-loc">

          <label className="text-md-center">Search location</label>
          <input type="text" className="badge-pill form-control" value={search}
          onChange={(event) => setSearch(event.target.value)} />
        {city?.cod=== 200 ?  
         <div className="info m-auto">
            <h2 className="location">
            <i className="fas fa-street-view mr-2"></i>
            {city?.name}
            </h2>
            <h1>{city?.main?.temp} Cel
            </h1>
            <h3>Min : {city?.main?.temp_min} Cel | Max : {city?.main?.temp_max} Cel</h3>
         </div>
            : (<p className="m-auto">No Data Found</p>)   }
         
        </div>
      </div>
      </>
  )
}

