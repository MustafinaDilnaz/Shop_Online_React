import React from "react";
import { useState } from "react";

const ProductCreate = () => {
    
  const [title, setTitle] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState('')

  function Create(event) {
    event.preventDefault()
    const products = JSON.parse(localStorage.getItem("products")) || []

    if (title.length && description.length && imgUrl.length && price.length) {
      products.push({
        id: Date.now(), //123151416516
        title,
        description,
        imgUrl,
        price,
        date: new Date().toLocaleDateString() //14.04.2022
      })
      localStorage.setItem("products", JSON.stringify(products))
      clearForm()
    }
  }

  function clearForm() {
    setTitle("")
    setDescription("")
    setImgUrl("")
    setPrice('')
  }

  return (
    <div className='d-flex flex-column align-items-center' >
      <h2>Create product</h2>
      <form onSubmit={Create} style={{ width: '600px' }}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product title"
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
            value={price}
            placeholder="Enter price"
            onChange={event => setPrice(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create post</button>
      </form>
    </div>
  )
}

export default ProductCreate;
