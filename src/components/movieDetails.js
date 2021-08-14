import React from "react";
import CardDetails from './cardDetails';
class MovieDetails extends React.Component {

    componentDidMount(){
        this.props.getMovies(this.props.match.params.title);
    }
  

render(){


    return (
        <div>
            <h1 style={{marginLeft:"10px"}}>Movie Details (IMDB)</h1>
            <hr />
         {this.props.movieId.map(item=>(
             <CardDetails  card={item} />
         ))}
            
        </div>
    )
}
    
}

export default MovieDetails



