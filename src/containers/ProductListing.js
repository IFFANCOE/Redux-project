import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProduct } from '../redux/action/productAction';
const  ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch();
    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
        console.log("Err",err);
        })
        dispatch(setProduct(response.data));
    }

    useEffect (()=>{
        fetchProducts();
    },[])

    console.log("Products ",products);
    return (
        <div className="container m-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 items-center"  >
          <ProductComponent />
        </div>
    )
}

export default ProductListing
