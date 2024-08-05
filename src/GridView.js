import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({products}) => {
  return (
  <Wrapper className="section">
    <div className="grid grid-three-column">
        {
            products.map((curElem) => {
                return <Product key = {curElem.id} {...curElem} />
        })
    }
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`

  h1{
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: bold;
  }

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default GridView