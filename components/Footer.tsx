"use client";

import { Box, Flex, Text, Link, Icon, VStack, HStack } from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "6281293177984";
  const instagramUrl = "https://instagram.com/wwsablondigital";

  const mapLat = -0.37287;
  const mapLng = 102.56005;

  return (
    <Box bg="gray.900" color="white" mt={20} pt={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        px={8}
        pb={10}
        gap={10}
      >
        {/* Brand Section */}
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="2xl" fontWeight="bold" color="brand.400">
            WW Sablon Digital
          </Text>
          <Text fontSize="sm" maxW="260px" opacity={0.85}>
            Jasa sablon kaos profesional dan custom — kualitas premium harga
            bersahabat.
          </Text>

          {/* Lokasi */}
          <HStack fontSize="sm" opacity={0.8} spacing={2}>
            <Icon as={FaMapMarkerAlt} boxSize={4} color="brand.400" />
            <Text>Rengat, Indragiri Hulu, Riau — Indonesia</Text>
          </HStack>

          {/* Jam Operasional */}
          <HStack fontSize="sm" opacity={0.8} spacing={2}>
            <Icon as={FaClock} boxSize={4} color="brand.400" />
            <Text>Senin – Minggu, 08:00 – 20:00 WIB</Text>
          </HStack>
        </VStack>

        {/* Google Maps */}
        <Box
          width={{ base: "100%", md: "50%" }}
          height="200px"
          borderRadius="md"
          overflow="hidden"
          border="2px solid #1A202C"
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapLat},${mapLng}&z=15&output=embed`}
          ></iframe>
        </Box>

        {/* Contact Section */}
        <VStack align="flex-start" spacing={3}>
          <Text fontSize="lg" fontWeight="semibold">
            Kontak Kami
          </Text>

          <Link
            href={`https://wa.me/${whatsappNumber}`}
            isExternal
            fontSize="sm"
            _hover={{ color: "brand.400" }}
          >
            <HStack>
              <Icon as={FaWhatsapp} boxSize={5} />
              <Text>WhatsApp: {whatsappNumber}</Text>
            </HStack>
          </Link>

          <Link
            href={instagramUrl}
            isExternal
            fontSize="sm"
            _hover={{ color: "brand.400" }}
          >
            <HStack>
              <Icon as={FaInstagram} boxSize={5} />
              <Text>@wwsablondigital</Text>
            </HStack>
          </Link>
        </VStack>
      </Flex>

      <Box borderTop="1px solid" borderColor="gray.700" py={4}>
        <Text textAlign="center" fontSize="sm" opacity={0.7}>
          © {new Date().getFullYear()} WWSablonDigital. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
