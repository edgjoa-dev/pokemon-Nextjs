import { Layout } from '@/components/layouts'
import { Grid, Card, Button, Container, Text, Image } from '@nextui-org/react'
import { pokeApi } from 'api'
import confetti from 'canvas-confetti'
import { Pokemon } from 'interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC, useState } from 'react'
import { localFavorites } from 'utils'

interface Props {
    pokemon: Pokemon
}


const PokemonByNamePage: FC<Props> = ({pokemon}) => {

    const [isInFavorites, setIsInFavorites] = useState( localFavorites.existInFavorites( pokemon.id ) )

    const onTogglefavorite = ()=> {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);

        if( isInFavorites ) return;

        confetti({
            zIndex: 10,
            particleCount: 150,
            spread: 250,
            angle: -180,
            origin: {
                y: 0,
                x: 1,
            }
        })
    }


    return (
        <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4}>
                <Card isHoverable>
                    <Card.Body>
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform="capitalize">{pokemon.name}</Text>

                        <Button
                            color="gradient"
                            ghost={ !isInFavorites }
                            onPress={onTogglefavorite}
                        >
                            { isInFavorites ? 'En Favoritos' : 'Guardar en favoritos' }
                        </Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container direction="row" display="flex" >
                            <Image
                                src={ pokemon.sprites.front_default }
                                alt={ pokemon.name }
                                width={100}
                                height={100}
                            />
                                <Image
                                    src={ pokemon.sprites.back_default }
                                    alt={ pokemon.name }
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={ pokemon.sprites.front_shiny }
                                    alt={ pokemon.name }
                                    width={100}
                                    height={100}
                                />
                            <Image
                                src={ pokemon.sprites.back_shiny }
                                alt={ pokemon.name }
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>


        </Grid.Container>
        </Layout>
    )
}
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map(( value, index )=> `${value.name}`)

    return {
        paths: pokemon151.map( name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ name }`)


    return {
        props: {
            pokemon: data
        }
    }
    }

export default PokemonByNamePage