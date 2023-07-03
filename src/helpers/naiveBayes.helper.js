const natural = require("natural");

const dataLatih = [
  { umur: 18, tinggi: 80, berat: 10, stunting: "Tidak" },
  { umur: 24, tinggi: 85, berat: 11, stunting: "Tidak" },
  { umur: 30, tinggi: 92, berat: 12, stunting: "Tidak" },
  { umur: 36, tinggi: 97, berat: 14, stunting: "Tidak" },
  { umur: 42, tinggi: 101, berat: 16, stunting: "Tidak" },
  { umur: 48, tinggi: 106, berat: 18, stunting: "Tidak" },
  { umur: 54, tinggi: 110, berat: 20, stunting: "Tidak" },
  { umur: 60, tinggi: 115, berat: 22, stunting: "Tidak" },
  { umur: 18, tinggi: 75, berat: 9, stunting: "Tidak" },
  { umur: 24, tinggi: 80, berat: 10, stunting: "Tidak" },
  { umur: 30, tinggi: 87, berat: 11, stunting: "Tidak" },
  { umur: 36, tinggi: 93, berat: 13, stunting: "Tidak" },
  { umur: 42, tinggi: 98, berat: 15, stunting: "Tidak" },
  { umur: 48, tinggi: 103, berat: 17, stunting: "Tidak" },
  { umur: 54, tinggi: 107, berat: 19, stunting: "Tidak" },
  { umur: 60, tinggi: 112, berat: 21, stunting: "Tidak" },
  { umur: 18, tinggi: 70, berat: 8, stunting: "Tidak" },
  { umur: 24, tinggi: 75, berat: 9, stunting: "Tidak" },
  { umur: 30, tinggi: 82, berat: 10, stunting: "Tidak" },
  { umur: 36, tinggi: 88, berat: 12, stunting: "Tidak" },
  { umur: 42, tinggi: 93, berat: 14, stunting: "Tidak" },
  { umur: 48, tinggi: 98, berat: 16, stunting: "Tidak" },
  { umur: 54, tinggi: 102, berat: 18, stunting: "Tidak" },
  { umur: 60, tinggi: 107, berat: 20, stunting: "Tidak" },
  { umur: 18, tinggi: 65, berat: 7, stunting: "Tidak" },
  { umur: 24, tinggi: 70, berat: 8, stunting: "Tidak" },
  { umur: 4, tinggi: 50, berat: 3.5, stunting: "Tidak" },
  { umur: 7, tinggi: 60, berat: 6, stunting: "Tidak" },
  { umur: 10, tinggi: 70, berat: 8, stunting: "Tidak" },
  { umur: 12, tinggi: 75, berat: 9, stunting: "Tidak" },
  { umur: 15, tinggi: 80, berat: 10, stunting: "Tidak" },
  { umur: 18, tinggi: 85, berat: 11, stunting: "Tidak" },
  { umur: 20, tinggi: 90, berat: 12, stunting: "Tidak" },
  { umur: 24, tinggi: 95, berat: 13, stunting: "Tidak" },
  { umur: 27, tinggi: 100, berat: 15, stunting: "Tidak" },
  { umur: 30, tinggi: 105, berat: 17, stunting: "Tidak" },
  { umur: 33, tinggi: 110, berat: 19, stunting: "Tidak" },
  { umur: 36, tinggi: 115, berat: 21, stunting: "Tidak" },
  { umur: 4, tinggi: 50, berat: 3.5, stunting: "Tidak" },
  { umur: 7, tinggi: 60, berat: 6, stunting: "Tidak" },
  { umur: 10, tinggi: 70, berat: 8, stunting: "Tidak" },
  { umur: 12, tinggi: 75, berat: 9, stunting: "Tidak" },
  { umur: 15, tinggi: 80, berat: 10, stunting: "Ya" },
  { umur: 18, tinggi: 85, berat: 11, stunting: "Ya" },
  { umur: 20, tinggi: 90, berat: 12, stunting: "Ya" },
  { umur: 24, tinggi: 95, berat: 13, stunting: "Ya" },
  { umur: 27, tinggi: 100, berat: 15, stunting: "Ya" },
  { umur: 2, tinggi: 58, berat: 4.5, stunting: "Ya" },
  { umur: 3, tinggi: 62, berat: 5.3, stunting: "Tidak" },
  { umur: 4, tinggi: 64, berat: 6.2, stunting: "Tidak" },
  { umur: 5, tinggi: 68, berat: 7.1, stunting: "Tidak" },
  { umur: 6, tinggi: 71, berat: 8.0, stunting: "Tidak" },
  { umur: 7, tinggi: 73, berat: 8.8, stunting: "Tidak" },
  { umur: 8, tinggi: 75, berat: 9.5, stunting: "Tidak" },
  { umur: 9, tinggi: 77, berat: 10.1, stunting: "Tidak" },
  { umur: 10, tinggi: 79, berat: 10.8, stunting: "Tidak" },
  { umur: 11, tinggi: 81, berat: 11.4, stunting: "Tidak" },
  { umur: 12, tinggi: 83, berat: 12.0, stunting: "Tidak" },
  { umur: 13, tinggi: 85, berat: 12.5, stunting: "Tidak" },
  { umur: 14, tinggi: 87, berat: 13.0, stunting: "Tidak" },
  { umur: 15, tinggi: 89, berat: 13.5, stunting: "Tidak" },
  { umur: 16, tinggi: 91, berat: 14.0, stunting: "Tidak" },
  { umur: 17, tinggi: 93, berat: 14.4, stunting: "Tidak" },
  { umur: 18, tinggi: 95, berat: 14.9, stunting: "Tidak" },
  { umur: 19, tinggi: 97, berat: 15.3, stunting: "Tidak" },
  { umur: 20, tinggi: 99, berat: 15.7, stunting: "Tidak" },
  { umur: 21, tinggi: 101, berat: 16.1, stunting: "Tidak" },
  { umur: 22, tinggi: 103, berat: 16.5, stunting: "Tidak" },
  { umur: 23, tinggi: 105, berat: 16.9, stunting: "Tidak" },
  { umur: 24, tinggi: 107, berat: 17.3, stunting: "Tidak" },
  { umur: 25, tinggi: 109, berat: 17.7, stunting: "Tidak" },
  { umur: 12, tinggi: 80, berat: 10, stunting: "Tidak" },
  { umur: 18, tinggi: 85, berat: 11, stunting: "Tidak" },
  { umur: 24, tinggi: 90, berat: 12, stunting: "Tidak" },
  { umur: 30, tinggi: 95, berat: 13, stunting: "Tidak" },
  { umur: 36, tinggi: 100, berat: 14, stunting: "Tidak" },
  { umur: 42, tinggi: 105, berat: 15, stunting: "Tidak" },
  { umur: 48, tinggi: 110, berat: 16, stunting: "Tidak" },
  { umur: 54, tinggi: 115, berat: 17, stunting: "Tidak" },
  { umur: 60, tinggi: 120, berat: 18, stunting: "Tidak" },
  { umur: 12, tinggi: 75, berat: 9, stunting: "Tidak" },
  { umur: 18, tinggi: 80, berat: 10, stunting: "Tidak" },
  { umur: 24, tinggi: 85, berat: 11, stunting: "Tidak" },
  { umur: 30, tinggi: 90, berat: 12, stunting: "Tidak" },
  { umur: 36, tinggi: 95, berat: 13, stunting: "Tidak" },
  { umur: 42, tinggi: 100, berat: 14, stunting: "Tidak" },
  { umur: 48, tinggi: 105, berat: 15, stunting: "Tidak" },
  { umur: 54, tinggi: 110, berat: 16, stunting: "Tidak" },
  { umur: 60, tinggi: 115, berat: 17, stunting: "Tidak" },
  { umur: 12, tinggi: 78, berat: 10, stunting: "Tidak" },
  { umur: 18, tinggi: 83, berat: 11, stunting: "Tidak" },
  { umur: 24, tinggi: 88, berat: 12, stunting: "Tidak" },
  { umur: 30, tinggi: 93, berat: 13, stunting: "Tidak" },
  { umur: 36, tinggi: 98, berat: 14, stunting: "Tidak" },
  { umur: 42, tinggi: 103, berat: 15, stunting: "Tidak" },
  { umur: 48, tinggi: 108, berat: 16, stunting: "Tidak" },
  { umur: 54, tinggi: 113, berat: 17, stunting: "Tidak" },
  { umur: 6, tinggi: 65, berat: 7.2, stunting: "Ya" },
  { umur: 8, tinggi: 68, berat: 7.8, stunting: "Tidak" },
  { umur: 10, tinggi: 71, berat: 8.5, stunting: "Ya" },
  { umur: 12, tinggi: 74, berat: 9.1, stunting: "Ya" },
];

