import styled from "styled-components"

// components
import { Header , Breadcrumb , ProductDetails , Footer} from "../components/index"

function ProductDescPage () {
    return (
        <Wrapper>
            <Header />
            <Breadcrumb />
            <ProductDetails />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    

`
export default ProductDescPage