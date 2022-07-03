import styled from "styled-components"

import { Link } from "react-router-dom"
import { navLinks } from "../utils/constant"

// assets
import {  Down  , Search , Cart , User  } from './assets';

function HeaderSecondbar  () {
    return (
        <Wrapper>
            <div className="second-bar">
                <div className="yellow-bg">

                </div>
                <div className="cat-links">
                    <div className="cat">
                        <div className="first-section">
                            <div className="all-cat">
                                <p> All Categories </p>
                                <Down />
                            </div>
                            <div className="looking-for">
                                <input 
                                    type="text" 
                                    placeholder="What are you looking for"
                                />
                            </div>
                            <div className="search-input">
                                <input 
                                    type="text" 
                                    placeholder="Search"
                                />
                                <span> <Search /> </span>
                            </div>
                        </div>
                        <div className="cart-userlog">
                            <div className="cart">
                                <Cart />
                            </div>
                            <div className="userlog">
                                <User />
                                <Down />
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <ul>
                            { navLinks.map((singleLink , index )=>{
                                return (
                                    <li key={ index }><Link to="/" className={ singleLink.name === "Home" ? "active" : "" }> { singleLink.name }   
                                    { singleLink.name == "T-Shirts" && <Down /> } { singleLink.name == "NBA" && <Down />} { singleLink.name == "Tracksuits" && <Down />} </Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mobile-nav">
                <div className="ham">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>  
                <div className="search">
                    <Search />
                </div>
                <div className="empty">

                </div>
                <div className="cart">
                    <Cart />
                </div>
                <div className="user">
                    <User />
                    <Down />
                </div>
            </div>            
        </Wrapper>
    )
}


const Wrapper = styled.div`
    .mobile-nav {
        display: none;
    }

    .second-bar {
        display: block;
    }

    --color: #F9DC38;

    font-family: 'Montserrat', sans-serif;
    min-height: 100px;

    p {
        font-size: 1rem;
    }

    .second-bar {
        display: flex;

        .yellow-bg {
            flex: 2;
            background-color: var(--color);
        }

        .cat-links {
            flex: 10;
            display: flex;
            flex-direction: column;
            height: 100%;

            .cat {
                display: flex;
                height: 65px;

                .first-section {
                        flex: 8;
                        display: flex;

                        .all-cat {
                            flex: 2;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid #F5F5F6;
                            svg {
                                height: 10px;
                                width: 10px;
                                margin-left: .5rem;                        
                            }
                        }
        
                        .looking-for {
                            flex: 6;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-bottom: 1px solid #F5F5F6;
        
                            input {
                                width: 90%;
                                font-family: 'Montserrat', sans-serif;
                                outline: none;
                                font-size: 1.3rem;                        
                            }
                        }
        
                        .search-input {
                            flex: 2;
                            display: flex;
                            justify-content: start;
                            align-items: center;
                            border-bottom: 1px solid  #F5F5F6;
                            
                            input {
                                outline: none;
                                font-family: 'Montserrat', sans-serif;
                                width: 50%;
                                height: 45px;
                                background-color: var(--color);
                                text-align: center;
        
                                ::placeholder {
                                    color: #111112 !important;
                                    font-size: 1rem;
                                    font-weight: 500;
                                }
                            }
                            span {
                                background-color: #111112;
                                height: 45px;
                                width: 45px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                
                                svg {
                                    transform: scale(1.2)
                                }
                            }
                        }
                }

                .cart-userlog {
                    flex: 2;
                    display: flex;

                    .cart {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #F5F5F6;
                    }
        
                    .userlog {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 1px solid #F5F5F6;

                        svg {
                            margin-right: .5rem;
                        }

                        svg:nth-child(2) {
                            transform: scale(1.5)
                        }
                    }
                }                
            }

            .links {
                min-height: 35px;
                border-bottom: 1px solid  #F5F5F6;
                display: flex;
                justify-content: start;
                align-items: center;
                padding-left: 1rem;
                display: flex;

                ul {
                    display: flex;
                    width: 90%;

                    .active {
                        padding-bottom: .5rem;
                        border-bottom: 2px solid var(--color);
                        font-weight: 600;
                    }

                    li {
                        display: inline;
                        min-width: 100px;
                        margin-right: 1rem;
                        text-align: center;
                        
                        a {
                            text-decoration: none;
                            color: #111112;

                            svg {
                                position : relative;
                                left: 2px;
                                height:10px;
                                width: 10px;
                            }
                        }
                    }
                }
            }
        }
    }


    @media only screen and (max-width: 720px) {
    min-height: 70px;

    .mobile-nav {
        height: 70px;
        background-color: #F5F5F6;
        gap: 10px;
        display: none;
    }

    .cart {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;   
        gap: 5px;     
    }

    .empty {
        flex: 8;
    }
    .search {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .search svg path{
        fill: black;
    }

    .search svg {
        transform: scale(1.5)
    }
    .mobile-nav {
        display: flex;
    }

    .ham {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 1rem;

        div {
            height: 3px;
            width: 20px;
            margin-bottom: .2rem;
            background-color: black;
        }
    }      
    
        .second-bar {
            display: none ;
        }
    }
`

export default HeaderSecondbar