import { Layout } from "../../components/layouts"
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from "../../api";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";

interface Props {
    id: string,
    name: string,
}


const PokemonPage: NextPage<Props> = ({ id, name }) => {
    return (
    <Layout title='Algun pokemon'>
        <div>
            <h1>{ id } - { name }</h1>
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



export const getStaticProps: GetStaticProps = async (ctx) => {

//    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  //  console.log(data.results);

    // const pokemons: SmallPokemon[] = data.results.map(( poke, i )=>({
    //     ...poke,
    //     id: i + 1,
    //     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    // }))

    return {
        props: {
        id: 1,
        name: 'ditto',
        }
    }
    }


export default PokemonPage