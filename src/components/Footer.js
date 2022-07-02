import { Link } from "react-router-dom";
import styled from "styled-components"

// assets
import { Fb , Tw , In , Send , Partners } from "./assets"

function Footer  () {
    return (
        <Wrapper>
            <div className="container">
                <div className="footer">
                    <div className="box link">
                        <h3>Main Menu</h3>
                        <ul>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/"> T-Shirts</Link></li>
                            <li><Link to="/"> NBA</Link></li>
                            <li><Link to="/"> Tracksuits</Link></li>
                            <li><Link to="/"> Products Delivery • 1 - 2 days </Link></li>
                            <li><Link to="/"> Contact </Link></li>
                            <li><Link to="/"> Reviews </Link></li>
                        </ul>
                    </div>
                    <div className="box link">
                        <h3>Secondary Menu</h3>
                        <ul>
                            <li><Link to="/"> Search </Link></li>
                            <li><Link to="/"> Privacy Policy</Link></li>
                            <li><Link to="/"> Shipping Policy</Link></li>
                            <li><Link to="/"> Returns Policy </Link></li>
                            <li><Link to="/"> Terms of Service </Link></li>
                            <li><Link to="/"> Contact </Link></li>
                            <li><Link to="/"> Reviews </Link></li>
                        </ul>
                    </div> 
                    <div className="box email">
                        <h3>Subscribe</h3>
                        <p> Subscribe to our mailing list to <br/> receive the latest news. </p>
                        <div className="search-input">
                                <input 
                                    type="text" 
                                    placeholder="Email Address"
                                />
                                <span> <Send /> </span>
                        </div>
                    </div>                                        
                    <div className="box follow">
                        <h3> Follow Us </h3>
                        <div className="s-media">
                                <div className="fb media"> <a href="#"> <Fb />  </a> </div>
                                <div className="tw media"> <a href="#"> <Tw />  </a> </div>
                                <div className="in media"> <a href="#"> <In />  </a> </div>
                        </div>
                    </div>                                        
                </div>
            </div>
            <div className="beneath-footer">
                    <div className="copyright-partners container">
                        <div className="copyright">
                            <p>© 2021 Jambulani  •  All rights reserved</p>
                        </div>
                        <div className="companies">
                            <img src={ Partners } alt="partners" />
                        </div>
                    </div>
                </div>            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    background-color: #F5F5F6;
    padding-top: 5rem;

    .footer {
        display: flex;
        padding-bottom: 4rem;

        .link  {
            flex: 3; 
        }


        .email {
            flex: 3
        }

        .follow {
            flex: 2;
            margin-left: 3rem;
        }
        .box {
            
            p { 
                margin-top: 2rem;
                line-height: 2rem;
            }
            ul {
                margin-top: 2rem;
                li {
                    list-style-type: none;
                    line-height: 2.5rem;

                     a {
                         text-decoration: none;
                         color: #111112; 
                    }
                }
            }
        }
    }

    .search-input {
        margin-top: 1.5rem;
        flex: 2;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid  #F5F5F6;
        
        input {
            outline: none;
            font-family: 'Montserrat', sans-serif;
            width: 70%;
            height: 45px;
            background-color: white;
            text-align: start;
            padding: 0rem 0rem 0rem 1rem;
            

            ::placeholder {
                color: gray !important;
                font-size: .rem;
                font-weight: 500;
            }
        }
        span {
            background-color: #F9DC38;
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
    
    .s-media {
        display: flex;
        gap: 6px;
        margin-top: 2.5rem;

        svg path {  
            fill : #ffffff;
        }
    
        .media {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            background-color: black;
        }         
    }

    // .follow {
    //     margin-left: 3rem;
    // }

    .beneath-footer {
        border-top: 1px solid #EAEAEC;
    }

   .copyright-partners {
       display: flex;
        align-items: center;

       .copyright {
           flex: 1;
       }

       .partners {
           flex: 1;
       }
   }

`

export default Footer