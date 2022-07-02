import styled from "styled-components"

// components
import { Header , Banner , Info , Popular , CountryLeague , OtherCollections , Personalization , Footer } from "../components/index"


function Landingpage () {
    return (
        <Wrapper>
            <Header/>
            <Banner />
            <Info />
            <Popular />
            <CountryLeague />
            <OtherCollections />
            <Personalization />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`


`
export default Landingpage