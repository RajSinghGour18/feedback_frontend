import {Button, Center, Heading, HStack, VStack} from "@chakra-ui/react"
import { HiOutlineLogin,HiPlus } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import PublicForm from "../components/publicForm"

export default function Home(){
    const navigate = useNavigate()

    return(
        <Center mt="80px" w="100%">
            <VStack spacing={6}>
            <Heading mt={10} textAlign="center" fontWeight="600" fontFamily="Bree Serif">Send and Recieve Instant Feedback With Our App!</Heading>
            <Heading as="u" fontSize={20}>Get Started now</Heading>
            <HStack>
                <Button rounded={3}
                w="120px"
                onClick={()=>navigate("/login")}
                colorScheme="blue"
                rightIcon={<HiOutlineLogin/>} >Login</Button>
                <Button
                onClick={()=>navigate("/signup")}
                w="120px"
                colorScheme="blue"
                variant="outline"
                rounded={3} rightIcon={<HiPlus/>} >Signup</Button>
            </HStack>
            <PublicForm/>
            </VStack>
        </Center>
    )
}