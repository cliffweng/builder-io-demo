import {Box, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink} from '@chakra-ui/react';

export function WHeader() {

    return (
    <Box bg='grey' w='100%' p={2} color='white'>
        <Breadcrumb fontWeight='medium' fontSize='sm'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_templates'>Templates</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_topics'>Special Topics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_components'>Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_usecases'>Use Cases</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_databases'>Databases</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
    )
}
export function WFooter() {

    return (<h1 className="text-4xl">Footer</h1>)
}