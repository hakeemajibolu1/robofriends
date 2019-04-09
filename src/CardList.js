import React from 'react';
import Card from './Card';

const cardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                })
            }   
        </div>
    );
}

export default cardList;

//Key prop should have something that doesn't change. For example, 
//index (or 'i' in our case) can change if array items get moved.
//So a better key in this case would be something like 'id'.