import React from 'react'
import {Link} from 'react-router-dom';
export const Card = (props) => {
    const img_url= ` https://image.tmdb.org/t/p/w500/${props.detail.poster_path}`;
    const style={
        float:'left',
        padding:'20px'
        
    }
    return (
        <div  style={style} >
<div className="ui card">
  <a className="image" href="#">
    <img src={img_url} />
  </a>
  
  <div className="content">
  
    <a className="header" href="#">{props.detail.title}</a>
    <span >(Rating)</span>
    
    <div className="meta">
      <Link to={`/movies/:${props.detail.title}`}>{props.detail.overview.substring(0, 100)+'...(Read More)' }</Link>
    </div>
  </div>
</div>

        </div>
        
    )
}

export default Card;