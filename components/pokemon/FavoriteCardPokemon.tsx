import { Card } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ( {pokemonId}) => {
    return (
        <Card isHoverable css={{ padding: 10 }}>
            <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={'100%'}
            height={140}
            />
        </Card>
    )
}
