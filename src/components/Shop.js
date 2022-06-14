import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Shop = () =>{
    
  const [products, setProducts] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || []
    const user = JSON.parse(localStorage.getItem("currentUser")) || []
    setProducts(products)
    setUser(user)
  }, [])

  function deletePost(id) {
    const products = JSON.parse(localStorage.getItem("products")) || []
    const updateProducts = products.filter(post => post.id != id)
    setProducts(updateProducts)
    localStorage.setItem("products", JSON.stringify(updateProducts))
  }
  // * CRUD = Create Read Update Delete
  return (
    <div className="d-flex flex-column align-items-center">
      {
        products.map(product => {
          return (
            <div className="card" style={{ width: "25rem", marginBottom: '15px' }} key={product.id}>
              <img
                className="card-img-top"
                src={product.imgUrl}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                Price: {product.price} <br/>
                Description: {product.description}
              </div>
              <div className="card-footer d-flex justify-content-around">
                <Link to={'/products/' + product.id}>
                  <button className="btn btn-primary">Read</button>
                </Link>
                {
                  user.isAdmin == true ? <>
                    <Link to={'/products-edit/' + product.id}>
                    <button className="btn btn-success">Edit</button>
                    </Link>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => deletePost(product.id)}
                    >
                      Delete
                    </button>
                  </> : <></>

                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Shop;
