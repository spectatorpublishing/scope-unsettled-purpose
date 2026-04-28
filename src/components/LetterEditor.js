import React from 'react';
import styled from 'styled-components';

const LetterWrap = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    color: white;
    
    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
    }

`;

const Title = styled.div`
    font-size: 5em;
    letter-spacing: 0.05em;
    padding:1vh 0 1vh 0;
    word-wrap:break-word;
    font-family: 'Lora,serif';

    @media (max-width: 768px) {
        font-size: 2em;
    }

`;

const Body = styled.div`
    font-size: 1.5em; 
    color: white;
    word-wrap:break-word;
    width:100%;
    font-family: 'Lora,serif';
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body>
                <p>Dear reader,</p>

                <p>
                The opinion section of a newspaper ostensibly declares its purpose in its name: Its job is to house the opining, those that restlessly pivot from the “what” of news reporting to the question of “what now?” And yet, the matter of what opinion is, is far from settled. This Scope, “Matter of Opinion,” attempts to show Opinion writers and editors in the valiant, if uneasy, pursuit of articulating the section’s doings over the years.
                </p>

                <p>
                In this archive, staffers ask which content merits publication and debate the paper’s scope of coverage. They inquire into how journalists might meaningfully hold governing powers accountable and consider how to edit and tune the argumentative voice. They discuss who should compose an editorial board and how it should responsibly wield its influence as a mediator of heterogeneous discourse. Finally, they contend with the concerns of the moment: the delegitimization of the press, rapid presidential turnover, and a global pandemic that emptied campus.
                </p>

                <p>
                As an editor in Spectator’s Opinion section, I am all too aware of the many questions we churn over. What appears here is a slim record of our section’s ongoing deliberations about its purpose, and though this archive cannot settle the question of Opinion’s purpose, it reflects a steady drip of attempts at answering it. What follows is a record of that effort. We hope you find something here worth lingering over.
                </p>

                <p>Sincerely,</p>

                <p>Su Ertekin-Taner</p>

                <p>Deputy Editor of Projects </p>
            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;