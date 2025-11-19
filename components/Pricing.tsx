"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const wa = "6281293177984";

const priceList = [
  { size: "5 × 10 cm", price: "Rp 10.000" },
  { size: "5 × 15 cm", price: "Rp 15.000" },
  { size: "5 × 20 cm", price: "Rp 17.000" },
  { size: "5 × 25 cm", price: "Rp 20.000" },
  { size: "10 × 10 cm", price: "Rp 15.000" },
  { size: "10 × 15 cm", price: "Rp 20.000" },
  { size: "10 × 20 cm", price: "Rp 25.000" },
  { size: "10 × 25 cm", price: "Rp 30.000" },
  { size: "15 × 10 cm", price: "Rp 20.000" },
  { size: "15 × 15 cm", price: "Rp 25.000" },
  { size: "15 × 20 cm", price: "Rp 30.000" },
  { size: "15 × 25 cm", price: "Rp 35.000" },
  { size: "20 × 20 cm", price: "Rp 30.000" },
  { size: "20 × 25 cm", price: "Rp 35.000" },
  { size: "20 × 30 cm", price: "Rp 40.000" },
  { size: "27.5 × 10 cm", price: "Rp 30.000" },
  { size: "27.5 × 15 cm", price: "Rp 35.000" },
  { size: "27.5 × 20 cm", price: "Rp 40.000" },
  { size: "27.5 × 25 cm", price: "Rp 45.000" },
  { size: "27.5 × 30 cm", price: "Rp 50.000" },
  { size: "30 × 20 cm", price: "Rp 45.000" },
  { size: "30 × 25 cm", price: "Rp 50.000" },
  { size: "30 × 30 cm", price: "Rp 55.000" },
];

export default function Pricing() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box id="harga" py={20} bg="white">
      {/* Heading */}
      <Container maxW="container.lg" textAlign="center" mb={10}>
        <Heading mb={3}>Daftar Harga Sablon DTF</Heading>
        <Text color="gray.600">
          Harga sesuai ukuran area cetak. Klik gambar untuk melihat brosur.
        </Text>
      </Container>

      {/* Gambar brosur */}
      <Container maxW="container.sm" mb={10} textAlign="center">
        <Image
          src="/images/pricing/sablon-dtf.png"
          alt="Daftar Harga Sablon DTF"
          borderRadius="md"
          shadow="lg"
          cursor="pointer"
          transition="0.2s"
          _hover={{ transform: "scale(1.02)" }}
          onClick={onOpen}
        />
      </Container>

      {/* Modal zoom image */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxW={{ base: "90vw", md: "700px" }}
        >
          <ModalCloseButton
            color="white"
            top="10px"
            right="10px"
            bg="blackAlpha.600"
            borderRadius="full"
            _hover={{ bg: "blackAlpha.800" }}
          />
          <ModalBody p={0} display="flex" justifyContent="center">
            <Image
              src="/images/pricing/sablon-dtf.png"
              alt="Daftar Harga Besar"
              borderRadius="md"
              w="100%"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Tabel Harga */}
      <Container maxW="container.md">
        <TableContainer
          border="1px solid"
          borderColor="gray.200"
          borderRadius="lg"
          shadow="md"
          bg="white"
        >
          <Table variant="simple">
            <Thead bg="gray.100">
              <Tr>
                <Th fontSize="md" fontWeight="bold">
                  Ukuran
                </Th>
                <Th fontSize="md" fontWeight="bold">
                  Harga Sablon
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {priceList.map((item, i) => (
                <Tr key={i} _hover={{ bg: "gray.50" }} transition="0.2s">
                  <Td fontWeight="medium">{item.size}</Td>
                  <Td color="brand.600" fontWeight="bold">
                    {item.price}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>

      {/* Tombol WhatsApp */}
      <Box textAlign="center" mt={10}>
        <Button
          as="a"
          href={`https://wa.me/${wa}?text=Halo%20WW%20Sablon%2C%20saya%20ingin%20konsultasi%20harga%20DTF`}
          target="_blank"
          bg="brand.500"
          color="white"
          size="lg"
          px={8}
          py={6}
          borderRadius="lg"
          fontWeight="bold"
          _hover={{ bg: "brand.600" }}
        >
          Tanya & Pesan via WhatsApp
        </Button>
      </Box>
    </Box>
  );
}
