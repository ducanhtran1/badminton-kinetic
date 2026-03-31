import { Product, Review } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "VOLTAGE X-100 PRECISION",
    category: "Rackets",
    price: 249,
    oldPrice: 299,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6HKx65ljkHjAV6NHe4i_VhdPxYcfQVykS0ktPnXeueP3LfAVY2wnGiH6hFiEXwfJaA8UHX6dZRuywsbv4rF2r9W8qdMkr5s11gfyoGXpY8EN9bI-7Ma3FylyOteC2r7V_cSb2tsTkdP_fW-4hjsZPAh_Jy3hHa-0BbTain04uZ2wd5zY4UGfoYRGSN8yAK2utqMbQ11TYycA0b3c3KR4tR8jiCcftVVM-LIbw3SO9mcxOdWAvreUS7fMUJ0qtZ6du9cygGBaUrI",
    tag: "Limited Edition",
    rating: 4,
    reviewsCount: 48,
    description: "Engineered for explosive smashes and surgical net play. The Voltage X-100 features our signature Aerodynamic Edge frame, reducing air resistance by 14% to maximize swing speed.",
    specs: [
      { label: "Weight", value: "3U (88g)" },
      { label: "Balance", value: "Head Heavy" },
      { label: "Grip Size", value: "G5 Premium" },
      { label: "Max Tension", value: "32 LBS" }
    ],
    performance: [
      { label: "Repulsion Power", value: 95 },
      { label: "Control Precision", value: 90 },
      { label: "Swing Speed", value: 92 }
    ]
  },
  {
    id: "2",
    name: "KINETIC FLIGHT X1",
    category: "Shoes",
    price: 189,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsr5lfhEdVu5kYfvnwiDmH-1gU-335qF_ZHgs62bnW0B-PDsYNkXs8yCvWjukdcgHCj4OMRGq3mSWzv_K5yWibd9oWK7RAzE_-x_VJ7vBIu7mmNulKj5VAz4heY4tLBRCAbWydcP2A4ByowYkWqnZ4GwVh5o3F_3HliWxKtUOUQR9ceWerOJwKL5BK8YyFhTKk7D72DHFQ9LiWevigvyk41kPYZI5rxSOhwQ-f1tUg17dt7ylfV81nBNhOc_YR84sqvHPzEO63Weo",
    tag: "Professional",
    description: "Ultra-lightweight court shoes designed for maximum lateral stability and explosive vertical jumps.",
    specs: [
      { label: "Weight", value: "310g (Size 9)" },
      { label: "Cushioning", value: "Power Cushion+" },
      { label: "Outsole", value: "Radial Blade" }
    ]
  },
  {
    id: "3",
    name: "TOURNAMENT BAG PRO",
    category: "Bags",
    price: 125,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVQPP-A-7FYiU3tL8sZskcA35ryi1qO2AmBDdKtNrgUT9AIFSDOFGqvK05UuFzxInetVKTqzbNJhVlxVuruA65SYBBAQ5pimlWXkMY0K-m6KTrXo_UGptSVc8NdoO_KluMNHJj2VBnnY2Pvvhoa8QcYYJr8dMFRXunV4dAaxOLW-Qo1UEPdjH64iqFQE9i50jyBdSSupPevUCX6SG_2NOp9jUliNKT0okvCy3djnUKndQ7mTyDiRUdzAkyj7NPA8EDakV2OuU5dhw",
    tag: "Hot Item"
  },
  {
    id: "4",
    name: "PREMIUM SHUTTLE PACK",
    category: "Shuttles",
    price: 32,
    oldPrice: 45,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkutFttMLFaA516IIiOXskH6LwzoVKvTO4ATVsabucCDHGypCrspbC30KoIT2H8za-0bv992LWzZ1kDFjrd9BM_WqETzLk2WgFFnevcbY0vfbJeqx-6Wc30gGrlh0jBMer_21w3Iw2zY06_dilQqm_Yp8NvEjUvV5ba6smuiJBEBpqhYIujdfgA-2VfDIvdAVGze-gjAkXOepj14hLoqHsbBm8oaJ3awST9FX7coj_dEZb_-DskwST2xudvh9Ef93kWaVDVi2lyOA",
    tag: "End of Season"
  },
  {
    id: "5",
    name: "AeroGlide Z-100",
    category: "Shoes",
    price: 189,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAsoZ31g9SYkbIZ6hq5RkhTQNE33yLP0qE3LcBrMhtx7zo0f8QiFBz_pzFuyXtiFwjrAfmN2RrY7dE6vq-7DC3Oi8bY7FRQioJWn4oMIgIjdCmFQz2Icv8THwKwEQxcACEB4GLnxs89mLc9-UzZuLRudHjs1KokTqlxWLFjRNlyxrZYWg1AsrtMVNlQXGZyxPnAjhiMxVTVnjBgxE5peXXRBZ283eRr0UlB45cVY3-mkpA9uI8jLt8UQ5wiLr-L5dXop3wtVzV3c",
    tag: "New",
    rating: 4.9,
    reviewsCount: 124
  },
  {
    id: "6",
    name: "Apex Gold Shuttles",
    category: "Shuttles",
    price: 32,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_bzUfx66_0jvLXFKRe5qw6RYPRWEqFTan5UgATDYX-4H6ZucoA52jJAfagalVqzjsvASyniF3KR6Bpthqk1en_MCt6DGJs-mlJhFRqrPCeQw_0ZZDSBG5wJ_V1JP_1I8eYi9GUU5NTvLwXx39Nk7RSGk0uYT3qO6NYiJ_JALJBIT7DL78yhHXSM4F-EgIyqFukrDT0uzhVAV_FnNxI2gIZliIvL1_ZuXmvWlQosQmkB_OrlRHtdwiUqQ7ApMdmdvao_Ghp71z4xY",
    tag: "Premium",
    rating: 5.0,
    reviewsCount: 89
  },
  {
    id: "7",
    name: "Voltric Kinetic X",
    category: "Rackets",
    price: 245,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAeaHajFtbc71ZhmvxINiv2uO70chG11VjZMoqhIeyD6QcpAsLGyCNLNrCRqOSrKwA5-8bNostEVSww5kxTL8jrW0uHIhvEcsbp6KVsvILW_xiX8l_Bxy8W0_O0gqGlDIfVItmo7312DUWqJBrnYKa1r_eWxmyscIy_4OX-mTQnebmzn6bfBSmf2HCj9Op8ItyOHyUQIjes32GN8lxEBmN9opBVNkt0OnI4a7KfRo6tdOh6VTW7VkrytLONWkQgxS6sPpquRWuMfU",
    rating: 4.8,
    reviewsCount: 210,
    description: "A heavy-head racket designed for offensive players who want to dominate the backcourt with powerful smashes.",
    specs: [
      { label: "Weight", value: "4U (83g)" },
      { label: "Balance", value: "Head Heavy" },
      { label: "Flex", value: "Stiff" }
    ],
    performance: [
      { label: "Repulsion Power", value: 98 },
      { label: "Control Precision", value: 85 },
      { label: "Swing Speed", value: 88 }
    ]
  },
  {
    id: "8",
    name: "Tour Master Bag",
    category: "Bags",
    price: 95,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbXr4B5DAiWMAJvKRyI8QZH34LozgCKzLjH-H6ffj2sy73wBLCXpMyhDWdjqyfVUMd_nWPG49tHuRAjyb3Zyp8ITmgd17IEN_IQS2_azXXjLiljLIV96Uc3JDH9G-L4tZfTfY36LK7NbuemvjCl0NIC98XwqYLOdWxKeDCGe700k9_YyTbTzkZUySw4L2tW_8R7xXqbK1Nva0WMjbjr5WL4iwCdpPWiOBV5SXqJfpLrrVYIL6uaN7LnmMMwPV3H1g8X048DXNVkcI",
    rating: 4.7,
    reviewsCount: 45
  },
  {
    id: "9",
    name: "Power Cushion 65 Z3",
    category: "Shoes",
    price: 155,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfd6Xb_giPH5jUjfjif7k-sIwIefVsJjFBqRsILYRo6KEzZaT79L-RORa1uIrJ4ls28mEcHO--S4x_DSzd4iUBBAr2SfnRJDOCvngKWNPvsg1QUPNW7X7lHomOqzUr8e52bzZVVb-COTfyp3SibG5Qn2uzWoRO18i2MGrfJrxNMEqotYKs-7UaTACjNFXqyrPzAnksQPPTOmEN3T50DeKH1ts7IYQpMLKwOvqNrbz84-ohaXTJaYcLyEZNrtjjwIpk6ezC-oxxmbw",
    tag: "In Stock"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Marcus Soh",
    role: "PRO CIRCUIT PLAYER",
    rating: 5,
    comment: "The swing speed is terrifying. I've never felt more confident in my mid-court drives.",
    avatar: "MS"
  },
  {
    id: "r2",
    author: "Kevin Lim",
    role: "COACH / EXPERT",
    rating: 5,
    comment: "A bit head-heavy but surprisingly easy to maneuver at the net. Truly a precision tool.",
    avatar: "KL"
  }
];

export const CATEGORIES = ["Rackets", "Shuttles", "Shoes", "Bags", "Apparel"];
