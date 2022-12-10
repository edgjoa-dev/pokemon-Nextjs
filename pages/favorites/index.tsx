import React from 'react'
import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts';

import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

    const [favorirtePokemons, setFavorirtePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavorirtePokemons( localFavorites.pokemons )
    }, [])


    return (
        <Layout title='Pokemones Favoritos' >
            <NoFavorites />
        </Layout>
    )
}

export default FavoritesPage;