// 2 - Captura el DNI y NIE

// Formato DNI: 11223344-A (Guión opcional).
// Válidos: 12345678-A, 11223344A,
// No válidos: A11223344, 1234567K

// tests en https://regex101.com/r/CNoZ4P/1/tests

const DNIs = ["12345678-A", "11223344A", "A11223344", "1234567K"];

const patronDNI = /^\d{8}-?[A-Z]$/;

DNIs.filter(texto=>patronDNI.test(texto));
