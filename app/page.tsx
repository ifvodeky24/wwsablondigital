"use client";

import Header from "../components/Header";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import OfflineStores from "../components/OfflineStores";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { FaShippingFast } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WWSablon",
    url: "https://wwsablon.example",
    telephone: "+6281293177984",
    description:
      "Jasa sablon kaos custom berkualitas tinggi. Pesan via WhatsApp.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
  };

  const wa = "6281293177984";

  return (
    <>
      <Header />

      <Box as="main">
        {/* Hero */}
        {/* Hero */}
        <Box
          bgImage="url('/images/store/store-1.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          color="white"
          py={{ base: 20, md: 28 }}
          position="relative"
          overflow="hidden" // ⬅ agar gambar tidak melewati area Box
        >
          {/* Overlay hitam transparan */}
          <Box
            position="absolute"
            inset={0}
            bg="blackAlpha.700" // ⬅ transparan
            zIndex={0}
          />

          <Container
            maxW="container.lg"
            textAlign="center"
            position="relative"
            zIndex={1}
          >
            {/* Logo */}
            <Box mb={4}>
              <Image
                src="/images/logo/logo.png"
                alt="WWSablon Logo"
                width={70}
                height={70}
                style={{
                  margin: "0 auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
            >
              WW Sablon Digital Rengat
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
        <OfflineStores />

        {/* Kontak / CTA Section */}
        <Box id="kontak" py={12} bg="white" textAlign="center">
          <Container maxW="container.lg">
            <Box fontSize="xl" fontWeight="bold" mb={2}>
              Siap Cetak Desainmu Sekarang?
            </Box>

            <Box color="gray.600" mb={4}>
              Konsultasi & mockup GRATIS — langsung chat kami aja!
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
                Pengiriman cepat ke seluruh Indonesia 🚚 — biaya tergantung
                tujuan & ekspedisi pilihan kamu.
              </Text>
            </HStack>

            <Box
              as="a"
              href={`https://wa.me/${wa}?text=Halo%20WWSablonDigital%2C%20saya%20ingin%20memesan`}
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
