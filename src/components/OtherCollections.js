import styled from "styled-components"

// props 
import { OtherCollectionsProp } from "../props/index"

// data
import { otherCollectionsDetails } from "../utils/constant"

function OtherCollections () {
    return (
        <Wrapper>
            <div className="container">
                <h1> Other Collections </h1>
                <div className="otherCollections">
                    { otherCollectionsDetails.map((collection)=>{
                    return (
                        <OtherCollectionsProp 
                            key = { collection.image}
                            image = { collection.image }
                            title = { collection.title }
                        />
                        )
                    })}
                </div>
            </div>            
        </Wrapper>
    )
}

const Wrapper = styled.div`
font-family: 'Montserrat', sans-serif;
margin-top: 6rem;

.container h1 {
    margin-bottom: 5rem;
}
.otherCollections {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto auto;
}

@media only screen and (max-width: 720px) {
    .container h1 {
       font-size: 1.5rem
    }


    .otherCollections {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: auto auto;
    }

    margin-bottom: 5rem;
}    
`

export default OtherCollections