// const dataUji2 = [
//   { umur: 14, tinggi: 77, berat: 9.8, stunting: "Tidak" },
//   { umur: 16, tinggi: 80, berat: 10.5, stunting: "Ya" },
//   { umur: 18, tinggi: 83, berat: 11.2, stunting: "Ya" },
//   { umur: 20, tinggi: 86, berat: 11.9, stunting: "Ya" },
//   { umur: 22, tinggi: 89, berat: 12.6, stunting: "Tidak" },
//   { umur: 24, tinggi: 92, berat: 13.3, stunting: "Ya" },
//   { umur: 26, tinggi: 95, berat: 14.0, stunting: "Ya" },
//   { umur: 28, tinggi: 98, berat: 14.7, stunting: "Ya" },
//   { umur: 30, tinggi: 101, berat: 15.4, stunting: "Ya" },
//   { umur: 32, tinggi: 104, berat: 16.1, stunting: "Tidak" },
//   { umur: 34, tinggi: 107, berat: 16.8, stunting: "Ya" },
//   { umur: 36, tinggi: 110, berat: 17.5, stunting: "Ya" },
//   { umur: 38, tinggi: 113, berat: 18.2, stunting: "Ya" },
//   { umur: 40, tinggi: 116, berat: 18.9, stunting: "Ya" },
//   { umur: 42, tinggi: 119, berat: 19.6, stunting: "Ya" },
//   { umur: 44, tinggi: 122, berat: 20.3, stunting: "Tidak" },
//   { umur: 46, tinggi: 125, berat: 21.0, stunting: "Ya" },
//   { umur: 48, tinggi: 128, berat: 21.7, stunting: "Ya" },
//   { umur: 49, tinggi: 90, berat: 12.5, stunting: "Ya" },
//   { umur: 15, tinggi: 90, berat: 7.7, stunting: "Ya" },
//   { umur: 8, tinggi: 64.3, berat: 6.2, stunting: "Ya" },
//   { umur: 31, tinggi: 80.3, berat: 10.5, stunting: "Ya" },
//   { umur: 53, tinggi: 92, berat: 12.3, stunting: "Ya" },
//   { umur: 33, tinggi: 81.4, berat: 10.5, stunting: "Ya" },
//   { umur: 50, tinggi: 90, berat: 10.3, stunting: "Ya" },
//   { umur: 26, tinggi: 80, berat: 10.7, stunting: "Ya" },
//   { umur: 47, tinggi: 83.5, berat: 11.5, stunting: "Ya" },
//   { umur: 37, tinggi: 85.5, berat: 11.4, stunting: "Ya" },
//   { umur: 58, tinggi: 90.5, berat: 13.3, stunting: "Ya" },
//   { umur: 47, tinggi: 89.1, berat: 12.1, stunting: "Ya" },
//   { umur: 3, tinggi: 56.1, berat: 5.2, stunting: "Ya" },
//   { umur: 37, tinggi: 84.2, berat: 10, stunting: "Ya" },
//   { umur: 37, tinggi: 84.3, berat: 10.6, stunting: "Ya" },
//   { umur: 0, tinggi: 66.8, berat: 7.7, stunting: "Ya" },
//   { umur: 7, tinggi: 62.1, berat: 6.5, stunting: "Ya" },
//   { umur: 0, tinggi: 69, berat: 7, stunting: "Ya" },
//   { umur: 20, tinggi: 75.9, berat: 8.7, stunting: "Ya" },
//   { umur: 0, tinggi: 68.3, berat: 7.5, stunting: "Ya" },
//   { umur: 57, tinggi: 92.5, berat: 12.6, stunting: "Ya" },
//   { umur: 37, tinggi: 84, berat: 9.9, stunting: "Ya" },
//   { umur: 38, tinggi: 82.5, berat: 12.5, stunting: "Ya" },
//   { umur: 33, tinggi: 82, berat: 10.5, stunting: "Ya" },
//   { umur: 18, tinggi: 72.9, berat: 9.6, stunting: "Ya" },
//   { umur: 35, tinggi: 81, berat: 13.8, stunting: "Ya" },
//   { umur: 32, tinggi: 80, berat: 13.2, stunting: "Ya" },
//   { umur: 8, tinggi: 64.5, berat: 9, stunting: "Ya" },
//   { umur: 2, tinggi: 54.5, berat: 4.5, stunting: "Ya" },
//   { umur: 16, tinggi: 72.6, berat: 8.5, stunting: "Ya" },
//   { umur: 23, tinggi: 78, berat: 13.5, stunting: "Ya" },
//   { umur: 39, tinggi: 86, berat: 10.6, stunting: "Ya" },
//   { umur: 3, tinggi: 54.1, berat: 5, stunting: "Ya" },
//   { umur: 1, tinggi: 66.5, berat: 7.4, stunting: "Ya" },
//   { umur: 27, tinggi: 78.2, berat: 10.4, stunting: "Ya" },
//   { umur: 16, tinggi: 69.8, berat: 7, stunting: "Ya" },
//   { umur: 26, tinggi: 78.4, berat: 9.2, stunting: "Ya" },
//   { umur: 28, tinggi: 79.2, berat: 9.3, stunting: "Ya" },
//   { umur: 5, tinggi: 58.5, berat: 5.8, stunting: "Ya" },
//   { umur: 50, tinggi: 90.1, berat: 12, stunting: "Ya" },
//   { umur: 25, tinggi: 76.5, berat: 12.5, stunting: "Ya" },
//   { umur: 54, tinggi: 93, berat: 15.5, stunting: "Ya" },
//   { umur: 47, tinggi: 90.2, berat: 13.5, stunting: "Ya" },
//   { umur: 39, tinggi: 82, berat: 11, stunting: "Ya" },
//   { umur: 47, tinggi: 89, berat: 14.2, stunting: "Ya" },
//   { umur: 52, tinggi: 89, berat: 14.3, stunting: "Ya" },
//   { umur: 37, tinggi: 84, berat: 12.3, stunting: "Ya" },
//   { umur: 20, tinggi: 73, berat: 8.5, stunting: "Ya" },
//   { umur: 20, tinggi: 76, berat: 10.6, stunting: "Ya" },
//   { umur: 18, tinggi: 74, berat: 9.7, stunting: "Ya" },
//   { umur: 20, tinggi: 73.5, berat: 11, stunting: "Ya" },
//   { umur: 55, tinggi: 90.2, berat: 11.9, stunting: "Ya" },
//   { umur: 56, tinggi: 88.3, berat: 15, stunting: "Ya" },
//   { umur: 19, tinggi: 75, berat: 9.9, stunting: "Ya" },
//   { umur: 32, tinggi: 80, berat: 11, stunting: "Ya" },
//   { umur: 51, tinggi: 89.5, berat: 12.6, stunting: "Ya" },
//   { umur: 70, tinggi: 87, berat: 9.9, stunting: "Ya" },
//   { umur: 19, tinggi: 71, berat: 8.5, stunting: "Ya" },
//   { umur: 68, tinggi: 93.4, berat: 13.2, stunting: "Ya" },
//   { umur: 17, tinggi: 72.4, berat: 8, stunting: "Ya" },
//   { umur: 19, tinggi: 75, berat: 9, stunting: "Ya" },
//   { umur: 3, tinggi: 77.8, berat: 14.5, stunting: "Ya" },
//   { umur: 41, tinggi: 85.5, berat: 11, stunting: "Ya" },
//   { umur: 16, tinggi: 70.7, berat: 8.1, stunting: "Ya" },
//   { umur: 34, tinggi: 82, berat: 11, stunting: "Ya" },
//   { umur: 26, tinggi: 76.8, berat: 10.3, stunting: "Ya" },
//   { umur: 57, tinggi: 88.2, berat: 12.5, stunting: "Ya" },
//   { umur: 38, tinggi: 83.9, berat: 11.9, stunting: "Ya" },
//   { umur: 25, tinggi: 75.5, berat: 9.1, stunting: "Ya" },
//   { umur: 39, tinggi: 83, berat: 12.6, stunting: "Ya" },
//   { umur: 32, tinggi: 80.1, berat: 10.8, stunting: "Ya" },
//   { umur: 18, tinggi: 71, berat: 9, stunting: "Ya" },
//   { umur: 37, tinggi: 82.8, berat: 10.2, stunting: "Ya" },
//   { umur: 21, tinggi: 73.6, berat: 8.5, stunting: "Ya" },
//   { umur: 41, tinggi: 85.1, berat: 12.5, stunting: "Ya" },
//   { umur: 0, tinggi: 66.7, berat: 8, stunting: "Ya" },
//   { umur: 53, tinggi: 84, berat: 10.4, stunting: "Ya" },
//   { umur: 23, tinggi: 73.5, berat: 10.2, stunting: "Ya" },
//   { umur: 70, tinggi: 85, berat: 11.5, stunting: "Ya" },
//   { umur: 22, tinggi: 71.2, berat: 7.7, stunting: "Ya" },
//   { umur: 3, tinggi: 55.9, berat: 4.9, stunting: "Ya" },
//   { umur: 13, tinggi: 63.6, berat: 6.4, stunting: "Ya" },
//   { umur: 25, tinggi: 76.1, berat: 9.1, stunting: "Ya" },
// ];

