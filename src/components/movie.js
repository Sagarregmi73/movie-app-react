import React from 'react';
import Movielist from './movie-list';
 const movie = (props) => {
    return (
        <div>
            {props.movie.map(item=>(
                        <Movielist key={item.id} list={item}/>
                    ))}
                    </div>
    )
}

export default movie;
