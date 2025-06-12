import React, { useEffect, useState } from 'react';


const Search = () => {
    const [query,setQuery] = useState("");
    
    useEffect(()=>{
      const demo = ()=>{
        console.log('demo function executed');
        
      }
      demo()
    }, [query]  );
  return (
    <div>
        
        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} />
    </div>
  )
}

export default Search