import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
    return (
        <Container
            css={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignSelf: 'center',
                height: 'calc(100vh - 100px)',
            }}
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                alt="NotFavorites"
                width={250}
                height={250}
                css={{
                    opacity: 0.1,
                }}
            />
            <Text h1>No Favorites</Text>
        </Container>
    )
}