// const dataLatih3 = [
//   { umur: 18, tinggi: 80, berat: 10, stunting: "Tidak" },
//   { umur: 24, tinggi: 85, berat: 11, stunting: "Tidak" },
//   { umur: 30, tinggi: 92, berat: 12, stunting: "Tidak" },
//   { umur: 36, tinggi: 97, berat: 14, stunting: "Tidak" },
//   { umur: 42, tinggi: 101, berat: 16, stunting: "Tidak" },
//   { umur: 48, tinggi: 106, berat: 18, stunting: "Tidak" },
//   { umur: 54, tinggi: 110, berat: 20, stunting: "Tidak" },
//   { umur: 60, tinggi: 115, berat: 22, stunting: "Tidak" },
//   { umur: 18, tinggi: 75, berat: 9, stunting: "Tidak" },
//   { umur: 24, tinggi: 80, berat: 10, stunting: "Tidak" },
//   { umur: 30, tinggi: 87, berat: 11, stunting: "Tidak" },
//   { umur: 36, tinggi: 93, berat: 13, stunting: "Tidak" },
//   { umur: 42, tinggi: 98, berat: 15, stunting: "Tidak" },
//   { umur: 48, tinggi: 103, berat: 17, stunting: "Tidak" },
//   { umur: 54, tinggi: 107, berat: 19, stunting: "Tidak" },
//   { umur: 60, tinggi: 112, berat: 21, stunting: "Tidak" },
//   { umur: 18, tinggi: 70, berat: 8, stunting: "Tidak" },
//   { umur: 24, tinggi: 75, berat: 9, stunting: "Tidak" },
//   { umur: 30, tinggi: 82, berat: 10, stunting: "Tidak" },
//   { umur: 36, tinggi: 88, berat: 12, stunting: "Tidak" },
//   { umur: 42, tinggi: 93, berat: 14, stunting: "Tidak" },
//   { umur: 48, tinggi: 98, berat: 16, stunting: "Tidak" },
//   { umur: 54, tinggi: 102, berat: 18, stunting: "Tidak" },
//   { umur: 60, tinggi: 107, berat: 20, stunting: "Tidak" },
//   { umur: 18, tinggi: 65, berat: 7, stunting: "Tidak" },
//   { umur: 24, tinggi: 70, berat: 8, stunting: "Tidak" },
//   { umur: 4, tinggi: 50, berat: 3.5, stunting: "Tidak" },
//   { umur: 7, tinggi: 60, berat: 6, stunting: "Tidak" },
//   { umur: 10, tinggi: 70, berat: 8, stunting: "Tidak" },
//   { umur: 12, tinggi: 75, berat: 9, stunting: "Tidak" },
//   { umur: 15, tinggi: 80, berat: 10, stunting: "Tidak" },
//   { umur: 18, tinggi: 85, berat: 11, stunting: "Tidak" },
//   { umur: 20, tinggi: 90, berat: 12, stunting: "Tidak" },
//   { umur: 24, tinggi: 95, berat: 13, stunting: "Tidak" },
//   { umur: 27, tinggi: 100, berat: 15, stunting: "Tidak" },
//   { umur: 30, tinggi: 105, berat: 17, stunting: "Tidak" },
//   { umur: 33, tinggi: 110, berat: 19, stunting: "Tidak" },
//   { umur: 36, tinggi: 115, berat: 21, stunting: "Tidak" },
//   { umur: 4, tinggi: 50, berat: 3.5, stunting: "Tidak" },
//   { umur: 7, tinggi: 60, berat: 6, stunting: "Tidak" },
//   { umur: 10, tinggi: 70, berat: 8, stunting: "Tidak" },
//   { umur: 12, tinggi: 75, berat: 9, stunting: "Tidak" },
//   { umur: 15, tinggi: 80, berat: 10, stunting: "Ya" },
//   { umur: 18, tinggi: 85, berat: 11, stunting: "Ya" },
//   { umur: 20, tinggi: 90, berat: 12, stunting: "Ya" },
//   { umur: 24, tinggi: 95, berat: 13, stunting: "Ya" },
//   { umur: 27, tinggi: 100, berat: 15, stunting: "Ya" },
//   { umur: 2, tinggi: 58, berat: 4.5, stunting: "Ya" },
//   { umur: 3, tinggi: 62, berat: 5.3, stunting: "Tidak" },
//   { umur: 4, tinggi: 64, berat: 6.2, stunting: "Tidak" },
//   { umur: 5, tinggi: 68, berat: 7.1, stunting: "Tidak" },
//   { umur: 6, tinggi: 71, berat: 8.0, stunting: "Tidak" },
//   { umur: 7, tinggi: 73, berat: 8.8, stunting: "Tidak" },
//   { umur: 8, tinggi: 75, berat: 9.5, stunting: "Tidak" },
//   { umur: 9, tinggi: 77, berat: 10.1, stunting: "Tidak" },
//   { umur: 10, tinggi: 79, berat: 10.8, stunting: "Tidak" },
//   { umur: 11, tinggi: 81, berat: 11.4, stunting: "Tidak" },
//   { umur: 12, tinggi: 83, berat: 12.0, stunting: "Tidak" },
//   { umur: 13, tinggi: 85, berat: 12.5, stunting: "Tidak" },
//   { umur: 14, tinggi: 87, berat: 13.0, stunting: "Tidak" },
//   { umur: 15, tinggi: 89, berat: 13.5, stunting: "Tidak" },
//   { umur: 16, tinggi: 91, berat: 14.0, stunting: "Tidak" },
//   { umur: 17, tinggi: 93, berat: 14.4, stunting: "Tidak" },
//   { umur: 18, tinggi: 95, berat: 14.9, stunting: "Tidak" },
//   { umur: 19, tinggi: 97, berat: 15.3, stunting: "Tidak" },
//   { umur: 20, tinggi: 99, berat: 15.7, stunting: "Tidak" },
//   { umur: 21, tinggi: 101, berat: 16.1, stunting: "Tidak" },
//   { umur: 22, tinggi: 103, berat: 16.5, stunting: "Tidak" },
//   { umur: 23, tinggi: 105, berat: 16.9, stunting: "Tidak" },
//   { umur: 24, tinggi: 107, berat: 17.3, stunting: "Tidak" },
//   { umur: 25, tinggi: 109, berat: 17.7, stunting: "Tidak" },
//   { umur: 12, tinggi: 80, berat: 10, stunting: "Tidak" },
//   { umur: 18, tinggi: 85, berat: 11, stunting: "Tidak" },
//   { umur: 24, tinggi: 90, berat: 12, stunting: "Tidak" },
//   { umur: 30, tinggi: 95, berat: 13, stunting: "Tidak" },
//   { umur: 36, tinggi: 100, berat: 14, stunting: "Tidak" },
//   { umur: 42, tinggi: 105, berat: 15, stunting: "Tidak" },
//   { umur: 48, tinggi: 110, berat: 16, stunting: "Tidak" },
//   { umur: 54, tinggi: 115, berat: 17, stunting: "Tidak" },
//   { umur: 60, tinggi: 120, berat: 18, stunting: "Tidak" },
//   { umur: 12, tinggi: 75, berat: 9, stunting: "Tidak" },
//   { umur: 18, tinggi: 80, berat: 10, stunting: "Tidak" },
//   { umur: 24, tinggi: 85, berat: 11, stunting: "Tidak" },
//   { umur: 30, tinggi: 90, berat: 12, stunting: "Tidak" },
//   { umur: 36, tinggi: 95, berat: 13, stunting: "Tidak" },
//   { umur: 42, tinggi: 100, berat: 14, stunting: "Tidak" },
//   { umur: 48, tinggi: 105, berat: 15, stunting: "Tidak" },
//   { umur: 54, tinggi: 110, berat: 16, stunting: "Tidak" },
//   { umur: 60, tinggi: 115, berat: 17, stunting: "Tidak" },
//   { umur: 12, tinggi: 78, berat: 10, stunting: "Tidak" },
//   { umur: 18, tinggi: 83, berat: 11, stunting: "Tidak" },
//   { umur: 24, tinggi: 88, berat: 12, stunting: "Tidak" },
//   { umur: 30, tinggi: 93, berat: 13, stunting: "Tidak" },
//   { umur: 36, tinggi: 98, berat: 14, stunting: "Tidak" },
//   { umur: 42, tinggi: 103, berat: 15, stunting: "Tidak" },
//   { umur: 48, tinggi: 108, berat: 16, stunting: "Tidak" },
//   { umur: 54, tinggi: 113, berat: 17, stunting: "Tidak" },
//   { umur: 6, tinggi: 65, berat: 7.2, stunting: "Ya" },
//   { umur: 8, tinggi: 68, berat: 7.8, stunting: "Tidak" },
//   { umur: 10, tinggi: 71, berat: 8.5, stunting: "Ya" },
//   { umur: 12, tinggi: 74, berat: 9.1, stunting: "Ya" },
//   { umur: 14, tinggi: 77, berat: 9.8, stunting: "Tidak" },
//   { umur: 16, tinggi: 80, berat: 10.5, stunting: "Ya" },
//   { umur: 18, tinggi: 83, berat: 11.2, stunting: "Ya" },
//   { umur: 20, tinggi: 86, berat: 11.9, stunting: "Ya" },
//   { umur: 22, tinggi: 89, berat: 12.6, stunting: "Tidak" },
//   { umur: 24, tinggi: 92, berat: 13.3, stunting: "Ya" },
//   { umur: 26, tinggi: 95, berat: 14.0, stunting: "Ya" },
//   { umur: 28, tinggi: 98, berat: 14.7, stunting: "Ya" },
//   { umur: 30, tinggi: 101, berat: 15.4, stunting: "Ya" },
//   { umur: 32, tinggi: 104, berat: 16.1, stunting: "Tidak" },
//   { umur: 34, tinggi: 107, berat: 16.8, stunting: "Ya" },
//   { umur: 36, tinggi: 110, berat: 17.5, stunting: "Ya" },
//   { umur: 38, tinggi: 113, berat: 18.2, stunting: "Ya" },
//   { umur: 40, tinggi: 116, berat: 18.9, stunting: "Ya" },
//   { umur: 42, tinggi: 119, berat: 19.6, stunting: "Ya" },
//   { umur: 44, tinggi: 122, berat: 20.3, stunting: "Tidak" },
//   { umur: 46, tinggi: 125, berat: 21.0, stunting: "Ya" },
//   { umur: 48, tinggi: 128, berat: 21.7, stunting: "Ya" },
//   { umur: 49, tinggi: 90, berat: 12.5, stunting: "Ya" },
//   { umur: 15, tinggi: 90, berat: 7.7, stunting: "Ya" },
//   { umur: 8, tinggi: 64.3, berat: 6.2, stunting: "Ya" },
//   { umur: 31, tinggi: 80.3, berat: 10.5, stunting: "Ya" },
//   { umur: 53, tinggi: 92, berat: 12.3, stunting: "Ya" },
//   { umur: 33, tinggi: 81.4, berat: 10.5, stunting: "Ya" },
//   { umur: 50, tinggi: 90, berat: 10.3, stunting: "Ya" },
//   { umur: 26, tinggi: 80, berat: 10.7, stunting: "Ya" },
//   { umur: 47, tinggi: 83.5, berat: 11.5, stunting: "Ya" },
//   { umur: 37, tinggi: 85.5, berat: 11.4, stunting: "Ya" },
//   { umur: 58, tinggi: 90.5, berat: 13.3, stunting: "Ya" },
//   { umur: 47, tinggi: 89.1, berat: 12.1, stunting: "Ya" },
//   { umur: 3, tinggi: 56.1, berat: 5.2, stunting: "Ya" },
//   { umur: 37, tinggi: 84.2, berat: 10, stunting: "Ya" },
//   { umur: 37, tinggi: 84.3, berat: 10.6, stunting: "Ya" },
//   { umur: 0, tinggi: 66.8, berat: 7.7, stunting: "Ya" },
//   { umur: 7, tinggi: 62.1, berat: 6.5, stunting: "Ya" },
//   { umur: 0, tinggi: 69, berat: 7, stunting: "Ya" },
//   { umur: 20, tinggi: 75.9, berat: 8.7, stunting: "Ya" },
//   { umur: 0, tinggi: 68.3, berat: 7.5, stunting: "Ya" },
//   { umur: 57, tinggi: 92.5, berat: 12.6, stunting: "Ya" },
//   { umur: 37, tinggi: 84, berat: 9.9, stunting: "Ya" },
//   { umur: 38, tinggi: 82.5, berat: 12.5, stunting: "Ya" },
//   { umur: 33, tinggi: 82, berat: 10.5, stunting: "Ya" },
//   { umur: 18, tinggi: 72.9, berat: 9.6, stunting: "Ya" },
//   { umur: 35, tinggi: 81, berat: 13.8, stunting: "Ya" },
//   { umur: 32, tinggi: 80, berat: 13.2, stunting: "Ya" },
//   { umur: 8, tinggi: 64.5, berat: 9, stunting: "Ya" },
//   { umur: 2, tinggi: 54.5, berat: 4.5, stunting: "Ya" },
//   { umur: 16, tinggi: 72.6, berat: 8.5, stunting: "Ya" },
//   { umur: 23, tinggi: 78, berat: 13.5, stunting: "Ya" },
//   { umur: 39, tinggi: 86, berat: 10.6, stunting: "Ya" },
//   { umur: 3, tinggi: 54.1, berat: 5, stunting: "Ya" },
//   { umur: 1, tinggi: 66.5, berat: 7.4, stunting: "Ya" },
//   { umur: 27, tinggi: 78.2, berat: 10.4, stunting: "Ya" },
//   { umur: 16, tinggi: 69.8, berat: 7, stunting: "Ya" },
//   { umur: 26, tinggi: 78.4, berat: 9.2, stunting: "Ya" },
//   { umur: 28, tinggi: 79.2, berat: 9.3, stunting: "Ya" },
//   { umur: 5, tinggi: 58.5, berat: 5.8, stunting: "Ya" },
//   { umur: 50, tinggi: 90.1, berat: 12, stunting: "Ya" },
//   { umur: 25, tinggi: 76.5, berat: 12.5, stunting: "Ya" },
//   { umur: 54, tinggi: 93, berat: 15.5, stunting: "Ya" },
//   { umur: 47, tinggi: 90.2, berat: 13.5, stunting: "Ya" },
//   { umur: 39, tinggi: 82, berat: 11, stunting: "Ya" },
//   { umur: 47, tinggi: 89, berat: 14.2, stunting: "Ya" },
//   { umur: 52, tinggi: 89, berat: 14.3, stunting: "Ya" },
//   { umur: 37, tinggi: 84, berat: 12.3, stunting: "Ya" },
//   { umur: 20, tinggi: 73, berat: 8.5, stunting: "Ya" },
//   { umur: 20, tinggi: 76, berat: 10.6, stunting: "Ya" },
//   { umur: 18, tinggi: 74, berat: 9.7, stunting: "Ya" },
//   { umur: 20, tinggi: 73.5, berat: 11, stunting: "Ya" },
//   { umur: 55, tinggi: 90.2, berat: 11.9, stunting: "Ya" },
//   { umur: 56, tinggi: 88.3, berat: 15, stunting: "Ya" },
//   { umur: 19, tinggi: 75, berat: 9.9, stunting: "Ya" },
//   { umur: 32, tinggi: 80, berat: 11, stunting: "Ya" },
//   { umur: 51, tinggi: 89.5, berat: 12.6, stunting: "Ya" },
//   { umur: 70, tinggi: 87, berat: 9.9, stunting: "Ya" },
//   { umur: 19, tinggi: 71, berat: 8.5, stunting: "Ya" },
//   { umur: 68, tinggi: 93.4, berat: 13.2, stunting: "Ya" },
//   { umur: 17, tinggi: 72.4, berat: 8, stunting: "Ya" },
//   { umur: 19, tinggi: 75, berat: 9, stunting: "Ya" },
//   { umur: 3, tinggi: 77.8, berat: 14.5, stunting: "Ya" },
//   { umur: 41, tinggi: 85.5, berat: 11, stunting: "Ya" },
//   { umur: 16, tinggi: 70.7, berat: 8.1, stunting: "Ya" },
//   { umur: 34, tinggi: 82, berat: 11, stunting: "Ya" },
//   { umur: 26, tinggi: 76.8, berat: 10.3, stunting: "Ya" },
//   { umur: 57, tinggi: 88.2, berat: 12.5, stunting: "Ya" },
//   { umur: 38, tinggi: 83.9, berat: 11.9, stunting: "Ya" },
//   { umur: 25, tinggi: 75.5, berat: 9.1, stunting: "Ya" },
//   { umur: 39, tinggi: 83, berat: 12.6, stunting: "Ya" },
//   { umur: 32, tinggi: 80.1, berat: 10.8, stunting: "Ya" },
//   { umur: 18, tinggi: 71, berat: 9, stunting: "Ya" },
//   { umur: 37, tinggi: 82.8, berat: 10.2, stunting: "Ya" },
//   { umur: 21, tinggi: 73.6, berat: 8.5, stunting: "Ya" },
//   { umur: 41, tinggi: 85.1, berat: 12.5, stunting: "Ya" },
//   { umur: 0, tinggi: 66.7, berat: 8, stunting: "Ya" },
//   { umur: 53, tinggi: 84, berat: 10.4, stunting: "Ya" },
//   { umur: 23, tinggi: 73.5, berat: 10.2, stunting: "Ya" },
//   { umur: 70, tinggi: 85, berat: 11.5, stunting: "Ya" },
//   { umur: 22, tinggi: 71.2, berat: 7.7, stunting: "Ya" },
//   { umur: 3, tinggi: 55.9, berat: 4.9, stunting: "Ya" },
//   { umur: 13, tinggi: 63.6, berat: 6.4, stunting: "Ya" },
//   { umur: 25, tinggi: 76.1, berat: 9.1, stunting: "Ya" },
// ];

