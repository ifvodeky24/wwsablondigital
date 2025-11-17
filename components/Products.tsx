"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  HStack,
  Tag,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

// -----------------------------
// TypeScript Types
// -----------------------------
type Variant = {
  stock: { [size: string]: number }; // stock per ukuran
  images: string[]; // gambar per varian
};

type Variants = {
  [color: string]: Variant;
};

type Prices = {
  [size: string]: number;
};

type Measurements = {
  [size: string]: { [key: string]: string }; // misal "Lingkar Dada": "50cm"
};

interface Product {
  name: string;
  img: string;
  desc: string;
  variants: Variants;
  prices: Prices;
  measurements: Measurements;
}

// -----------------------------
// Data Produk
// -----------------------------
const products: Product[] = [
  {
    name: "Kaos Cotton Combed 30s",
    img: "/images/products/kaos-1.jpg",
    desc: "Bahan halus & adem, cocok untuk sablon DTG/Plastisol.",
    variants: {
      Hitam: {
        stock: { S: 10, M: 8, L: 0, XL: 5, XXL: 2 },
        images: ["/images/products/kaos-1.jpg", "/images/products/kaos-1.jpg"],
      },
      Putih: {
        stock: { S: 3, M: 6, L: 4, XL: 3, XXL: 1 },
        images: [
          "/images/products/kaos-1.jpg",
          "/images/products/kaos-1-white-2.jpg",
        ],
      },
    },
    prices: { S: 60000, M: 65000, L: 70000, XL: 75000, XXL: 80000 },
    measurements: {
      S: { "Lingkar Dada": "50 cm", "Panjang Baju": "65 cm" },
      M: { "Lingkar Dada": "53 cm", "Panjang Baju": "68 cm" },
      L: { "Lingkar Dada": "56 cm", "Panjang Baju": "70 cm" },
      XL: { "Lingkar Dada": "59 cm", "Panjang Baju": "73 cm" },
      XXL: { "Lingkar Dada": "62 cm", "Panjang Baju": "75 cm" },
    },
  },
  {
    name: "Kaos Raglan Premium",
    img: "/images/products/raglan-1.jpg",
    desc: "Nyaman dipakai harian, desain sporty dan kekinian.",
    variants: {
      Hitam: {
        stock: { S: 5, M: 4, L: 6, XL: 3, XXL: 2 },
        images: [
          "/images/products/kaos-1.jpg",
          "/images/products/raglan-black-2.jpg",
        ],
      },
      Putih: {
        stock: { S: 4, M: 3, L: 5, XL: 2, XXL: 1 },
        images: [
          "/images/products/raglan-white-1.jpg",
          "/images/products/raglan-white-2.jpg",
        ],
      },
    },
    prices: { S: 70000, M: 75000, L: 80000, XL: 85000, XXL: 90000 },
    measurements: {
      S: { "Lingkar Dada": "52 cm", "Panjang Baju": "66 cm" },
      M: { "Lingkar Dada": "55 cm", "Panjang Baju": "69 cm" },
      L: { "Lingkar Dada": "58 cm", "Panjang Baju": "71 cm" },
      XL: { "Lingkar Dada": "61 cm", "Panjang Baju": "74 cm" },
      XXL: { "Lingkar Dada": "64 cm", "Panjang Baju": "76 cm" },
    },
  },
];

