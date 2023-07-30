import {ChakraProvider, Box, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink} from '@chakra-ui/react';

export function WHeader() {

    return (
    <Box bg='grey' w='100%' p={2} color='white'>
        <Breadcrumb fontWeight='medium' fontSize='sm'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/forms'>Form</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/students'>Students</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/about'>About</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
    )
}
export function WFooter() {

    return (<Box bg='grey' w='100%' p={2} color='white'>Gabe Weng</Box>)
}
export function WLayout({children}) {
    return (
        <ChakraProvider>
            <WHeader />
            {children}
          <WFooter />
        </ChakraProvider>
      )
}