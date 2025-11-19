"use client";

import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const images = [
  "/images/gallery/design-1.jpg",
  "/images/gallery/design-2.jpg",
  "/images/gallery/design-3.jpg",
  "/images/gallery/design-4.jpg",
  "/images/gallery/design-5.jpg",
  "/images/gallery/design-6.jpg",
  "/images/gallery/design-7.jpg",
  "/images/gallery/design-8.jpg",
  "/images/gallery/design-9.jpg",
];

export default function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box id="galeri" py={16} bg="white">
      <Container maxW="container.lg" textAlign="center" mb={8}>
        <Heading size="lg" mb={2}>
          Galeri Hasil Sablon
        </Heading>
        <Box color="gray.600">
          Contoh hasil produksi WWSablon — klik untuk lihat lebih jelas.
        </Box>
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
          {images.map((src, i) => (
            <Box
              key={i}
              overflow="hidden"
              borderRadius="md"
              cursor="pointer"
              boxShadow="sm"
              _hover={{ transform: "scale(1.03)", transition: "0.25s" }}
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Sablon ${i + 1}`}
                width="100%"
                height="550px"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Modal Preview */}
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" shadow="none">
          <ModalBody p={0}>
            <Image
              src={selectedImage}
              alt="Preview"
              width="100%"
              maxH="90vh"
              objectFit="contain"
              borderRadius="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
