import React from 'react';
import Movie from './movie';
import Search from './search';
import MovieDetails from './movieDetails';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class Main extends React.Component{
    state={
        movies:[],
        movieId:[]

    }
   componentDidMount=()=>{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY }&query=new`)
      .then(res=>res.json())
      .then(result=>this.setState({movies:result.results}));
      
      
   } 
   handleSearch=(text)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY }&query=${text}`)
    .then(res=>res.json())
    .then(result=>this.setState({movies:result.results}));
   }

   getMovies=(title)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY }&query=${title}`)
    .then(res=>res.json())
    .then(result=>this.setState({movieId:result.results}));
   }
   
    render(){
        return(
            
<Router>
<Search handleSearch={this.handleSearch}/>
    <Switch>
        <Route exact path="/" render={props=>(
            
             <Movie  movie={this.state.movies} />  
        )} />
        <Route exact path="/movies/:title" render={props=>(
 <MovieDetails {...props} movieId={this.state.movieId} getMovies={this.getMovies} />
   )}/>
     
    </Switch>
    

</Router>
                 
            
        );
    }
}


export default Main;