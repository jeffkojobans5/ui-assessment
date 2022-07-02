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
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 3rem;
    margin-bottom: 3rem;

    .container {
        width: 100%;

        h1 {
            margin-bottom: 4rem;
            text-transform: uppercase;
        }
    }

    .country-league {
        display: flex;      
        gap: 20px; 

    }
`
export default CountryLeague