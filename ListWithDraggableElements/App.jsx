import { Box, chakra } from '@chakra-ui/react'
import { Reorder } from 'framer-motion'
import * as React from 'react'
const List = chakra(Reorder.Group)
const ListItem = chakra(Reorder.Item)

export const App = () => {
  const [items, setItems] = React.useState([
    'blue.200',
    'blue.300',
    'blue.400',
    'blue.500',
    'blue.600',
  ])
  return (
    <Box
      maxW={{
        sm: 'sm',
      }}
      mx="auto"
      p={{
        base: '4',
        md: '8',
        lg: '12',
      }}
    >
      <List values={items} onReorder={setItems} listStyleType="none">
        {items.map((item) => (
          <ListItem
            key={item}
            value={item}
            height="16"
            mb="4"
            bg={item}
            position="relative"
            borderRadius="lg"
            cursor="grab"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              cursor: 'grabbing',
              scale: 1.1,
            }}
          />
        ))}
      </List>
    </Box>
  )
}
