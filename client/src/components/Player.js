import React from 'react'
import styled from 'styled-components'

const PlayerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: .5rem;
    width: 40%;
    height: 3rem;
    margin-top: 1rem;
    padding: 1rem;
`
const Info = styled.div`
    
`

function Player({ player }) {
    const { country, name, searches } = player
    return (
        <PlayerDiv>
            <Info>{name}</Info>
            <Info>{country}</Info>
            <Info>{searches} searches</Info>
        </PlayerDiv>
    )
}

export default Player