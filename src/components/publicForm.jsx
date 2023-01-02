import { Center, FormControl, FormLabel, Input, useColorModeValue, VStack,
Textarea, 
Button,
useToast} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function PublicForm() {
    
    const [form,setForm] = useState({
        name:"",message:""
    })
    
    const toast = useToast()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            await axios.post("https://feedback-backend.onrender.com/api/feedbacks",form)
            toast({title:"Feedback Devlivered Succesfully",status:"success",duration:1500})
            setForm({
                name:"",message:""
            })
        }
        catch(e){
            toast({title:e.response.data.message,duration:1500,status:"error"})
        }

    }

    return (
        <Center w="100%" >
            <form onSubmit={handleSubmit} style={{width:"100%"}}>
                <VStack
                    mx="auto"
                    p={{ base: 3, md: 4 }} rounded={4}
                    bg={useColorModeValue("gray.400", "gray.700")} w={{ base: "90%", md: "400px" }} spacing={3}>
                    <FormControl isRequired>
                        <FormLabel>Enter Address</FormLabel>
                        <Input bg="gray.200" size="lg" rounded={2}
                        color="black"
                        value={form.name}
                        onChange={e=>setForm({...form,name:e.target.value})}
                        _placeholder={{color:"gray.500"}}
                        placeholder="Enter Address" />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Enter Message</FormLabel>
                        <Textarea
                        color="black"
                        value={form.message}
                        onChange={e=>setForm({...form,message:e.target.value})}
                        rows="4"
                        bg="gray.200" size="lg" rounded={2}
                        _placeholder={{color:"gray.500"}}
                        placeholder="Enter Message" />
                    </FormControl>
                    <Button
                    type="submit"
                    bg="gray.100"
                    rounded={2}
                    color="black"
                    size="lg"
                    w="100%"
                    >Send 🚀</Button>
                </VStack>
            </form>
        </Center>
    )
}