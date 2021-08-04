import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products)
    const renderList = products.map((product) => {
        const {id,title,image,price,category} = product
        return (
            <div className=" rounded overflow-hidden " key={id}> 
            <Link to={`/product/${id}`}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                            <img className="h-48 w-full object-cover md:h-full md:w-48 " src= {image} alt={image} />
                        <div className="text-gray-700 text-base">
                            <div className="font-bold text-xl mb-2">{title} </div>
                            <div className="font-bold text-xl">${price} </div>
                            <div className="text-gray-900">{category} </div>
                        </div>
                        </div>
                </Link>
            </div>



        )
    })

    

    return (
        <>
        {renderList}
        
{/*        
    <!--Card 1-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/mountain.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
       */}


        </>
    );
}

export default ProductComponent
