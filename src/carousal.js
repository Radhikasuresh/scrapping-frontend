import React from 'react'

const Carousal = () => {
  return (
    
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0079/5602/files/iphone13banner_V3_68204a0b-ae20-44a1-b6a0-32eb67d8aecc_x1920.png?v=1638405591" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.pbtech.co.nz/fileslib/20210915132220_iPhone-13-desktop-1-main.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.ytimg.com/vi/NviXlvqh9Cc/maxresdefault.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


  
  )
}

export default Carousal