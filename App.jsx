import React, { useEffect, useState } from 'react';
import Card from './card.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [getvalues, setValues] = useState([]);

  const getData = async () => {
   
      const response = await fetch('https://nekos.best/api/v2/neko');
      const result=await response.json();
      setValues(result);
      console.log(result);
      console.log(getvalues);
   
  };
  useEffect(() => {
    getData();
  }, []);

  return Array.from(getvalues).map(getvalue => {
    return <Card imgURL={getvalue.url} 
                artistName={getvalue.artist_name}

    />;
  });
};

export default App;