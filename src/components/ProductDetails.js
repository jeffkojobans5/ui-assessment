import styled from "styled-components"

// component
import { Gallery , Details  } from "./index"

// asset
import { RewardsBadge } from "./assets"

function ProductDetails () {
    return (
        <Wrapper>
            <div className="prod-container">
                <Gallery />
                <Details />
            </div>
            <RewardsBadge className="reward" /> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
   .prod-container {
       display: flex;
   }

   .reward {
       margin: 2rem 0rem 6rem 0rem;
   }
 
   @media only screen and (max-width: 720px) {
    .prod-container {
        flex-direction: column;
    }    
}   
`

export default ProductDetails