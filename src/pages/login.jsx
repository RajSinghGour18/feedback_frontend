import {
    Center, VStack, useColorModeValue, Heading,
    FormControl, FormLabel, Input , Button, useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

    const [form,setForm] = useState({
        name:"",password:""
    })

    const toast = useToast( )

    async function handleSubmit(e){
        e.preventDefault()

        try{
        const res = await axios.post("https://feedback-backend.onrender.com/api/user/login",form)
        localStorage.setItem("TOKEN",res.data.token)
        toast({title:"Login Successfull",duration:1500,status:"success"})
        setForm({
            name:"",password:""
        })
        navigate("/feedbacks")
        }
        catch(e){
            toast({title:e.response.data.message,status:"error",duration:1500})
        }
    }


    return (
        <Center mt="80px">
            <VStack spacing={10} w="100%">
                <Heading mt={10} textAlign="center" fontWeight="600" fontFamily="Bree Serif">Login to your Account</Heading>
                <form onSubmit={handleSubmit} style={{width:"100%"}}>
                <VStack mx="auto"
                    p={{ base: 3, md: 4 }} rounded={4}
                    bg={useColorModeValue("gray.400", "gray.700")} w={{ base: "90%", md: "400px" }} spacing={3}>
                    <FormControl isRequired>
                        <FormLabel>Enter Address</FormLabel>
                        <Input bg="gray.200" size="lg" color="black" value={form.name}
                            onChange = {e=>setForm({...form,name:e.target.value})}
                            rounded={2}
                            _placeholder={{ color: "gray.500" }}
                            placeholder="Enter Address" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Enter Password</FormLabel> 
                        <Input bg="gray.200" value={form.password}
                            onChange = {e=>setForm({...form,password:e.target.value})}
                            type="password" size="lg" rounded={2}
                            _placeholder={{ color: "gray.500" }} color="black"
                            placeholder="Enter Password" />
                    </FormControl>
                    <Button
                        type="submit"
                        bg="gray.100"
                        rounded={2}
                        color="black"
                        size="lg"
                        w="100%"
                    >Login 🚀</Button>
                </VStack>
                </form>
            </VStack>
        </Center>
    )
}