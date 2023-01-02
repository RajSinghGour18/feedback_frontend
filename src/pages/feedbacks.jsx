import { Center, VStack ,Button,Text,useToast} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Feedback from "../components/feedback";

export default function Feedbacks(){

    const navigate = useNavigate()
    const [feedbacks,setFeedbacks] = useState([])

    const toast = useToast()

    function logout(){
        localStorage.removeItem("TOKEN")
        navigate("/")
    }

    async function getFeedbacks(token){
        try{
            const res = await axios.get("/api/feedbacks",{
                headers : {
                    authorization : `Bearer ${token}`
                }
            })
            setFeedbacks(res.data)
        }
        catch(e){
            toast({title:e.response.data.message,status:"error",duration:1500})
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("TOKEN")
        if(!token) navigate("/")
        getFeedbacks(token)
    },[])

    return(
        <Center mt="80px" w="100%" alignItems="start" minH="50vh">
            <VStack spacing={5} w={{base:"95%",md:"500px"}}>    
                <Button
                size="lg" rounded={3}
                onClick={logout} 
                colorScheme="red">Logout</Button>
                <Text fontSize={25} as="u" className="themeFont">Feedbacks</Text>
                {
                    feedbacks.length === 0 ?

                    <Text fontSize={25}>No Feedbacks Recieved</Text> :

                    feedbacks.map((feedback,index) => <Feedback key={index} feedback={feedback} /> )
                }
            </VStack>
        </Center>
    )
}