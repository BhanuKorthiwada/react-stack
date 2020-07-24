import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/core'
import { ThemeToggle } from 'components'

export default ({ ...props }) => {
    return (
        <Box>
            <ThemeToggle />
            <Box m={2}>
                <Breadcrumb fontWeight="medium" fontSize="sm" {...props}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/google">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about">About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="/current">Current</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Box>
    )
}
