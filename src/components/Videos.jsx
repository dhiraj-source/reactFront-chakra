import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
 
import { Heading, Stack, VStack,Text, Button} from '@chakra-ui/react'


const Videos = () => {

  const videoArr =[
    'https://youtu.be/pq6jAJQ2pHs',
    'https://youtu.be/Nc3XptLacMM',
    'https://youtu.be/VvIxCwDJsRU',
    'https://youtu.be/rEO6bLfwruo',
    'https://youtu.be/3CAuEbjW60E',
    'https://youtu.be/A2DCx0p4zv0',
    'https://youtu.be/rEO6bLfwruo',
    'https://youtu.be/VecowB-QtRk',
    'https://youtu.be/nxL1_9WXy6o'
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
      <ReactPlayer
        controls
        playing={'true'}
        width={'100%'}
        height={'200vh'}
        url={videoSrc}
      />
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'scroll'}  >
          <Heading>Sample Video 1</Heading>
          <Text>This is a sample video for testing and demo. This is called description. 
          Duis leo justo, fermentum vel lectus eget, viverra blandit justo. Vestibulum luctus faucibus ligula, quis aliquam eros egestas nec. Suspendisse molestie accumsan lectus vel vestibulum. Curabitur eget felis pulvinar, vehicula lectus non, venenatis neque. Etiam sit amet pulvinar mauris. Pellentesque eu semper odio. In a urna non mauris ullamcorper porttitor eu at nunc. Mauris auctor eleifend dolor eget venenatis.
          Quisque in ultricies arcu. Sed egestas ultricies urna, pretium scelerisque mauris venenatis vitae. Cras tempus, ex in pharetra tincidunt, diam turpis dictum augue, id pellentesque velit arcu in ipsum. In pretium ipsum ut purus faucibus, id posuere elit fermentum. Curabitur finibus pretium libero, at commodo metus molestie eget. Morbi id finibus nisl, ut tempor ipsum. Fusce nec metus volutpat, euismod erat ut, sollicitudin nunc.
          </Text>
        </VStack>
      </VStack>
      <VStack 
        w={['full', 'xl']} 
        alignItems={'stretch'} 
        p={'8'} 
        spacing={'8'} 
        overflowY={'auto'}>
        {
          videoArr.map((item,index)=>(
            <Button 
              variant={'ghost'} 
              colorScheme={'purple'} 
              onClick={()=>setVideoSrc(item)}  >
              Lecture {index+1}
            </Button>
          ))
        }
      </VStack>
    </Stack>
  )
}

export default Videos
