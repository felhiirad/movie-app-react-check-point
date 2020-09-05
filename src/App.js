
import React,{ useState } from 'react';
import './App.css';
import MovieListe from './components/MovieListe';
import AddMovie from './components/AddMovie';





function App () {
    const[Movie,setMovie]=useState([{titre:"Late of My Life",rate:3,image:"https://fr.web.img6.acsta.net/c_222_296/pictures/20/06/26/14/52/0305145.jpg"},{titre:"Docteur frankenstein ",rate:2,image:"https://www.sortiraparis.com/images/1004/18029/153243-docteur-frankenstein-le-film-evenement-avec-daniel-radcliffe-bande-annonce.jpg"}])
    const AjoutMovie=(a,b,c)=>{
        setMovie([...Movie,{titre:a,rate:b,image:c}])
    }
    return(
        <div >
            <h1 style={{textAlign:"center",color:"white"}}> welcom to our app movie</h1>

            <AddMovie AjoutMovie={AjoutMovie} style={{display:"flex"}}/>
           <MovieListe movie={Movie}/>
           

        </div>
    );
    
}
export default App;

