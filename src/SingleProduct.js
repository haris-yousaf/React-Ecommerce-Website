import { useEffect } from "react"
import {useParams} from "react-router-dom"
import { useProductContext } from "./Context/productcontext"
import styled from "styled-components"
import MyImage from "./MyImage"
import { Container } from "./Container"
import Navbar from "./nav"


const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {

    const {getSingleProduct, singleProduct} = useProductContext()
    
    const {id} = useParams()

    useEffect( () => {
        if (id) {
            getSingleProduct(`${API}?id=${id}`);
        }
    }, [id]);

    const {
        id: alias, 
        name,
        image,
        company, 
        price, 
        description, 
        category, 
        stock, 
        stars, 
        reviews} = singleProduct

    return(
        <>
        <Navbar />
        <Wrapper>
            
            <Container className="container">
                <h1>Product/ {name}</h1>
                <div className="single-grid">
                    <div className="product_images">
                        <MyImage imgs={image} />
                    </div>
                    <div className="product_data">
                        <h2>{name}</h2>
                        <p className="detail">Rs. <span>{price}</span></p>
                        <p className="detail"><span>{stars}</span> Rating / <span>{reviews}</span> Reviews</p>
                        <p>{description}</p>
                        <p className="detail">
                            Available: <span> {stock > 0 ? "In Stock" : "Not Available" } </span>
                        </p>
                        <p className="detail">
                            ID: <span> {alias} </span>
                        </p>
                        <p className="detail">
                            Brand: <span> {company} </span>
                        </p>
                        <p className="detail">Category: <span>{category}</span></p>
                    </div>
                </div>
            </Container>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`

    margin: 0 3rem;

    .container {
        padding: 2rem 1rem;
    }

    .single-grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 2rem;
        border: 1px solid #fff;
        padding: 20px;
        border-radius: 40px;
        color: #000000;
        background-color: #FFFFFF;
    }

    .product_images {
        border:1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product_data {
        line-height: 1.3rem;
        font-weight: bold;
    }

    .product_data h2{
        font-size: 2rem;
    }
    .product_data h2:hover{
        cursor: pointer;
        text-shadow: 0px 0px 30px black;
        transform: scale(1.01);
        transition: 0.5s ease-out;
    }

    .product_data span{
        font-size: 1rem;
    }


    .product_data p{
        font-size: 0.8rem;
    }

    .detail:hover {
        text-decoration: underline;
    }    
`

export default SingleProduct