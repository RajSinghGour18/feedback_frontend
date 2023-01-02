import { Box, Text,  useColorModeValue } from "@chakra-ui/react";

export default function Feedback({feedback}){
    return(
        <Box 
        p={4}
        w="100%"
        rounded={5}
        bg={useColorModeValue("gray.400","gray.600")}>
            <Text fontWeight={500}>
                {feedback.message}
            </Text>
            <Text textAlign="end" color={useColorModeValue("green.800","green.200")} fontWeight={500}>
                {new Date(feedback.createdAt).toLocaleDateString("en-in")}
            </Text>
        </Box>
    )
}