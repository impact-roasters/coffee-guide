const coffee = [
	{
		name: "Aynu",
		tastingProfile: ["Rounded", "Fruit Acidity", "Nut Aroma"],
		processing: ["Washed"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Limu",
				latitude: 9.16702,
				longitude: 36.34015,
				altitude: 1750 - 1950,
			},
			{
				name: "Limu Kosa",
				latitude: 8.16638,
				longitude: 37.17096,
				altitude: 1750 - 1950,
			},
		],
		qGrade: 88,
	},
	{
		name: "Beza",
		tastingProfile: ["Internse Sweetness", "Spicy", "Forest Berry Aroma"],
		processing: ["Sundried"],
		roastProfile: ["Dark Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Yirgachefe",
				latitude: 6.16272,
				longitude: 38.20583,
				altitude: 1900 - 2100,
			},
			{
				name: "Yirga Chefe",
				latitude: 6.16272,
				longitude: 38.20583,
				altitude: 1900 - 2100,
			},
		],
		qGrade: 92,
	},
	{
		name: "Desta",
		tastingProfile: ["Internse Sweetness", "Floral", "Nougat Aroma"],
		processing: ["Washed, Sundried"],
		roastProfile: ["Dark Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Aroresa",
				latitude: 6.33485,
				longitude: 39.00473,
				altitude: 1700 - 1950,
			},
			{
				name: "Jimma Agaro",
				latitude: 7.85108,
				longitude: 36.58889,
				altitude: 1650 - 1950,
			},
		],
		qGrade: 87,
	},

	{
		name: "Kafa",
		tastingProfile: ["Forest Berries", "Delicate Swetness", "Chocolate Aroma"],
		processing: ["Sundried"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Kaffa",
				latitude: 7.31034,
				longitude: 35.96491,
				altitude: 1400 - 2100,
			},
			{
				name: "Gimbo Kimbo",
				latitude: 7.34604,
				longitude: 36.22318,
				altitude: 1400 - 2100,
			},
		],
		qGrade: 89,
	},
	{
		name: "Lomi",
		tastingProfile: ["Sweet", "Fruity", "Citrus Aroma"],
		processing: ["Washed"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Sidama",
				latitude: 7.03507,
				longitude: 38.47632,
				altitude: 2759 - 2829,
			},
			{
				name: "Wendo",
				latitude: 6.60314,
				longitude: 38.41938,
				altitude: 1800 - 2000,
			},
		],
		qGrade: 88,
	},
	{
		name: "Mazaa",
		tastingProfile: ["Honey", "Sweet", "Spicy Aroma"],
		processing: ["Sundried"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Guji",
				latitude: 9.00382,
				longitude: 35.50255,
				altitude: 1900 - 2000,
			},
			{
				name: "Oromia",
				latitude: 7.546,
				longitude: 40.6347,
				altitude: 1500 - 2350,
			},
		],
		qGrade: 87,
	},
	{
		name: "Nehi",
		tastingProfile: ["Sweet", "Fruity", "Chocolate aroma"],
		processing: ["Washed"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Sidama",
				latitude: 7.03507,
				longitude: 38.47632,
				altitude: 2759 - 2829,
			},
			{
				name: "Aroresa",
				latitude: 6.33485,
				longitude: 39.00473,
				altitude: 1700 - 1950,
			},
		],
		qGrade: 87,
	},
	{
		name: "Saba",
		tastingProfile: ["Slightly Acidic", "Floral", "Citrus aroma"],
		processing: ["Washed"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Yirgachefe",
				latitude: 6.16272,
				longitude: 38.20583,
				altitude: 1880 - 1919,
			},
			{
				name: "Aroma",
				latitude: 11.59985,
				longitude: 37.37529,
				altitude: 1800 - 2000,
			},
		],
		qGrade: 88,
	},
	{
		name: "Worke",
		tastingProfile: ["Slightly Acidic", "Floral", "Citrus aroma"],
		processing: ["Washed"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Yirgachefe",
				latitude: 6.16272,
				longitude: 38.20583,
				altitude: 1880 - 1919,
			},
			{
				name: "Aroma",
				latitude: 11.59985,
				longitude: 37.37529,
				altitude: 1800 - 2000,
			},
		],
		qGrade: 88,
	},
	{
		name: "Zala",
		tastingProfile: ["Fresh Citrus", "Floral", "Fruity Aroma"],
		processing: ["Washed"],
		roastProfile: ["Dark Roast, Medium Roast, Light Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Guji",
				latitude: 9.00382,
				longitude: 35.50255,
				altitude: 1900 - 2000,
			},
			{
				name: "Oromia",
				latitude: 7.546,
				longitude: 40.6347,
				altitude: 1500 - 2350,
			},
		],
		qGrade: 87,
	},
	{
		name: "Zenu",
		tastingProfile: ["Slightly Acidic", "Floral", "Nougat Aroma"],
		processing: ["Sundried"],
		roastProfile: ["Dark Roast"],
		preparation: [
			"espresso",
			"cafe latte",
			"cappuccino",
			"cortado",
			"flat white",
		],
		origin: [
			{
				name: "Jimma ",
				latitude: 7.6751,
				longitude: 36.83514,
				altitude: 1788,
			},
			{
				name: "Jimma Agaro",
				latitude: 7.85108,
				longitude: 36.58889,
				altitude: 1650 - 1950,
			},
		],
		qGrade: 82,
	},
];
export default coffee;
