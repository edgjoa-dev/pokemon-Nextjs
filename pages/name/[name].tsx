import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { wrap } from "module";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC, useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavorites } from "../../utils";


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
                <Card css={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap' }}>
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

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const pokemonNames: string[] = data.results.map( poke => poke.name )

    return {
        paths: pokemonNames.map( name => ({
            params: { name }
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    const pokemon = await getPokemonInfo(name)

    if(!pokemon){
        return{
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 43200,
    }
    }

export default PokemonByNamePage;