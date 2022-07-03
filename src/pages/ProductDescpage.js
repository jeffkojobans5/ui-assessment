import styled from "styled-components"
import { useEffect } from "react"

// components
import { Header , Breadcrumb , ProductDetails , Footer} from "../components/index"

function ProductDescPage () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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