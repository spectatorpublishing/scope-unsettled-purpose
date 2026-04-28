import styled from 'styled-components';
//import React, { useState, useEffect } from 'react';
import { articledata } from '../data/new_articles';

const ArticleWrapper = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    color: white;
`;

const Title = styled.div`
    font-size: 5em;
    letter-spacing: 0.05em;
    text-align: center;
    word-wrap:break-word;
    font-family: 'Lora,serif';
    padding-bottom: 5rem;

    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
        box-sizing: border-box;
        padding: 0 5vw;
    }
`;

const ArticleCard = styled.div`
    background: rgba(255,255,255,0.03);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    font-family: 'Lora,serif';
`;

const ArticleLink = styled.a`
    width: 100%;
    text-decoration: none;
    display: block;
`;

const Article = styled.div`
    background:
        linear-gradient(
        rgba(0,0,0,0.5),
         rgba(0,0,0,0.5)),
        url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 28vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
`;

const ArticleTitle = styled.div`
    font-size: 2.3rem;
    text-shadow: 5px 5px 2px black;
    color: white;
    padding: 0 1rem;
    max-width: 90%;

    @media (max-width: 1324px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

const ArticleDate = styled.div`
    font-size: 1.5rem;
    color: white;
    text-shadow: 5px 5px 2px black;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const NewArticles = () => {
    const articles = Object.keys(articledata)
        .sort((a, b) => Number(a) - Number(b))
        .map((k) => articledata[k])
        .slice(0, 12);

    return (
        <ArticleWrapper>
            <Title>EXPLORE PIECES</Title>
            <GridWrapper>
                {articles.map((art, idx) => (
                    <ArticleCard key={idx}>
                        <ArticleLink href={art.article_link} target="_blank" rel="noopener noreferrer">
                            <Article image={art.article_source}>
                                <ArticleTitle>{art.article_title}</ArticleTitle>
                                <ArticleDate>{art.article_date}</ArticleDate>
                            </Article>
                        </ArticleLink>
                    </ArticleCard>
                ))}
            </GridWrapper>
        </ArticleWrapper>
    );
};

export default NewArticles