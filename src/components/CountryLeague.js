import styled from "styled-components"

// props
import { CountryLeagueProps } from "../props/index"

// league data
import { countryLeagueDetails } from "../utils/constant"

function CountryLeague () {
    return (
        <Wrapper>
            <div className="container">
                <h1> Country Leagues </h1>
                <div className="country-league">
                { countryLeagueDetails.map((single)=>{
                    return (
                        <CountryLeagueProps 
                            key={single.image}
                            image={single.image} 
                            league={single.league}
                    />
                    )
                })}
                </div>
            </div>
            <div className="clear"></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 3rem;
    margin-bottom: 5rem;
    
    .container {
        h1 {
            margin-bottom: 4rem;
            text-transform: uppercase;
        }
    }

    .country-league {
        display: flex;
        gap: 10px;
    }

    .clear {
        clear: both;
    }

    @media only screen and (max-width: 720px) {
        .container h1 {
           font-size: 1.5rem
        }
        
        .country-league {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: auto auto;            
        }
    }          
`
export default CountryLeague