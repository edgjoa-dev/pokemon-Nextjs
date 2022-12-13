import React, { FC } from 'react'
import Head from 'next/head';
import { NavBar } from '../ui';

interface Props {
    title?: string;
    children: React.ReactNode
}

    const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

    return (
    <>
        <Head>
            <title> {title || 'Pokemon App' } </title>
            <meta name='author' content='Edgar Joaquin Flores Gonzalez'/>
            <meta name='description' content={`Información sobre pokemones${title}`}/>
            <meta name='keywords' content={`XXXX, pokemon, pokeapi, pokedex, ${title}`}/>

            <meta property="og:title" content= {`Información sobre pokemones${title}`} />
            <meta property="og:description" content={`Obten los detalles sobre el tu pokemon favorito: ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        {/* navbar */}
        <NavBar />

        <main>
            { children }
        </main>
    </>
    )


}
