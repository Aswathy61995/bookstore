import React  from "react";
import Book from './Book';
import ProductstylingController from './ProductstylingController'
import { withRouter } from 'react-router';
class GetBooksByTitle extends React.Component{
   
   
    state={
        booksObject:this.props.location.booksObject
        //title:this.props.location.title
    }
putComment(){
       const com=document.getElementById("comment").value
       document.getElementById("result").textContent = com;
       localStorage.getItem(com);
    
      
   }
    render(){
        
        return(
            <div className="container">
<h3>Book Details</h3>
<img src= {this.state.booksObject.imagePath} width="150px" height="250px"></img>
<br></br>
 <b> Title : {this.state.booksObject.title}</b>
  <br></br>
<b>Price : {this.state.booksObject.price}</b>
<div>
<input type="textarea" rows="10" cols="45" id="comment" border="no-border" />
 <button id="com" onClick={this.putComment}><b>Write a review</b></button>
 <span id="result"></span>
<br></br>


</div>
</div>
        )}
    }
    export default withRouter(GetBooksByTitle);