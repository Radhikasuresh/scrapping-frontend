import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useFormik} from "formik"
import Carousal from './carousal';
import { url } from "./url";


export default function Cards(){
    const[product,setProduct]=useState([]);
    const[products,setProducts]=useState([]);
const formik = useFormik({
initialValues:{
title : ""
},
onSubmit : (values)=>{

    const arr = product.filter((x)=>x.title===values.title);
if(arr.length>0){
   setProducts(arr);
}
else{
  
    alert("Kindly Enter correct product name");
    window.location.reload();
    
}

}
})
    const getProductData = async ()=>{
      
      try{
        
          const data=await axios.get(url);
              
              console.log(data.data);
              setProduct(data.data);
            
              
      }
      catch(err){
        const reloadCount = sessionStorage.getItem('reloadCount');
          console.log(err)
          if(reloadCount < 4) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            setInterval(function(){window.location.reload();},5000);
            // window.location.reload();
          } else {
            sessionStorage.removeItem('reloadCount');
          }
          alert("please reload....")
          window.location.reload();
         
      }
  }
  const reloadCount = sessionStorage.getItem('reloadCount');
  useEffect(()=>{
      getProductData();
     
      if(reloadCount < 3) { 
        sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        setInterval(function(){window.location.reload();},5000);
        // window.location.reload();
      } else {
        sessionStorage.removeItem('reloadCount');
      }
     
},[]);

return(
<div className="container">
<Carousal />
    {getProductData? <form className="d-flex mb-5" onSubmit={formik.handleSubmit} style={{marginTop:"2rem"}} >
      <input
      className="form-control mt-5"
      name="title"
      value={formik.values.title}
      onChange={formik.handleChange}
      type="text"
      placeholder="Search Here...."
     />{'  '}
      <button className="btn btn-success mt-5">Search</button>
      
      </form>:<>REFRESH AND TRY AGAIN</>}
      <div style={{border:"2px solid red",padding:"5px",borderRadius:"5px"}}><b>NOTE:</b>ENTER THE CORRECT NAME, FOLLOW THE BELOW ORDER TO SEARCH (Include Brackets)<br></br>
        APPLE iPhone 14 plus (red, 128 GB)<br></br>
        APPLE iPhone 13 (blue, 128 GB)<br></br>
        APPLE iPhone 13 (white, 256 GB)
        

      </div><br></br>
   {!getProductData?<>please Refresh</>:<div style={{border:"1px solid",paddingTop:"3rem",marginBottom:"5rem",borderRadius:"2rem",textAlign:"center"}}>YOUR SEARCH RESULT<div className="products-wrapper">
    {products.map((item)=>{
        return(
          <>
          <div style={{marginBottom:"10rem"}}>
            <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="160"
        image={item.imgurl}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.website}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.rating}
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
    </div>
    </>
        )
    })}
    </div>
    </div>}
   {!setProduct?<>please reload</>: <div style={{marginBottom:"5rem",textAlign:"center",fontSize:"5rem"}}>All products<div className="products-wrapper">
    {product.map((item)=>{
        return(
            <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="160"
        image={item.imgurl}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.website}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.rating}
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
        )
    })}
    </div>
    </div>}
</div>
)

}