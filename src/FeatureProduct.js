import React from 'react'
import { useProductContext } from './Context/productcontext'    
import styled from 'styled-components'
import Product from './Product'



const FeatureProduct = () => {
    const {featureProducts} = useProductContext()

  return (
    <Wrapper className='section'>
        <div className='container'>
            <div className='heading'>Our Featured Products</div>
            <div className='grid grid-three-column'>
                {
                    featureProducts.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    margin: 0 2rem;
    
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .heading{
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 3rem;
        font-size: 2rem;
        font-weight: bold;
    }

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;

        }

        @media (max-width: 567px) {
            grid-template-columns: 1fr;
        }

        @media (max-width: 400px) {
            grid-template-columns: 1fr;
        }

    }
`

export default FeatureProduct