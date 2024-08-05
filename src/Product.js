import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`}>
        <div className='card'>
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>{category}</figcaption>
            </figure>
        </div>
    </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .card {
        border: 1px solid #fff;
        border-radius: 40px;
        background-color: #FFFFFF;
        color: #000000;
    }

    figure img{
        width: 100%;
        height: 100%;
        cursor: pointer;
        object-fit: cover;
        background-size: cover;

    }

    figcaption{
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 10px;
        line-height: 1.5rem;
        text-decoration: none;
    }
`

export default Product