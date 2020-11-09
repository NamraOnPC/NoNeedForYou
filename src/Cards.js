import React, { useEffect, useState } from 'react';
import Card from 'react-tinder-card';
import database from './firebase';
import './Cards.css';

function Cards() {
    
    const [people, setPeople] = useState([]);
    
    useEffect(() =>{
        database
                .collection('People')
                .onSnapshot((snapshot) =>
                    setPeople(snapshot.docs.map((doc) => doc.data()))
                );
    }, []);
    
    return (
        <div>
            <h1>Cards</h1>

        
            <div className="card__cardContainer">
            {people.map(person => (
                <Card className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                        <h3>{person.phoneNumber}</h3>
                    </div>
                </Card>
            ))}
            </div>
        </div>
    )
}

export default Cards;