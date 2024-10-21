import React, { useState } from 'react'
import "./cart.css"

const Products = ({products}) => {
   

    const [cartdata,setcartdata] = useState([
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "quantity":0,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
      }
    ])

    const CartClickd =(product)=>{
      let cartproducts = [...cartdata,product]
setcartdata(cartproducts)


      // cartdata.push(product)
    }

    const quantityincrease=(ct)=>{
      let cartproducts =[ ...cartdata]
      console.log(ct)
      let qt = cartproducts.filter((cp)=>cp.title == ct)
    qt[0].quantity+=1

      console.log(qt[0].quantity)
      
      
      
      setcartdata(cartproducts)

    }
  return (
    <div>
      <div className='cart'>
         {cartdata?.map((cartitem)=>(
         <>
          <h1>{cartitem.title}</h1>
          <p>{cartitem.quantity}</p>
          <h1>{cartitem.price}</h1>
          <button onClick={()=>quantityincrease(cartitem.title)}>+</button>
         </>
         ))}

      </div>
      <main>

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Album example</h1>
      <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
     
    </div>
  </div>
</section>

<div class="album py-5 bg-body-tertiary">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      {products.map((prod)=>(
        <div class="col">
        <div class="card shadow-sm">
       
          <div class="card-body">
            <h3>{prod.title}</h3>
            <img src={prod.images[0]} />
            <h3>{prod.price}</h3>
            
            <p class="card-text">{prod.description}</p>
            <h4>{prod.brand}</h4>
            <div class="d-flex justify-content-between align-items-center">
           
              <div class="btn-group">
                
                <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>CartClickd(prod)}>
                  Add to cart</button>
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
      ))}
     
    </div>
  </div>
</div>

</main>
    </div>
  )
}

export default Products
