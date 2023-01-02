import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"
import { Link } from 'react-router-dom';

export default function Appbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(()=>{
        if(colorMode==="light") toggleColorMode()
    },[])

    return (
        <Box bg={useColorModeValue('blue.400', 'blue.700')} px={4} w="100%" position="fixed" zIndex={100} top={0}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box className='themeFont' color="white" fontSize={20} fontWeight="500"> <Link to="/">True Feedback</Link></Box>
                <Button
                    rounded={3}
                    onClick={toggleColorMode}>
                    {colorMode === 'light' ? <HiOutlineMoon style={{ fontSize: "20px" }} /> : <HiOutlineSun style={{ fontSize: "20px" }} />}
                </Button>
            </Flex>
        </Box>
    );
}