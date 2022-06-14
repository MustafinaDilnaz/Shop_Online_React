import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { productID } = useParams() // * Берем id пользовотеля из URL

  // * 1. Cоздаем useState текущего пользователя
  const [currentProduct, setCurrentProduct] = useState("")

  const history = useHistory()
  
  // * 2. Вызываем useEffect чтобы получить данные из localstorage
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || []

    for (let index = 0; index < products.length; index++) {
      if (products[index].id == productID) {
        setCurrentProduct(products[index])
      }
    }
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "30rem" }}>
        <button 
          className='btn btn-primary' 
          style={{width: "70px",  margin: "20 auto" }}
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <img src={currentProduct.imgUrl} alt={currentProduct.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{ currentProduct.title }</h5>
          <span>Price: { currentProduct.price }</span>
          <div>
            <p>{ currentProduct.description }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product