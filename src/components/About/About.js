import React, { useEffect, useState } from 'react';

const About = () => {
    const [reviews, setReviews]=useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>console.log(data));

    },[]);
    return (
        <div>
            <h2>This is About</h2>
        </div>
    );
};

export default About;