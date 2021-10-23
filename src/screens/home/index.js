import React, { useEffect, useState } from 'react';
import Section1 from './section1';
import Section2 from './section2';
import axios from 'axios';

function Home() {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/top100Films?')
        .then(response => 
            setItems(response.data)
        );
    }, [])
    return (
        <div>
            <Section1 props={items} className="d-flex justify-content-center" />
            <Section2 props={items}/>
        </div>
    )
}

export default Home;
