import React from 'react'
import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts';
import { FavoritesPokemon } from '../../components/pokemon';

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
            <FavoritesPokemon pokemons={favoritePokemons} />
            )
        }
    </Layout>
    )
}

export default FavoritesPage;