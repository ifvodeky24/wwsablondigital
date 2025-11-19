"use client";

import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  HStack,
  Link,
  Container,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ArrowUpIcon } from "@chakra-ui/icons";

const sections = [
  { id: "keunggulan", label: "Keunggulan" },
  { id: "galeri", label: "Galeri" },
  { id: "produk", label: "Pakaian" },
  { id: "harga", label: "Paket" },
  { id: "testimoni", label: "Testimoni" },
  { id: "toko-offline", label: "Toko Offline" },
  { id: "kontak", label: "Kontak" },
];

export default function Header() {
  const [active, setActive] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    const handleScrollHighlight = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };

    const handleScrollShow = () => setShowScroll(window.scrollY > 300);

    window.addEventListener("scroll", handleScrollHighlight);
    window.addEventListener("scroll", handleScrollShow);

    handleScrollHighlight();

    return () => {
      window.removeEventListener("scroll", handleScrollHighlight);
      window.removeEventListener("scroll", handleScrollShow);
    };
  }, []);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    onClose();
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const bgHeader = useColorModeValue("white", "gray.800");
  const shadowHeader = useColorModeValue("sm", "md");

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={50}
        bg={bgHeader}
        boxShadow={shadowHeader}
        transition="0.3s"
      >
        <Container
          maxW="container.lg"
          py={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <NextLink
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Image
              src="/images/logo/logo.png"
              alt="WWSablon Logo"
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
            />
            <span style={{ fontWeight: 700, color: "#234FBF", fontSize: 18 }}>
              WWSablon
            </span>
          </NextLink>

          {/* Desktop Menu */}
          <HStack spacing={2} display={{ base: "none", md: "flex" }}>
            {sections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                px={3}
                py={2}
                borderRadius="md"
                fontWeight={active === item.id ? "bold" : "normal"}
                bg={active === item.id ? "brand.100" : "transparent"}
                color={active === item.id ? "brand.700" : "gray.700"}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(item.id);
                }}
                _hover={{ bg: "brand.50", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Mobile Hamburger */}
          <IconButton
            aria-label="Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          />
        </Container>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }} bg={bgHeader}>
            <VStack spacing={2}>
              {sections.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  px={3}
                  py={2}
                  w="full"
                  textAlign="center"
                  fontWeight={active === item.id ? "bold" : "normal"}
                  bg={active === item.id ? "brand.100" : "transparent"}
                  color={active === item.id ? "brand.700" : "gray.700"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(item.id);
                  }}
                  _hover={{ bg: "brand.50", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </Box>
        </Collapse>
      </Box>

      {/* Scroll To Top */}
      {showScroll && (
        <IconButton
          aria-label="Scroll to top"
          icon={<ArrowUpIcon />}
          position="fixed"
          bottom="80px"
          right="25px"
          size="lg"
          shadow="lg"
          borderRadius="full"
          colorScheme="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
    </>
  );
}
