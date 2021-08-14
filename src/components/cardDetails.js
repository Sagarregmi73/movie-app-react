import React from 'react'

import {Link} from 'react-router-dom';
export const CardDetails = (props) => {
    const img_url= ` https://image.tmdb.org/t/p/original/${props.card.backdrop_path}`;
    const style={
        float:'left',
        padding:'20px'
        
    }
    return (
        <div  style={style} >
            
<div className="ui card ">
  <a className="image" href="#">
    <img src={img_url} />
  </a>
  
  <div className="content">
  
    <a className="header" href="#">{props.card.title}</a>
    <span >(Rating)</span>
    
    <div className="meta">
      Release: {props.card.release_date }<br />
      Language: {props.card.original_language } 
    </div>
    <a class="ui header" href="#">Movie Overview</a>
    <hr />
      <div class="description">
        <em>{props.card.overview }</em>
      </div>
      <hr />
    <button><Link to='/'>Go to Home</Link></button>
  </div>
</div>

        </div>
        
    )
}

export default CardDetails;