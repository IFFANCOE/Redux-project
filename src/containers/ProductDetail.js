import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,removeSelectedProduct } from '../redux/action/productAction'
import { useHistory  } from 'react-router-dom'

import './root.css'
const ProductDetail = () => {
    const { productId } = useParams()
    // console.log(productId);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product) // product is name of index.js
    console.log(product);
    const history = useHistory();
    const { image, title, price, category, description } = product

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log(err));
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail()
        }
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className="container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (

                <div className="container m-8 grid grid-cols-2  border-2 shadow-md">
                            <div className="">
                                <img className="bg-gradient-to-tr " src={image} alt={title} />
                            </div>
                            <div className="border-l-2 p-5 grid grid-cols-1 ">
                                <h1 className="font-bold text-xl mb-2">{title}</h1>
                                <h2>
                                    <a className="font-bold text-xl" href="null" >${price}</a>
                                </h2> 
                                <h3 className=" rounded-lg bg-gradient-to-r from-gray-300 p-2 h-9 flex items-center font-semibold text-yellow-600">{category}</h3>
                                <p className="text-gray-400">{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <button className=" font-bold  transition-all duration-500 border-2 border-red-200 rounded-xl p-2 bg-red-400  
                                    hover:hover:text-white hover:bg-white hover:text-red-500 " 
                                    onClick={()=>{history.push('/')}}  
                                    >
                                      Back
                                        </button>
                                </div>
                            </div>
                </div>
            ) }
        </div>
    )
}

export default ProductDetail
