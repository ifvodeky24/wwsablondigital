// src/components/Features.tsx
"use client";

import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Container,
  Icon,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTshirt, FaBolt, FaHandshake } from "react-icons/fa";

const items = [
  {
    title: "Kualitas Premium",
    desc: "Warna tahan lama, hasil tajam dan rapi.",
    icon: FaTshirt,
  },
  {
    title: "Harga Bersahabat",
    desc: "Paket untuk satuan & partai besar.",
    icon: FaHandshake,
  },
  {
    title: "Produksi Cepat",
    desc: "Turnaround cepat tanpa mengorbankan kualitas.",
    icon: FaBolt,
  },
  {
    title: "Konsultasi Gratis",
    desc: "Bantuan desain & mockup sebelum produksi.",
    icon: FaCheckCircle,
  },
];

export default function Features() {
  return (
    <Box
      id="keunggulan"
      py={{ base: 14, md: 20 }}
      bgGradient="linear(to-b, white, brand.50)"
    >
      <Container maxW="container.lg" textAlign="center" mb={10}>
        <Heading fontWeight="bold" mb={2}>
          Kenapa Pilih WWSablon?
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Solusi sablon kaos untuk brand, event, dan kebutuhan promosi.
        </Text>
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {items.map((it, idx) => (
            <Box
              key={idx}
              p={8}
              bg="white"
              borderRadius="2xl"
              boxShadow="lg"
              transition="0.3s"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "xl",
              }}
            >
              <Icon
                as={it.icon}
                boxSize={10}
                color="brand.500"
                mb={4}
                p={2}
                borderRadius="full"
                bg="brand.100"
              />
              <Heading size="md" mb={2}>
                {it.title}
              </Heading>
              <Text color="gray.600" fontSize="md">
                {it.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
