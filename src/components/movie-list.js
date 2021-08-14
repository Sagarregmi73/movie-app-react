import React from 'react'
import Card from './card'
 const Movielist = (props) => {
    return (
        <div>
            <Card  detail={props.list} />
                </div>
    )
}

export default Movielist;
