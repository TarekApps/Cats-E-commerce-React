import styled from 'styled-components'

export const CatBox = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 30%;
    max-width: 30%;
    height: fit-content;
    width: fit-content;
    margin: auto;
    padding: auto;
    border: 1px solid;
    background: #f2e8cf;
    border: 3px solid #545454;

    `

export const CatPic = styled.img`
    box-sizing: content-box;
    max-height: 250px;
    max-width: 250px;
    height: auto;
    width: auto;
    border-top: 3px solid #545454;
    border-bottom: 3px solid #545454;
`

export const InfoBox = styled.div` 
    margin: 5px;
`

export const BotBox = styled.div`
    width: 100%;
    height: fit-content;

`

export const Button = styled.button`
    
`

export const Name = styled.h4`
    letter-spacing: 3px;
    text-align: center;
    font-size: 18px;  
`

export const BotText = styled.h4`
    font-size: 14px;
`