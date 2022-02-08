import React from 'react'
import { useState } from 'react';
import { Box } from '@chakra-ui/react'

interface Props {
    label: string,
    setPokemonData: React.Dispatch<React.SetStateAction<{
        name: string;
        stats: Array<any>;
        sprites: Object;
        types: Array<any>;
    }>>
}

export const SidebarItem = ({ label, setPokemonData }: Props) => {

    const getPokemon = async (name: string) => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)

        let pokeData = await res.json();

        setPokemonData(pokeData);
    }

    return (
        <Box onClick={() => { getPokemon(label) }} p={4} borderRadius='8px' _hover={{bg:"lightblue"}}>
            {label}
        </Box>
    )
}

