import { Layout } from "../../components/layouts"
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse, SmallPokemon } from "../../interfaces";

interface Props {
    pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    console.log(pokemon);


    return (
    <Layout title='Algun pokemon'>
        <div>
            <h1> Pokemon </h1>
        </div>
    </Layout>
    )



}


    // You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map(( value, index )=> `${index + 1}`)

    return {
        paths: pokemon151.map( id => ({
            params: { id }
        })),
        fallback: false
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)


    return {
        props: {
            pokemon: data
        }
    }
    }


export default PokemonPage