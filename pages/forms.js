import {
    FormControl,
    FormLabel,
    Center, Box, Divider,
    Button,
    FormErrorMessage,
} from '@chakra-ui/react'

export default function PageWithJSbasedForm() {
    
    const handleSubmit = async (event) => { // Handles the submit event on form submit.
      event.preventDefault() // Stop the form from submitting and refreshing the page.
      const data = { // Get data from the form.
        first: event.target.first.value,
        last: event.target.last.value,
      }
   
      const options = { // Form the request for sending data to the server.
        method: 'POST', // The method is POST because we are sending data.
        headers: { 'Content-Type': 'application/json', }, // Tell the server we're sending JSON.
        body: JSON.stringify(data), // Body of the request is the JSON data we created above.
      }
   
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch('/api/form', options)
   
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <Center>
        <Box verticalAlign='middle' borderRadius='md' w='400px' p={2}>
            <form onSubmit={handleSubmit}>
                <FormLabel>First Name</FormLabel>
                <input type="text" id="first" name="first" required />
        
                <FormLabel>Last Name</FormLabel>
                <input type="text" id="last" name="last" required />
                <Divider/>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    </Center>

    )
  }