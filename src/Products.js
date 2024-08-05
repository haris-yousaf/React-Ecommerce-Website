import React from "react";
import styled from "styled-components";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";


const Products = () => {
    return(
        <>
        <Wrapper>
            <h1>Browse Products</h1>
            <div className="container">
                <div>
                    <FilterSection />
                </div>

                <section className="product-view--sort">
                    <div className="main-product">
                        <ProductList />
                    </div>
                </section>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`

    h1 {
        text-align: center;
        margin-bottom: 3rem;
        font-size: 3rem;
        font-weight: bold;
        margin-top: 8rem;
    }

    .container {
        padding: 3rem 0;
        margin: 0 3rem;
        display: grid;
        grid-template-columns: 0.2fr 1fr;
    }
`

export default Products;