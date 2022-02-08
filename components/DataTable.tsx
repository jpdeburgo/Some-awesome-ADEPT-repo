import React from 'react'
import { useState } from 'react';
import { Flex, Box, Divider, Grid, Progress, Spacer, Text, Image, Center, Badge } from '@chakra-ui/react'

interface Props {
    pokedata: {
        name: string;
        stats: Array<any>;
        sprites: any
        types: Array<any>
    }
}

const typeColors = Object({
    "ground" : "#7B341E", 
    "water" : "blue",
    "grass" : "green",
    "electric" : "yellow",
    "fire" : "red",
    "poison": "purple"
})

export default function DataTable({ pokedata }: Props) {
    console.log(pokedata.types.map(type => type?.type?.name))
    const getColor = (type: string) => {
        
        return typeColors[type] != undefined ? typeColors[type] : "gray"
    }
    return (
        pokedata.name == "" ? <></> :
            <Box w="80%">
                <Center>
                    <Flex>
                        <Box>
                            <Text fontSize="4xl">{JSON.stringify(pokedata.name)?.replace("\"", "")?.replace("\"", "")}</Text>
                            <Grid templateColumns="repeat(2,1fr) " gap={15}>
                                {pokedata.types.map(type =>
                                    <Badge colorScheme={getColor(type?.type?.name)} key={type?.type?.name}>{type?.type?.name}</Badge>
                                )}
                            </Grid>
                        </Box>
                        <Box>
                            <Image boxSize="150px" src={JSON.stringify(pokedata.sprites?.front_default)?.replace("\"", "")?.replace("\"", "")} />
                        </Box>
                    </Flex>
                </Center>
                <Divider orientation='horizontal' />
                <Center>
                    <Box w="55%">
                        <Grid templateColumns="repeat(2,1fr) " gap={50}>
                            {pokedata.stats.map(data => {
                                return (
                                    <Box key={pokedata.stats.indexOf(data)}>
                                        <Flex>
                                            <Box>{JSON.stringify(data.stat?.name)?.replace("\"", "")?.replace("\"", "")}</Box>
                                            <Spacer />
                                            <Box>{JSON.stringify(data.base_stat)?.replace("\"", "")?.replace("\"", "")}</Box>
                                        </Flex>
                                        <Box><Progress value={parseInt(JSON.stringify(data.base_stat)?.replace("\"", "")?.replace("\"", ""))}></Progress></Box>
                                    </Box>
                                )
                            }
                            )}
                        </Grid>
                    </Box>
                </Center>
            </Box>
    )
}
