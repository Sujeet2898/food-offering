const foodData = [
  {
    id: 1,
    title: "1. Makhan Mishri",
    description:
      "Fresh snowy-white butter topped with sparkling crystalline rock sugar, served in a golden bowl.",
    image: "/images/1.png",
  },
  {
    id: 2,
    title: "2. Kheer (Payasam)",
    description:
      "Creamy rice pudding garnished with almonds and saffron strands in a deep golden bowl.",
    image: "/images/2.png",
  },
  {
    id: 3,
    title: "3. Rabri",
    description:
      "Thick, condensed milk with a rich clotted texture, delicately yellowish-white in color.",
    image: "/images/3.png",
  },
  {
    id: 4,
    title: "4. Rasgulla",
    description:
      "Soft spongy white dumplings soaked in light sugar syrup, served chilled.",
    image: "/images/4.png",
  },
  {
    id: 5,
    title: "5. Jalebi",
    description:
      "Bright orange crispy spirals soaked in fragrant sugar syrup, neatly stacked.",
    image: "/images/5.png",
  },
  {
    id: 6,
    title: "6. Malpua",
    description:
      "Golden-brown fried pancakes glazed with sugar syrup and crushed pistachios.",
    image: "/images/6.png",
  },
  {
    id: 7,
    title: "7. Moong Dal Halwa",
    description:
      "Rich golden-yellow halwa with a grainy texture, glistening with pure ghee.",
    image: "/images/7.png",
  },
  {
    id: 8,
    title: "8. Ghevar",
    description:
      "Porous honeycomb-style sweet topped with creamy rabri and nuts.",
    image: "/images/8.png",
  },
  {
    id: 9,
    title: "9. Peda",
    description:
      "Soft milk fudge discs with a delicate pistachio or cardamom garnish.",
    image: "/images/9.png",
  },
  {
    id: 10,
    title: "10. Motichoor Ladoo",
    description:
      "Bright orange laddoos made from tiny fried gram flour pearls.",
    image: "/images/10.png",
  },

  {
    id: 11,
    title: "11. Kaju Katli",
    description:
      "Smooth diamond-shaped cashew fudge adorned with edible silver leaf.",
    image: "/images/11.png",
  },
  {
    id: 12,
    title: "12. Mohanbhog",
    description:
      "Saffron-infused semolina pudding rich with ghee, raisins, and cashews.",
    image: "/images/12.png",
  },
  {
    id: 13,
    title: "13. Shrikhand",
    description:
      "Silky strained yogurt dessert flavored with saffron and cardamom.",
    image: "/images/13.png",
  },
  {
    id: 14,
    title: "14. Gulab Jamun",
    description:
      "Soft deep-brown milk dumplings soaked in rose-scented sugar syrup.",
    image: "/images/14.png",
  },
  {
    id: 15,
    title: "15. Kalakand",
    description:
      "Moist milk cake with a grainy texture, topped with chopped nuts.",
    image: "/images/15.png",
  },
  {
    id: 16,
    title: "16. Sandesh",
    description:
      "Delicate Bengali sweet made from fresh chhena, lightly sweetened.",
    image: "/images/16.png",
  },
  {
    id: 17,
    title: "17. Balushahi",
    description:
      "Flaky doughnut-shaped pastry with a lightly crystallized sugar glaze.",
    image: "/images/17.png",
  },
  {
    id: 18,
    title: "18. Gajar Ka Halwa",
    description:
      "Slow-cooked carrot pudding enriched with milk, khoya, and ghee.",
    image: "/images/18.png",
  },
  {
    id: 19,
    title: "19. Nadia Kora",
    description:
      "Soft coconut ladoos made with grated coconut and sugar.",
    image: "/images/19.png",
  },
  {
    id: 20,
    title: "20. Shakkarpara",
    description:
      "Crunchy diamond-shaped fried biscuits coated with sugar glaze.",
    image: "/images/20.png",
  },

  {
    id: 21,
    title: "21. Mathri",
    description:
      "Crisp, flaky salted crackers seasoned with ajwain and black pepper.",
    image: "/images/21.png",
  },
  {
    id: 22,
    title: "22. Pakora",
    description:
      "Assorted golden fritters made from vegetables dipped in gram flour batter.",
    image: "/images/22.png",
  },
  {
    id: 23,
    title: "23. Samosa",
    description:
      "Crispy triangular pastry filled with spiced potato stuffing.",
    image: "/images/23.png",
  },
  {
    id: 24,
    title: "24. Kachori",
    description:
      "Puffed flaky pastry stuffed with spiced lentils or peas.",
    image: "/images/24.png",
  },
  {
    id: 25,
    title: "25. Aloo Tikki",
    description:
      "Crispy pan-fried potato cutlets with a soft flavorful center.",
    image: "/images/25.png",
  },
  {
    id: 26,
    title: "26. Murmura Mix",
    description:
      "Light puffed rice mixed with peanuts and crunchy sev.",
    image: "/images/26.png",
  },
  {
    id: 27,
    title: "27. Papad",
    description:
      "Thin crispy lentil wafer, roasted or fried to perfection.",
    image: "/images/27.png",
  },
  {
    id: 28,
    title: "28. Chila",
    description:
      "Soft savory pancakes made from besan or moong dal batter.",
    image: "/images/28.png",
  },
  {
    id: 29,
    title: "29. Dahi Vada",
    description:
      "Soft lentil dumplings soaked in yogurt with sweet and tangy chutneys.",
    image: "/images/29.png",
  },
  {
    id: 30,
    title: "30. Bhujia / Sev",
    description:
      "Fine crispy fried strands offering a light and crunchy texture.",
    image: "/images/30.png",
  },

  {
    id: 31,
    title: "31. Poori",
    description:
      "Puffed deep-fried wheat bread with a golden crisp exterior.",
    image: "/images/31.png",
  },
  {
    id: 32,
    title: "32. Roti / Chapati",
    description:
      "Soft whole-wheat flatbread brushed lightly with ghee.",
    image: "/images/32.png",
  },
  {
    id: 33,
    title: "33. Khichdi",
    description:
      "Comforting rice and lentil dish topped with melting ghee.",
    image: "/images/33.png",
  },
  {
    id: 34,
    title: "34. Kadhi",
    description:
      "Tangy yogurt-based curry tempered with spices and curry leaves.",
    image: "/images/34.png",
  },
  {
    id: 35,
    title: "35. Dal",
    description:
      "Slow-cooked lentils finished with aromatic cumin and chili tadka.",
    image: "/images/35.png",
  },
  {
    id: 36,
    title: "36. Jeera Rice",
    description:
      "Fluffy basmati rice flavored with roasted cumin seeds.",
    image: "/images/36.png",
  },
  {
    id: 37,
    title: "37. Curd Rice",
    description:
      "Cooling rice mixed with yogurt and tempered spices.",
    image: "/images/37.png",
  },
  {
    id: 38,
    title: "38. Saag",
    description:
      "Rustic green mash of spinach or mustard greens with butter.",
    image: "/images/38.png",
  },
  {
    id: 39,
    title: "39. Baingan Sabzi",
    description:
      "Soft eggplant cooked in spiced gravy with rich earthy flavors.",
    image: "/images/39.png",
  },
  {
    id: 40,
    title: "40. Lauki Sabzi",
    description:
      "Light bottle gourd curry prepared in a simple sattvic style.",
    image: "/images/40.png",
  },

  {
    id: 41,
    title: "41. Aloo Tamatar",
    description:
      "Soft potato cubes cooked in a glossy tomato-based gravy.",
    image: "/images/41.png",
  },
  {
    id: 42,
    title: "42. Parwal Sabzi",
    description:
      "Lightly sautéed pointed gourd with mild spices.",
    image: "/images/42.png",
  },
  {
    id: 43,
    title: "43. Kaddu Sabzi",
    description:
      "Tender pumpkin cubes cooked in a lightly spiced yellow gravy.",
    image: "/images/43.png",
  },
  {
    id: 44,
    title: "44. Methi Aloo",
    description:
      "Potato cubes tossed with fresh fenugreek leaves.",
    image: "/images/44.png",
  },
  {
    id: 45,
    title: "45. Arbi Fry",
    description:
      "Crispy fried colocasia slices seasoned with mild spices.",
    image: "/images/45.png",
  },
  {
    id: 46,
    title: "46. Bhindi Sabzi",
    description:
      "Tender sautéed okra cooked in a dry temple-style preparation.",
    image: "/images/46.png",
  },
  {
    id: 47,
    title: "47. Beetroot Sabzi",
    description:
      "Lightly sautéed beetroot with a deep red glossy finish.",
    image: "/images/47.png",
  },
  {
    id: 48,
    title: "48. Carrot Beans Sabzi",
    description:
      "Fresh carrots and beans cooked lightly for a sattvic taste.",
    image: "/images/48.png",
  },
  {
    id: 49,
    title: "49. Shakarkandi Sabzi",
    description:
      "Roasted sweet potato cubes with caramelized edges.",
    image: "/images/49.png",
  },
  {
    id: 50,
    title: "50. Mixed Sattvic Sabzi",
    description:
      "Soft mixed vegetables cooked in a light comforting gravy.",
    image: "/images/50.png",
  },

  {
    id: 51,
    title: "51. Panchamrit & Ganga Jal",
    description:
      "Sacred offering of Panchamrit accompanied by pure holy water.",
    image: "/images/51.png",
  },
  {
    id: 52,
    title: "52. Cooling Milky Drinks",
    description:
      "Lassi, chaas, and saffron-infused badam milk served chilled.",
    image: "/images/52.png",
  },
  {
    id: 53,
    title: "53. Tropical Fruits",
    description:
      "Coconut water, ripe mango slices, and fresh banana.",
    image: "/images/53.png",
  },
  {
    id: 54,
    title: "54. Orchard Fruits",
    description:
      "Fresh apples and bunches of green and black grapes.",
    image: "/images/54.png",
  },
  {
    id: 55,
    title: "55. Dry Fruit Trio",
    description:
      "Premium almonds, cashews, and pistachios arranged neatly.",
    image: "/images/55.png",
  },
  {
    id: 56,
    title: "56. Chutney, Pickle & Paan",
    description:
      "Mint chutney, spicy pickle, and fresh paan leaves to conclude the meal.",
    image: "/images/56.png",
  },
];

export default foodData;
