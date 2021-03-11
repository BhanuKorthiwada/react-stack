import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react'
import { ThemeToggle } from 'components'

const Header = ({ ...props }) => {
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

export default Header
