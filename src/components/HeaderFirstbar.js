import styled from "styled-components"

// assets
import { Globe , Whatsapp , Down } from './assets';


function HeaderFirstbar  () {
    return (
        <Wrapper>
            <div className="lang-sale-chat">
                <div className="top-bar">
                    <div className="lang">
                        <Globe />
                        <p>EN</p>
                        <Down className="down"/>
                    </div>
                    <div className="sale">
                        <p>SALES BEGIN • FREE SHIPPING ON ALL ORDERS </p>
                    </div>
                    <div className="chat">
                        <Whatsapp />
                        <p> Chat with us </p>
                    </div>                    
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    .top-bar {
        min-height: 40px;
        background-color: #111112;
        display: flex;
        font-family: 'Montserrat', sans-serif;

        p {
            color: white;
            font-style: normal;
            font-weight: 300;
            font-size: 1rem;
        }

        .lang {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            background: blue;
            background: hsla(180,0%,50%,0.25);

            p {
                margin: 0rem .5rem;
            }

            .down path{
                fill : white !important;
                height: 30;
                width: 30;
            }

            svg:nth-child(3) {
                height: 10px;
                width: 10px;
            }
        }

        .sale {
            flex: 8;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                word-spacing: .2rem;    
            }
        }

        .chat {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #27B03F;

            p {
                margin: 0 .5rem;
            }
        }
    }

`

export default HeaderFirstbar