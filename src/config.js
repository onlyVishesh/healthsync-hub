import mentor1 from "./assets/images/mentor1.jpg";
import mentor2 from "./assets/images/mentor2.jpg";
import mentor3 from "./assets/images/mentor3.jpg";
import mentor4 from "./assets/images/mentor4.jpg";

export const mentorData = [
  {
    id: 1,
    profile: mentor1,
    name: "Dr. Manoj Goel",
    place: "Joint Director | KIET Ghaziabad",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    links: {
      mail: "url",
      linkedin: "url",
      insta: "url",
    },
  },
  {
    id: 2,
    profile: mentor2,
    name: "Rohit Sharma",
    place: "SNE | Microsoft",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    links: {
      mail: "url",
      linkedin: "url",
      insta: "url",
    },
  },
  {
    id: 3,
    profile: mentor3,
    name: "Dr. Vineet Sharma",
    place: "HOD-CSE | KIET, Ghaziabad",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    links: {
      mail: "url",
      linkedin: "url",
      insta: "url",
    },
  },
  {
    id: 4,
    profile: mentor4,
    name: "Dr. Rahat Ullah Khan",
    place: "Professor | KIET, Ghaziabad",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    links: {
      mail: "url",
      linkedin: "url",
      insta: "url",
    },
  },
];

import feedback1 from "./assets/images/feedback1.png";
import feedback2 from "./assets/images/feedback2.png";
import feedback3 from "./assets/images/feedback3.png";

export const feedbackData = [
  {
    id: 1,

    profile: feedback1,
    para: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    stars: 4,
    name: "Sandhika Galih",
    text: "Dosen di WPU",
  },
  {
    id: 2,

    profile: feedback2,
    para: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    stars: 3,
    name: "Syauqizaidan Khairan Khalaf",
    text: "Mahasiswa di WPU",
  },
  {
    id: 3,

    profile: feedback3,
    para: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    stars: 4,
    name: "Petrik Sesat",
    text: "Warga di Bikini Bottom",
  },
  {
    id: 4,

    profile: feedback1,
    para: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    stars: 4,
    name: "Sandhika Galih",
    text: "Dosen di WPU",
  },
  {
    id: 5,

    profile: feedback2,
    para: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    stars: 3,
    name: "Syauqizaidan Khairan Khalaf",
    text: "Mahasiswa di WPU",
  },
  {
    id: 6,

    profile: feedback3,
    para: "Destinize membantu saya Mencari spot tempat wisata baru di Indonesia dengan Mudah",
    stars: 4,
    name: "Petrik Sesat",
    text: "Warga di Bikini Bottom",
  },
];
export const hospitalData = [
  {
    id: 1,
    name: "AIIMS, New Delhi",
    detail:
      "Welcome to All India Institute of Medical Sciences (AIIMS), New Delhi",
    address: "Ansari Nagar, New Delhi, Delhi 110029",
    imageURL:
      "https://media.assettype.com/TNIE%2Fimport%2F2022%2F7%2F23%2Foriginal%2Faiims.jpg?w=1200&auto=format%2Ccompress&fit=max",
    panoramaURL: "https://example.com/panorama",
    specialize: ["Orthopedics", "Ophthalmology", "Neurology"],
    floors: [
      {
        "Ground Floor": ["30 rooms", "Emergency Hall", "Pharmacy"],
      },
      { "First Floor": ["10 rooms", "ICU", "Pediatrics"] },
      { "Second Floor": ["5 rooms", "Radiology"] },
    ],
  },
  {
    id: 2,
    name: "Artemis Hospital, Gurgaon",
    detail: "Welcome to Artemis Hospital, Gurgaon",
    address: "Sector 51, Gurugram, Haryana 122001",
    imageURL:
      "https://static.toiimg.com/thumb/msid-59008480,imgsize-84832,width-400,resizemode-4/59008480.jpg",
    panoramaURL: "https://example.com/panorama2",
    specialize: ["Cardiology", "Dermatology", "Emergency Medicine"],
    floors: [
      {
        "Ground Floor": ["25 rooms", "Emergency Hall", "Pharmacy"],
      },
      { "First Floor": ["8 rooms", "ICU", "Pediatrics"] },
      { "Second Floor": ["3 rooms", "Radiology"] },
    ],
  },
  {
    id: 3,
    name: "Max Super Speciality Hospital, Saket",
    detail: "Welcome to Max Super Speciality Hospital, Saket",
    address: "1, 2, Press Enclave Road, Saket, New Delhi, Delhi 110017",
    imageURL:
      "https://iymonhealthcare.com/wp-content/uploads/2023/06/Max_Super_Speciality_Hospital_Saket_.jpg",
    panoramaURL: "https://example.com/panorama3",
    specialize: ["Oncology", "Urology", "Pulmonology"],
    floors: [
      {
        "Ground Floor": ["30 rooms", "Emergency Hall", "Pharmacy"],
      },
      {
        "First Floor": ["10 rooms", "ICU", "Pediatrics"],
      },
      {
        "Second Floor": ["4 rooms", "Radiology"],
      },
    ],
  },
  {
    id: 4,
    name: "Medanta - The Medicity, Gurgaon",
    detail: "Welcome to Medanta - The Medicity, Gurgaon",
    address: "Sector 38, Gurugram, Haryana 122001",
    imageURL:
      "https://mediglobus.com/wp-content/uploads/2018/05/medanta-14-e1530281055543.jpg.webp",
    panoramaURL: "https://example.com/panorama4",
    specialize: ["Gynecology", "Pediatrics", "Internal Medicine"],
    floors: [
      {
        "Ground Floor": ["35 rooms", "Emergency Hall", "Cafeteria"],
      },
      {
        "First Floor": ["10 rooms", "ICU", "Radiology"],
      },
      {
        "Second Floor": ["5 rooms", "Surgery Suites"],
      },
    ],
  },
  {
    id: 5,
    name: "Narayana Health City, Bangalore",
    detail: "Welcome to Narayana Health City, Bangalore",
    address:
      "258/A, Bommasandra Industrial Area, Anekal Taluk, Hosur Road, Bangalore, Karnataka 560099",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mazumdar_Shaw_Medical_Center%2C_Narayana_Health_City%2C_Bangalore.jpg/220px-Mazumdar_Shaw_Medical_Center%2C_Narayana_Health_City%2C_Bangalore.jpg",
    panoramaURL: "https://example.com/panorama5",
    specialize: ["Orthopedics", "Ophthalmology", "Neurology"],
    floors: [
      {
        "Ground Floor": ["28 rooms", "Emergency Hall", "Pharmacy"],
      },
      { "First Floor": ["7 rooms", "ICU", "Pediatrics"] },
      { "Second Floor": ["3 rooms", "Radiology"] },
    ],
  },
  {
    id: 6,
    name: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    detail: "Welcome to Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    address:
      "Rao Saheb Achutrao Patwardhan Marg, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053",
    imageURL:
      "https://safartibbi.com/wp-content/uploads/2022/11/kokilaben-4.jpg",
    panoramaURL: "https://example.com/panorama6",
    specialize: ["Gynecology", "Pediatrics", "Internal Medicine"],
    floors: [
      {
        "Ground Floor": ["22 rooms", "Emergency Hall"],
      },
      { "First Floor": ["6 rooms", "ICU", "Laboratory"] },
      { "Second Floor": ["2 rooms", "Dialysis"] },
    ],
  },
];
