import React from 'react'
import { useState } from 'react';
import { Flex } from '@chakra-ui/react'
import { Sidebar } from "../components/Sidebar"
import DataTable from '../components/DataTable';

export default function PokemonList() {
  const [pokedata, setPokeData] = useState({ name: "", stats: Array<any>([]), sprites: Object({}), types: Array([])})

  return (
    <Flex w='100vw' h='100vh'>
      <Sidebar setPokeData={setPokeData} />
      <DataTable pokedata={pokedata} />
    </Flex>
  )
}
