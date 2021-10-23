import React, { useEffect, useState } from 'react';
import Section1 from './section1';
import Section2 from './section2';
import axios from 'axios';

function Home() {

    const [items, setItems] = useState([]);
    const [itemsThree, setItemsThree] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/top100Films?')
        .then(response => 
            setItems(response.data)
        );
        axios.get('http://localhost:3000/top3Films')
        .then(response => 
            setItemsThree(response.data)
        )
    }, [])
    return (
        <div>
            <Section1 props={items} itemsThree={itemsThree} className="d-flex justify-content-center" />
            <Section2 props={items}/>
        </div>
    )
}

export default Home;
