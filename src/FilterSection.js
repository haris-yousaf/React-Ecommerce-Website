import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from './Context/filter_context'


const FilterSection = () => {
  const {
    filters: {category},
    all_products,
    updateFilterValue
  } = useFilterContext()

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })
    return newVal = [ "All", ...new Set(newVal) ]
  }

  const categoryOnlyData = getUniqueData(all_products, "category")

  return (
    <Wrapper>
      <div className='filter-category'>
        <h3>Select Category</h3>
        <div>
          {
            categoryOnlyData.map((curElem, index) => {
              return (
                <button key={index} type='button' name='category' value={curElem} onClick={updateFilterValue}>{curElem}</button>
              )
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .filter-category{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }

  button{
    padding: 1rem 3rem;
    color: white;
    background-color: transparent;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
  }

  button:hover{
    background-color: #f2f2f2;
    color: #000000;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.5s ease-out;
  }

  h3{
    padding: 0.5rem 0;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
  }
`

export default FilterSection