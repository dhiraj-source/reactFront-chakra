import { Box, Button, Heading, HStack, Stack, VStack,Input,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box position={''}
    bgColor={'blackAlpha.900'}
    minH={'40'}
    p={'16'}
    color={'white'}   
    >
    <Stack direction={['column','row']}>
        <VStack 
         alignItems={'stretch'} w={'full'} px={'4'}
        >
            <Heading size='md' textTransform={'uppercase '} textAlign={['center','left']}>Subscribe to get Update</Heading>
            <HStack
            borderBottom={'2px solid grey'}
            py='2'
            >
             
            <Input placeholder='Enter Email Here...' 
                   border={'none'}
                   borderRadius={'none'}
                   outline={'none'}
                   focusBorderColor={'none'} />
                <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                >
                    <AiOutlineSend/>
                </Button>
            </HStack>
        </VStack>
        <VStack w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
        >
        <Heading>
        VIDEO HUB
        </Heading>  
        <Text>All rights received</Text>      
        </VStack>
        <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>
          Social Media  
        </Heading>
        <Button variant={'link'} colorScheme={'whiteAlpha'}>
          <a href="https://www.youtube.com/@AllAboutArtOriginal" target={'blank'}>YouTube</a>
        </Button>
        <Button variant={'link'} colorScheme={'whiteAlpha'}>
          <a href="https://www.instagram.com/dhirajkumarreo/" target={'blank'}>Instagram</a>
        </Button>
        <Button variant={'link'} colorScheme={'whiteAlpha'}>
          <a href="https://github.com/dhiraj-source" target={'blank'}>Github </a>
        </Button>
        </VStack>

    </Stack>

    </Box>
  )
}

export default Footer;
