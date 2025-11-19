"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Image, Text, HStack } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const storeGallery = [
  "/images/store/store-1.jpg",
  "/images/store/store-2.jpg",
  "/images/store/store-1.jpg",
  "/images/store/store-2.jpg",
  "/images/store/store-1.jpg",
  "/images/store/store-2.jpg",
];

export default function OfflineStores() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const IMAGE_WIDTH = 300;
  const IMAGE_HEIGHT = 500;
  const IMAGE_SPACING = 32;

  // Set container width di client
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % storeGallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getTransform = () => {
    if (!containerWidth) return "translateX(0)";
    const centerOffset = (containerWidth - IMAGE_WIDTH) / 2;
    return `translateX(-${
      activeIndex * (IMAGE_WIDTH + IMAGE_SPACING) - centerOffset
    }px)`;
  };

  return (
    <Box
      id="toko-offline"
      py={20}
      bg="brand.50"
      minH="600px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Container maxW="container.lg" textAlign="center" mb={12}>
        <Text fontSize="3xl" fontWeight="bold">
          Kunjungi Toko Offline Kami
        </Text>
        <Text color="gray.600" mt={3} fontSize="lg">
          Bisa langsung melihat produk & konsultasi sablon di toko resmi
          WWSablon.
        </Text>
        <HStack mt={3} justify="center" spacing={2}>
          <FaMapMarkerAlt color="#234FBF" />
          <Text fontWeight="semibold" fontSize="lg">
            WW Sablon Rengat
          </Text>
        </HStack>
      </Container>

      <Box
        ref={containerRef}
        overflow="hidden"
        position="relative"
        width="100%"
        mx="auto"
        flex="1"
        display="flex"
        alignItems="center"
      >
        <Box
          display="flex"
          gap={`${IMAGE_SPACING}px`}
          transform={getTransform()}
          transition="transform 0.5s ease"
          width={`${storeGallery.length * (IMAGE_WIDTH + IMAGE_SPACING)}px`}
        >
          {storeGallery.map((img, idx) => {
            const distance = Math.abs(idx - activeIndex);
            const scale = distance === 0 ? 1 : 0.7;
            const opacity = distance === 0 ? 1 : 0.5;

            return (
              <Box
                key={idx}
                flexShrink={0}
                cursor="pointer"
                transform={`scale(${scale})`}
                opacity={opacity}
                transition="0.5s"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  borderRadius="md"
                  w={`${IMAGE_WIDTH}px`}
                  h={`${IMAGE_HEIGHT}px`}
                  objectFit="cover"
                  boxShadow={distance === 0 ? "xl" : "md"}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
