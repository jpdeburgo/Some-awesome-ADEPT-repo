import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Input, List, ListItem } from '@chakra-ui/react'
import { SidebarItem } from './SidebarItem';

interface Props {
    setPokeData: React.Dispatch<React.SetStateAction<{
        name: string;
        stats: Array<any>;
        sprites: Object;
        types: Array<any>
    }>>
}

let pokeList = ["squirtle"]

export const Sidebar = ({ setPokeData }: Props) => {
    
    const getPokemonList = async () => {
        let results = [{name:""}]
        await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`).then(response => response.json())
            .then(data => {
                results = data.results
            });
        
        console.log(results.map(pokemon => pokemon.name))
        pokeList = results.map(pokemon => pokemon.name)
        setPokemonList(pokeList)
    }

    const [search, setSearch] = useState('');
    const [pokemonList, setPokemonList] = useState(pokeList);

    useEffect(() => {
        getPokemonList()
    },[])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.trim()
        setSearch(value)
        if (value == '') {
            setPokemonList(pokeList)
        }
        else {
            const newList = pokemonList.filter(pokemon => pokemon.toLowerCase().includes(value.toLowerCase()))
            setPokemonList(newList)
        }
    }

    return (
        <Box overflowY="scroll" w='20%' borderRight='1px' borderColor='lightgray' position='relative'>
            <Box px='12px' py='16px' bg='white' position='sticky' top='0'>
                <Input value={search} onChange={handleChange} placeholder="Search for a pokemon..." />
            </Box>
            <Box>
                <List>
                    {
                        pokemonList.map(pokemon =>
                            <ListItem key={pokemon}>
                                <SidebarItem setPokemonData={setPokeData} label={pokemon} />
                            </ListItem>
                        )
                    }
                </List>
            </Box>
        </Box>
    )
}