const hitungProbabilitasStunting = (umur_, tinggi_, berat_, dataUji) => {
  let persentDataLatih = 20;
  let persentDataUji = 100;

  let dataLatihBaru = dataLatih.slice(
    0,
    Math.round((persentDataLatih / 100) * dataLatih.length)
  );
  let dataUjiBaru = dataUji.slice(
    0,
    Math.round((persentDataUji / 100) * dataUji.length)
  );

  let gabungData = [...dataLatihBaru, ...dataUjiBaru];

  let jumlahData = gabungData.length;
  let jumlahDataTidak = 0;
  let jumlahDataYa = 0;
  let sumTidak = {
    umur: 0,
    tinggi: 0,
    berat: 0,
  };
  let sumYa = {
    umur: 0,
    tinggi: 0,
    berat: 0,
  };
  let standarDeviasiTidak = {
    umur: 0,
    tinggi: 0,
    berat: 0,
  };
  let standarDeviasiYa = {
    umur: 0,
    tinggi: 0,
    berat: 0,
  };

  gabungData.forEach((item) => {
    const { stunting } = item;
    if (stunting === "Tidak") {
      jumlahDataTidak++;
      sumTidak.umur += item.umur;
      sumTidak.tinggi += item.tinggi;
      sumTidak.berat += item.berat;
    } else {
      jumlahDataYa++;
      sumYa.umur += item.umur;
      sumYa.tinggi += item.tinggi;
      sumYa.berat += item.berat;
    }
  });

  let probabilitasPriorTidak = jumlahDataTidak / jumlahData;
  let probabilitasPriorYa = jumlahDataYa / jumlahData;
  let meanTidak = {
    umur: sumTidak.umur / jumlahDataTidak,
    tinggi: sumTidak.tinggi / jumlahDataTidak,
    berat: sumTidak.berat / jumlahDataTidak,
  };
  let meanYa = {
    umur: sumYa.umur / jumlahDataYa,
    tinggi: sumYa.tinggi / jumlahDataYa,
    berat: sumYa.berat / jumlahDataYa,
  };

  gabungData.forEach((item) => {
    const { stunting } = item;
    if (stunting === "Tidak") {
      standarDeviasiTidak.umur += Math.pow(item.umur - meanTidak.umur, 2);
      standarDeviasiTidak.tinggi += Math.pow(item.tinggi - meanTidak.tinggi, 2);
      standarDeviasiTidak.berat += Math.pow(item.berat - meanTidak.berat, 2);
    } else {
      standarDeviasiYa.umur += Math.pow(item.umur - meanYa.umur, 2);
      standarDeviasiYa.tinggi += Math.pow(item.tinggi - meanYa.tinggi, 2);
      standarDeviasiYa.berat += Math.pow(item.berat - meanYa.berat, 2);
    }
  });

  standarDeviasiTidak.umur = Math.sqrt(
    standarDeviasiTidak.umur / (jumlahDataTidak - 1)
  );
  standarDeviasiTidak.tinggi = Math.sqrt(
    standarDeviasiTidak.tinggi / (jumlahDataTidak - 1)
  );
  standarDeviasiTidak.berat = Math.sqrt(
    standarDeviasiTidak.berat / (jumlahDataTidak - 1)
  );

  standarDeviasiYa.umur = Math.sqrt(standarDeviasiYa.umur / (jumlahDataYa - 1));
  standarDeviasiYa.tinggi = Math.sqrt(
    standarDeviasiYa.tinggi / (jumlahDataYa - 1)
  );
  standarDeviasiYa.berat = Math.sqrt(
    standarDeviasiYa.berat / (jumlahDataYa - 1)
  );

  let dataPrediksi = [];
  let probabilitasTidak =
    (1 / Math.sqrt(2 * Math.PI * standarDeviasiTidak.umur)) *
    Math.exp(
      -Math.pow(umur_ - meanTidak.umur, 2) /
        (2 * Math.pow(standarDeviasiTidak.umur, 2))
    ) *
    (1 / Math.sqrt(2 * Math.PI * standarDeviasiTidak.tinggi)) *
    Math.exp(
      -Math.pow(tinggi_ - meanTidak.tinggi, 2) /
        (2 * Math.pow(standarDeviasiTidak.tinggi, 2))
    ) *
    (1 / Math.sqrt(2 * Math.PI * standarDeviasiTidak.berat)) *
    Math.exp(
      -Math.pow(berat_ - meanTidak.berat, 2) /
        (2 * Math.pow(standarDeviasiTidak.berat, 2))
    ) *
    probabilitasPriorTidak;

  let probabilitasYa =
    (1 / Math.sqrt(2 * Math.PI * standarDeviasiYa.umur)) *
    Math.exp(
      -Math.pow(umur_ - meanYa.umur, 2) /
        (2 * Math.pow(standarDeviasiYa.umur, 2))
    ) *
    (1 / Math.sqrt(2 * Math.PI * standarDeviasiYa.tinggi)) *
    Math.exp(
      -Math.pow(tinggi_ - meanYa.tinggi, 2) /
        (2 * Math.pow(standarDeviasiYa.tinggi, 2))
    ) *
    (1 / Math.sqrt(2 * Math.PI * standarDeviasiYa.berat)) *
    Math.exp(
      -Math.pow(berat_ - meanYa.berat, 2) /
        (2 * Math.pow(standarDeviasiYa.berat, 2))
    ) *
    probabilitasPriorYa;

  let hasil = probabilitasTidak > probabilitasYa ? "Tidak" : "Ya";
  dataPrediksi.push({
    umur_,
    tinggi_,
    berat_,
    hasil,
  });

  // hitungManual(dataUji);
  return hasil;
};

