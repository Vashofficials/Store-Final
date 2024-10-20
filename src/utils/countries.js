const countries = [
  {
    name: "Bangladesh",
    cities: [
      {
        name: "Dhaka",
        areas: [
          "Gulshan",
          "Banani",
          "Dhanmondi",
          "Uttara",
          "Mirpur",
          "Mohammadpur",
          "Bashundhara",
          "Motijheel",
          "Old Dhaka",
          "Tejgaon",
        ],
      },
      {
        name: "Chittagong",
        areas: [
          "Agrabad",
          "Pahartali",
          "Nasirabad",
          "Panchlaish",
          "Chawkbazar",
          "Halishahar",
          "Karnaphuli",
          "Patenga",
          "Sitakunda",
        ],
      },
      {
        name: "Sylhet",
        areas: [
          "Zindabazar",
          "Amberkhana",
          "Mirabazar",
          "Shahjalal Upashahar",
          "Kumarpara",
          "Uposhohor",
          "Bandar Bazar",
          "Pathantula",
          "Subid Bazar",
        ],
      },
      {
        name: "Khulna",
        areas: [
          "Khalishpur",
          "Sonadanga",
          "Daulatpur",
          "Gollamari",
          "Boyra",
          "Rupsha",
          "Shibbari",
          "Khan Jahan Ali",
          "Tutpara",
        ],
      },
      {
        name: "Rajshahi",
        areas: [
          "Shaheb Bazar",
          "Uposhahar",
          "Kazla",
          "Motihar",
          "Vodra",
          "Shiroil",
          "Hetemkhan",
          "Talaimari",
          "Sapura",
        ],
      },
      {
        name: "Barisal",
        areas: [
          "Nathullabad",
          "Cox's Bazar",
          "Band Road",
          "Chandmari",
          "Kalibari Road",
          "Battala",
          "Rupatali",
          "Sagardi",
          "Katpatty",
        ],
      },
      {
        name: "Rangpur",
        areas: [
          "Dhap",
          "Modern",
          "Mahiganj",
          "COB",
          "Jahaj Company",
          "Nawabganj",
          "Guptapara",
          "Shapla Chattar",
          "Jummapara",
        ],
      },
      {
        name: "Comilla",
        areas: [
          "Kandirpar",
          "Rajganj",
          "Shasangachha",
          "Chawkbazar",
          "Tomchom Bridge",
          "Nangalkot",
          "Laksam",
          "Debidwar",
          "Burichang",
        ],
      },
      {
        name: "Mymensingh",
        areas: [
          "Town Hall",
          "Charpara",
          "Ganginarpar",
          "Kachari Road",
          "Boro Bazaar",
          "Maskanda",
          "RK Mission Road",
          "Circuit House Road",
          "Akua",
        ],
      },
    ],
  },
  {
    name: "United States",
    cities: [
      {
        name: "New York",
        areas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
      },
      {
        name: "Los Angeles",
        areas: [
          "Hollywood",
          "Venice",
          "Downtown",
          "Beverly Hills",
          "Santa Monica",
        ],
      },
      {
        name: "Chicago",
        areas: [
          "The Loop",
          "Lincoln Park",
          "Hyde Park",
          "Wicker Park",
          "Gold Coast",
        ],
      },
    ],
  },

  {
    name: "Canada",
    cities: [
      {
        name: "Toronto",
        areas: ["Downtown", "Scarborough", "North York", "Etobicoke", "York"],
      },
      {
        name: "Vancouver",
        areas: [
          "Kitsilano",
          "Richmond",
          "Burnaby",
          "Surrey",
          "North Vancouver",
        ],
      },
      {
        name: "Montreal",
        areas: [
          "Downtown",
          "Old Montreal",
          "Plateau",
          "Westmount",
          "Outremont",
        ],
      },
    ],
  },
  {
    name: "United Kingdom",
    cities: [
      {
        name: "London",
        areas: ["Westminster", "Camden", "Greenwich", "Kensington", "Chelsea"],
      },
      {
        name: "Manchester",
        areas: ["Didsbury", "Salford", "Old Trafford", "Chorlton", "Ancoats"],
      },
      {
        name: "Birmingham",
        areas: ["Edgbaston", "Moseley", "Selly Oak", "Erdington", "Harborne"],
      },
    ],
  },
  {
    name: "Australia",
    cities: [
      {
        name: "Sydney",
        areas: ["CBD", "Bondi", "Manly", "Parramatta", "Surry Hills"],
      },
      {
        name: "Melbourne",
        areas: ["CBD", "Fitzroy", "St Kilda", "Richmond", "Southbank"],
      },
      {
        name: "Brisbane",
        areas: [
          "CBD",
          "South Bank",
          "Fortitude Valley",
          "West End",
          "New Farm",
        ],
      },
    ],
  },
  {
    name: "Germany",
    cities: [
      {
        name: "Berlin",
        areas: [
          "Mitte",
          "Kreuzberg",
          "Prenzlauer Berg",
          "Charlottenburg",
          "Friedrichshain",
        ],
      },
      {
        name: "Munich",
        areas: ["Altstadt", "Maxvorstadt", "Schwabing", "Giesing", "Neuhausen"],
      },
      {
        name: "Hamburg",
        areas: ["Altona", "St. Pauli", "Eimsbüttel", "Harburg", "Wandsbek"],
      },
    ],
  },
  {
    name: "India",
    cities: [
      {
        name: "Mumbai",
        areas: ["Andheri", "Bandra", "Juhu", "Dadar", "Malad"],
      },
      {
        name: "Delhi",
        areas: ["Connaught Place", "Saket", "Karol Bagh", "Dwarka", "Rohini"],
      },
      {
        name: "Bangalore",
        areas: [
          "MG Road",
          "Whitefield",
          "Koramangala",
          "Indiranagar",
          "Jayanagar",
        ],
      },
    ],
  },
  {
    name: "China",
    cities: [
      {
        name: "Beijing",
        areas: ["Chaoyang", "Haidian", "Dongcheng", "Xicheng", "Fengtai"],
      },
      {
        name: "Shanghai",
        areas: ["Pudong", "Huangpu", "Xuhui", "Jing'an", "Minhang"],
      },
      {
        name: "Shenzhen",
        areas: ["Nanshan", "Futian", "Luohu", "Yantian", "Bao'an"],
      },
    ],
  },
  {
    name: "Japan",
    cities: [
      {
        name: "Tokyo",
        areas: ["Shibuya", "Shinjuku", "Minato", "Chiyoda", "Taito"],
      },
      {
        name: "Osaka",
        areas: ["Kita", "Nishi", "Chuo", "Tennoji", "Suminoe"],
      },
      {
        name: "Kyoto",
        areas: ["Fushimi", "Higashiyama", "Kamigyo", "Nakagyo", "Sakyo"],
      },
    ],
  },
  {
    name: "Brazil",
    cities: [
      {
        name: "São Paulo",
        areas: ["Bela Vista", "Pinheiros", "Moema", "Itaim Bibi", "Jardins"],
      },
      {
        name: "Rio de Janeiro",
        areas: [
          "Copacabana",
          "Ipanema",
          "Leblon",
          "Barra da Tijuca",
          "Botafogo",
        ],
      },
      {
        name: "Brasília",
        areas: ["Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte", "Sudoeste"],
      },
    ],
  },
  {
    name: "South Africa",
    cities: [
      {
        name: "Johannesburg",
        areas: ["Sandton", "Rosebank", "Melville", "Braamfontein", "Randburg"],
      },
      {
        name: "Cape Town",
        areas: [
          "City Bowl",
          "Sea Point",
          "Green Point",
          "Camps Bay",
          "Woodstock",
        ],
      },
      {
        name: "Durban",
        areas: ["Umhlanga", "Berea", "Westville", "Morningside", "Pinetown"],
      },
    ],
  },
  {
    name: "Russia",
    cities: [
      {
        name: "Moscow",
        areas: [
          "Arbat",
          "Tverskoy",
          "Zamoskvorechye",
          "Basmanny",
          "Khamovniki",
        ],
      },
      {
        name: "Saint Petersburg",
        areas: [
          "Admiralteysky",
          "Vasileostrovsky",
          "Petrogradsky",
          "Nevsky",
          "Kalininsky",
        ],
      },
      {
        name: "Novosibirsk",
        areas: [
          "Leninsky",
          "Kirovsky",
          "Oktyabrsky",
          "Zayeltsovsky",
          "Sovetsky",
        ],
      },
    ],
  },
  {
    name: "France",
    cities: [
      {
        name: "Paris",
        areas: [
          "Le Marais",
          "Latin Quarter",
          "Montmartre",
          "Saint-Germain",
          "Belleville",
        ],
      },
      {
        name: "Lyon",
        areas: [
          "Presqu'île",
          "Croix-Rousse",
          "Fourvière",
          "Part-Dieu",
          "Confluence",
        ],
      },
      {
        name: "Marseille",
        areas: [
          "Vieux Port",
          "La Corniche",
          "Le Panier",
          "La Plaine",
          "La Joliette",
        ],
      },
    ],
  },
  {
    name: "Italy",
    cities: [
      {
        name: "Rome",
        areas: [
          "Centro Storico",
          "Trastevere",
          "Monti",
          "Testaccio",
          "Esquilino",
        ],
      },
      {
        name: "Milan",
        areas: ["Navigli", "Brera", "Porta Romana", "Porta Nuova", "Isola"],
      },
      {
        name: "Florence",
        areas: ["Duomo", "Santa Croce", "San Lorenzo", "Oltrarno", "San Marco"],
      },
    ],
  },
  // Add more countries, cities, and areas as needed
];

export { countries };
