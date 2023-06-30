import React, { useEffect } from "react";



const Home = () =>{ 

    function loadPosts() {
        fetch('https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/')
          .then((response) => response.json())
          .then((data) => {
            console.log('getting data is:', data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }

    useEffect(() =>{
      loadPosts();
    },[]);

    return <h1>Home Comp</h1>
    
}

export default Home;