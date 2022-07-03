import styled from "styled-components"

// props
import { InfoProps } from "../props/index"

// component
import { infoDetails } from "../utils/constant"

// asset
import { RewardsBadge } from "./assets"

function Info () {
    return (
        <Wrapper>
            <div className="container">
                { infoDetails.map((single)=>{
                    return (
                        <InfoProps 
                            key={single.heading}
                            image={single.image} 
                            heading={single.heading}
                            text={single.text}
                    />
                    )
                })}
            </div>
        <RewardsBadge className="rewards"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 1.5rem;

    .container {
        display: flex;
        gap: 20px;
    }

    .rewards {
        margin-top: 1rem;
    }

    @media only screen and (max-width: 720px) {
        .container {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: auto auto;            
        }
    }       
`
export default Info