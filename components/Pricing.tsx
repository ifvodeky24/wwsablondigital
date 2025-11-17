// src/components/Pricing.tsx
"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

const plans = [
  {
    name: "Basic",
    price: "Rp65.000",
    desc: "Sablon 1 sisi — cocok untuk pesanan kecil",
  },
  {
    name: "Premium",
    price: "Rp85.000",
    desc: "Sablon full color / ukuran fleksibel",
  },
  {
    name: "Grosir",
    price: "Negosiasi",
    desc: "Harga khusus untuk partai besar",
  },
];

export default function Pricing() {
  const wa = "6281234567890";
  return (
    <Box id="harga" py={16} bg="white">
      <Container maxW="container.lg" textAlign="center" mb={8}>
        <Heading mb={2}>Paket Harga</Heading>
        <Text color="gray.600">
          Pilih paket sesuai kebutuhanmu — hubungi kami untuk penawaran khusus.
        </Text>
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {plans.map((p) => (
            <Box
              key={p.name}
              p={6}
              borderRadius="md"
              boxShadow="sm"
              textAlign="center"
            >
              <VStack spacing={3}>
                <Heading size="md">{p.name}</Heading>
                <Text fontWeight="bold" fontSize="xl" color="brand.500">
                  {p.price}
                </Text>
                <Text color="gray.600">{p.desc}</Text>
                <Button
                  as="a"
                  href={`https://wa.me/${wa}?text=Halo%20WWSablon%2C%20saya%20mau%20tanya%20untuk%20paket%20${encodeURIComponent(
                    p.name
                  )}`}
                  target="_blank"
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: "brand.600" }}
                >
                  Pesan / Tanyakan
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
