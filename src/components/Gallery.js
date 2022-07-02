import styled from "styled-components"

// assets
import { LingardLarge , LingardSmall , Left, Right , Down } from "./assets"

function Gallery () {
    return (
        <Wrapper>
            <div className="gallery">
                    <div className="inside-gallery">
                        <div className="big-image">
                            <img src={ LingardLarge } alt="product" />
                        </div>
                        <div className="slider-controller">
                                <div className="left">
                                    <Left />
                                </div>
                                <div className="right">
                                    <Right />
                                </div>
                        </div>
                    </div>
                    <Down className="down"/>
                    <div className="small-pics">
                        <img src={ LingardSmall } alt="product" />
                        <img src={ LingardSmall } alt="product" />
                        <img src={ LingardSmall } alt="product" />
                        <img src={ LingardSmall } alt="product" />
                        <img src={ LingardSmall } alt="product" />
                        <img src={ LingardSmall } alt="product" />
                    </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 2rem;
    flex: 1;
    
    .slider-controller {
        position: absolute;
        right: 15px;
        bottom: 20px;
        display: flex;
        justify-content: end;
        align-items: center;
        flex: 1;
        gap: 5px;


        svg path {
            height: 35px;
            width: 35px;
            fill : white;
        }

        .left , .right {
            height: 35px;
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.16);            
            background: rgba(17, 17, 18, 0.4);        
            backdrop-filter: blur(40px);
        }
    }

    .inside-gallery {
        position: relative;
    }
        
    .galery {

    }

    .big-image  {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .small-pics {
        display: flex;
        gap: 15px;

        img {
            flex: 1;
            opacity: .3;
        }

        img:nth-child(1) {
            opacity: 1;
        }
    }

    .down {
        position : relative;
        top: -.4rem;
        margin-left: 2.6rem;
    }

`

export default Gallery