import { Box, Container, Heading, Text, Link, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Y Combinator's New CEO",
    url: "https://news.ycombinator.com",
    points: 156,
    author: "johndoe",
    comments: 47,
  },
  {
    id: 2,
    title: "Introducing the All-New React 18",
    url: "https://reactjs.org",
    points: 99,
    author: "sarahconnor",
    comments: 21,
  },
  {
    id: 3,
    title: "Why Functional Programming Matters",
    url: "https://wiki.haskell.org",
    points: 289,
    author: "lambda_man",
    comments: 58,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <Heading mb={4}>Hacker News Clone</Heading>
      <VStack spacing={4} align="stretch">
        {newsItems.map((item) => (
          <HStack key={item.id} p={4} borderWidth="1px" borderRadius="lg" alignItems="center" spacing={2}>
            <VStack align="start" spacing={1}>
              <Link href={item.url} isExternal color="blue.500" fontWeight="bold">
                {item.title}
              </Link>
              <Text fontSize="sm">
                {item.points} points by {item.author} | {item.comments} comments
              </Text>
            </VStack>
            <Box flexShrink={0}>
              <IconButton aria-label="Upvote" icon={<FaAngleUp />} size="sm" variant="ghost" />
              <IconButton aria-label="Downvote" icon={<FaAngleDown />} size="sm" variant="ghost" />
            </Box>
          </HStack>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