const hitungManual = async (dataUji) => {
  for (let i = 0; i < 5; i++) {
    let persentDataLatih = 100 - 20 * i;
    let persentDataUji = 20 * i + 20;

    let dataLatihBaru = dataLatih.slice(
      0,
      Math.round((persentDataLatih / 100) * dataLatih.length)
    );
    let dataUjiBaru = dataUji.slice(
      0,
      Math.round((persentDataUji / 100) * dataUji.length)
    );

    let gabungData = [...dataLatihBaru, ...dataUjiBaru];

    let jumlahData = gabungData.length;
    let jumlahDataTidak = 0;
    let jumlahDataYa = 0;
    let sumTidak = {
      umur: 0,
      tinggi: 0,
      berat: 0,
    };
    let sumYa = {
      umur: 0,
      tinggi: 0,
      berat: 0,
    };
    let standarDeviasiTidak = {
      umur: 0,
      tinggi: 0,
      berat: 0,
    };
    let standarDeviasiYa = {
      umur: 0,
      tinggi: 0,
      berat: 0,
    };

    gabungData.forEach((item) => {
      const { stunting } = item;
      if (stunting === "Tidak") {
        jumlahDataTidak++;
        sumTidak.umur += item.umur;
        sumTidak.tinggi += item.tinggi;
        sumTidak.berat += item.berat;
      } else {
        jumlahDataYa++;
        sumYa.umur += item.umur;
        sumYa.tinggi += item.tinggi;
        sumYa.berat += item.berat;
      }
    });

    let probabilitasPriorTidak = jumlahDataTidak / jumlahData;
    let probabilitasPriorYa = jumlahDataYa / jumlahData;
    let meanTidak = {
      umur: sumTidak.umur / jumlahDataTidak,
      tinggi: sumTidak.tinggi / jumlahDataTidak,
      berat: sumTidak.berat / jumlahDataTidak,
    };
    let meanYa = {
      umur: sumYa.umur / jumlahDataYa,
      tinggi: sumYa.tinggi / jumlahDataYa,
      berat: sumYa.berat / jumlahDataYa,
    };

    gabungData.forEach((item) => {
      const { stunting } = item;
      if (stunting === "Tidak") {
        standarDeviasiTidak.umur += Math.pow(item.umur - meanTidak.umur, 2);
        standarDeviasiTidak.tinggi += Math.pow(
          item.tinggi - meanTidak.tinggi,
          2
        );
        standarDeviasiTidak.berat += Math.pow(item.berat - meanTidak.berat, 2);
      } else {
        standarDeviasiYa.umur += Math.pow(item.umur - meanYa.umur, 2);
        standarDeviasiYa.tinggi += Math.pow(item.tinggi - meanYa.tinggi, 2);
        standarDeviasiYa.berat += Math.pow(item.berat - meanYa.berat, 2);
      }
    });

    standarDeviasiTidak.umur = Math.sqrt(
      standarDeviasiTidak.umur / (jumlahDataTidak - 1)
    );
    standarDeviasiTidak.tinggi = Math.sqrt(
      standarDeviasiTidak.tinggi / (jumlahDataTidak - 1)
    );
    standarDeviasiTidak.berat = Math.sqrt(
      standarDeviasiTidak.berat / (jumlahDataTidak - 1)
    );

    standarDeviasiYa.umur = Math.sqrt(
      standarDeviasiYa.umur / (jumlahDataYa - 1)
    );
    standarDeviasiYa.tinggi = Math.sqrt(
      standarDeviasiYa.tinggi / (jumlahDataYa - 1)
    );
    standarDeviasiYa.berat = Math.sqrt(
      standarDeviasiYa.berat / (jumlahDataYa - 1)
    );

    let dataPrediksi = [];
    gabungData.forEach((item) => {
      const { umur, tinggi, berat, stunting } = item;
      let probabilitasTidak =
        (1 / Math.sqrt(2 * Math.PI * standarDeviasiTidak.umur)) *
        Math.exp(
          -Math.pow(umur - meanTidak.umur, 2) /
            (2 * Math.pow(standarDeviasiTidak.umur, 2))
        ) *
        (1 / Math.sqrt(2 * Math.PI * standarDeviasiTidak.tinggi)) *
        Math.exp(
          -Math.pow(tinggi - meanTidak.tinggi, 2) /
            (2 * Math.pow(standarDeviasiTidak.tinggi, 2))
        ) *
        (1 / Math.sqrt(2 * Math.PI * standarDeviasiTidak.berat)) *
        Math.exp(
          -Math.pow(berat - meanTidak.berat, 2) /
            (2 * Math.pow(standarDeviasiTidak.berat, 2))
        ) *
        probabilitasPriorTidak;

      let probabilitasYa =
        (1 / Math.sqrt(2 * Math.PI * standarDeviasiYa.umur)) *
        Math.exp(
          -Math.pow(umur - meanYa.umur, 2) /
            (2 * Math.pow(standarDeviasiYa.umur, 2))
        ) *
        (1 / Math.sqrt(2 * Math.PI * standarDeviasiYa.tinggi)) *
        Math.exp(
          -Math.pow(tinggi - meanYa.tinggi, 2) /
            (2 * Math.pow(standarDeviasiYa.tinggi, 2))
        ) *
        (1 / Math.sqrt(2 * Math.PI * standarDeviasiYa.berat)) *
        Math.exp(
          -Math.pow(berat - meanYa.berat, 2) /
            (2 * Math.pow(standarDeviasiYa.berat, 2))
        ) *
        probabilitasPriorYa;

      let hasil = probabilitasTidak > probabilitasYa ? "Tidak" : "Ya";
      dataPrediksi.push({
        umur,
        tinggi,
        berat,
        stunting,
        hasil,
      });
    });

    let Ya = 0;
    let Tidak = 0;
    dataPrediksi.forEach((item) => {
      const { stunting, hasil } = item;
      if (stunting === hasil) {
        Ya++;
      } else {
        Tidak++;
      }
    });

    let accuracy = (Ya / (Ya + Tidak)) * 100;
    console.log(
      `Data Latih: ${dataLatihBaru.length} | Data Uji: ${dataUjiBaru.length} | Akurasi: ${accuracy}%`
    );
  }
};

module.exports = hitungProbabilitasStunting;
