"use client";

import { IconButton, Box } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const wa = "6281234567890";
  return (
    <Box position="fixed" bottom="25px" right="25px" zIndex={60}>
      <IconButton
        as="a"
        href={`https://wa.me/${wa}?text=Halo%20WWSablon%2C%20saya%20ingin%20memesan`}
        target="_blank"
        aria-label="WhatsApp WWSablon"
        icon={<FaWhatsapp />}
        size="lg"
        bg="#25D366"
        color="white"
        _hover={{ transform: "scale(1.03)" }}
        borderRadius="full"
        boxShadow="lg"
      />
    </Box>
  );
}
