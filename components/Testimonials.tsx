"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Avatar,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const data = [
  {
    name: "Andi",
    text: "Hasil sablon rapi dan cepat! Recommended.",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Sinta",
    text: "Warna tahan lama, pelanggan puas.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Budi",
    text: "Harga sesuai dan pelayanan ramah.",
    avatar: "/images/avatar3.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % data.length), 5000);
    return () => clearInterval(t);
  }, []);

  const bg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("xl", "dark-lg");

  return (
    <Box
      id="testimoni"
      py={{ base: 16, md: 24 }}
      bgGradient="linear(to-b, brand.50, white)"
    >
      <Container maxW="container.lg" textAlign="center" mb={12}>
        <Heading fontWeight="bold" mb={2}>
          WW Kata Mereka
        </Heading>
        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
          Testimoni pelanggan yang sudah memakai jasa WWSablon.
        </Text>
      </Container>

      <Container maxW="container.md" position="relative">
        <Box
          p={{ base: 6, md: 10 }}
          bg={bg}
          borderRadius="2xl"
          boxShadow={shadow}
          textAlign="center"
          transition="all 0.5s ease-in-out"
          transform="auto"
          scale={1.02}
        >
          <VStack spacing={4}>
            <Avatar
              src={data[index].avatar}
              name={data[index].name}
              size="xl"
              border="4px solid"
              borderColor="brand.500"
            />
            <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
              {data[index].name}
            </Text>
            <Text color="gray.700" fontSize={{ base: "md", md: "lg" }}>
              “{data[index].text}”
            </Text>
          </VStack>
        </Box>

        {/* Dot navigation */}
        <HStack justify="center" spacing={3} mt={6}>
          {data.map((_, i) => (
            <Box
              key={i}
              w={i === index ? 4 : 3}
              h={i === index ? 4 : 3}
              borderRadius="full"
              bg={i === index ? "brand.500" : "gray.400"}
              cursor="pointer"
              transition="all 0.3s"
              onClick={() => setIndex(i)}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  );
}