// -----------------------------
// Component
// -----------------------------
export default function Products() {
  const {
    isOpen: isImgOpen,
    onOpen: onImgOpen,
    onClose: onImgClose,
  } = useDisclosure();
  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  const [selectedImg, setSelectedImg] = useState("");
  const [detailIndex, setDetailIndex] = useState<number | null>(null);
  const [selectedDetailColor, setSelectedDetailColor] = useState<string>("");

  const [selectedOptions, setSelectedOptions] = useState(
    products.map((p) => {
      const firstColor = Object.keys(p.variants)[0];
      const firstSize = Object.keys(p.variants[firstColor].stock)[0];
      return { color: firstColor, size: firstSize };
    })
  );

  const handleColorChange = (i: number, newColor: string) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      const newSize = Object.keys(products[i].variants[newColor].stock)[0];
      updated[i] = { color: newColor, size: newSize };
      return updated;
    });
  };

  const handleSizeChange = (i: number, newSize: string) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[i] = { ...updated[i], size: newSize };
      return updated;
    });
  };

  const openDetailModal = (i: number) => {
    setDetailIndex(i);
    setSelectedDetailColor(Object.keys(products[i].variants)[0]);
    onDetailOpen();
  };

  return (
    <Box id="produk" py={20} bg="gray.50">
      <Container maxW="container.lg" mb={12} textAlign="center">
        <Heading size="lg">Pilihan Produk Pakaian</Heading>
        <Text color="gray.600">
          Pilih pakaian berkualitas untuk sablon kamu
        </Text>
      </Container>

      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {products.map((p, i) => {
            const { color, size } = selectedOptions[i];
            const stock = p.variants[color].stock[size];
            const images = p.variants[color].images;
            const isSoldOut = stock === 0;
            const price = p.prices[size].toLocaleString("id-ID");
            const waMsg = `Saya ingin pesan ${p.name} - Warna: ${color} - Ukuran: ${size}`;

            return (
              <Box
                key={i}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                transition="0.3s"
                _hover={{ transform: "translateY(-6px)" }}
              >
                <Box
                  cursor="pointer"
                  onClick={() => {
                    setSelectedImg(images[0]);
                    onImgOpen();
                  }}
                  overflow="hidden"
                >
                  <Image
                    src={images[0]}
                    alt={p.name}
                    h="240px"
                    w="100%"
                    objectFit="cover"
                    transition="0.3s"
                    _hover={{ transform: "scale(1.12)" }}
                  />
                </Box>

                <VStack p={5} align="flex-start" spacing={3}>
                  <Heading size="md">{p.name}</Heading>
                  <Text fontSize="sm" color="gray.600">
                    {p.desc}
                  </Text>

                  {/* Warna */}
                  <HStack w="full">
                    <Text fontSize="sm">Warna:</Text>
                    <Select
                      size="sm"
                      value={color}
                      onChange={(e) => handleColorChange(i, e.target.value)}
                    >
                      {Object.keys(p.variants).map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </Select>
                  </HStack>

                  {/* Ukuran */}
                  <HStack w="full">
                    <Text fontSize="sm">Ukuran:</Text>
                    <Select
                      size="sm"
                      value={size}
                      onChange={(e) => handleSizeChange(i, e.target.value)}
                    >
                      {Object.keys(p.variants[color].stock).map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </Select>
                  </HStack>

                  {/* Stock */}
                  <Tag colorScheme={isSoldOut ? "red" : "green"} size="sm">
                    {isSoldOut ? "Habis" : `Stock: ${stock}`}
                  </Tag>

                  {/* Harga + Buttons */}
                  <HStack justify="space-between" w="full" pt={1}>
                    <Text fontWeight="bold">Rp {price}</Text>
                    <Button
                      size="sm"
                      colorScheme="green"
                      isDisabled={isSoldOut}
                      as="a"
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                        waMsg
                      )}`}
                      target="_blank"
                    >
                      {isSoldOut ? "Habis" : "Pesan"}
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() => openDetailModal(i)}
                    >
                      Detail
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>

      {/* Modal Image Zoom */}
      <Modal isOpen={isImgOpen} onClose={onImgClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" />
          <ModalBody p={0}>
            <Image src={selectedImg} alt="Preview produk" w="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal Detail Produk */}
      {detailIndex !== null && (
        <Modal
          isOpen={isDetailOpen}
          onClose={onDetailClose}
          size="lg"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {products[detailIndex].name} - Detail Ukuran
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Pilih Warna */}
              <HStack mb={4}>
                <Text>Warna:</Text>
                <Select
                  size="sm"
                  value={selectedDetailColor}
                  onChange={(e) => setSelectedDetailColor(e.target.value)}
                >
                  {Object.keys(products[detailIndex].variants).map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Select>
              </HStack>

              {/* Table Ukuran */}
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>Ukuran</Th>
                    {Object.keys(products[detailIndex].measurements["S"]).map(
                      (m) => (
                        <Th key={m}>{m}</Th>
                      )
                    )}
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.keys(products[detailIndex].measurements).map(
                    (sizeKey) => (
                      <Tr key={sizeKey}>
                        <Td>{sizeKey}</Td>
                        {Object.values(
                          products[detailIndex].measurements[sizeKey]
                        ).map((val, idx) => (
                          <Td key={idx}>{val}</Td>
                        ))}
                      </Tr>
                    )
                  )}
                </Tbody>
              </Table>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
