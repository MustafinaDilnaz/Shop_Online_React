import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ProductEdit = () => {

    const [title, setTitle] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState('')

  const { productID } = useParams()
  const history = useHistory() // class History {push() goBack() ...}

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || []
    let currentProduct
    for (let index = 0; index < products.length; index++) {
      if(products[index].id == productID) {
        currentProduct = products[index]
      }
    }
    setTitle(currentProduct.title)
    setDescription(currentProduct.description)
    setImgUrl(currentProduct.imgUrl)
    setPrice(currentProduct.price)
  }, [])

  function editPost(event) {
    event.preventDefault()
    const products = JSON.parse(localStorage.getItem("products")) || []
    for (let i = 0; i < products.length; i++) {
      if(products[i].id == productID) {
        products[i] = {
          id: productID,
          title,
          description,
          imgUrl,
          price,
          date: new Date().toLocaleDateString()
        }
      }
    }
    localStorage.setItem("products", JSON.stringify(products))
    history.push("/shop")
  }

  return (
    <div className='d-flex flex-column align-items-center' >
      <div className="d-flex justify-content-center align-items-center">
        <div className="card" style={{ width: "15rem" }}>
          <img src={imgUrl} alt={title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div>
              <p style={{fontSize: "10px"}}>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Edit post</h2>
      <form onSubmit={editPost} style={{ width: '600px' }}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter post title"
            onChange={event => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            onChange={event => setDescription(event.target.value)}
            value={description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            value={imgUrl}
            placeholder="Enter image url"
            onChange={event => setImgUrl(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
            onChange={event => setPrice(event.target.value)}
            value={price}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Save post</button>
      </form>
    </div>
  )
}

export default ProductEdit