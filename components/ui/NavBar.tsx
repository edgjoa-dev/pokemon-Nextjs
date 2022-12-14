import  NextLink  from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
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
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="icono app"
            width="70"
            height="70"
        />

        <NextLink href={'/'} passHref legacyBehavior>
            <Link>
                <Text color="white" h2>
                    P
                </Text>
                <Text color="white" h3>
                    ókemon
                </Text>
            </Link>
        </NextLink>

        <Spacer css={{ flex: 1 }}/>
        <NextLink href={'/favorites'} passHref legacyBehavior>
            <Link>
                <Text color='white'>Favoritos</Text>
            </Link>
        </NextLink>
    </div>
)
}
