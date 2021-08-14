import React from 'react'

 class Search extends React.Component {
     state={
    text:""
     }

     handleChange=(e)=>{
        this.setState({
            text:e.target.value
        });
     }

     onSubmit=(e)=>{
         e.preventDefault();
         this.props.handleSearch(this.state.text);
         this.setState({
             text:""
         })
     }

     render(){
        const style={
            width:'100%',
            height:'100px',
            backgroundColor:'crimson',
   
        }
        return (
            <div style={style}>
                <form onSubmit={this.onSubmit}  >
                    <input style={{padding:"10px" ,borderRadius:"10px",marginLeft:"60px",marginTop:"20px",border:"1px solid crimson"}} onChange={this.handleChange} type="search" placeholder="Search..." value={this.state.text} />
                </form>
            
            </div>
        )
     }
    
}
 
export default Search;