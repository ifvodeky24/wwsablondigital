"use client";

import Header from "../components/Header";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import OfflineStores from "../components/OfflineStores"; // langsung import
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { FaShippingFast } from "react-icons/fa";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WWSablon",
    url: "https://wwsablon.example",
    telephone: "+6281234567890",
    description:
      "Jasa sablon kaos custom berkualitas tinggi. Pesan via WhatsApp.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
  };

  return (
    <>
      <Header />

      <Box as="main">
        {/* Hero */}
        <Box bg="brand.900" color="white" py={{ base: 20, md: 28 }}>
          <Container maxW="container.lg" textAlign="center">
            <Box
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
            >
              WWSablon
            </Box>
            <Box mt={4} maxW="720px" mx="auto" color="gray.100">
              Jasa sablon kaos custom berkualitas — ideal untuk brand,
              komunitas, & event. Pesan mudah via WhatsApp.
            </Box>
          </Container>
        </Box>

        <Features />
        <Gallery />
        <Products />
        <Pricing />
        <Testimonials />

        {/* Render OfflineStores langsung */}
        <OfflineStores />

        {/* Kontak / CTA Section */}
        <Box id="kontak" py={12} bg="white" textAlign="center">
          <Container maxW="container.lg">
            <Box fontSize="xl" fontWeight="bold" mb={2}>
              Siap memesan?
            </Box>
            <Box color="gray.600" mb={4}>
              Hubungi kami sekarang untuk konsultasi & mockup gratis.
            </Box>

            <HStack
              justify="center"
              spacing={2}
              color="gray.700"
              mb={6}
              fontSize="md"
            >
              <FaShippingFast size={20} />
              <Text>
                Kami juga melayani pengiriman menggunakan paket cepat.
              </Text>
            </HStack>

            <Box
              as="a"
              href="https://wa.me/6281234567890?text=Halo%20WWSablon%2C%20saya%20ingin%20memesan"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                display="inline-block"
                bg="brand.500"
                color="white"
                px={6}
                py={3}
                borderRadius="md"
                fontWeight="bold"
                _hover={{ bg: "brand.600" }}
                transition="0.2s"
              >
                Pesan via WhatsApp
              </Box>
            </Box>
          </Container>
        </Box>

        <Footer />
      </Box>

      <FloatingWhatsApp />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
