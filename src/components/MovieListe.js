import React, { useState } from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col, Row} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


const MovieListe = (props) => {
    const[star,setStar]=useState(0)
    const[search,setSearch]=useState('')
    const handelSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)

    }
    const ratingChanged = (newRating) => {
 setStar(newRating)
      };
    return ( 
        <div >
            <div style={{display:"flex",margin:"3px",alignContent:"center",marginLeft:"80%",marginBottom:"4%",marginTop:"0%" }}>
            <Row >
            <Col>
             <Form.Control size="lg" type="text" placeholder="search" width="300px" onInput={handelSearch}  />
             </Col>
             <Col>
             <ReactStars
             
           count={5}
           onChange={ratingChanged}
           size={30}
           activeColor="#ffd700"
           />
           
             </Col>
             </Row>
             </div>
             <div style={{display:"flex",justifyContent:"space-around" }}>
          {props.movie.filter (el=>el.titre.toUpperCase().includes(search.toUpperCase())).filter(el=>el.rate>=star) .map(el=><MovieCard titre={el.titre} rate={el.rate} image={el.image}/> )}
          </div>



         </div>
     );
}
 
export default MovieListe;