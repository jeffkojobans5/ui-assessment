import styled from "styled-components"

// components 
import { HeaderFirstbar , HeaderSecondbar } from "./index"

function Header  () {
    return (
        <Wrapper>
            <HeaderFirstbar />
            <HeaderSecondbar />
        </Wrapper>
    )
}


const Wrapper = styled.div`

`

export default Header