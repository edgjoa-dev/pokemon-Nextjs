import React, { FC } from 'react'
import Head from 'next/head';
import { NavBar } from '../ui';

interface Props {
    title?: string;
    children: React.ReactNode
}


export const Layout: FC<Props> = ({ children, title }) => {

    return (
    <>
        <Head>
            <title> {title || 'Pokemon App' } </title>
            <meta name='author' content='Edgar Joaquin Flores Gonzalez'/>
            <meta name='description' content={`Información sobre pokemones${title}`}/>
            <meta name='keywords' content={`XXXX, pokemon, pokeapi, pokedex, ${title}`}/>
        </Head>

        {/* navbar */}
        <NavBar />

        <main>
            { children }
        </main>
    </>
    )


}
