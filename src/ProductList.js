import React from 'react'
import { useFilterContext } from './Context/filter_context';
import GridView from './GridView';

const ProductList = () => {
  const {filter_products, setGridView} = useFilterContext();

  if (setGridView){
    return <GridView products = {filter_products} />
  }

  // if (setGridView === false){
  //   return <ListView products = {filter_products} />
  // }
  return (
    <div>ProductList</div>
  )
}

export default ProductList