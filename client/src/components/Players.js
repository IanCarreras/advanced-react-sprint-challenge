import React from 'react'
import styled from 'styled-components'

import Player from './Player'

const PlayersDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Players({ players }) {
    if(!players) return <h1>Loading...</h1>
    console.log(players)
    return (
        <PlayersDiv>
            {
                players.map(player => {
                    return <Player 
                            key={player.id}
                            player={player} />
                })
            }
        </PlayersDiv>
    )
}

export default Players