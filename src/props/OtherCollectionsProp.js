import styled from "styled-components"

// asset
import { Right } from "../components/assets"

function OtherCollectionsProp (props) {
    const { image , title } = props
    return (
        <Wrapper>
            <div className="image">
                <img src={ image } alt={ title } />
            </div>
            <div className="caption">
                <div className="title-direction">
                    <div className="title">
                        <p> { title } </p>
                    </div>
                    <div className="direction">
                        <Right />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
    }

    svg path {
        fill : black;
    }

    .title-direction {
        display: flex;
        height: 50px;
    }

    .caption {
        position: absolute;
        bottom: 4px;
        width: 100%;

    }

    .title {
        flex: 10;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        background-color: black;
        backdrop-filter: blur(6px);  
        background: rgba(17, 17, 18, 0.4);              
        color: white;        
    }

    .direction {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;        
        background-color: #F9DC38;
    }

    

`

export default OtherCollectionsProp