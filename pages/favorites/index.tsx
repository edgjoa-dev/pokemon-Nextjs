import React from 'react'
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';

const FavoritesPage = () => {
    return (
        <Layout title='Pokemones Favoritos' >
            <NoFavorites />
        </Layout>
    )
}

export default FavoritesPage;