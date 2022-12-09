import { Grid, Card, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()

    const handleOnClick = ()=> {
        router.push(`/pokemon/${pokemon.id}`)
    }

return (
    <Grid xs={6} sm={3} md={2}  xl={2} key={pokemon.id}>
        <Card
            isPressable
            onClick={handleOnClick}
        >
        <Card.Body>
            <Card.Image
                src={pokemon.image}
                alt={pokemon.name}
                width="100%"
                height={140}
            />
        </Card.Body>
        <Card.Footer>
            <Row justify='space-between'>
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
            </Row>
        </Card.Footer>
        </Card>
    </Grid>
)
}

