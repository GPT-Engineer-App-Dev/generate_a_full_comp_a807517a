import React from "react";
import { Box, Heading, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bgImage="https://images.unsplash.com/photo-1580584126903-c17d41830450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcwOTgwMjEwMnww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" py={20}>
        <Heading as="h1" size="3xl" textAlign="center" color="white">
          Welcome to the Future of AI
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={4} color="white">
          Explore the latest breakthroughs in artificial intelligence
        </Text>
        <Button colorScheme="blue" size="lg" mt={8} mx="auto" display="block">
          Get Started <FaArrowRight style={{ marginLeft: "8px" }} />
        </Button>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} my={20} mx="auto" maxW="6xl">
        <GridItem>
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90fGVufDB8fHx8MTcwOTgwMjEwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Robot" />
          <Heading size="lg" mt={4}>
            AI Robotics
          </Heading>
          <Text mt={2}>Learn about the latest advancements in AI-powered robotics and automation.</Text>
          <Button mt={4} colorScheme="blue">
            Explore
          </Button>
        </GridItem>
        <GridItem>
          <Image src="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3MDk4MDIxMDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neural Networks" />
          <Heading size="lg" mt={4}>
            Neural Networks
          </Heading>
          <Text mt={2}>Dive into the world of deep learning and neural networks powering modern AI.</Text>
          <Button mt={4} colorScheme="blue">
            Learn More
          </Button>
        </GridItem>
        <GridItem>
          <Image src="https://images.unsplash.com/photo-1695426093310-b7255c8797cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGdlbmVyYXRlZCUyMGFydHxlbnwwfHx8fDE3MDk4MDIxMDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Art" />
          <Heading size="lg" mt={4}>
            AI Art & Creativity
          </Heading>
          <Text mt={2}>Discover how AI is revolutionizing creative fields like art, music, and design.</Text>
          <Button mt={4} colorScheme="blue">
            See Examples
          </Button>
        </GridItem>
      </Grid>

      <Box bg="gray.100" py={20}>
        <Heading textAlign="center" mb={8}>
          Latest AI News
        </Heading>
        {/* TODO: Fetch latest AI news from an API and display */}
      </Box>
    </Box>
  );
};

export default Index;
