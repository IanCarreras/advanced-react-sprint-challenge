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

function Player({ player }) {
    const { country, name, searches } = player
    return (
        <PlayerDiv >
            <p>{name}</p>
            <p>{country}</p>
            <p>{searches} searches</p>
        </PlayerDiv>
    )
}

export default Player