import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'

export const NavBar = () => {

    const { theme } = useTheme();


    return (
        <div  style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray300.value

        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt="icono app"
                width="70"
                height="70"
            />

            <Text color='white' h2>P</Text>
            <Text color='yellow'h3>ókemon</Text>

            <Spacer css={{ flex: 1 }}/>

            <Text color='white'>Favoritos</Text>
        </div>
    )
}
