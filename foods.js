const foods = [
  {
    name: "khichdi",
    img: "https://www.chezshuchi.com/images/khichdi11.JPG",
    nutrition: {
      gi: 45,
      servingSize: 196, // ! grams
      calories: 236, // kcal
      carbs: 41, // gm
      fats: 3.4, // gm
      cholestrol: 6.6, // mg
      potassium: 426, // mg
      sodium: 123, // mg
      iron: 3.06, // mg
      protein: 11, // gm
    },
  },
  {
    name: "dosa",
    nutrition: {
      gi: 68,
      servingSize: 97,
      calories: 168,
      carbs: 29,
      fats: 3.7,
      cholestrol: 0,
      potassium: 76,
      sodium: 94,
      iron: 8.4,
      protein: 3.9,
    },
  },
  {
    name: "white rice",
    nutrition: {
      gi: 89,
      servingSize: 158,
      calories: 205,
      carbs: 45,
      fats: 0.4,
      cholestrol: 0,
      potassium: 55,
      sodium: 1.6,
      iron: 1.97,
      protein: 4.3,
    },
  },
  {
    name: "baguette",
    nutrition: {
      gi: 95,
      servingSize: 324,
      calories: 881,
      carbs: 168,
      fats: 7.8,
      cholestrol: 0,
      potassium: 379,
      sodium: 1950,
      iron: 12.6,
      protein: 35,
    },
  },
  {
    name: "almond milk",
    nutrition: {
      gi: 25,
      servingSize: 249,
      calories: 56,
      carbs: 8.1,
      fats: 2.5,
      cholestrol: 0,
      potassium: 37,
      sodium: 9.6,
      iron: 1.98,
      protein: 1.1,
    },
  },
  {
    name: "mac & cheese",
    nutrition: {
      gi: 64,
      servingSize: 198,
      calories: 376,
      carbs: 47,
      fats: 16,
      cholestrol: 5.9,
      potassium: 255,
      sodium: 669,
      iron: 1.98,
      protein: 9.7,
    },
  },
  {
    name: "egg",
    nutrition: {
      gi: 42,
      servingSize: 50,
      calories: 72,
      carbs: 0.4,
      fats: 4.8,
      cholestrol: 186,
      potassium: 69,
      sodium: 71,
      iron: 0.88,
      protein: 6.3,
    },
  },
  {
    name: "brown rice",
    img: "https://unsplash.com/photos/hPbOIeRuuaE",
    nutrition: {
      gi: 42,
      servingSize: 98,
      calories: 109,
      carbs: 23,
      fats: 0.18,
      cholestrol: 0,
      potassium: 77,
      sodium: 1,
      iron: 1.83,
      protein: 2.3,
    },
  },
  {
    name: "bean taco",
    img:
      "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGFjb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    nutrition: {
      gi: 42,
      servingSize: 179,
      calories: 313,
      carbs: 1.98,
      fats: 3.6,
      cholestrol: 1.62,
      potassium: 2.34,
      sodium: 5.22,
      iron: 2.88,
      protein: 6.2,
    },
  },
  {
    name: "donut",
    img: "https://unsplash.com/photos/q54Oxq44MZs",
    nutrition: {
      gi: 42,
      servingSize: 60,
      calories: 253,
      carbs: 29,
      fats: 14,
      cholestrol: 18,
      potassium: 61,
      sodium: 190,
      iron: 14.22,
      protein: 1,
    },
  },

  {
    name: "sweet corn soup",
    img: "https://unsplash.com/photos/Qc6He1Wdj8Y",
    nutrition: {
      gi: 56,
      servingSize: 501,
      calories: 245,
      carbs: 2.88,
      fats: 1.8,
      cholestrol: 0,
      potassium: 479,
      sodium: 1410,
      iron: 1.53,
      protein: 5.8,
    },
  },
  {
    name: "french fries",
    img: "https://unsplash.com/photos/z5WeWhU6Aqc",
    nutrition: {
      gi: 75,
      servingSize: 117,
      calories: 365,
      carbs: 2.88,
      fats: 17,
      cholestrol: 0,
      potassium: 677,
      sodium: 246,
      iron: 0.95,
      protein: 4,
    },
  },

  {
    name: "burrito",
    img: "https://unsplash.com/photos/50KffXbjIOg",
    nutrition: {
      gi: 42,
      servingSize: 241,
      calories: 434,
      carbs: 3.42,
      fats: 16,
      cholestrol: 29,
      potassium: 492,
      sodium: 1087,
      iron: 4.32,
      protein: 17,
    },
  },
  {
    name: "dosa",
    img: "https://images.app.goo.gl/5MtxsUWNxvKxoNqY6",
    nutrition: {
      gi: 42,
      servingSize: 97,
      calories: 168,
      carbs: 1.8,
      fats: 1.08,
      cholestrol: 0,
      potassium: 36,
      sodium: 72,
      iron: 0.36,
      protein: 1.62,
    },
  },
  {
    name: "pizza",
    img: "https://unsplash.com/photos/MqT0asuoIcU",
    nutrition: {
      gi: 30,
      servingSize: 107,
      calories: 285,
      carbs: 2.16,
      fats: 2.7,
      cholestrol: 1.08,
      potassium: 184,
      sodium: 640,
      iron: 2.7,
      protein: 12,
    },
  },
  {
    name: "pasta",
    img: "https://unsplash.com/photos/t8hTmte4O_g",
    nutrition: {
      gi: 45,
      servingSize: 124,
      calories: 196,
      carbs: 38,
      fats: 1.2,
      cholestrol: 0,
      potassium: 55,
      sodium: 1.2,
      iron: 1.5,
      protein: 7.2,
    },
  },
  {
    name: "noodles",
    img: "https://unsplash.com/photos/rlHF50qkYqE",
    nutrition: {
      gi: 53,
      servingSize: 124,
      calories: 196,
      carbs: 38,
      fats: 1.2,
      cholestrol: 0,
      potassium: 55,
      sodium: 1.2,
      iron: 15.84,
      protein: 7.2,
    },
  },

  {
    name: "baked potato",
    img: "https://unsplash.com/photos/IvLdSWmhfVk",
    nutrition: {
      gi: 85,
      servingSize: 173,
      calories: 161,
      carbs: 37,
      fats: 0.2,
      cholestrol: 0,
      potassium: 926,
      sodium: 17,
      iron: 1.8,
      protein: 4.3,
    },
  },

  {
    name: "Chicken Kebab",
    img:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab-768x768.jpg",
    nutrition: {
      gi: 46,
      servingSize: 202,
      calories: 220,
      carbs: 35,
      fats: 2.2,
      cholestrol: 37,
      potassium: 432,
      sodium: 760,
      iron: 1.188,
      protein: 15,
    },
  },
  {
    name: "Pav Bhaji",
    img:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
    nutrition: {
      gi: 70,
      servingSize: 404,
      calories: 390,
      carbs: 63,
      fats: 11,
      cholestrol: 50,
      potassium: 813,
      sodium: 589,
      iron: 5.76,
      protein: 12,
    },
  },
  {
    name: "Cheese Toast",
    img:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fc3a8c1079c6970caf7188768531f20699d22f0d7",
    nutrition: {
      gi: 39,
      servingSize: 59,
      calories: 208,
      carbs: 15,
      fats: 12,
      cholestrol: 34,
      potassium: 58,
      sodium: 338,
      iron: 1.098,
      protein: 9.3,
    },
  },
  {
    name: "Fruit Yogurt",
    img:
      "https://www.momables.com/wp-content/uploads/2012/03/Fresh-Fruit-Yogurt_feature.jpg",
    nutrition: {
      gi: 33,
      servingSize: 170,
      calories: 162,
      carbs: 32,
      fats: 0.3,
      cholestrol: 3.4,
      potassium: 330,
      sodium: 99,
      iron: 0.126,
      protein: 7.5,
    },
  },
  {
    name: "Smoothie",
    img:
      "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg",
    nutrition: {
      gi: 65,
      servingSize: 202,
      calories: 161,
      carbs: 34,
      fats: 1.7,
      cholestrol: 5,
      potassium: 544,
      sodium: 59,
      iron: 0.396,
      protein: 5.5,
    },
  },
  {
    name: "Burger",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/94/51/4a/tandoori-chicken-burger.jpg",
    nutrition: {
      gi: 61,
      servingSize: 226,
      calories: 540,
      carbs: 40,
      fats: 27,
      cholestrol: 122,
      potassium: 570,
      sodium: 791,
      iron: 5.94,
      protein: 34,
    },
  },
  {
    name: "Vegan Cake",
    img:
      "https://biancazapatka.com/wp-content/uploads/2019/06/best-vegan-chocolate-cake-recipe-cherry-frosting-ganache.jpg",
    nutrition: {
      gi: 47,
      servingSize: 67,
      calories: 262,
      carbs: 38,
      fats: 12,
      cholestrol: 50,
      potassium: 36,
      sodium: 180,
      iron: 0.72,
      protein: 2,
    },
  },

  {
    name: "Tortillas",
    img:
      "https://www.biggerbolderbaking.com/wp-content/uploads/2018/08/1C5A0705.png",
    nutrition: {
      gi: 30,
      servingSize: 49,
      calories: 159,
      carbs: 27,
      fats: 3.5,
      cholestrol: 0,
      potassium: 64,
      sodium: 234,
      iron: 1.62,
      protein: 4.3,
    },
  },
  {
    name: "Moong Salad",
    img:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Green_Moong_Sprout_Salad_With_Capsicum_and_Carrots_Recipe-1.jpg",
    nutrition: {
      gi: 29,
      servingSize: 229,
      calories: 154,
      carbs: 30,
      fats: 0.9,
      cholestrol: 0,
      potassium: 571,
      sodium: 446,
      iron: 2.16,
      protein: 9.2,
    },
  },
  {
    name: "Muesli",
    img:
      "https://4.bp.blogspot.com/-SA1urpuzHQ8/V0jNG31FMsI/AAAAAAAALAU/uiVE1nORaGkDDOCOFEHhqQl9MhYeXcdugCLcB/s1600/pumpkin%2Bmuesli2.jpg",
    nutrition: {
      gi: 66,
      servingSize: 73,
      calories: 258,
      carbs: 56,
      fats: 2.4,
      cholestrol: 0,
      potassium: 307,
      sodium: 20,
      iron: 2.16,
      protein: 8.2,
    },
  },
  {
    name: "Baked Falafel",
    img:
      "https://www.inspiredtaste.net/wp-content/uploads/2019/07/Baked-and-Pan-Fried-Falafel-1200.jpg",
    nutrition: {
      gi: 68,
      servingSize: 18,
      calories: 53,
      carbs: 4.3,
      fats: 3.5,
      cholestrol: 0,
      potassium: 45,
      sodium: 35,
      iron: 0.468,
      Protein: 1.2,
    },
  },
  {
    name: "Barbecue Chicken",
    img:
      "https://www.foodiecrush.com/wp-content/uploads/2019/07/BBQ-Chicken-Breasts-foodiecrush.com-007.jpg",
    nutrition: {
      gi: 51,
      servingSize: 86,
      calories: 145,
      carbs: 10,
      fats: 4.2,
      cholestrol: 46,
      potassium: 198,
      sodium: 303,
      iron: 0.9,
      protein: 15,
    },
  },
  {
    name: "Dahi Vada",
    img: "https://ministryofcurry.com/wp-content/uploads/2016/08/IMG_5321.jpg",
    nutrition: {
      gi: 82,
      servingSize: 71,
      calories: 89,
      carbs: 7.8,
      fats: 5,
      cholestrol: 4.1,
      potassium: 183,
      sodium: 144,
      iron: 1.242,
      protein: 3.8,
    },
  },
  {
    name: "Beef Burritos",
    img: "https://www.missmalini.com/wp-content/uploads/2018/10/Burritos.jpg",
    nutrition: {
      gi: 34,
      servingSize: 321,
      calories: 578,
      carbs: 75,
      fats: 22,
      cholestrol: 39,
      potassium: 655,
      sodium: 1448,
      iron: 5.76,
      Protein: 11.6,
    },
  },
  {
    name: "Nachos and Tacos",
    img:
      "https://images-gmi-pmc.edge-generalmills.com/26ba543d-4e08-40c6-bf0f-94ebc9baeb8c.jpg",
    nutrition: {
      gi: 74,
      servingSize: 550,
      calories: 1234,
      carbs: 26,
      fats: 28.8,
      cholestrol: 282,
      potassium: 1257,
      sodium: 1744,
      iron: 5.4,
      protein: 67,
    },
  },
  {
    name: "Belgian Waffles",
    img:
      "https://content3.jdmagicbox.com/comp/mumbai/m8/022pxx22.xx22.190304130619.v1m8/catalogue/the-belgian-waffle-co-fort-mumbai-waffle-centres-0c9yrvi1o4.jpg",
    nutrition: {
      gi: 76,
      servingSize: 75,
      calories: 218,
      carbs: 25,
      fats: 11,
      cholestrol: 52,
      potassium: 119,
      sodium: 383,
      iron: 1.728,
      protein: 5.9,
    },
  },
  {
    name: "Berries",
    img:
      "https://www.dictionary.com/e/wp-content/uploads/2018/09/berries_1000x700-790x310.jpg",
    nutrition: {
      gi: 39,
      servingSize: 142,
      calories: 65,
      carbs: 15,
      fats: 0.6,
      cholestrol: 0,
      potassium: 191,
      sodium: 1.4,
      iron: 0.702,
      protein: 1.4,
    },
  },
  {
    name: "Biryani",
    img: "https://static.toiimg.com/photo/53096628.cms",
    nutrition: {
      gi: 65,
      servingSize: 205,
      calories: 292,
      carbs: 31,
      fats: 9.4,
      cholestrol: 48,
      potassium: 462,
      sodium: 419,
      iron: 1.692,
      protein: 20,
    },
  },
  {
    name: "Soup",
    img:
      "https://i.pinimg.com/originals/5a/b4/5d/5ab45dafa567f9de735cda900cd5dd5d.jpg",
    nutrition: {
      gi: 71,
      servingSize: 248,
      calories: 62,
      carbs: 7.3,
      fats: 2.4,
      cholestrol: 12,
      potassium: 55,
      sodium: 866,
      iron: 1.682,
      protein: 3.1,
    },
  },
  {
    name: "Pancakes",
    img:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/119674.jpg?output-format=auto&output-quality=auto",
    nutrition: {
      gi: 67,
      servingSize: 40,
      calories: 91,
      carbs: 11,
      fats: 3.9,
      cholestrol: 24,
      potassium: 53,
      sodium: 176,
      iron: 0.72,
      protein: 2.6,
    },
  },
  {
    name: "Cornflakes Cereal",
    img:
      "https://www.verywellhealth.com/thmb/LiEYTC9ZucAPtgIkxivHFQQpXUY=/1333x1000/smart/filters:no_upscale()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg",
    nutrition: {
      gi: 93,
      servingSize: 28,
      calories: 100,
      carbs: 24,
      fats: 0.1,
      cholestrol: 0,
      potassium: 47,
      sodium: 204,
      iron: 8.1,
      protein: 2.1,
    },
  },
  {
    name: "Tea",
    img:
      "https://www.telegraph.co.uk/content/dam/health-fitness/2020/01/09/TELEMMGLPICT000169578515_trans_NvBQzQNjv4BqbTl4D02iCM3NuMfK2RT0HTjsyN2j3JnAYXPi059mk8g.jpeg",
    nutrition: {
      gi: 4,
      servingSize: 178,
      calories: 1.8,
      carbs: 0.5,
      fats: 0,
      cholestrol: 0,
      potassium: 31,
      sodium: 0,
      iron: 0,
      protein: 0,
    },
  },
  {
    name: "Lasagna",
    img:
      "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg",
    nutrition: {
      gi: 55,
      servingSize: 385,
      calories: 602,
      carbs: 35,
      fats: 32,
      cholestrol: 166,
      potassium: 1041,
      sodium: 1576,
      iron: 4.68,
      protein: 44,
    },
  },
  {
    name: "Oatmeal",
    img:
      "https://fitfoodiefinds.com/wp-content/uploads/2019/08/basic-oatmeal.jpg",
    nutrition: {
      gi: 55,
      servingSize: 234,
      calories: 166,
      carbs: 28,
      fats: 3.6,
      cholestrol: 0,
      potassium: 164,
      sodium: 9.4,
      iron: 2.16,
      protein: 5.9,
    },
  },
  {
    name: "Chocolate Brownie",
    img:
      "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?output-format=auto&output-quality=auto",
    nutrition: {
      gi: 55,
      servingSize: 50,
      calories: 233,
      carbs: 25,
      fats: 15,
      cholestrol: 37,
      potassium: 88,
      sodium: 172,
      iron: 0.918,
      protein: 3.1,
    },
  },

  {
    name: "Prunes",
    img: "https://images.app.goo.gl/BAtSuHt3Tg7PyHSY6",
    nutrition: {
      gi: 29,
      servingSize: 9.5,
      calories: 23,
      carbs: 6.1,
      fats: 0,
      cholestrol: 0,
      potassium: 70,
      sodium: 0.2,
      iron: 0.9,
      protein: 0.2,
    },
  },

  {
    name: "Raisins",
    img: "https://images.app.goo.gl/HHZEXmYuAZdhKuut6",
    nutrition: {
      gi: 64,
      servingSize: 43,
      calories: 129,
      carbs: 0,
      fats: 0.2,
      cholestrol: 0,
      potassium: 322,
      sodium: 4.7,
      iron: 0.675,
      protein: 1.3,
    },
  },

  {
    name: "Soybeans",
    img: "https://images.app.goo.gl/GWib4EfNXWaRd8qJ7",
    nutrition: {
      gi: 15,
      servingSize: 172,
      calories: 296,
      carbs: 14,
      fats: 15,
      cholestrol: 0,
      potassium: 886,
      sodium: 17,
      iron: 84.28,
      protein: 31,
    },
  },

  {
    name: "Cashew",
    img: "https://images.app.goo.gl/Rgn8pnDR2c44F8VB7",
    nutrition: {
      gi: 27,
      servingSize: 1.6,
      calories: 9,
      carbs: 0.5,
      fats: 0.7,
      cholestrol: 0,
      potassium: 8.9,
      sodium: 10,
      iron: 0.9,
      protein: 0.2,
    },
  },
];

module.exports = foods;
