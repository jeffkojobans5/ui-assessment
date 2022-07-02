import styled from "styled-components"

// assets
import { Fav , Down , Cart} from "./assets"

function Details () {
    return (
        <Wrapper>
            <div className="details">
                <h1 className="title"> Manchester United 21-22 Home Shirt </h1>
                <div className="price-fav">
                    <div className="price">
                        <p className="price"> €30.00 <span className="discount">89.95</span></p>
                        <p className="save"> Save 67% </p>
                    </div>  
                    <div className="fav">
                        <p className="border-around"> <Fav className="fav-icon"/> Add to Favourites </p>
                    </div>
                </div>
                    <div className="text-description">
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. 
                            Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... 
                            <a href="#"> Read More </a> 
                        </p>
                    </div>
                    {/* shirt */}
                    <div className="fields">
                        <div className="size">
                            <div className="text">
                                <p> Size <span className="asterik">*</span></p> 
                            </div>
                            <div className="shirt-field">
                                <p> Select a Shirt Size <Down className="down-icon"/> </p>
                            </div>
                            <div className="size-chart">
                                <p> View Size Chart</p>
                            </div>
                        </div>
                    </div>
                    {/* end of shirt */}


                    {/* name */}
                    <div className="fields">
                        <div className="others">
                            <div className="text">
                                <p> Name </p> 
                            </div>
                            <div className="other-field">
                                <p> What name would you want in the shirt? </p>
                            </div>
                        </div>
                    </div>
                    {/* end of name */}


                    {/* number of shirt */}
                    <div className="fields">
                        <div className="others">
                            <div className="text">
                                <p> Number of Shirt </p> 
                            </div>
                            <div className="other-field">
                                <p> Enter a number between 0 and 99 </p>
                            </div>
                        </div>
                    </div>
                    {/* end of number of shirt */}


                    {/* number of patch */}
                    <div className="fields">
                        <div className="others">
                            <div className="text">
                                <p>  Patch</p> 
                            </div>
                            <div className="other-field">
                                <p>  Select a patch <Down className="down-icon"/> </p>
                            </div>
                        </div>
                    </div>
                    {/* end of patch */}

                   

                    {/* number of quantity */}
                    <div className="fields">
                        <div className="others">
                            <div className="text">
                                <p>  Quantity </p> 
                            </div>
                            <div className="number-field">
                                {/* <p>  Select a patch <Down className="down-icon"/> </p> */}
                                <input type="number" />
                            </div>
                        </div>
                    </div>
                    {/* end of number of quantity */}

                    <div className="add-to-cart fields">
                        <div className="add">
                            <p> Add to Cart </p>
                        </div>
                        <div className="cart">
                            <Cart />
                        </div>                        
                    </div>
            </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .text p {
        font-weight: bold;
    }
    .add-to-cart {
        display: flex;
        height: 57px;   

        .add {
            flex: 5;
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 0rem 0rem 0rem 1rem;
            background-color: #F9DC38;            
        }

        .cart {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            background-color: #111112;
        }

        svg path {
            fill: white;
        }
        .
    }

    font-family: 'Montserrat', sans-serif;
    margin-top: 2rem;
    flex: 1;

    .details {
        padding-left: 2rem;
        .title {
            font-size: 1.5rem;
        }
    }

    .caption {
        position: relative;
        top: -23px;
        color: black;
        padding: .3rem 1rem 1rem 1rem;
        line-height: 1.5rem;
        border: 1px solid #EAEAEC;
    }


    .price-fav {
        display: flex;
        margin-top: 1.5rem;
    }

    .discount {
        position: relative;
        font-weight: normal;
        font-size: .9rem;
        color: #EE503E;
        text-decoration: line-through;

    }

    .price {
        font-weight: 700;
        font-size: 2rem;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
    }

    .save {
        background-color: #23C353;
        padding: .5rem;
        color: white;
        font-size: 0.9rem;
        font-weight: 500;
    }    

    .fav {
        flex: 1;
        display: flex;
        justify-content: end;
        align-items: center;
        color: #393A38
    }

    .border-around {
        border: 1px solid whitesmoke;
        padding: .5rem 1rem .5rem 1rem;
    }

    .fav-icon {
        margin-right: .4rem;
    }

    .text-description {
        margin-top: 2.5rem;
        font-size: 0.9rem;
        text-align: justify;
        line-height: 1.5rem;
        
        a {
            color: black;
            font-weight : bold;
        }
    }

    .fields {
        margin-top: 2rem;

        .asterik {
            color: red;
        }
    }

    .size {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #111112;
        font-size: .9rem;

        .text {
            flex: 1;
        }

        .shirt-field {
            flex: 3;
            border: 1px solid #EAEAEC;
            padding: .5rem;


        }

        .size-chart {
            display: flex;
            justify-content: center;
            flex: 2;
            border: 1px solid #EAEAEC;
            padding: .5rem;
            background-color: #F5F5F6;
        }

    }

    .down-icon {
        float: right;
        margin-top: .5rem;
    }

    .others {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #111112;
        font-size: .9rem;

        .text {
            flex: 1;
        }

        .other-field {
            flex: 5;
            border: 1px solid #EAEAEC;
            padding: .5rem;
        }
    }

    .number-field {
        flex: 5;
        // border: 1px solid #EAEAEC;
        // padding: .5rem;
        input {
            padding: .6rem;
            border: 1px solid #EAEAEC;
            outline: none;
        }
    }    
`

export default Details