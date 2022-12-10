import { Card, Grid } from '@nextui-org/react';
import React from 'react'
import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts';

import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

    const [favoritePokemons, setFavorirtePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavorirtePokemons( localFavorites.pokemons )
    }, [])


    return (
    <Layout title='Pokemones Favoritos' >
        {
            favoritePokemons.length === 0
            ?(<NoFavorites />)
            :(
                <Grid.Container gap={2} direction='row' justify='flex-start'>
                    {
                        favoritePokemons.map( id => (
                            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                                <Card isHoverable css={{ padding: 10 }}>
                                    <Card.Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                        />
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid.Container>
            )
        }
    </Layout>
    )
}

export default FavoritesPage;