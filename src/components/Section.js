import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

let image;
function Section({ title, description, leftButtonText, rightButtonText, backgroundImage, onlyOneBtn }) {

    let buttons;
    if (onlyOneBtn === "true") {
        buttons = (
            <ButtonContainer>
                <LeftButton>
                    {leftButtonText}
                </LeftButton>
            </ButtonContainer>
        );
    }
    else {
        buttons = (
            <ButtonContainer>
                <LeftButton>
                    {leftButtonText}
                </LeftButton>

                <RightButton>
                    {rightButtonText}
                </RightButton>

            </ButtonContainer>
        );
    }

    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <BottomPart>
                {/* <ButtonContainer>
                    <LeftButton>
                        {leftButtonText}
                    </LeftButton>

                    <RightButton>
                        {rightButtonText}
                    </RightButton>

                </ButtonContainer> */}
                <Fade bottom>
                    {buttons}
                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </BottomPart>
        </Wrap>
    );


}

export default Section;

const Wrap = styled.div`
                width: 100vw;
                height: 100vh;
                background-size: cover;
                background-position: center;
                background-repear: no-repeat;
               // background-image: url('/images/model-s.jpg');
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: ${props => `url("/images/${props.bgImage}")`}
                `

const ItemText = styled.div`
                padding-top: 15vh;
                text-align: center;
                `


const ButtonContainer = styled.div`
                display: flex;
                margin-bottom: 30px;
                @media (max-width: 740px){
                    flex-direction: column;
    }


`

const LeftButton = styled.div`
                background-color: rgba(23,26,32,0.8);
                height: 40px;
                width: 256px;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100px;
                opacity: 0.85;
                text-transform: uppercase;
                font-size: 12px;
                cursor: pointer;
                margin: 8px;
                `

const RightButton = styled(LeftButton)`
                background: white;
                color: black;
                opacity: 0.65;
                `

const DownArrow = styled.img`
                margin-top: 20px;
                height: 40px;
                animation: animateDown infinite 1.5s;
                `
const BottomPart = styled.div`
                margin-bottom: 10px;
                `





