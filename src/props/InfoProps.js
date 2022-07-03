import styled from "styled-components"

function InfoProps (props) {
    const { image , heading , text} = props
    
    return (
        <Wrapper>
            <img src={ image } alt={heading} />
            <h1> { heading } </h1>
            <p> { text } </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #FEFAE1;
    flex: 1;
    font-family: 'Montserrat', sans-serif;
    padding-bottom: .5rem;

    h1 {
        font-size: 1rem;
        margin-top: 1rem;
        padding: 1rem;
    }

    p {
        padding: 0rem 0rem 0rem 1rem;
    }

    img {
        height: auto;
        max-width: 60px;
    }

 
`   

export default InfoProps