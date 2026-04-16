export interface PropertyReview {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Property {
  id: number;
  hostawayId: number;
  name: string;
  description: string;
  houseRules: string | null;
  location: string;
  city: string;
  price: number;
  guests: number;
  beds: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  amenities: Record<string, string[]>;
  reviews: PropertyReview[];
  rating: number;
  lat: number;
  lng: number;
  link: string;
}

export const properties: Property[] = [
  {
    "id": 409074,
    "hostawayId": 365492,
    "name": "Waterfront Retreat with Dock, Firepit, and Bay Views | 4BR Pelican Island Oasis",
    "description": "Escape to this stunning bayfront vacation home on Pelican Island in Seaside Heights, offering panoramic water views from every room. This serene and spacious 4-bedroom, 2.5-bathroom home is the perfect coastal getaway just minutes from the Seaside Heights boardwalk and beach, yet tucked away for total relaxation.\n\nEnjoy laid-back luxury with a bright, open-concept layout, a chef’s kitchen, in-unit washer/dryer, and a beautiful master suite with a dedicated office space perfect for remote work or extended stays.\nOutdoors, you’ll find your private paradise:\n\n 🔥 Firepit area with seating\n 🏖️ Sandy play space & cornhole setup\n 🎣 Private dock for fishing, crabbing, and launching kayaks\n 🚗 Parking for up to 4 vehicles (driveway + side lot)\n\nWhether you’re sipping coffee while watching the sunrise over the bay, grilling on the deck, or heading out for a day on the water, this home delivers the best of Jersey Shore waterfront living.\nIdeal for families, couples, or remote workers seeking both privacy and convenience, you’ll be just a short drive to Seaside Heights beach, boardwalk, amusement rides, and restaurants, but far enough to enjoy the peace of your own coastal escape.\n\n✅ High-speed WiFi\n ✅ Chic coastal décor throughout\n ✅ Family-friendly & remote-work ready\n ✅ Fishing, kayaking, and sunset views included!\nBook your stay at this Pelican Island waterfront retreat and experience the perfect blend of comfort, charm, and coastal adventure.\n​​\nHouse Rules:\n– Primary renter must be at least 25 years old\n – No parties, events, or group rentals allowed\n – No prom, graduation, or similar group gatherings\n – Quiet hours must be respected\n – Government-issued photo ID is required to confirm the reservation and verify age\n\nWe take pride in maintaining a clean, peaceful, and family-friendly home. Guests who do not meet these requirements will have their reservations canceled. Thank you for your understanding!",
    "houseRules": "​​House Rules:\n– Primary renter must be at least 25 years old\n – No parties, events, or group rentals allowed\n – No prom, graduation, or similar group gatherings\n – Quiet hours must be respected\n – Government-issued photo ID is required to confirm the reservation and verify age",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 1000,
    "guests": 10,
    "beds": 6,
    "bedrooms": 4,
    "bathrooms": 2,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-Y1LNcplmAFEOrXgf0Fu0m68dRjWYqZiJa-BxRg6rOtc-6865b7b94697c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-rFDP81ZvfMJijTJwipM3I94UCZbgantj4nM3m2j-sB4-6865b7c151cfa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-qZl04yqqf3Lpw0scnvYVMBYKGdIRWjK1--38SfrqcO-8-6865b7cb9d3cf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-kOsTlJIuncH7aiee8-qFCP--VrucLdCW2bvp273VoQzc-6865b7d592687",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-rfohgF6tEGV2YB6c4HPZ54u--bBO-hrHVkZsCgeWXHHI-6865b7dd0eef9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-shIdICw5xVCfIlCDLdxM0fznbuCxEbObjWn7T--ogfJg-6865b7e58be55",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-BMM59iAcj-TAwInpiAGeZuyBbZRRTrvjVP7aiTbGQeE-6865b7eeb8d58",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-MSKMi03ULbsflc42Wz1yOLQun5KDIRaG04Q--XzmPQIU-6865b7f990570",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-200-opRxOe8CrYzES6E3rfmkLYJ7kFQFiH1hUGtm7P4-6865b803a5965",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-ZChJweKRvVIBgHlP05o8TPYiJvb0aPEWmqB5nmHSH6Q-6865b80d90e33",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-6Ixak3r9VJ7uPt0alrFWHV24-ByqGVXZQzhFQeTkr0I-6865b81a67fe4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-C54UHZoOOLJf3NZcTEVEKzobl06rh1pJ0GZrVr3kGCs-6865b824f0f03",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-VKtyiEMGONVHUFILpNCl96MwG--tRi4m9Ht9dnmrLGjg-6865b837cdc97",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-4IBJh-TA6807mgLJ7koq4lIG7QZcdC0wSPIlUfW-RaE-6865b84ab6d8b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-iCaJrVc7qtAnPk-C6PBlgUAzj4CS2YYyIrVf9D099vk-6865b85705da3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-5rbo79ImG--oZtxDg5ELfI--5fvkfTZiWJiCGMTu62DPU-6865b867cea0e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-g0EsLK9Kz--QP8SZ3Un0avZWkYclVH5Zmzk6xhiAV2O8-6865b874ae4ce",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074---BOnQbY0--91pGLt5kZg2zVm5xgh3UL3YqAH6q6u9oU4-6865b8815d913",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-YwOG4JCFB--yPZev65XTCxvirT2ClqLWUA1gu5iPPrQc-6865b88f3ab84",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-1xhR8fy6nakwfYj36Te-Fx1-IHJ7N04OLgt3qhjUqkQ-6865b89d057d5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-0QCV-1C3KEIV1NACKtE7wOUSCd2faIfWGLCC18bqRNo-6865b8abdf4f2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-WrFFr00pHYTiPHZUWCfV0zWfOVtMa9pQaI1zuTOK2RM-6865b8ba37342",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-8ElbWWYkhjcMyKJrzZ8OzS-Waa--lo9x6PwMaxFlsOho-6865b8cc4abe9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-2JbSddO8cYMGXT5---1rYvQOSQ1cV6T0ez-pIPRZ1LnI-6865b8d8bc39d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-95AgAKLz8TdQSRJeqBfvYJC2r8FisVfFCpim7h6VLPQ-6865b8e61f333",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-R7ZCVZURh8JdNhL-izb-X1oj7NQVviVw2CJNRB8ZJ4c-6865b8f5d3cd7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-1a3M4AoC26--0LHBSmeSXBJReXrRZ-Ma319D3IJATDXM-6865b90ba40d9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-YLX0ylRqboa5utKwxZZI8aRsuc50kX0UrZI-LVTqT-o-6865b91bab618",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-409074-hmG4tLfyzFlpa4vjs2Bw0NTH4rANlnTbJo3PozoLQK0-6865b92b3156e"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Dining room",
        "Kitchen utensils",
        "Dining area",
        "Kitchen island",
        "Dining table",
        "Baking sheet",
        "Blender",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "Hair Dryer",
        "Heating",
        "Hangers",
        "Iron",
        "Laptop Friendly workspace",
        "TV",
        "Balcony",
        "Private living room ",
        "Iron board",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Beach essentials",
        "Fenced yard",
        "Office",
        "Desk chair",
        "Fitness equipment",
        "Clothing storage",
        "Ceiling fan"
      ],
      "Parking": [
        "Street parking",
        "Free parking",
        "Private parking"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Pets allowed on request"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "Fire Extinguisher",
        "Outdoor lighting"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Cleaning products"
      ],
      "Attractions": [
        "Bay"
      ],
      "Leisure": [
        "Boating",
        "Water sports"
      ],
      "Location": [
        "Beach",
        "Ocean front",
        "Ocean view",
        "Water view",
        "Waterfront"
      ],
      "Outdoors": [
        "Boat",
        "Private dock",
        "Outdoor dining",
        "Outdoor firepit",
        "Outdoor furniture",
        "Outdoor sunloungers"
      ],
      "Services": [
        "Cleaning optional"
      ],
      "Sports": [
        "Fishing",
        "Fishing bay",
        "Jet skiing"
      ],
      "Themes": [
        "Family"
      ]
    },
    "reviews": [
      {
        "author": "Steve Kwak",
        "rating": 5,
        "date": "2025-08-23 20:23:49",
        "comment": "Overall great property. Some mild gripes: -communication w management was shotty and inconsistent prior to arrival. - grill had significant amount of residual meat left on the grates. Not cleaned at all- no shampoo in the showers when we were told that there would be so had to go out and buy some mid shower. - was told dock area is suitable for swimming but the ladder to climb back onto the dock is rusted and unstable. Did not feel comfortable jumping into bay and have the ladder rip off and get trapped in the bay with no way to get out. But property location is great. There were beach towels and chair available for use when we were told there were none. Friendly neighbors. And the house is well kept and maintained. Overall property is good but management needs to know their property better and communicate better. "
      }
    ],
    "lat": 39.9405343,
    "lng": -74.0867971,
    "rating": 4.9,
    "link": "https://suitecapacity.holidayfuture.com/listings/409074"
  },
  {
    "id": 393450,
    "hostawayId": 349961,
    "name": "Epic Seaside Retreat | Hot Tub, Game Room & Rooftop Deck",
    "description": "Welcome to your ultimate Jersey Shore escape! This beautifully decorated 4-bedroom, 3.5-bath Seaside Heights vacation home offers the perfect mix of luxury, comfort, and fun. Located just a short walk from the beach, this spacious coastal retreat is packed with premium amenities for families and groups looking to make unforgettable memories.\n\n🛏 4 Bedrooms | 8 Beds + 1 Sleeper Sofa | 3 Full Bathrooms\nThis spacious coastal retreat sleeps up to 14 guests and features a luxurious king bed with adjustable base, 3 queen beds, two twin-over-full bunk beds, and a sleeper sofa perfect for large families and group vacations.\n\n✅ Linens, towels, soaps, and toiletries are included, and the home is fully baby and family-friendly with a crib (may be provided only when requested).\n\n🎮 Ultimate Game Room Paradise\nEnjoy hours of entertainment in the game room with a full-size arcade machine loaded with 20,000+ games, plus a pool table that converts into ping pong and air hockey fun for guests of all ages!\n\n🌅 Private Rooftop Deck with Stunning Bay Views\nSip your morning coffee or evening cocktail on the rooftop deck, offering panoramic views of the Seaside Heights bayfront.\n\n🔥 Hot Tub, Grill, Firepit & Outdoor Shower\nUnwind in the fenced backyard oasis featuring a relaxing hot tub, propane grill, cozy firepit, and a refreshing outdoor shower ideal after a day at the beach.\n\n👨‍🍳 Chef’s Kitchen\nCook like a pro in the fully stocked kitchen with high-end appliances, ample counter space, and an open layout perfect for cooking and entertaining.\n\n🚘 Free Parking for 4 Vehicles\nPrivate garage fits 2 cars, with room for 2 more in the driveway. Additional free street parking is available.\n\n🧺 In-Unit Washer & Dryer\nConvenient laundry access to keep things fresh after beach days and game nights.\n\n🏖 6 Seaside Heights Beach Badges Included (in-season)\nSkip the hassle and save money your stay includes 6 beach badges for Seaside Heights' beautiful beaches.\n\n📍 Prime Seaside Heights Location\nWalk or bike to the beach, boardwalk, Breakwater Beach Waterpark, restaurants, and shops. Tucked away in a quiet neighborhood but just minutes from all the action.\n\nThis home combines stylish coastal design with spacious comfort and is perfect for multi-family getaways, friend reunions, or group beach trips. Whether you’re soaking in the hot tub, playing games in the rec room, or watching the sunset from the rooftop, this is the Seaside Heights stay you’ve been looking for.\n\nSmart lock providing self check-in.\n\nMUST BE 25+ TO BOOK! Proof of I.D. will be required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS!",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 1200,
    "guests": 14,
    "beds": 8,
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-W1rt3Uoob--neBu--EiYuBf5i--58fyQSyEHQaE7fiUR--M-682c8d087478d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-SezlQ0o3xbrpdSx-U9fJzhhUJ--azdJKpCQ7oHIKjv2U-682c848305909",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-yYVAtS70JrHr4qKYZIJx1vaNK4NbpksQfoVr-VwAtjw-682c8481b2f7b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-ifM5DthmbVVkT04pu--A82v4jBc--pYGZfoLSb52pLM6Q-682c84805ee35",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-DK6OMw--Kne--NnXyVmyI8JfwS--h8iTURWc4M4NDHk-wo-682c847f25052",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-C--4b4nxSAJhnS0NfYuL4A1qN8nw0v72qufXGvqxPMSw-682c847c44924",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-kOLjkZBDl8fcU0vmEYpgB7pk23YJ5sP7RZGwL09vap0-682c847ae242c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-FZPlturmU5WIrH2T5nwG1zb1s8dTjGi4ShnAa--WH7V4-682c8479a5cdb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-jCb0mkqZnsXtH3p4rOULH4Ou--5DrjQA47NodVXPz-Lo-682c847871ff2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-eErprX3stMSEctsR1p2tVd6Mpifgh--b4WFpCeU70PU-682c84774b418",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-elVrdBtVRRhw8f9xoBRJlLfckfUSLK2M1qcj2o3H7OA-682c84760b78c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-Oo--i38abFEv6D0vNGCc---vkpaGp3XX4cgaUwqaF20m4-682c847399802",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-m57SekEIpxHO8OKKEe6Ei--cjAKtX8tAzBEj5C-2UfOs-682c846bd5810",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-7di8q---TkNmeojmW9yeLrEMEH5FRdX320Srq1uw9vc-682c846ce0cc1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-rfR--f0vgGZ-MLL4doEyStu2cJ12ibL7Fi8uGctoGe7A-682c846e35ae1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-rv60uBY-kWDhex71L4lospHPwCtWrCo-67ZPcEmZMSg-682c846f5390a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-Gojy8EDG1YJ--JRD1H7WzhuAeWAMkefHg7d4MJE4fiyA-682c8470c2d7f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-S9bOT4tDLtX4VruW8dBVZ3NgDPSbOooUfMjhb097qc4-682c84724a770",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-eoqtwURA3oyWenFWvlPXMVkEfqrORkz1uQU79228DWk-682c84750430e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-yfVsxJNwNiVzn0NUop6TiiXNAsmOBy961O-xY9TRwNE-682c846a70637",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-WbB1jpoc-PJWA5Lmd0B0JNVuLHAYX4Go3XknQV--UN0Y-682c8d073c3c2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-p28URnowCi8Zy0WCJV0nH9XAw9QGU3ZpH8aBWrJbUMU-682c8468bcb3b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-eU1YN3OZTwHT-wF24C87Hn0-Bl9allEjS4CGe8ok8cg-682c846775661",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-gbcJU4MFMLrXKPvoBpo-ppMvH8Qw-tYJ5lfHajqvPzk-682c84661f4aa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-3xsOypnMjoXH7P2orX9KWSsVaBSttCHXEaDUqxzQlw8-682c8462098cf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-DRQEoy0r5MujiELhUNs3yUo29VsUmUT11sFSZBTLrmQ-682c84636bdc2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-zEP0gFehYzpKULPeJctpJEwdGgPpBqLd241--y0ZXWrQ-682c93993fc18",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-Aeqd8LvGZybY5gQ6ZFbCdhq15W1dF3IMYQXXoMrYL8I-682c8464a14d8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-u--dPAvtm9pEat5qHRxj1QaZmLd3Q1f914Kod0MsaYZU-682c8460dfd2c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-tHz4HqMMFBFO--UIJnk5iRoFo8BIK7ofMF2ev833f-X4-682c845f70d81",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-NrjPzGzs--oLEQTo-g6J88r6SmPMFrfKNc9cqlJerlgI-682c845e2a68c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-oX----xxa--O7GeQyZM2JbnWNEcy5f18AM5se--KtID-UW0-682c84533d275",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450---gkQJ-2doftXC-nddLJxRqKW--aTTWvrIX-kOoLWb3d0-682c8457af024",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-7JU----MJ-ow--aqNGTajTEd6-6lY4mjd78Zp25ZSPAtvU-682c8d05df568",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-nEGYmOZnMGVVULxuouW9S6W5tFfeECTMTD-B02q----X4-682c845a2695a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-LZzufYuJigd4F3gXfJgNW9dIjTW-oBJFjeNSV2J2BGU-682c845b8b62b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-Yc44aGOFyBtwqTQYDzuQYTY5kydAhrcqML4yr7DPMuI-682c845ce1a81",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-HbahdvFvnhzF--kUCOr2qglFlbA7--hXC3TOqLhW7Nid4-682c8450e590b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-CMm2apxOEmzBUV8MY8WhLL9nysfqmmPYiqm7a0BRNeo-682c844faf8b3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-q2AtIKgAoTbYpsQ2OGg1Rh0iXxP4oKfacMCzAf4aXX0-682c844e3c526",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-9vTEuLNDmFwKPf6MDMENfp4ielm-GaLXedyfbq4qXEw-682c844cc8958",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-CTCFw2MjpTDqa1nz2QINK3riDVUlIN86xkmljqoXHwc-682c844b5b31d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-Y7ZzTYisaW1c1XLnIY-ANeWGh--EgXYk6ONXMHdCiqvw-682c8449e4aec",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-VXZD-NCthhgbhgcFVw09Xrd4OGSIkYYUDzya6LY50WE-682c8d0479459",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-i-qoLJ2mV85PlhuOrXwIAqwkbWqXPph8OExmMWeOMhM-682c8447dd97a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-wl2q1y7bdkWe0QWH06xe8k--7rM8--F0V5aw0rFY6yyXc-682c8d0226c19",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393450-MlHqmGROYZfiXLTmqNbP6hx0y30Npj3XejUqKicm42U-682c8445df97b"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining table",
        "Baking sheet",
        "Barbeque utensils",
        "Blender",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Fireplace",
        "Dryer",
        "Hair Dryer",
        "Heating",
        "Shampoo",
        "Hangers",
        "Iron",
        "Laptop Friendly workspace",
        "TV",
        "Balcony",
        "Linens",
        "Outdoor grill",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Beach essentials",
        "Clothing storage",
        "Ceiling fan"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Jacuzzi",
        "Cleaning products",
        "Body soap",
        "Conditioner"
      ],
      "Children": [
        "Baby crib",
        "Childrens dinnerware"
      ],
      "Entertainment": [
        "Ping pong table",
        "Pool table",
        "Board games"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Cleaning before checkout"
      ],
      "Outdoors": [
        "Outdoor furniture",
        "Fire pit"
      ]
    },
    "reviews": [],
    "lat": 39.9398615,
    "lng": -74.0786534,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/393450"
  },
  {
    "id": 406894,
    "hostawayId": 363324,
    "name": "Coastal Beach House w/ Kayaks, Game Room & Bay Views",
    "description": "Welcome to your ideal Jersey Shore escape! This spacious and family-friendly 3-bedroom, 2-bath beach house is located directly across the street from the beach and offers stunning bay views, tons of outdoor space, and a unique game-filled garage for endless fun.\n\n🛏️ 3 Bedrooms | 2 Full Bathrooms – Comfortable layout perfect for families or groups\n🚘 Parking for 3 Vehicles – Includes driveway and off-street options\n🧺 Washer & Dryer In-Unit – Ideal for extended stays\n🌅 Deck & Backyard with Bay Views – Great for grilling, lounging, or sunset drinks\n🎮 Converted Garage Game Room – Pool table, arcade games, and more\n🚴‍♂️ Outdoor Adventure Included – Kayaks and bikes available for guest use\n🔥 Grill and patio seating for outdoor dining and relaxation\n🌊 Just Steps to the Beach – Walk to the sand in seconds!\n\nPerfectly located between the bay and the beach, this home combines coastal comfort with family fun, offering a one-of-a-kind vacation experience near all the top attractions in the Seaside area.\n\nBook now to experience the best of the Jersey Shore whether you're paddling on the bay, playing in the game room, or enjoying a relaxing beach day just steps from your front door!",
    "houseRules": "House Rules:\n\n– Primary renter must be at least 25 years old\n– No parties, events, or group rentals allowed\n– No prom, graduation, or similar group gatherings\n– Quiet hours must be respected\n– Government-issued photo ID is required to confirm the reservation and verify age\n\nWe take pride in maintaining a clean, peaceful, and family-friendly home. Guests who do not meet these requirements will have their reservations canceled. Thank you for your understanding!",
    "location": "Ocean Gate, US",
    "city": "Ocean Gate",
    "price": 400,
    "guests": 9,
    "beds": 6,
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-eTGJCxKlIvoZVIQG1hGiqJSZkCspboGTLq0-5jdj9l4-68f8de4c4f809",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-PRoxuQfuEnC6p--gPGVytfqk4EbEIiMMkglliuOKsxUI-6900bc7a79d48",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-jQ1KDqU2CELejFQe6fk9hyDW1ejH8Uo2n4BXqtDDx7g-68f8df35b6867",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-u8vc9-8BZ6Q0QZEFWaevGYF1UtWQveqq4xVY--21aXm4-68f8df63e33d6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-yHomdhJZ0EgzdKb5ZtN5RVaZdwKPjrFz0ohQfHY5DsY-68f8db4e875c9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-lkKgWiD6kiGYFyF8m3m6aBblx6rf--41evaQGCNX2z0E-68f8dbd9b58d1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-qXhq-0Y--bOb5tMOvNvPsuZvMYpcUDJpw3I9wKpjQE4U-68f8dbd26a0e9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-IjGCS1HPqX2pF70sro2j6YvY0Nfu9OCMSpbtTnXjz2g-68f8dbea95a4c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-nPqnyYR5-ZOeoyQW85V9XzKzOboSlmb7sgDhtXMgiAs-68f8dbe15cbf5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-BpVMxB3DxKFXKLjM8xmsYyLARWw3NM5Hr7vc-xFtppE-68f8db6dbbc45",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-mhk1vkGY7ib9312cVaw47j5MYcanhg7CDD7T0N28v--I-68f8dd3b8d9a6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-UDOR6r--eOZpvYtSiIoUFt8EfoBJHW3c77DSblSQTQqg-68f8de582465a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-ATZZV9-3MpkqZBWf5053efo-e3B7kXZTiZs2-rkqats-68f8dddc62a0d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-DzUxySxKVx6c6BJ3loy2--9UhyFy5980mn9a81rf6Brk-68f8dde8c7237",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-BXATkLNzH4M92zBBTqV7FZHyjmjGLPrZflj8qH3fUv0-6900bc8fa6cf4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-5zugskJ8t2jQFrVpG2ZAHVhNFtKyxiBUzJG27cNc1ME-68f8ddc3e5e34",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-JAS1EcYgVV67yBN5QtJHaEWqM5z1RZcPzI32WKVuhfQ-68f8ddcfee5df",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894---M4jlwnM4o690LDqrEu-xA7CJclVX2SYg1OJzGM-6Q4-68f8dfc65194d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-TbHfrCcYS4I0SrD553nAoHC--1ghISWMYJhBJNzlWQDI-68f8df965d53c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-Lr0TsMBS9e6mhXZUAEIZNkPYcer8a3vDlnGKa0GVp0I-68f8dfa625b52",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894---eD4pvoGVIu9L34Tzhh4uu2C0QsZ3Rd8rM--8jTKZKwE-68f8df4607917",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-QQVtI82D2xc4-4x63dfhiYyeMo4DjAeI1nnSKucjKhU-68f8df5405bf5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-k1aeFTJD--Vw7r-37bRzlmi7JwF-wAaK9IPg9PGn1PGw-68f8db58ba48b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-B0M2c3orasR4zMqQucXbiBD7qBFEC792ULbF-rIEqaw-68f8dd648d3c6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-JAYbk6k4fO-WAcpfV3D2DZjdPPepfmO493M-1ToFQ-4-68f8dd5a066a9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-q2pAQtPE-VmweS8Vs-sRqa-k8bBAbDxQwMC5g-uBtfI-68f8dd326fadc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-cPi76NB41uJWPRs1H1f0DGSMlxD--S0zjr4dkWYLuNY8-68f8dd46440ee",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-70Qfb9ExJC7Disy5099knsul9mvS7KGsbHpOD6o0--vA-68f8dd4fc0214",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894--n90cLi0UC039IGs2S7m6QBoZJJjdySU9XXLuHqVYmY-68f8db538bd4c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-VfifoHDfEs7hC2B4WWnLRq54oeFkhSNVcG--mlUVf6Fg-68f98477255be",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-Gj5rwR6ro8O7paRSgTbRJ0LLHJ04pyWPmvlcNfjBk5Y-68f8db6070503",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-tNBf5FN9vGd9A6wuN6PxSQjrxVbQMxnWqWT7UOFZotI-68f8db74aa1f7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-MWmyXFb7FEhJRouW7AWKRUBA3wDkvCPkg3K2JcLzQWo-6900bca2e60c3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-OR79rSqFLDaxrhv-5iuZtcG0ukwffdwixlAbWa1Jtz0-6900bcb54aaaf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-rMGs6JLaRcB1UNzSr7-gPfJg6frh5cK--xQmL8FXMV-Y-6900bcc78b558",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-WTIwNFYpqlwPmnxlZxXBTzQ5--mM8a9C13eVjK1Yz7F8-6900bcd98be99",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-QW82-4KDpFaQBvwlWj712UrtwQhJBIPFTt4oXtz-PTo-68f8e5d39fa02",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-eEKH-AInnLwzPBB6Lh5uXyrY4HWC1MD80J2y4j5ZiF4-68f8e5c170fc4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-qlkJZzHLLnlU8XZiDl9nlk7cxqdjjBUneuKK4ebCavA-68f8df85c7591",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-Ja0ySkvoLqYe32G1dUWp--97cLsmh6Ymk9zkYedJUby4-68f9848c64437",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-KvOQfOV25--jBBfih--8oUCEj4IqA0LxyXoD5n4ILtyMo-68f8dfb5ed0dc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-tfJ3HNR-jeqW76bs4--18WX7PpSGGLtyiB3JAKaPLSj0-68f984c5d0fe2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894--qE--qg0ICdgM4pnD8qoqQmYbT59fij9iSKPKL20o67M-68f985049166b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-BB49JJDyyGbh7SEiw69qP8UDw4yuyxCjcDii--1kCUz8-68f984efcd29c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-FinqLXprOQ6zGpiyY1pKd--u3zFjx7s6LvSglenJUfks-68f984da5e932",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-72u6kmhLFs8kmpqj7ed4uOdIBxs2aWEdpmWHRSDOjps-68f8e5e3eb2de",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-5JFW7drFYv2mQanIAn0lEH9uz4Tf6DskobZopfdV1RM-68f8e5f3cf157",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-406894-frzHLVvxd6Ue8UYTn6u3Inq8NEXE5qH5GW6twYEFCCk-68f8e603c755f"
    ],
    "amenities": {
      "Location": [
        "Beach front",
        "Beach",
        "Beach view",
        "Ocean view"
      ],
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "Hair Dryer",
        "Heating",
        "Hangers",
        "Laptop Friendly workspace",
        "Balcony",
        "Private living room ",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Room darkening shades",
        "Game room",
        "Garage",
        "Smart TV",
        "Desk chair",
        "Clothing storage",
        "Ceiling fan"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Kitchen island",
        "Dining table",
        "Barbeque utensils",
        "Freezer"
      ],
      "Policy": [
        "Pets allowed",
        "Suitable for children",
        "Suitable for events",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Cleaning before checkout",
        "Pets allowed on request"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher",
        "Outdoor lighting"
      ],
      "Parking": [
        "Free parking",
        "Private parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet"
      ],
      "Outdoors": [
        "Deck patio uncovered",
        "Bicycle",
        "Boat",
        "Outdoor dining",
        "Outdoor firepit",
        "Outdoor furniture",
        "Fire pit"
      ],
      "Attractions": [
        "Bay"
      ],
      "Entertainment": [
        "Games",
        "Ping pong table",
        "Pool table"
      ],
      "Leisure": [
        "Boating",
        "Eco tourism",
        "Paddle boating"
      ],
      "Services": [
        "Cleaning optional",
        "Housekeeper on request",
        "Grocery on request"
      ],
      "Sports": [
        "Cycling",
        "Kayaking",
        "Swimming"
      ],
      "Themes": [
        "Family"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ]
    },
    "reviews": [
      {
        "author": "Donna",
        "rating": 5,
        "date": "2026-01-17 05:26:22",
        "comment": "Surprisingly Better Than Expected\nPositive: Easy parking, lots of space inside with every amenity you could need.  Close to beaches. Very clean and new.\nNegative: According to Booking it was advertised as under 12 miles from Barnegat Lighthouse. However that is a straight line as the crow flies. It was a 50 min trip from this location by a circuitous route."
      },
      {
        "author": "Lopez",
        "rating": 5,
        "date": "2026-01-13 22:32:13",
        "comment": "Positive: I loved how clean and spacious the house was!\nNegative: Nothing I didn't like. Loved everything."
      },
      {
        "author": "Branson",
        "rating": 5,
        "date": "2025-11-24 02:17:03",
        "comment": "Book it !!!You will not regret!!!!\nPositive: Beautiful home in a great location with water views.Just far enough away from busy highways but not too far.The house very clean and well maintained!!My family and I called in the chickens,cows , and the pigs while snoring in the super comfortable beds.If it weren’t for pre planned events we would have stayed in all day.The game room was perfect for my family of 6!!!We hope it’s available the next time we are in the area!!\nNegative: White painted areas could use some touch up but please don’t let that deter you from booking . I am in the construction industry so my eyes for detail notice way more than most!!"
      },
      {
        "author": "William Marriott",
        "rating": 4.9,
        "date": "2025-09-26 21:02:56",
        "comment": "We have rented many places through VRBO, and sadly we must report that this is absolutely the worst one we have ever experienced.  While it is evident that the owner has spent some money on the attractive pavers in the driveway and on the kayaks, bicycles and some games, the “basics” of the house show no evidence of understanding renters’ needs.The ad indicated \"all fees included\" and VRBO added a separate additional fee.The oven is filthy but useless anyway as there are no baking pans of any sort and no oven mitts or potholders.Two days before we sent an inquirer about the coffee maker to make sure we brought the correct filters, etc.  Never received an answer.Both coffee makers had water in their reservoirs, and they felt slimy when emptied.  Fortunately, we had brought our own coffee maker.We found ice cream in the freezer with a date stamp of 10/20/2023.Many items in the house were broken or didn't work.We have pictures and more if you want it."
      },
      {
        "author": "Dolores Longo",
        "rating": 5,
        "date": "2025-09-07 15:13:05",
        "comment": "Great little town very peaceful. "
      }
    ],
    "lat": 39.9272408,
    "lng": -74.1322793,
    "rating": 4.2,
    "link": "https://suitecapacity.holidayfuture.com/listings/406894"
  },
  {
    "id": 393443,
    "hostawayId": 349954,
    "name": "Modern Luxury Seaside Home Near Beach w/ Parking & W/D",
    "description": "Inquire about our exclusive discounts for extended stays! Welcome the whole family to this fantastic retreat with ample space for endless fun! Immerse yourself in the beauty of this stunning, modern, new construction home, strategically positioned for effortless beach access. Enjoy the convenience of free off-street parking, a washer/dryer, and complimentary beach passes. Transform this home into your luxurious Seaside escape, crafting memories that will endure a lifetime.\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\nSTR Lic# 24-0064 (RR-23-341)",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 700,
    "guests": 10,
    "beds": 5,
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-Ot4yDZvfTHEdvjrB-URYpsAUdGSEq7Vt4-WPGu8G3hU-682c855e01c45",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-kjq-q41D--I--Bg-YG5oY3VS8Kbn0zhSp-o0UGAfrhKp0-682c855c91e4e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-yoDGkshFRwxQR3TPws02UKnDDG4Wl8iTjH8AagOhLW4-682c855b40d11",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-CucyCHVfnxM5XyxOClBXon-kOvMydYEJjP6SKHS9gcE-682c8559c3003",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-yJGqR0DdidRvjSM4R1MaNokO7yLCvkaw83lLQldT6Bk-682c85589d177",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-EOr7Mnoe-t4K19f8ODu3ZxMV5FzrwSjazJdl-cbmo2A-682c855752af6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-7OeNYGjVm1WRqHriDZ7TpzPF2i9VG2IKQ9X9FghTB18-682c8555f23f8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-ZnS1A4kXu1oB2Jq6eNH0GPFmpsPpMjE3Uqu8e91w4HY-682c8554a66d1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-Kv7rmdZIlSCXd5v1YYXTUqF03IHBFjmNc96rTU7dKjQ-682c85536e176",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-JLHjUr7q5kC3NeNRxqIVpI5Hp6xKOd9iTvjsPjKKksA-682c855231715",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-qkjzmTwjKe0--eeBoOAhkLqjnUNWF--1N0g2YKa--XA93s-682c8550f325d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-Cr800XQ--XfE6-grKTq8kv8XPwmRsH8uAoz-BcT7V8qc-682c8d1cc4f75",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-4ea4rtI6haLypew3FqWlLtM9dZJ--3Xuq7JNfUAJPK5M-682c854f62e09",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-NveBGAcY6UQ0M6v06x0eB3bV04vzlFBbx5aUa8n2P-Y-682c854e2f31a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-6iIQjHm-6NgNF8e--N6LuA3HGXuAZYa--vMdvhc3--aI4M-682c854cdffd2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-jPVO0yJ594YjtlnaH4nfeF2ReZ3r8Q0KiY25TL-mhKk-682c854b32dcf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-eQcRVoThK6HKGSCFSSN6wQq45S7iJRVAaFUjCjtQ2Rg-682c854948abe",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-l2LCqR9qNM6XLntwW5gHCzw0eNi3wjIoqKnAPGfK85M-682c8544f3e01",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-VSHlUCdcIAoeh0VD5QIzBber18gF0oZBiZ-fgL5nun8-682c8540d39bf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-NDuK7uLW--6UwKuI6pRg79GrAVzy5XXruPfD9FiTa--YI-682c8d1b71bbb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-Uomdx42cpBQ9FTN-nap1WHtxEMYRjQila38vebZcpdI-682c8d1a4ea6f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-l2iFnig33y-9a4v7twL7-T6BSSnP0L8i2S-Gs8WLTEA-682c853e54b46",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-h3v4XzG-MlYr4nLN-tZE8qA2DPLNSkWPrm1PNc0nMdk-682c853d0a11b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-dNQaKxOEwUcrNCE3oQ--ZZ8WbH--ZH5JA0GSgz1XFKdL4-682c853b74e0a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393443-pk68Ix2fXeHLnT-YIamiZg5eopIZuFIqrjzVSaLm2QE-682c853a3dcc8"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining table",
        "Barbeque utensils",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Fireplace",
        "Dryer",
        "Elevator",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Iron",
        "Laptop Friendly workspace",
        "TV",
        "Balcony",
        "Linens",
        "Outdoor grill",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Beach essentials",
        "Room darkening shades",
        "Ceiling fan"
      ],
      "Parking": [
        "Street parking",
        "Free parking"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ],
      "Outdoors": [
        "Outdoor furniture"
      ],
      "Bathroom": [
        "Cleaning products"
      ]
    },
    "reviews": [
      {
        "author": "Myroslav",
        "rating": 5,
        "date": "2026-03-25 20:02:51",
        "comment": "Positive: Все дуже круто!!! Чудово провели час!!!🤝🖤"
      },
      {
        "author": "Patricia",
        "rating": 4.9,
        "date": "2025-11-01 15:33:03",
        "comment": "Very Nice. I love cleanliness. Close to my family.\nPositive: Clean, Spacious, Near Boardwalk, Convenance to Main Jersey. Price was good. Bed was comfortable. The closet was spacious and there were plenty of towels.\nNegative: Sirens went off but we saw no emergency Information in Welcome packet. Where we are from that means tornado. We packed up everything and left for the day, only to find out there was no need. Also, I never received an answer to my last email about towels and bed linen. Usually, the VROB's we stay in ask to put towels and linens in bath or washer and tell us if we are responsible for washing. There was only a message in Welcome packet about kitchen towels, which there were none of. There were no instructions on how to start the fireplace ignitor. Could have used a place to set suitcases down on in bedroom. Would have liked to put car in garage, apparently its used for storage for the host family. I don't believe that was in the information we were given. Originally my husband was going to bring his 2-hand built wooden kayaks, we would have had no place to secure them."
      },
      {
        "author": "Sandra Stephens",
        "rating": 5,
        "date": "2025-09-12 21:13:55",
        "comment": "Upon arrival, the 6 beach badges were supposed to be in the folder. They weren’t there. We found 4 badges at which time we called and emailed to no avail. We ended up having to buy a badge. The remote was missing in the master bedroom. All we received were automated emails. Although the house was on a dead end street, there was a major street running alongside it, making it a noisy spot.  The beach was in close proximity."
      },
      {
        "author": "Angela",
        "rating": 4.9,
        "date": "2025-07-12 19:57:47",
        "comment": "Perfect for a mixed family with little ones and big kiddos in a perfect location.\nPositive: The house is well appointed, beautifully decorated, and equipped for a family in a great location. The elevator was a rare plus for the Jersey shore.\nNegative: The pigeons on the roof are a real bummer, but there’s really nothing the homeowner can do about that."
      },
      {
        "author": "Michele",
        "rating": 5,
        "date": "2025-06-23 14:40:38",
        "comment": "Positive: Very nice, roomy, clean\nNegative: N/a"
      }
    ],
    "lat": 39.9487282,
    "lng": -74.0734534,
    "rating": 4.8,
    "link": "https://suitecapacity.holidayfuture.com/listings/393443"
  },
  {
    "id": 393444,
    "hostawayId": 349956,
    "name": "Bayview Seaside Home | Parking, Yard & Beach Passes",
    "description": "Nestled away from the hustle and bustle, our spacious 3-bedroom, 2.5-bathroom house offers tranquility on the bayside, yet it's just a short stroll from the vibrant beach and boardwalk of Seaside Heights. Free parking for up to 3 cars and 6 complimentary beach passes included. Inside, you'll find all the comforts of home, including a washer dryer for added convenience. Outside, ample outdoor space awaits, perfect for relaxation and gatherings, complete with a grill for your BBQ delights.\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\nSTR Lic# ML-24-1003",
    "houseRules": "Must be 25 to book! No proms or parties!",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 520,
    "guests": 6,
    "beds": 7,
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-3cUindFU8FNF2NbGUtswt8vpGJw--B1ilz2BUi5fFzjU-682c8538ec1cd",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-reWNqTUdg8Jf3uOfkOSI4xL0urA2aY-8G16--2iPop1g-682c8537614e7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-oabhqNwzLPTcj-ZsQdPfCMOqPX2mbAxU-Jb--LfvWteg-682c8536426d7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-C4ATSjW1sva5Z-GPELrmG1QBaaR0ucuMuNbTogThBDM-682c8534f3f3c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-qzmPdrt8Zpti2Tav2HIYonVorVppcPgA3fryKTEjMv0-682c8533aea10",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-j9JVqvN2rXkaIoWj8AdgpHrSxw6aMmEfeBXOCQyZXZM-682c853258a83",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-5tMmfgwaPGIcRhsNNEZJgbAzQi4SxQ4m4jmRKpum18o-682c8d19029fa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-wgDJTdO7cv2sBNjSlLJ7nohoAjWGCHHWSzDM2Ut41t0-682c8d17d368e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-Hsk5XKrrbbtMMwDmUlW0gj2ibJIx1U0O1qx6nqzwUKo-682c852dc02bc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-pT-4MSrCm9Fu--wIicvzw3fMQPcCOnROa3QlWU30rYj8-682c8d16d9813",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-DF1npCU45tOLsLrlWr1YsDCyBIZXrz54ywnUn9Tv1Q4-682c852a1382e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-1twV0jmX-UrVNxIkNKJdC0WkPjnJOfO17i8lDxMVx3Q-682c85278e3e2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-AjKNPzvBfpp0wCtjWn2ijBGla62LWDwaMMMpiwNuh5o-682c852525d45",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-CXrr0zOGRZOdIsYHYFlQxeGIhYy5L5Fz-UryurHI3CA-682c852241f3e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-e7YYUCQHwZ3Ycvf530Sotpm05GF2l--I2EBTDbPW1tUI-682c851fdf529",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-6L56Fh--0di9fwaO6qJdUxEWzogpuAI1xSj0M3Xj8O0c-682c851cd26c1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-xM5igCYbmPK4wsiwzjUw5Y--832lDIYNik7lyq1fKa-Y-682c939f7a9b8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-lInXh1oq3WO--hm--tEYNtLyW65rI8arWG3XUyD--BmHjY-682c8517e6335",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-4OhnLEleGzLdCUMHrnmG20QTNqCFDhocKH5EfkzHTA0-682c85165ce46",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-LY7uunFHWpTqqkM-TtaWvOEc8PGE56Z61FIKsVZoTzU-682c939d496df",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-D0jsMY43O0dwzZ9HvetS-XY2yVVVml0Lh50M0--e-Ohk-682c8512118ea",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-0ufLpeDYwUUBMKbsZ2p6JyYL2PpgE4zs2l8HLX6j1RE-682c850f7aa0f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-cg6vwyFgSKZ3raSNNW4sP7ydJOfr2-q6HrzV8H9hxLY-682c850ca9f63",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-1lcUjfYGfK--9RDk0DyWBVl6DNBgE2vLWC0wLY6EPbtk-682c8508dcec9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-THf3NKYjV3WACiyEf1--7Zeqxo1D1tSJSGo49cUoLBY4-682c8503b3690",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-tlkjrzBVwoAhdyGdGsLcA2-fbnRh9yAmK5Mhh0DILAI-682c85012d914",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-ftk8Hq9jk1GNIGovTJi42Yj5CqDbGOZ9XMOrQe9vS8s-682c84fe748d7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-P1IyfV7oGKS3raOHmWIO1BZqX0wes-0FqyXc9cuLlvM-682c84fd27603",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-0jIcI0dboZiKlhrS6MXYK46067ytmCd019WYwiMIgbI-682c84fabf977",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-BNbOSnZPUiyWJDJcccY3o9y2L1sC74zcxG4cHfStbjA-682c84f7a0528",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-Ai5T6GJQdU1o7W1zPFxeN-44Rw2Hf4deuPkPlzwVwOo-682c84f4725e3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393444-VKesTiqKQxTXZ6rOJzcIXxXlYPwRWMER6kiUyLm1bV8-682c84f17d32d"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Electric kettle",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining table",
        "Baking sheet",
        "Barbeque utensils",
        "Blender",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Fireplace",
        "Dryer",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Laptop Friendly workspace",
        "TV",
        "Balcony",
        "Linens",
        "Outdoor grill",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Beach essentials",
        "Ceiling fan"
      ],
      "Policy": [
        "Pets allowed",
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking",
        "Paid parking on premises"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products"
      ],
      "Location": [
        "Beach"
      ],
      "Outdoors": [
        "Outdoor furniture"
      ]
    },
    "reviews": [],
    "lat": 39.939566,
    "lng": -74.0790636,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/393444"
  },
  {
    "id": 439808,
    "hostawayId": 396156,
    "name": "Chic Lavallette Beach Home | Hot Tub & Beach Passes",
    "description": "Escape to this beautifully designed 3-bedroom Lavallette beach house, just steps from the sand! Perfect for families, couples, or a summer girls’ getaway, this stunning home blends coastal charm with modern comfort in one of the Jersey Shore’s most desirable beach towns.\n\nFeaturing 2 queen beds, 2 twins, and space to comfortably sleep up to 7 guests, this home has everything you need for a relaxing and fun-filled stay. Enjoy the convenience of driveway parking for 3–4 cars, a full washer and dryer, and 6 Lavallette beach passes included (a $300+ seasonal value).\n\nUnwind after a day in the sun in your private hot tub, refresh in the outdoor shower, or fire up the BBQ grill for a laid-back dinner under the stars. The open, stylish interior offers a cozy yet elegant atmosphere perfect for making lasting memories.\n\nLocated on the beach block, you’re just a short stroll to the sand and surf   and only minutes from Lavallette’s top restaurants, coffee shops, and local favorites.\n\n⭐ Highlights:\n\n3 Bedrooms | 1 Bathroom | Sleeps 6–7\n\n2 Queen Beds + 2 Twins\n\nPrivate Hot Tub, BBQ Grill & Outdoor Shower\n\n6 Beach Passes Included\n\nDriveway Parking for 3–4 Vehicles\n\nBeautifully Decorated & Designed\n\nSteps to the Beach | Short Drive to Downtown Lavallette\n\nWhether you’re here for a family beach week or a weekend escape with friends, this Lavallette beach block vacation rental offers everything you need for a relaxing and memorable Jersey Shore experience.\n\nBook your stay today and make this your go-to Lavallette getaway year after year!",
    "houseRules": "Must be 25 to book. Proof of ID will be required.",
    "location": "Lavallette, US",
    "city": "Lavallette",
    "price": 700,
    "guests": 6,
    "beds": 4,
    "bedrooms": 3,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-6iOOMuxxyCdqUSxUO3xrf07KzmVXHDGWhh4mjFbIiEA-68e505c3b7eed",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-Q-ALFD6FbivK3LH2H1WgnsaLUYnTEMZVAZPPUYz-tGk-68e5053034cb2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-29VchjXnhz80et6Y55wyhwiXch9BABgQhRy5eoWtQtQ-68e50534598f7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-L513dB64U3D6jiTw2-nyzU3S5--iyGiAGzmEwyfg8-s0-68e5053ede58c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-m4JsiGtxWwtfR0F-cZ3DGpZutBChGkt6GqLmtgGP7C8-68e5054599818",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-Etav6BzqwTJ4aIQqQcrIO8uh-SAbLC4T2TcCbEC7ggk-68e5052cd0639",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-s9h7ZC3Oo3ygJCpETtv7po48DzXKqDm409Mwuy6nctQ-68e5054f00e99",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808--Z9ZGmn5sVd6AHL4mOMHrDxnGVFD67R0cJ3xR6b1dKU-68e505568fdd6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-w-LjPGSGE78d8N6wW4d5Y-ySIojviTVB2UpCxaN6QsI-68e50538ef978",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-Dq7vmXbs2h9uArypwERQKOpdE-4m--poq-EoJLRiwNpU-68e505bb93254",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-1ia8CidNCqPJFLKXEzcFXAf9Vf7-fuhuAyWUt1XSRaQ-68e507fb103c8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-OKX1-PGMcj4FRr-JbhFWWPvY4ct7N-rDf06-2YkZIoE-68e50803a26e4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-KyoMfoagzKMzN0CmuG9K2UYpd7Deyi6CkcZwAtZbbh0-68e5080b38b3c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-j8TNNgC0Dyc71bzy1pfD3FuA3QM-2QU4kX1kJH9Q4rk-68e508131b2e9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-SDZ2GkuqE2PHo2NRV7e2Pxr2e2QGBJcYpraOgJrfk84-68e50825c8f80",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-9Id1SVE7VpLWZKZ-CsFJYwS1C4C1cDgmMuxPrMuvnxY-68e5081c00438",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-hmGRlpaG8Khl8ffVPzIBU1fXCheTSCPCT7W5ekQ7CCA-68e50d7180dc5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-eDmJmW7L5WYpDejSO1LfC--k1Ojpn5Nk1gjWPYI10fcM-68e50d7e66183",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-OWkDGiAkVOkZ-0OefQrchWgTkRsr--0edTyt1MCbBxTk-68e509b6dd1c6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-j50NdP2fa8---tgqATKECmu3SrKqKUXEng6s7jtONL--s-68e509c465945",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-Xvkv0NCHnWeRZP3yxrpR4YV1A06yiFEhy7SGpBXhw1Q-68e509cf76668",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-mOaEo9ZTFY55uoTP5eq8V5YDRczPYQRF9d1RGGFWMBY-68e509db8f602",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-18Q---ptSIamzUvkQMW5ADwwOOiUQZbOjuDc9gV--Ke7k-68e50d8ac8f37",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-YdI0LwfJhu7jlAT545xMiXZ25YhX--YnIGGJcjCP92HY-68e509f28db5c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-d2AhX0lg6PhxlW7B41LtSh2NFH5CupKRAL87yCbsdyk-68e512104e523",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-jwXXpYPTHsECGhyeKeuJVss8TQgvo-e29--Wj8Q4lM2o-68e5122004e68",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-c1c0uYlzeHbP6tdhCv79zLBW--1KbIDCOnFfMz3EfZX0-68e5122f034d0",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-pcHGtnadJa9q-02Mh2m9KUJ5m7URynY-UM9QxNITwig-68e5126ed6f3d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-MSuEpXEkcfzyJos6ZqIAUn-hwpKkukR--MITiWG8dhBg-68e5127dcd69a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-WpUEkk28tnDzz3LBys2ATQalaLhbHZMBjNTtPA37YD4-68e5128c7d9ae",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-BsDG--ZiMicw4OSRf7c5qfY6R1pYeGlf60Y5ZG5j--SXE-68e512ebea0f6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-9MHumbM88PkUGLgrNegpUCTFHG5zKru5SfnyzuToHdc-68e512fb5bc48",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-Q0NNllovNApWSvVYfZiGntox2adnHW1wmfUI--NV-MTA-68e5130ab91a5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-AchteVeniyBkvkv--KLb4zwhIjCxcw9r6wSVgeGdzPqA-68e5139fb279d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-uWxaPwKHr-iMXtmn5doXQlBGev602mqwt1-o1VQPm9A-68e513af728a4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808---Zp8lZ--vp5qj0FiJrWheLoPAeIe--41XoCK94RG7C53U-68e5143980333",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-R7xdZUov8eGnbxTOnOYnhZWVUHH3hh9WntG0nKXM0Xk-68e5144c7506e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-pK6EWaSBA1NKcNXYPdqk-l8Ks8OlrDbdBGG5xVJeouI-68e5145e76c0e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-pGR2NXRrqEWcTv--a2Nn5IWL2o06-pDNUkV5Vfh2R2LQ-68e5146fe41ac",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-fxhRAVxNiCaOuK0--I2VJRY6ucdoRw4DjhAyvN--0wdZw-68e515117c9bc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-HPm--RHiFUfY9YYyYDaQ2flCq6ODepu8Mg781fvn7f8Q-68e5152379743",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-SZl2islbRxwkYcAokiMOXC35OKi63vSc56Vospd1yKc-68e51534e06ae",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-7BKK8ie0q8J2iylonKldHTfMGqFHp1362QbhAyUCo2o-68e516972e8ee",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-LNDRHoh45cmKqgL0CK-FWDccTG2JBTmv52S5skx3SBM-68e516ae3d76e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-xq5g8ehc7zYGUCiJBcaGHy5iy-rric4uKLEZO9dqrSs-68e5176fac495",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-D--84LKqfiCA41lnQUhNBWFPt6LkgfuVT6RE4CY2qVb4-68e51783b911b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-ThWLQhm5t--N7naPoxw8jP1fCX2ZsitawzFzUsdxfa6A-68e5179997011",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-RZNPkHWH0Mgm5kKvwvGqYTT6QyXYUe0TfCRzvzeGfCQ-68e5189118f9a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-PNQZdzMeO0l7K91zL4uD5naEfP9QPloQ1w-5j--P07-A-68e518a7e9723",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-VzjrClfQsFl0twkhXY2IEUnSfg3lN2xy69OP1hSgYtI-68e518bf9a2f7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-WA19OG904nx6Crx4fUaO0m--8pk56Fvv----N0jyRKEZEg-68e518d59c480",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-mtsLtc0iUAWZrgTb-LivoaRNTAs8iFN5QeLq-WQvZb4-68e519610714b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-O9JSguAKR4G9vRX0C4ffeBHZeqncbrzCA98AxNfpbq0-68e519792eca8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-u6BOv4eFxth--xLPl0FUy7WUdrpC8B3YlLEzqa9LT8b0-68e51990d6ce8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-ExuEt22wSLXwE5--K9jb--cCO9cCUtd5PlQ5Pr3T9GXmE-68e51a62706cf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808--SCBxSWBaCTv8O5M0DcyY3NpO--1YWdPkeXM9d9ZFIms-68e51a7be89c9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-j4IprjJ4Xedt-Nw5MEJxrerR2MHITK1XkzxPqgprNb4-68e51a93dd5eb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-0ZeN0Z-JEf6dpe2ZmbqQjRCGkEyaxU5rN3zkDqgWFWA-68e51aab2d04b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-u3gCD9Xly5u33NZj7e0AVIPapyi1J7----jZ4SKwTbMA8-68e51ac270d5a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-bkriWYGnuPFCAdg5YPvTN--cD28ja0--s1fcwin9dE8jg-68e51ada61ba1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-8IfZ3pxumZlpU1oIlHWaXRnEV09frwEZpXX--5sPOjL4-68e51bc574242",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-G9jTvujathBCEYBrPjr4R74sBRYB0oiVvi1wfzXROjc-68e51c7a128d1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-LkDYMkqNRsSnCQO--5md9SDT--1cVBrbCxdFOjre-dUL8-68e51c92e96a6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-RoFwFCSmhVK3H-RBmqq7P0SpEFz5JlhAvfvgtR-Xqfk-68e51cad6c57d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-qKlbS6KPCuTR4--P8zKgVdek72wjd1gFlEr0eIvxJ8zU-68e51cc748664",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-4ey3JsY8qD1CvaPtRHq1QWgsuS4nm744ONt9lF3h-ng-68e51ce13511f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-JkghTvh4gNNce6DGWVBE4xiTFNmF2DrCh--i1VzT6GcU-68e51cfd48eda",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-j--k--Xh1vLyD58X3FVaFCIKOhHBBqtU7xqEW17vF5qiU-68e52070e5ec2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-KY2e06Irt5-HFw2-dAOeSHHfYahezKhgAJfcGECYx--w-68e5208c876c5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-W98XhB13Id9lmJGQBZR--WG8w1dnHRwE9nIR0TLGA0gk-68e520a873559",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-emmo6Qqi0HPziyPWwuXbAgH61vH8T0ojpLuVJ7xund4-68e520c405fc6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-439808-enESOWrFN--NcArWdUwC-O76IhFvORwOiVZjc-6O0HFg-68e520df8d28b"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Hot tub",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Shampoo",
        "Iron",
        "TV",
        "Private living room ",
        "Iron board",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Beach essentials",
        "Laundromat",
        "Smart TV",
        "Clothing storage",
        "Ceiling fan"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Kitchen island",
        "Dining table",
        "Baking sheet",
        "Barbeque utensils",
        "Blender",
        "Freezer",
        "Wine glasses"
      ],
      "Parking": [
        "Street parking",
        "Free parking",
        "Private parking"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Pets allowed on request"
      ],
      "Safety": [
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher",
        "Hospital nearby",
        "Outdoor lighting"
      ],
      "Bathroom": [
        "Shower",
        "Tub",
        "Jacuzzi",
        "Toilet",
        "Cleaning products",
        "Body soap",
        "Conditioner"
      ],
      "Accessibility": [
        "Single level home",
        "Path to entrance lit at night"
      ],
      "Entertainment": [
        "Books",
        "Games",
        "Board games"
      ],
      "Location": [
        "Beach",
        "Beach view",
        "Near ocean",
        "Ocean view"
      ],
      "Themes": [
        "Family",
        "Romantic"
      ],
      "Cleanliness": [
        "Enhanced Cleaning Practices",
        "Contactless Check-In/Out"
      ],
      "Services": [
        "Private chef on request",
        "Housekeeper on request",
        "Grocery on request",
        "Site staff on request"
      ]
    },
    "reviews": [],
    "lat": 39.9837967,
    "lng": -74.0648593,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/439808"
  },
  {
    "id": 393458,
    "hostawayId": 349969,
    "name": "Panoramic Rooftop Retreat Near Beach w/ Elevator & Parking",
    "description": "PRIVATE ROOFTOP DECK!!!! 1.5 blocks to the boardwalk/beach!   Located in desirable South end of Seaside Heights - less than 2 blocks to beginning of Seaside Park!  The whole group will enjoy easy access to everything from this centrally located place. Very popular Irish Pub across the street.  Walking distance to everything you could need - restaurants, coffee shops, stores, arcades, rides, etc.  Unit itself is on a quiet one way street.  Best of both worlds!   SO much space to spread out!\n\n4 bedrooms, 3.5 baths - 2200 square feet.  Multiple hangout spots and a wide open, reverse living floor plan.  2 1st floor bedrooms with a shared bath.  2 en-suite bedrooms, each with their own private bath and half bath on living room/kitchen floor.  The highlight is the rooftop deck for sipping coffee (or wine), watching the sunrise, sunset or fireworks!   360 degree views of the ocean, bay, amusements, etc!\n\nKeypad access to gain entry.  Elevator from parking garage that has 2 reserved, garage parking spots to either first floor entrance, 3rd floor entrance or rooftop deck!  Very cool center courtyard area.  Multiple balconies.\n\nSuite Capacity management company readily available for any needs that arise.\n\nSaturday to Saturday, full week bookings during peak season. Will consider three nights or more in May, early June and September.  25 years or older. No parties/groups.",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 675,
    "guests": 7,
    "beds": 5,
    "bedrooms": 4,
    "bathrooms": 3,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-Ofi46SNTy--TYzU8GowOvdwTXQAdEjdLgac5OOqS2Z8Q-682c93753e8b5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-IJoHVJz2gNyEkIKpYmD466DU0sBW--7zp0ObrRRtFRIg-682c8bfca2117",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-Yq-QMuwbyj37GUwOCHdBG5hJOdJ4-27pUYcag2Hye08-682c8bfb5bf5b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-aOwyfGmDs4Sboc7EosD-6qDAZO8XGgicH8A65S7pM4Q-682c8bfa35942",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-83152KtQuuvev-ERU3onpeFP-ucI3k5KAPKgUdtX-j8-682c937417455",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-pJUAfHO4zYilfZ3Kobw-KVEpzbMh6dBEJQWre0cXYaU-682c8bf861bf1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-C-3zWSbRfaDpbvpe2uaw8DfnRWoKPksn6eR8ygWYiTA-682c8bf6d4284",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-2k0C6i--6DdBOmHEBtTPyvXgYfcMkgAFMRiZ3kcYFJJI-682c8bf5632ef",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-Eva1FMeUcjldA6QEXxw9--7pHkfirMrK0VXCivS-0rVg-682c9372dfce1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-w--K01vEKrbAr7NquXjivbVYhFRnCqdE9Jdd2Y5LjGnY-682c8bf3c43d6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-p31K--4xsudvZr-mgL872Ol7IhXi8OfzUPjga25XaNEo-682c8bf27ccfa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-KirV66--Twdasc3fh8I5TownH5g3viVczQUA2hMKReJA-682c93719c2b4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-AImH5xrwOA4AOyaXTIDKA----1sGUfzVgN0VltaL1oJpA-682c937070543",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-wYpMbvTCnmVil-H48bUmy5nAMbBBxJ-jRIABYq5bBkE-682c8befdca05",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-3xn-BiJHCoW9ZlDUo0jEWhCVmrkGV4ohiW476OE-h7g-682c8bee57bb3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-Xk9SSK--4MvK--oKkA01Fy8JZLD-Rjd9-7TZ8--Oxl--qIU-682c8bed08a64",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-LyLoEMTmdaqh965xOfbeduPaXOId--kDTN32AxoP0s0c-682c8beba97ac",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-CBjGlypsFmZIZ9WKyyRfT9--2EuZIm17pupEBsHzK07s-682c8bea41396",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458--BkY6YSQkhycea8TV3oVUNSWyElxthGmLAtJPKFuiDE-682c8bda5ac8c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-huvsHHazcKli-Rs0a9f2lYfp6ZYb84BPVRvm1FTo418-682c8bdc04e49",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-aGyoKaq22go6B--SPDSt8bue5CfbB5lObndLcRfpPeSY-682c8bdda43e9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-2kP4--qKCB--GvRlot8T--C2Zu3J-4zXijAcoA2wvmIJqs-682c8bdf2e197",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-8kLBCdcqdPxJCWNspg7--ogw8QkQcb3egGG6CdhweVDQ-682c8be06f2dc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-rpxngDm3--YEAyuwxGMvnEkCJU4cRSB-3zFzonmdFV2k-682c8be1b937d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-V--bwNOISa8X753nIBN5EdAQEksYLctDGAg2qAIH9zBw-682c8be42ff40",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-SUU7N0lQnNZCmYFKtyUaL-U7zEtgaKvnomZVI0enHUI-682c8be557a09",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-xtZdIYf7PvFS--ej2odKuD4O92hl6eCuZEKKmVuCNOZQ-682c8be6c8601",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-267GYBiQsH-uJXlG5vE6cpxdFPrAu7--9-JOgQYScvtc-682c936f4de95",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-9OFE3BELW5vA8jDlyQHgLboTy8M3LhiaDn9ULMzoxQA-682c8be8ac6dc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-SQIAoBc6F72-zA4HaSL09--DUOoboa79YbkCJXseT1DE-682c8be2f30fb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-GW--DKryfImntdzH24lUSFkHC3-HjHhpAdZ0ObK1g9zk-682c936e06685",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-6xjHRrbgWs2NT8D0jcucLTekI5aa7Ef9r7Nh3eR3RL8-682c8bc6a8d67",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-k2w1kpEmmJQ4Q24m--3lQQN7G6Ej9FMrZ87Rqr1agOUA-682c8bc83fbaa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-3pKOq69jYUTjk-o43xAsR6eMp-pnLO37d4rXg8t470k-682c8bc9ae453",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-4PjGHglsYiSUzuA5BA4ocYLBlKiCvikXRMkLsZ63qw4-682c8bcacf215",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-tArHgtJJMkp6ssygVcxLq3z4KwThiWDnWA--9Udm2eJE-682c936cda84c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-xNYOYFcGkByVNZC3--exN1sU793QSj2G6hdz6LaYEVM0-682c8bcce734d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-9-Qj6-MSnveJaYx1jWZbQli8XWCptS1ZCqk7Ip7KBII-682c8bce1c0b9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-KQUR4n0hx3dfi-JcGpf9JyQyvjrQ6HWc5hOnyaVXb6U-682c8bcf8da66",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-cMwbkslIjFn-2LJ6JSfeBZ7p4ex2kUm8Dy4VM-VLTCs-682c8bd108f4b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-cc8JDaSRf12SS0D91JOVX6GXOBTt5yoQGRotYTuzxYc-682c8bd5692fc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-JpoHRD9CXCAh0NzvSUkN5zxsig31IZnpTyPdgsbJf6k-682c8bd89d12c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-TdojAx4BAGTQh48zRL8HMlhLee4AtXMkHG--08B79mkc-682c8bc5860a1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-PFMO8HH7z8sqpUmoG0vPvLlT--8ptl5--8lj3Z91q7aAc-682c8bc3ea60f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-1bm4jnwN0UyjkKLxWlcDToSRvhamn8L0D0ydJjnf5KI-682c8bc29af49",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-NUMhUh0kRvEkH0l8hdKbqovFWlh3uEPai4Naic4gZsY-682c8bc14abdf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-sFYKPqVWPIOKN6-Tc9ds67CMmLJ9uB-T-890bzGg9-I-682c8bbf80109",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-l3smSEiEg35przazrb6Hgkh4TEru--uMX4RqMXlfjAXY-682c8bbdc21f6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393458-F5bEiKYgb4Kwnt--wuB30VDlWege6khv9hKYsGuV-nxs-682c8bbc44b2b"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining table",
        "Baking sheet",
        "Blender",
        "Coffee",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "Elevator",
        "Hair Dryer",
        "Heating",
        "Shampoo",
        "Hangers",
        "Iron",
        "Laptop Friendly workspace",
        "TV",
        "Balcony",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Beach essentials",
        "Clothing storage",
        "Drying rack for clothing",
        "Ceiling fan"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products",
        "Body soap",
        "Conditioner"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Cleaning before checkout"
      ],
      "Outdoors": [
        "Outdoor furniture"
      ]
    },
    "reviews": [
      {
        "author": "Julio",
        "rating": 5,
        "date": "2025-08-26 23:59:14",
        "comment": "Had a great time, definitely coming back!\nPositive: We had a lovely stay! Group of 7 with three young children, plenty of space for everyone and an awesome rooftop to hang out on. The house is a close walk to the beach and boardwalk and close to everything you need. Living space is spread out over three floors and parking is included.\nNegative: Can’t say I didn’t like anything but if you have mobility issues be mindful there’s three floors of living space."
      },
      {
        "author": "Gail",
        "rating": 5,
        "date": "2025-07-29 00:41:15",
        "comment": "Great place to stay with family!\nPositive: Great location and house was plenty big for our family.\nNegative: No TVs in the bedrooms."
      },
      {
        "author": "Ann",
        "rating": 5,
        "date": "2025-07-08 03:04:24",
        "comment": "Positive: Lots of space for everyone"
      }
    ],
    "lat": 39.9377581,
    "lng": -74.0751498,
    "rating": 4.9,
    "link": "https://suitecapacity.holidayfuture.com/listings/393458"
  },
  {
    "id": 393439,
    "hostawayId": 349950,
    "name": "Peaceful Seaside Home Near Beach w/ Washer-Dryer & Backyard",
    "description": "Wake up in this peaceful Seaside get away. Enjoy a short stroll to the beach or a relaxing day out on the spacious backyard patio. There's nothing not to love about this place. Want to have a nice BBQ dinner? Yard is equipped with an umbrella, beach chairs, and grill. Forgot about beach passes? We got you covered... 4 included for you and the fam. Big kitchen and living room that will comfortably fit your family and friends. Welcome to your personal slice of paradise!\nNo parties! Must be 26!!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\nSTR Lic# 2400024",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 329,
    "guests": 3,
    "beds": 6,
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-dAjkXpmDEwvTLwKYX3oScJGtK0CjGwmwwp2lXNmcDcA-682c85a0edcb1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-AwckiuEamLDUjR4JP2vS9JOsD7nmLVvX--PAMzhg5SoM-682c859f828b9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-LdfSuMgKTxW1t70832SNXUN9--5HxrbIiay9Hq9x5Csc-682c8d2a55c34",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-CodVi--6zbwucea6XFfAzQLgcB3tCaAw6iloF4L--7y8-682c859d98221",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-1TaC8linFbqr9X8peLyhjaak5Z8--ZwDLxCbO2eKg1U8-682c859c24801",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-VsdUV3K8po0CUg--yCPtXwJ5ov2FVZUKua--F--FtcwUdo-682c8d293eb91",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-ZNeEkiVDi4FWpo7vPOLr-vtw-zblt5eekDrr9IFbNHo-682c859a31c93",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-EVu--HwT5OGSwb2voCSc3SvZ0uaH894mBA55PWi1SO-c-682c8598db67a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-9s7PKnnP96KGWwrKDd7KXEIHiMqULNvv6tDysaa--f-o-682c8d2829f53",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-AslmpQJ4DQt-8VR2584LEQZP1VYorddZlyBFqSpdfqY-682c85973f8fe",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-8scK--Gl5pjy0wocY7pQSwIFHqxu9G7iKBXeaZAe2LOI-682c8595ee80d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-enk5RxsGab6yKRfVPWUbczcyBCrLCdjNwMVJ73QN-eM-682c8d27040db",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-BfMkXA9mDTMSDN-AgncYNS80X0YqGWXtD7kf34dhtrk-682c8d25c2070",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393439-R0Zk42u3vpx8CGJivbsBn2XfZSnQlUEHt--4Ggc9KEVs-682c8592a6973"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Blender",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Iron",
        "TV",
        "Balcony",
        "Linens",
        "Outdoor grill",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Beach essentials",
        "Clothing storage"
      ],
      "Parking": [
        "Street parking",
        "Free parking"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Children": [
        "Childrens dinnerware",
        "Pack n play travel crib"
      ],
      "Location": [
        "Beach"
      ],
      "Bathroom": [
        "Cleaning products"
      ],
      "Outdoors": [
        "Hammock"
      ]
    },
    "reviews": [
      {
        "author": null,
        "rating": 4.9,
        "date": "2025-12-17 16:17:08",
        "comment": "Positive: Never stayed there! Says pet friendly yet I was told no. Don't charge me for anything!"
      }
    ],
    "lat": 39.94494629,
    "lng": -74.07486725,
    "rating": 4.5,
    "link": "https://suitecapacity.holidayfuture.com/listings/393439"
  },
  {
    "id": 436029,
    "hostawayId": 392381,
    "name": "Pool & Beach Passes, Spacious 3BR Loft Condo | Sleeps 8 | Seaside Heights",
    "description": "Welcome to your Seaside Heights beach retreat! This rare 3-bedroom, 2-bathroom condo with a loft offers a bright, open layout with plenty of natural light a unique find at the Jersey Shore. Comfortably accommodating up to 8 guests, it’s the perfect choice for families, friends, or groups looking for both relaxation and convenience.\n\nInside, you’ll find a washer-dryer in unit, a fully equipped kitchen, and spacious living areas designed for coastal comfort. The loft space adds extra sleeping and lounging options, making this condo ideal for larger groups.\n\nYour stay includes 1 off-street parking spot plus a Seaside Heights parking pass for additional convenience. We also provide 4 beach passes (a $200+ value in season), so you can hit the sand stress-free.\n\nAt the condo complex, enjoy access to a sparkling pool, a BBQ area for outdoor dining, and a prime location close to the boardwalk, rides, restaurants, and the beach.\n\n⭐ Highlights:\n\n3 Bedrooms + Loft | 2 Bathrooms | Sleeps 8\n\nBright, airy design with rare loft space at the Jersey Shore\n\nWasher-dryer in unit\n\n1 off-street parking spot + Seaside Heights parking pass\n\n4 beach passes included (in season)\n\nAccess to pool & BBQ area\n\nWalk to beach, boardwalk, and local attractions\n\nThis Seaside Heights vacation rental combines comfort, convenience, and fun in a central location. Whether you’re here for a family beach trip or a getaway with friends, this condo has everything you need for an unforgettable Jersey Shore experience.\n\nBook today and start planning your ultimate Seaside Heights vacation!",
    "houseRules": "MUST BE 25+ to book! Proof of I.D. will be required.",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 450,
    "guests": 6,
    "beds": 6,
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-fsdq-NAEoQooRI7vgfoov0mAniy5bYEJyB1fYTDA3tA-68d41c95b05e7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-h9GajUvps18Pp--POG-SgLy02U-Gg4mJsQmQgc9BTgnY-68d41ca27c22d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029--6PWbRwoQB-koZ6dsz8bce0KOeDF0rFq6e1fzGdgu7U-68d41cae608a0",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-gUe9rerafR0bF3MQ5--JwzqynVVHMesGVbSIPldB6H4g-68d41cb437f55",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-8ZLhOQHTE4VmYDsleQzZBxBOt4ydDF8S28ucWY6PIzw-68d41cb98ce1d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-vuuv5tRRFnEu--eWGCeeQFhtDZAipWH7--NnF2ufvpKew-68d41cbf0b819",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-ULwEU951KMQk4T3EFqTd3anwzU4-aPZxZG4IPlmafmk-68d41cc507f8e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-w4TSkl7nZyroaeZA7RVxwfmRcYWjDGc63B-tp3SmadI-68d41ccbe9a7c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-T9Vcf5ePojaTtLdWewzYP--EEB0ietnGvgn30lstTuV8-68d41cdc883df",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-TZ3q3qGFZ1nB3RgOh61zqgt0lo3SonC48vl8rRBzgac-68d41ce45beb9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-T90y0roezN7Q64dVFL2exm5jKdVE8LJN5fIenZQmpqU-68d41ced84306",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-ZQRtjw8AsH8Z7wxx1l2x5y74Nx0SgVesaWDuz1--J-DU-68d41cfbbd8a6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-9YlBrbJJxF0MGAbZ0jMILp9Hlyz0izr1QoZF4--mnrTA-68d41d10f0a09",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-vy8hzH6zPHHachIVVGlOjKWTQlgOvDMhh27YtJo--Zfk-68d41d1ca136b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-qUUSEaCA--RDQWj9t97dluJgkDe3OUfpMWh33fYDR8U-68d41d29b1ac2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-IEsS--1RZLhC-iilZVwMIAiPeImJz8RwKzf8cejer2mk-68d41d3635aca",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-fIypUf1zy8H9--615P08shrYgU7XEM2kqlNLeJKysqG4-68d41d431a609",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-RtOlCYKeAtxO2iC58Hjw-IaaqkpnnLaZ2TOrlCNmEvM-68d41d4f0d741",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-kKpcxUCRWn-rbt5rNiBQI--mKZrndWCDW3uWYj88ZHIw-68d41d6825648",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-XnTxz3eOQ5u5v3--nM--x0v--bKLTSKCBU2vLzugsAHPMs-68d41d762b474",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-ReU6aRVsj2LBuhHYGmAZe06k5Tmz5vXC6R8DpZkCylk-68d41d83a9571",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-KmmqeotfnyHJjxcO8Xdo5cBpgjkBLC8oYMbl9PdD5U8-68d41d9086715",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-ESWpqGcLqvNeQ5YoqIfsvXEzUeW--C936ye4HGDcykdo-68d41da03c62c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-p6BM7Es--ODOYv31nSDwgYXIRlMLsO2O7vCwMWplsSpI-68d41db245fb3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-Q1JuPVb5z7-UM--9dbqDT2dKPEM7GZdw-uUlIdZm0V4c-68d41dc465df6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-a9Ax4uV9x-TfcLl17SczquFLT0KwO6ltHPw5vRqcMIs-68d41ddd98d7c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-8uTOeEVbLhRQN8vYv0XUBa9ruo4WQBCq8qKD4--2MYiY-68d41dec18ec5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-r0-HGScx4tzOw7YeNbjRh1En9REOmYccXqVoEPEx6bA-68d41dfc9e9cf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-ZRk-QOOKPMCCmioN4Uqoq8L--vAfzrKgSMZ44ECdrOc8-68d41e1475a92",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-w4X2vBIt1zf8jnHoILo--cugjYR3ggcZeIDn5eJnQwdI-68d41e2a4a079",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-MW8B-F3MRwFZYu7TQsNyZzxyEeZXjuEmg5FR5ZCkhwM-68d41e3c67b8b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-FpdqzgEM8Wc1lFnWYJLXKPOHvUZQ5HgFfxf9TVABvE0-68d41e4f0666a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-YAiMNROy0jxIAPKquIc6Qe5ZyzsVlORjsz0--OgMOIUA-68d41e61505e0",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-iSdKff3E5SQA6DNzZX8AHXXruOziaKZWFwnAx4gTPW4-68d41e74d25d7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-YtZJrvU2Q0ErJvoyDO6ixQlj6XsZbBSu88qkiTU1n7Y-68d41e88e2155",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-ihWjp8F8bXzw6---y5F9jozcASp--y6Zm2n8ViPB--uE--Q-68d41e9a63dd9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-EF80--98Xc-qw8P2I2YKytGF--T0D0c--4N7q7WsnMeMPg-68d41eb09e30c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-mfAYTWwTrFSlwgSKZbRR6CoV6eO1DFd0H01d--ZM6pwc-68d41ec5eb776",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-AOSEhklzHeGrH7Ve5pB7rUJOUXSl4zcN99fGzjgy89o-68d41ee4794c2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-XpYC-xM-dSn4UMkBlMNSTjR6yYjTdVEcKMLxCH0gupo-68d41efd561ea",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-yf6gcTOeA0aNVlF6URmqt7eh----7XoFQpVu6bUl1D8AQ-68d41f13bedab",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-YibyQUGjBq1PfHnLz8wYdMq2hC5bmOLvmNZxjuh--vqY-68d41f28492bc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-2DlGsYGtQl1J49lNAxcRh1vymbawe6DMQQqFy9EspjU-68d41f3dac310",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-436029-b1gOC0CSXsn4ZhXt8E-Hd03v-A--MlNQn3nghyDj60yU-68d41f54b6787"
    ],
    "amenities": {
      "Pool": [
        "Swimming pool",
        "Communal swimming pool",
        "Pool"
      ],
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Iron",
        "Laptop Friendly workspace",
        "TV",
        "Balcony",
        "Private living room ",
        "Iron board",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Beach essentials",
        "Room darkening shades",
        "Laundromat",
        "Smart TV",
        "Clothing storage",
        "Ceiling fan"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Dining room",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Baking sheet",
        "Barbeque utensils",
        "Blender",
        "Freezer",
        "Wine glasses"
      ],
      "Parking": [
        "Street parking",
        "Free parking",
        "Private parking"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Pets allowed on request"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Hospital nearby",
        "Outdoor lighting"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Cleaning products"
      ],
      "Children": [
        "Babysitter recommendations"
      ],
      "Location": [
        "Beach",
        "Near ocean"
      ],
      "Themes": [
        "Family",
        "Romantic"
      ],
      "Cleanliness": [
        "Enhanced Cleaning Practices",
        "Contactless Check-In/Out"
      ]
    },
    "reviews": [],
    "lat": 39.9473051,
    "lng": -74.0746898,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/436029"
  },
  {
    "id": 393445,
    "hostawayId": 349955,
    "name": "Bright Beachside Condo Across from Waterpark w/ Parking & Passes",
    "description": "Welcome to your perfect Jersey Shore escape! This bright and comfortable 2-bedroom, 1-bathroom condo is located in the heart of Seaside Heights, just one block from the beach and boardwalk and right across from Breakwater Beach Waterpark, you couldn’t ask for a better location!\n\nDirectly above Seaside Liquors, you’ll enjoy unbeatable convenience with easy access to local restaurants, bars, coffee shops, arcades, rides, and everything the boardwalk has to offer, all within walking distance!\n\n🌊 Prime Seaside Heights Getaway | 2BR Condo • 1 Block to Beach • Free Parking + Beach Passes!\n\n🛏 2 Bedrooms – Sleep up to 4 guests comfortably\n🚿 1 Full Bathroom – Clean and modern\n🚗 1 FREE Parking Spot – No hunting for street parking\n🏖 4 Beach Passes Included – $250+ value during beach season\n🧺 Washer & Dryer In-Unit – Ideal for longer stays\n📍 Central Location – Steps to beach, boardwalk, and attractions\n\nWhether you’re planning a family getaway, a couple’s retreat, or a fun weekend with friends, this cozy condo puts you right in the center of the action while giving you a comfortable and clean place to relax and recharge.\n\n✅ Fast WiFi\n✅ Smart TV\n✅ Fully Equipped Kitchen\n✅ Clean linens & towels provided\n✅ Self-check-in for convenience\n\nBook now and enjoy the best of Seaside Heights at your doorstep!\n\nSmart lock access to the building entry and front door with your own personal code.\n\nSelf-check in always available.\n\n***NO PARTIES or PROM GROUPS. ***\n\n***MUST BE 25 Years Old  To Rent! ***\n\n***PROOF OF I.D. IS REQUIRED TO BOOK ***",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 250,
    "guests": 6,
    "beds": 3,
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-5JCFKaDIweiO6mQVGBxrCkiSRJC2pGTlVlxNTXY2E7E-682c85308ff07",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-7l--NkU6zLrdNzeuMiD7Qppt8A4cTimxn9NRvkh79GTQ-682c852ed9a95",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-RdCY-hYQfUYAMJfsnwut-NSLvVeW0yH2ScEZVtrJ8P4-682c852c90f07",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-jtC1j--xE2EaOKwjwRHO2WI--9RdY-imLKcOTlaX6tFDI-682c852b519ba",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-yE7JwgeGdHVz7xwh38DECMCyPRFHm--w0j4rF5E-uCkk-682c8528e659b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-Ii4eTGy7iMfdHqFc7T-WNdHfTfzjgCy7iuN6gOrm5UA-682c85264bbc7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-yj2GBeaQrS6Y-SM-AhIJ6oX-5fKKARTO9ou83Dzr9Ss-682c8523891bd",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-Ifz7MzDVzl----pYwN7z9vF--JiPSaZtYkT7fUFxfeqyeo-682c85213720d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-07O4kk92ilTgxROuRNPhSVMueRM27rSbaD35wfNaqFA-682c8514e86c6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-sAYR7yyXYBA2OaAmxPyPQL5Tg2d6kmkmhCujSS0qo-U-682c850b1227c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-bNXacCUZRQpMx64jJesiDwShS1fawqrs0prgkekqCaM-682c850e1f89f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-Q8qswsnhLzneULD-lWBYPDWFe7nTcYnvg0myPMou0To-682c8510c3b8c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-Enp7oAObCWdDvHGgqd6ET6d6mQ3lnnM63OtMfaReL6I-682c851357877",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-XplrDScI--zIDR5XxAhM6wgU6VXAr5RSClmPRYYKlAAw-682c939e4707e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-1I4aAQxmKg29DdNviQ--L--iy-Vuf5drESFBPWVJCS8vU-682c8519bec7c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-70MM3kg7-CN9yWNpUAEqhHVjhVpEgiD--ewnvrvp80MQ-682c851bb51c3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-RaQcv78Dygl3LZyFt6S2gfAjmcjzy--2Ohgdb3ZQSEg8-682c851e7742c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-YYClheeBbAlTWVd84rpqq--5AxRirf0Gw--aim0DRSEp0-682c850509694",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-UP0YDuQqnHiGftQ7SOKXIMkjMZoJDdsd5a8cs2zfolc-682c85025addc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-YoJfxUh1T6to2xbWmL--LKY--c5E4LeRaP-pEx-ycZJqE-682c84ffcd761",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-0E2qWDw4OnE3gE3M5yZ2tdl911vj2qmPqwnXkvzNaC4-682c84fc054a2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-8AaZht4QXAvALEUBignaqsR39ebxIojqByc1xnFCrDQ-682c84f8dab8a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-63Hy6cKJIlxwpJBMknqzoUuqatIMc4koxlUjC29--58U-682c84f601516",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-aSGvmMdxcGRYBmCU0wgPFg2OTg2NHqUXDOjUXuTwvMs-682c84f3114b2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393445-e--zzw0tjCVJajcH9sxhxeJYZG--iw-M3--vgi7ZNXjXc4-682c84f050db6"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining table",
        "Baking sheet",
        "Blender",
        "Coffee",
        "Freezer",
        "Wine glasses"
      ],
      "General": [
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Linens",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Clothing storage",
        "Drying rack for clothing",
        "Ceiling fan"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products",
        "Body soap"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Cleaning before checkout"
      ]
    },
    "reviews": [
      {
        "author": "Edward",
        "rating": 5,
        "date": "2025-11-12 19:12:41",
        "comment": "Second time staying here and will book again.\nPositive: Great apartment in a cental location. Check-in is easy with door code provided by host."
      },
      {
        "author": "june",
        "rating": 4.9,
        "date": "2025-10-24 18:10:52",
        "comment": "The property was a little intimidating at first, but the unit was clean and fitted our needs perfectly. The staircase wa\nPositive: The facility was super clean and  the beds super comfortable. Water pressure awesome! Nice washer and dryer!\nNegative: The stairs, also it had no coffee cups. \nThe small couch was terribly uncomfortable."
      },
      {
        "author": "Ada",
        "rating": 5,
        "date": "2025-09-28 04:00:09",
        "comment": "Great beginning with a not so good ending\nPositive: Interior of the unit was nicely updated, spacious and clean. While listed as a 1 bedroom is actually a 2 bedroom with a king bed in one and a queen in the other which were both very comfortable. The living room sofa was very low and small, not comfortable at all. The exterior and exterior of the building were not as nice. Reserved parking space was great as there is no street parking allowed.\nNegative: Has not received check-in instructions by noon the day of arrival, had to message requesting them at which time they were sent.\n\nAfter checking out, received an additional charge for cleaning and message saying we had a dog and the unit was not pet friendly which was clearly advertised as being pet friendly and I had mentioned during communication. Have no problem with paying the additional cleaning fee if had been told when the reservation was made but there was no mention of it. \n\nIn addition, the shower curtain rod fell off into the tub when we were getting ready to check out, was not secured properly to wall tiles, which I messaged them about without a reply.  Later that afternoon did get a message along with the message about the dog saying that the curtain and rod were missing when it was clearly sitting inside the tub."
      },
      {
        "author": "Shakira",
        "rating": 5,
        "date": "2025-09-14 18:53:45",
        "comment": "It was a wonderful experience. I will definitely be back over and over again.\nPositive: It was clean and comfortable. Felt just like my home away from home. The proof is in the pictures.\nNegative: No complaints."
      },
      {
        "author": "Elaine",
        "rating": 4.9,
        "date": "2025-09-10 02:10:50",
        "comment": "Not as expected.\nPositive: Location was good.\r\nExtra towels requested were left.\nNegative: Dryer handle broken\r\n\r\nAC units were filthy and moldy.  Two travelers had lung sensitivity and we needed to turn the units off.  I tried to clean them myself.\r\n\r\nMicrowave cuts off kitchen lights.  There are electrical problems.\r\n\r\nHalf of outlets don't work.\r\n\r\nToilet flusher and seat broken.\r\n\r\nMgmt com0any was non responsive after Friday 5pm.\r\n\r\nFloors dirty white socks now brown.\r\n\r\nWhat is cleaning fee for if place was dirty?"
      },
      {
        "author": "Tatiana",
        "rating": 5,
        "date": "2025-08-21 15:58:19",
        "comment": "It is affordable but not super comfortable.\nPositive: Clean, spacious enough, close to a boardwalk and arcades.\nNegative: Unfortunately we didn’t have enough toilet paper, paper towels, and no shampoo at all. Sofa is super old and uncomfortable. Apartment is located on top of a liquor store. Store A/c is very loud and vibrating and disturbing during the night. Apartment is ants infested. Also 10:00 am check out and is too early, especially without dishwasher. And check in is too late at  4pm on my opinion."
      },
      {
        "author": "Angil",
        "rating": 5,
        "date": "2025-08-19 03:25:05",
        "comment": "Excelente\nPositive: El apartamento es tal cual muestran las fotos, espacioso, las camas cómodas y muy bien equipado.\nMuy cerca de la playa y restaurantes, sin duda volvería a elegirlo.\nNegative: Todo estuvo bien"
      }
    ],
    "lat": 39.942501,
    "lng": -74.073226,
    "rating": 4.9,
    "link": "https://suitecapacity.holidayfuture.com/listings/393445"
  },
  {
    "id": 432762,
    "hostawayId": 389114,
    "name": "2BR Modern Coastal Home w/ Firepit & Beach Passes| Stylish Bayside Retreat",
    "description": "Discover your perfect Seaside Heights getaway in this charming 2-bedroom, 1-bathroom bayside home designed with a modern, posh coastal vibe. Filled with natural light and thoughtfully styled, making it ideal for couples, small families, or friends seeking a relaxing escape by the Jersey Shore.\n\nStep inside and enjoy the comforts of home with an in-unit washer-dryer (2-in-1), a sleek and fully equipped kitchen, and an open, airy layout. Outside, unwind in your private outdoor seating area with a cozy firepit table perfect for evenings under the stars in any season.\n\nYour stay includes 3 beach passes (a huge savings during summer), plus free parking for one car, giving you stress-free access to all that Seaside Heights has to offer. In summer, spend your days at the beach, boardwalk, waterpark, and local restaurants, all just a short walk or drive away.\n\n⭐ Highlights:\n\n2 Bedrooms | 1 Bathroom | Sleeps 4–5\n\nBright, modern interiors with stylish coastal décor\n\nFree parking for 1 car\n\n3 beach passes included (in season)\n\nPrivate outdoor space with firepit\n\nWasher-dryer combo in unit\n\nWhether you’re here for the sun and surf in summer or a quiet bayside retreat in the off-season, this Seaside Heights vacation rental offers comfort, convenience, and style in one perfect package. Book now to enjoy the best of the Jersey Shore!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!",
    "houseRules": "MUST BE 25+ TO BOOK! Proof of I.D. will be required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS!",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 320,
    "guests": 5,
    "beds": 3,
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-TcrGnYXzNjgGX--yA9AHGVZCt--m52gwlLGj8pVenZxR4-68c578d4b9538",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-thmO-GR1uoTPM9dsE11MIs--hxzLhg11igYR5rvlTTu8-68c5795504165",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-PDT898zmS9PfBDu1jU--gYOet4P0ZEPf1saMf9TPoLVo-68c579626152c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762--m0AH--ORqbRWcYVsA--n1zKGnzemVOksCB2xWFFILlOg-68c579118d314",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-nglZpZxlNHBxav-m6Qn2baEdu1hLUdSb6WA4XLsluMY-68c5793cd9603",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-InuNbCOBy2t16jTHtTAenzazLIHX7zN7rwW6tioid6E-68c57931a647b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-BkZrfEKk5q32Hza0SmOvuUh-M--SMZOUNcaUVFGwpTas-68c579256fbc7",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-1lb--ld6brUEFn29LTohBLgAyljyWeR1y-zOOhIDX0SA-68c578c557534",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-mUynb4z8PA4K8dHrZBZx38ZKOF1msgLrUnElj5x6zQ4-68c578cd3f59c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-z2n--cD9FgzEVehTCEXi8qrNj4YDWVJEyhFcs30jbgRg-68c578ddf382f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-BrVIbzSJsGKjL3iANev-5pIX8O3vtewdkiQzoZeBXtc-68c57906be03f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-h9RG--3aSVVOIhxH4sPWOeXpF3--C532hmEIKRxLb14Nc-68c5791b14002",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-jidHdkEj3Zkq9MsWJFFdTv5yZfmlHqQTu4ctZKKBBtg-68c578ebb963c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-Sk4EgYzaG4sjWBjqTSXa0Z--ced-j281-njwMkihG1SU-68c579493b2f2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-CoKdXR5YD2NpdH6TtJ--i4VUrlsr9--ICZBBe0ZOEgEGE-68c579710d7b2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762---FPXDQbcOGtAsruRrtyl01UFfD8Gv9iis5inkkUQnzY-68c57980368e5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-JynYUZizcf--ZmPp1ExwV-R8Hj1s2HiE2QpiM7iXKbvU-68c578b45e913",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-GXBh6YWnwQ66vCdGedYMaINTsASQj6wjLIa4WoDERSY-68c578b80f654",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-A-vw17kJOI7DeCd3kShsTvuf3Zgjd0lnNdD5c18tsag-68c578bbb84a6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-432762-O7H6F0ncyqOficovb4f25uAbg1Yh--1EZEuidC--gl4MM-68c578bf4f466"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Fireplace",
        "Dryer",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Private living room ",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Laundromat",
        "Smart TV",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Barbeque utensils",
        "Freezer"
      ],
      "Policy": [
        "Pets allowed",
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Pets allowed on request"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Outdoor lighting"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Cleaning products",
        "Rain Shower"
      ],
      "Attractions": [
        "Bay",
        "Marina",
        "Theme parks",
        "Water parks"
      ],
      "Children": [
        "Babysitter recommendations"
      ],
      "Leisure": [
        "Bird watching",
        "Boating",
        "Paddle boating",
        "Water sports",
        "Wildlife viewing"
      ],
      "Location": [
        "Beach",
        "Near ocean"
      ],
      "Services": [
        "Cleaning included",
        "Cleaning optional",
        "Private chef on request",
        "Housekeeper on request",
        "Grocery on request"
      ],
      "Themes": [
        "Family",
        "Romantic"
      ],
      "Cleanliness": [
        "Enhanced Cleaning Practices",
        "Contactless Check-In/Out"
      ],
      "Outdoors": [
        "Outdoor dining",
        "Outdoor firepit",
        "Outdoor furniture",
        "Fire pit"
      ]
    },
    "reviews": [],
    "lat": 39.9481135,
    "lng": -74.0772205,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/432762"
  },
  {
    "id": 393438,
    "hostawayId": 349949,
    "name": "Stylish Beach Block Studio w/ Free Parking & Beach Passes",
    "description": "Free Parking and two Beach Passes included! Nestled on the ground floor, this stylish and inviting space offers the perfect blend of comfort and convenience, making it an ideal choice for your coastal escape. Just a few short steps away from the lively boardwalk of Seaside Heights, our studio puts you right in the heart of the action. Embrace the vibrant atmosphere, savor the mouthwatering treats, and explore the exciting entertainment options that await you right outside your doorstep.\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\nFrom thrilling amusement rides to delightful local shops and restaurants, there's never a dull moment in Seaside Heights. Experience the lively energy of the area as you explore the nearby attractions, all within walking distance from your cozy abode.\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 175,
    "guests": 2,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-d-icN5ctuPodEZRjwkXYBDsTctcO74I41gyX8d--cEpY-682c85b18d8fb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-y6Bm2TiRahkAJvLr4tr-NL8FAuEdiJKvXMei1IQfAVo-682c93a106869",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-DtiPMUn9t--8-MQvBBNEMVBHw--qrWfSfIiXyrGOB4g84-682c85b0501ac",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-lAESi--JKLQ5Vkz2Ehx5leJYM43FNkjqkXRSVFKK8Ybc-682c85ae7b048",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-PovUIFtQ3u22G5t81-QIOWfm4pPdJZw5itfa8LwaJWs-682c9a669a10d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-hi3IkkQFk1WF6JnmxOrDBDohYNrhDU45pFLQY7rifXY-682c85ad54e01",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-iTKTRF1weYUlh5CM9u--v6LLClvAmRq-7V7DMvX2Pj24-682c85ac2eca9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-SZvA-mgYLzpLa1HbBDuvTdILprDGysYyUtOEbK10AFk-682c85aad48b3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-js7ici3ZO5sesiBySSuqWdXVpCYB1M7iDDFi5QeD4so-682c85a993d46",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438--fLMU9r4nqOOheZ0nvlA2VFpp5CW5qqtJFjoccjIjyM-682c85a85ca51",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-WA62Ohq6t6FivhblAFoMnDiux7p62QWaX55aIXCb35o-682c85a75705b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-V27Q5DfA8M26TXsGTlXS1H6hbNOxVbzn7H9AQe5JCWQ-682c85a5edb7e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-I6mO6WZQP8Dhv1EPSOehNYeBvS1--eDppIRgYMc0tyfA-682c85a476ce6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393438-h94qCiJzuyp5N764Rk773-FO1YtcSbchT4PFL--jpHBM-682c85a28dce7"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining table",
        "Baking sheet",
        "Coffee",
        "Freezer"
      ],
      "General": [
        "Air conditioning",
        "Internet",
        "Wireless",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Laundromat",
        "Clothing storage"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products"
      ],
      "Accessibility": [
        "Single level home"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Cleaning before checkout"
      ]
    },
    "reviews": [
      {
        "author": "Nick Belfiore",
        "rating": 5,
        "date": "2026-03-06 15:23:33",
        "comment": "Location was great!  Clean and easy process from check-in to check out"
      },
      {
        "author": "Dr.",
        "rating": 5,
        "date": "2025-12-12 12:25:57",
        "comment": "Gerne wieder"
      },
      {
        "author": "Amy Pearce",
        "rating": 5,
        "date": "2025-12-03 20:59:00",
        "comment": "Our flight ended up canceled last minute so we were unable to stay.  A friend was there for the same training we were scheduled for and she let us transfer to them without hesitation.  They were so appreciative and so happy with the experience, they messaged me this morning to rebook same place for another event they are attending this month in the same area.  I'm excited to book for our next time out that direction."
      },
      {
        "author": "Lawrence Lukacs",
        "rating": 5,
        "date": "2025-10-28 20:57:39",
        "comment": "Very welcoming host with terrific communication. We booked primarily for the location. We were a block away from where everyone else was staying, so we were able to walk to pick up or grandkids and spend a day on the boardwalk and the beach. Having a kitchen is really nice compared with a hotel room. We didn't use it but only because we were eating other places. The bathroom was good but it would be nice to have a couple of extra towels. Nothing else negative we can think of, which is why 5 stars. "
      },
      {
        "author": "Luke Paulhamus",
        "rating": 5,
        "date": "2025-09-25 15:01:06",
        "comment": "The room was updated and modern looking.Clean floor, fridge, bathroom, bed and towels!No smells, bugs, mildew or mold.Bed was comfy and shower was hot.There’s ac and baseboard heating.Good closet space and lighting.Great location! 2 min walk to the beach. Kind and helpful messages from the host!The only thing that could make my stay any better would be the option to close a set of curtains in the main window. The blinds felt a little too thin at night, they don’t block the light outside the room. I think this would also create a better sense of privacy. Thanks for considering.Otherwise, I had a wonderful stay and I would definitely stay again. I’m very happy with my experience! 5 stars for sure! Thank you!"
      },
      {
        "author": "James",
        "rating": 4.9,
        "date": "2025-07-28 23:12:10",
        "comment": "A clean and comfortable motel room that was just one block from the beach with 2 free beach passes!\nPositive: I liked that the facility was very clean. The complimentary beach passes were also fantastic! The location was super close to the beach... just one block, so you honestly can't beat that! The motel room was exactly as advertised!\nNegative: The phone number provided by the host, Booking.com, and the host's official website was not a real phone number. When we called, it said the number was not in service. Texts didn't work either. We had to contact the host when we didn't receive the info for the door code on the morning we were promised to receive it. Again, the number they provided multiple times was not in service. Luckily they responded to our Booking.com messages! Other than that, it was a lovely stay!"
      }
    ],
    "lat": 39.94508131,
    "lng": -74.0711042,
    "rating": 4.9,
    "link": "https://suitecapacity.holidayfuture.com/listings/393438"
  },
  {
    "id": 393440,
    "hostawayId": 349951,
    "name": "Cozy Beachside Studio Steps to Boardwalk w/ Free Parking",
    "description": "Enjoy Free Parking and Two Beach Passes! Located on the ground floor, this chic and cozy studio provides the ultimate in comfort and convenience, making it an excellent choice for your beachside getaway. Just steps from the bustling Seaside Heights boardwalk, you'll be immersed in the lively atmosphere with delicious food, thrilling entertainment, and endless fun right at your fingertips. Book your stay now and experience the vibrant energy of Seaside Heights from the perfect home base!",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 200,
    "guests": 2,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-W3fJma59S5BNCMTV--dn5Nlx1ccurEwQRdXiF2b6zHFs-682c85918bbd2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-0n6Qvbe3i89nZacS7RCVbNQhdkoDp484DRAt2vg3--Uk-682c8d24b58e5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440---gzogMJm6OY9QLarLlih6MB4bchjf-mYJfdvaimHdbM-682c859023af1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-5WoUH1BwS6Qs5JbOBBl6Xd5wQySYVBM-of2Pw--P--j1I-682c858ee46b9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-UzPn1t4rUxIdBqAb7ViqZodkwTtE6itaSn1ixXW--YY0-682c858d97e01",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-gCUR9VVmJzERTz2qRkvXlAuYqxbnfSVT6CJgBCCmjBw-682c858c5d380",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-ufM7TUbjD5NMUiyb18S67m4Bx7IZl6tUutA8Rt9qiYY-682c858b0a8c8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-ZvuVZEwlG7yUQOjKRK24vjDrOGOWqm5JHSwR1dTyty4-682c8d2392b70",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-4j1dtEcWQZyMN7w5voa--uQ1GPq4Iqb30pmYkiCo--mBs-682c85897ecaf",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-9GM--R5Pi-swldf6IbWjTiDupQ7GXnm5djv--cJJbGRbQ-682c858857ff2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440---LvSiPIdQr8f3rFvyZMTDGwvILwXzMDnWbi7E1yTtqA-682c8586e5c67",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-pbioJOUVlNr-1FccCaEe6UWyvw0dklaBmTRW5Jabzw4-682c858580dad",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393440-NsEpNliRD27LRDLEt78RCqbBOohKDn43tezN2gqmMFc-682c85836fdf9"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Baking sheet",
        "Freezer"
      ],
      "General": [
        "Air conditioning",
        "Internet",
        "Wireless",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Laundromat",
        "Clothing storage"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products"
      ],
      "Accessibility": [
        "Single level home"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ]
    },
    "reviews": [
      {
        "author": "Jennifer Visone",
        "rating": 4.9,
        "date": "2026-02-03 19:57:31",
        "comment": "Checking in was difficult. We were given the wrong door code and the staff was rude, didn't listen, and kept transferring us to a line that no one answered. Upon entering, we noticed that the accommodations did not match the listing, which said the apartment has 1 bedroom and sleeps 3. It is actually a studio apartment and at most sleeps 2.  Additionally, the floors were dirty, the window was left unlocked and there were food particles on the stove and countertops. The soap containers were less than half full. It would have been better if they weren't provided at all. There is no heat in the bathroom. The shower curtain is not wide enough to prevent the bathroom from getting wet during a shower. Towels were only provided to accommodate 1 person when they knew that 2 guests were coming. The kitchen is lacking some helpful essentials such as kitchen towels, pot holders, dish rack, etc. During our stay, the ceiling started leaking. After inquiring about maintenance, we were told that someone would shovel the snow because the leak was probably due to snow accumulation. The following day after the storm was over, we asked multiple times about snow removal and kept receiving messages with excuses about the snow removal company they supposedly contaced. When it was time to checkout, we struggled to get our belongings to the car because of the snow and ice in front of our door and along the sidewalk to the parking lot. "
      },
      {
        "author": "Patti Deuchler",
        "rating": 5,
        "date": "2025-12-18 18:38:23",
        "comment": "Very clean. Comfy bed. Good heat. "
      },
      {
        "author": "Daniel Jackson",
        "rating": 4.9,
        "date": "2025-11-08 19:11:56",
        "comment": "Not the property for us.  We tried calling the rental agency but the number provided had been disconnected.   We never even opened the door to the rental unit, after hearing and seeing the the very graphic neighbor yelling told us that we weren’t comfortable here.  no refund, so renter please know before you go.  "
      },
      {
        "author": "Christen Noratel",
        "rating": 4.9,
        "date": "2025-10-14 14:51:09",
        "comment": "Our room is exactly as it appears, like walking into the picture. It was exactly what we needed for our weekend stay. The room was clean and had everything stocked as we needed. Our host was super responsive and great to communicate with! PERFECT LOCATION! Highly recommend! "
      },
      {
        "author": "Jocelyn Salguero",
        "rating": 5,
        "date": "2025-09-23 15:53:45",
        "comment": " Everything about this property was perfect! it was clean and cozy, the location was everything so close to the boardwalk and Jersey shore store! "
      },
      {
        "author": "Alyssa",
        "rating": 5,
        "date": "2025-07-28 17:38:39",
        "comment": "Positive: The location of the property was the best thing about the experience.\nNegative: I did not like that the unit stunk of marijuana. The communication was not great between us and the host. I had to email/text multiple times and waited over 24 hours for a response about receiving more towels. There was only 2 provided for a 3 night stay, most women use 2 towels themselves after a shower, one for body, one for hair. In addition, the light outside the room does not turn off at night, we ended up having to unscrew the lightbulb in order to go to sleep.  There was also a broken down car in the already limited parking lot. Wouldn’t stay here again."
      },
      {
        "author": "Christian",
        "rating": 5,
        "date": "2025-07-20 03:11:48",
        "comment": "Great place.  Thank you!"
      }
    ],
    "lat": 39.9451226,
    "lng": -74.0713941,
    "rating": 4.8,
    "link": "https://suitecapacity.holidayfuture.com/listings/393440"
  },
  {
    "id": 393441,
    "hostawayId": 349952,
    "name": "Modern Beach Block Studio | Free Parking & Beach Passes",
    "description": "Free Parking and two Beach Passes included! You'll be just steps away from the iconic boardwalk and beach of Seaside Heights! Discover your perfect coastal getaway at our recently renovated  studio, with a modern touch. This ground floor retreat offers convenience and comfort, promising an unforgettable beachside escape. Unwind, explore, and indulge in the coastal delights of Seaside Heights with our inviting studio apartment.\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\nEmbrace the best of Seaside Heights as our studio sits just steps away from the lively boardwalk on Fremont Ave. Enjoy easy access to the vibrant entertainment, delectable dining, and thrilling activities that define this popular coastal destination.\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 180,
    "guests": 2,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-8NhG--Ez4hHXrf8WEd0skARBlvcrjuSJj8x7ly8gI5qY-682c8d222c2df",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-qSlWQZOfLLEwm3NjZtGyHnKhtJpr1RGewXMj3ZgJDtM-682c85823950b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-SEU9WBDoi0--j9FU--cnLmWUQ8klvQb0uqT0OaLzvyi8-682c857ff0268",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-d5AvskbvG1BZeQtIyK2vIqImDkWcq45bQYQ0Avb38tg-682c857d524a9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-mds47cU6SvUehasBmr--SSnc2-0P5ChpSvVVlTREaZmw-682c857b3f1d6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-W--NPArQxTIWlsQ55w7xP1bt3YdSfDd1wwkX5LiqNsos-682c8578a05bb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-HCVUSvfniHRAILsdN4zqFVzRfehe0mWOESwqeayc5LI-682c85778b5a8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-7AW2DFwEE2qatlElnHhTMleApzSL73J--MHqGvo6assE-682c857537eba",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-KdnWHICpVDBjY3yMfg2O4OPQqJLSg3ntrq3KkoSSWHE-682c8572aa9e3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-Bm3hfcsp9NJZO9GrXJEbBr74HFGIvjXb6Y188W0SACw-682c85703cfe2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-d--W5Ihdx1SgWi8RzkxfrMqT1gWvWYQzSyLv1CwNkSIg-682c856d5841f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-j2--rXB3Ki-1jJeP0eGBinbmai4C8ByVQYx8Nkm-O4VE-682c856a9c2b3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393441-S7BVJ5DB9mGQJ6gKTuA-Ss0cTXwmqE-w1yW8lvuHMH0-682c8567de616"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Baking sheet",
        "Freezer"
      ],
      "General": [
        "Air conditioning",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Laundromat",
        "Clothing storage"
      ],
      "Safety": [
        "Smoke detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products"
      ],
      "Accessibility": [
        "Single level home"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ]
    },
    "reviews": [
      {
        "author": "Patti Deuchler",
        "rating": 4.9,
        "date": "2026-02-09 21:04:51",
        "comment": "The host communicated back ok. This room was worn. Paint chipped on heater. Could use more glasses. Needed more towels. Drain in tub didn’t drain. Bed was comfy. Heat worked good. "
      },
      {
        "author": "TRICIA DECKER",
        "rating": 4.9,
        "date": "2025-12-26 23:15:16",
        "comment": "Everything was quaint and cozy. The host was fantastic."
      },
      {
        "author": "TRICIA DECKER",
        "rating": 5,
        "date": "2025-12-25 18:55:56",
        "comment": "Host was great. Room was adorable, "
      },
      {
        "author": "Dayna Holmes",
        "rating": 5,
        "date": "2025-09-20 20:00:24",
        "comment": " its an unbeatable location, spotless upon arrival. would come back! exactly as advertised."
      }
    ],
    "lat": 39.9451226,
    "lng": -74.0713941,
    "rating": 4.9,
    "link": "https://suitecapacity.holidayfuture.com/listings/393441"
  },
  {
    "id": 393446,
    "hostawayId": 349957,
    "name": "Prime Beach Block Studio Near Boardwalk w/ Parking & Passes",
    "description": "Welcome to your perfect beach getaway! This newly renovated ground-floor studio apartment is located just 1 minute from the Seaside Heights Boardwalk and beach on Fremont Ave – truly an unbeatable location at an unbeatable value.\n\n🛏 Comfy Queen Bed – Relax and unwind after a sun-soaked day on a plush queen-sized bed with fresh linens.\n\n🏖 2 Free Beach Passes – Save big and enjoy easy access to Seaside Heights’ sandy shores.\n\n🚗 Free Parking – Avoid the hassle of meters and lots with your own dedicated parking space.\n\n🌊 Walk to It All – The boardwalk, beach, bars, restaurants, and fun are all just around the corner!\n\nWhether you're planning a weekend escape or a weeklong stay, this is the best deal in Seaside Heights for couples, solo travelers, or anyone looking to stay in the heart of the action without breaking the bank.\n\nBook now and make this cozy studio your home base for the Jersey Shore!\n\nSmart lock for self check-in.\n\nMUST BE AT LEAST 21+ TO BOOK. \nProof of I.D. is required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS.",
    "houseRules": null,
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 218,
    "guests": 2,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-k12NCJ9fpzQ8H0IN7gwIIzGzwSvlbSRgh0OblsiKGdk-682c84eed66a1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-61nvKqHbKOVAyYZ5u7Q3z9y82Ssg9Erm--U0FVaPcvSc-682c84ed7cf4d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-CPSCcsloiop1JrtSrDoIF1M1TRPWEKhj6tmFKzZF82k-682c84ec2488c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-kGuIlYMJQ6d89V35aYAZxMlJFoV7bHI7WrZp25QObUs-682c84eaeab97",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-c4e4cOPQ4xO0TiA8SgAWu--NcPoDhRJUdsttaCU5M9NM-682c84e98cb06",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-Rcj7y1F7CDch-d8cb8nkofi0jWZU4qv23lqAAhGjOzg-682c939c5428f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-04RfUnwgnbP0nRwENFyXwhjEo3hMoxzlY2S1PoqFKOQ-682c84e76d4bc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-6hfHv--Gl2JE56Vs-CMqIlVSJr6JMmzqemnoBnfT0x-M-682c84e5dd7c5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-zF-7QXw0XS2YSv2QGtKCH8M0ZjjfhRE2ysoBEcBtZrk-682c84e4665f8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-2voH7TSwQ58l5Q9L-xGoYGTQ2Xxcrc7gyGCt2dxP7-U-682c84e31c2a1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-sVH5GYeKrviF3--A2Bg2zIJeg8rkg95--3Zskc0rzWfjA-682c84e12a4e2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-e6JMc7783eBX6FgYYHsl--ZMyIYLgEFdGZRGGPb5BaQk-682c84dfab477",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-393446-X7WOYZe6CDcQGqmqyJB6sSw1-fYWJTEBcYfHLWpR6IM-682c8d146e22e"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Electric kettle",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Baking sheet",
        "Coffee",
        "Freezer"
      ],
      "General": [
        "Air conditioning",
        "Internet",
        "Wireless",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Laundromat",
        "Clothing storage"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products"
      ],
      "Accessibility": [
        "Single level home"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ]
    },
    "reviews": [
      {
        "author": "Gregory Tucci",
        "rating": 5,
        "date": "2025-12-03 17:42:54",
        "comment": "Room is great; more noise outside than expected."
      },
      {
        "author": "Teresa",
        "rating": 4.9,
        "date": "2025-11-20 13:56:46",
        "comment": "Comfortable, clean, convenient to my destinations both north and south, and overall just a great experience for my trip\nPositive: The apartment was great. Clean and comfortable. Bathroom was modern and had beautiful appointments. \n\nThe kitchen with the stove, full size fridge, microwave and all the amenities made things easy for me while I was there! The room thermostat worked terrific and allowed me to stay warm and cozy. \n\nThe access to the beach and boardwalk being so close allowed me the opportunity to get out and walk, as well as, capture the sea and sand here on the Jersey Shore. \n\nThe location, in respect to all the major thoroughfare, made access to points north and south east to jump on. And the fact that it is easily accessible to Ty 47 made going west to head home a breeze.\n\nHighly recommend this location and host. They’re attentive to customers needs and maintain good communications should a guest need anything. They were responsive with questions before I arrived and followed up upon my arrival to inquire as to whether there were any addt bedding or other needs. Those little details make a good host a great one!!\n\nAll in all a ten out of ten for me!! Will look to utilizing them again in future trips.\nNegative: It got a little noisy when the youngsters exited in the mornings and came back at night. That was thru no fault of the host. But maybe a sign or two posted on the outside of the building asking folks to respect other patrons before or after certain times of the day. 🙂\n\nI found I generate a lot of trash when staying for extended periods of time. I found myself overwhelming those little flip top garbage containers. 🤣🤣"
      },
      {
        "author": "Ira Son",
        "rating": 5,
        "date": "2025-11-06 23:29:25",
        "comment": "Love the location! Couldn’t have asked for a better spot unless you were literally in the ocean. The easy access and parking area was very good and the communication from the host was punctual and on point. I may have to book a second trip here in the future!"
      },
      {
        "author": "McNally",
        "rating": 5,
        "date": "2025-08-28 17:21:13",
        "comment": "Positive: Very clean and perfect location"
      },
      {
        "author": "John Ragosta",
        "rating": 5,
        "date": "2025-08-10 23:54:51",
        "comment": "Overall, great stay."
      },
      {
        "author": "Ryan",
        "rating": 4.9,
        "date": "2025-06-14 13:28:56",
        "comment": "I really enjoyed my stay as the room was very nice.  The other tenants including those who live there seemed all friendl\nPositive: The room was very nice with updated furniture appliances and bathroom.   It was on the smaller side but I was traveling alone and was perfect for me\nNegative: The parking situation is a mess here.   The lot is way too small and not easy to get in and out of.   If you have a large vehicle you’re gonna be out of luck unless you get a spot closest to the street.   Even then have to worry about the others clipping your vehicle as they try to maneuver into spots"
      }
    ],
    "lat": 39.9451226,
    "lng": -74.0713941,
    "rating": 4.8,
    "link": "https://suitecapacity.holidayfuture.com/listings/393446"
  },
  {
    "id": 455210,
    "hostawayId": 411546,
    "name": "3BR Beach Home w/ Deck, Peloton, Parking + 6 Beach Passes",
    "description": "Welcome to your perfect Seaside Park beach escape a bright, beautifully maintained 3-bedroom, 2.5-bathroom home just one block from the beach. With modern amenities, spacious outdoor living, and a quiet residential setting close to all the local hot spots, this home delivers the ideal Jersey Shore vacation experience.\n\nDesigned for comfort and convenience, the home features a king bedroom + one queen bedroom + one full bedroom, sleeping 6 guests comfortably. Enjoy the ease of an in-unit washer and dryer, plenty of off-street parking, and 6 Seaside Park beach passes included a huge value for summer travelers.\n\nUnwind on the large outdoor deck, gather in the spacious yard, or get in a workout on the Peloton bike located right in the living room. Whether you're sipping morning coffee outside, this home offers everything needed for a relaxing stay.\nLocated less than a 5-minute walk to the beach, you’ll be close to restaurants, cafes, boardwalk fun, and all the excitement of Seaside while still enjoying the peace of a quiet, family-friendly neighborhood.\n\n⭐ Property Highlights:\n\n3 Bedrooms | 2.5 Bathrooms | Sleeps 6\n1 King Bed + 1 Queen Bed + 1 Full Bed\nLarge Deck & Spacious Outdoor Area\nPeloton Bike for guest use\nWasher & Dryer in Unit\nOff-Street Parking for multiple vehicles\n6 Beach Passes Included (in-season)\n1 Block to the Beach – less than 5 minutes on foot\nClose to restaurants, bars, boardwalk, and Seaside activities\nLocated in a quiet, safe, highly desirable pocket of Seaside Park\n\nPerfect for family vacations, couples retreats, remote-working by the ocean, or small group getaways, this Seaside Park vacation rental offers the best mix of location, comfort, and coastal charm.\n\nBook your stay today and enjoy the Jersey Shore the way it was meant to be experienced! 🌊🌞",
    "houseRules": "Must be 25 to book. Proof of ID will be required.",
    "location": "Seaside Park, US",
    "city": "Seaside Park",
    "price": 500,
    "guests": 6,
    "beds": 3,
    "bedrooms": 3,
    "bathrooms": 3,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-Mgt5-MCIPyPn--WqqS05s805zPkmE8vFyjSfxLPWnSWA-691e1c23703b8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-nrfFbd8GSRAPFIGiv471xXXNxxSENuhIDIwRjVUtLLM-691e1c2fad37e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-k5g-oSbt3gDXSw3cidPXVh--GVzJneHD--kANjygQ4spI-691e1c3c78ace",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-7Cg12SFyHrOO2EGwiyGUCrUDizRVx5EUX2YvQVKegHI-691e1c6aed020",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-qNGjVijS0GLhprAnjVEB6fC71Mjwvt1G857hGhLqGKw-691e1c29c485d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-KFYq4YVx--nLCClJ--Ix5nFYTLj--qIyb---Jp--Qh2SXvtw-691e1c59f1090",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-QjRFJ3CKa70sPMP5uiAEfjds--WMSb2LstOptIMuG-oU-691e1c35ba5c3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-o-EhhB79-l9mqWTXLDngHKldybWut2DS70LLhvPzRas-691e1c62875ff",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-x2Of1qCKd9W3r8JRnXsbGkWeoj96YmA7EKG-6bjm97Q-691e1c432df73",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-MC5l--NxKyU8mqznhjvyNnaPOpLTHVM3CqkqLg5W9hxs-691e1c4a8b75f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-VaiupvmGHR5dDQs21f907FeF05mtMot1n21VQmd9uI8-691e1c524ae68",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-HThj9rHUvexA6t1m8QTP482321a53e2KmaejuxsF01M-691e1c7f09d31",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-1xUeTU2YLfYaW-ChHzrS9u9BIXNS-dk7NjQVQbGYHVA-691e1c739c622",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-225UI939BChEudpaySFIDlUovfDH0GTrnU0SD7o7Dgs-691e1c8a0c449",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-ypYonkH-O1ygC7j4X0p-KCF5MDdBp7dMr9TWjIu7o68-691e1c1db2740",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-dNe66jHDkexeVAmrq1WCm1jlctVhXs0z8Ua9oVeac3o-691e1c957e0c6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-9SzpeoIa9YBcY6Uh5g-mQ-w-b3wNWXCRAYLZHF2f35Y-691e1ca0cb966",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-VVWcbqOjfcH8Oi6uj2R26-HJwmf3EbqhnVcOVnyDmcY-691f8b70745b4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-eEw4dgTLNp8IFL-PnpR2KnznUZG--Y4Ik7pHj2gJmTs4-691f8b7e5bfdd",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-STdEDp4e9BUI4sag83WTZoI5Q648paHM369z4dzbgS4-691f8b8d2513e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-455210-wRlHsgoQc--7p5gwEhoTzyypwLjR--qbCuog9aPgogZJA-691f8b9d4b837"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Washing Machine",
        "Cable TV",
        "Internet",
        "Wireless",
        "Dryer",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Hangers",
        "Iron",
        "Laptop Friendly workspace",
        "TV",
        "Private living room ",
        "Iron board",
        "Linens",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Garage",
        "WiFi speed (100+ Mbps)",
        "Smart TV",
        "Computer monitor",
        "Desk chair",
        "Fitness equipment",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Dining room",
        "Kitchen utensils",
        "Dining area",
        "Kitchen island",
        "Dining table",
        "Baking sheet",
        "Blender",
        "Coffee",
        "Freezer",
        "Wine glasses"
      ],
      "Parking": [
        "Street parking",
        "Free parking",
        "Private parking"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Pets allowed on request"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Outdoor lighting"
      ],
      "Bathroom": [
        "Shower",
        "Tub",
        "Toilet",
        "Cleaning products"
      ],
      "Outdoors": [
        "Deck patio uncovered",
        "Outdoor dining",
        "Outdoor furniture"
      ],
      "Attractions": [
        "Bay",
        "Marina",
        "Theme parks",
        "Water parks"
      ],
      "Children": [
        "Babysitter recommendations"
      ],
      "Entertainment": [
        "Games",
        "Exercise equipment"
      ],
      "Leisure": [
        "Water sports"
      ],
      "Location": [
        "Beach",
        "Near ocean",
        "Town"
      ],
      "Themes": [
        "Family",
        "Romantic"
      ],
      "Cleanliness": [
        "Enhanced Cleaning Practices",
        "Contactless Check-In/Out"
      ],
      "Services": [
        "Butler on request",
        "Housekeeper on request",
        "Grocery on request",
        "Site staff on request"
      ]
    },
    "reviews": [],
    "lat": 39.9315032,
    "lng": -74.0766436,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/455210"
  },
  {
    "id": 472105,
    "hostawayId": 428418,
    "name": "Cozy Shore Retreat with Front Porch Seating | 2BR, Parking Included – Seaside Heights",
    "description": "Welcome to your perfect Jersey Shore getaway! This charming 2-bedroom, 1-bath Seaside Heights apartment offers comfort, convenience, and a relaxed coastal vibe ideal for families, couples, or small groups looking to enjoy everything the shore has to offer. Located close to the beach and local attractions, this home is designed for easy, stress-free stays.\n\n🛏 2 Bedrooms | 3 Beds | 1 Full Bathroom\n The apartment comfortably accommodates guests with two well-appointed bedrooms and three beds, making it a great option for families or friends traveling together. Fresh linens, towels, and essential toiletries are provided for your stay.\n\n🏡 Spacious Front Porch with Seating\n Unwind on the inviting front porch, featuring comfortable seating for up to 7 guests perfect for morning coffee, evening conversations, or relaxing after a day at the beach.",
    "houseRules": "MUST BE 25+ TO BOOK! Proof of I.D. will be required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS!",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 100,
    "guests": 6,
    "beds": 3,
    "bedrooms": 2,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-KCmBI5uHx5kLe--8F-1RbrDqSlwV4UZT16pmv5a-ZTFQ-69596e5dbafb9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-lvXSVyY8sm-WUrqeo3b0Db1xqevQGXBTBOuXsdS9sRs-69596e6368103",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-yHIXT2prJPnMzU3-R5mcI9MjK2QzH65WTLwb87MIPYo-69596e68ea98f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-vafiZsxRgkFj9is-dlXZSjKwYpumoEJIsDU8TGThqIg-69596e6e9fd4c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-aJleZ66u9--sS5M--AlDWXjrCz0H1MYbIoPl3uJh--j89E-69596e74ce23c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-oKv-V5ko9T9odj0jglzwDbx--56jnw0jaxCDj18hWKWI-69596e7b8e9ff",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-WXNbFUhAcpTxXJeVis2zc2qzC5OCruI4BZ3Wr3kgeFY-69596e823af52",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-WexbuXipuXgH3X4s05jkhVTwYmM6ssNfmY71DL-eCZc-69596e891e2a0",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-Z7gcxsACCXZekrSmJspNmuG80VpkNXR1ouBLOo0Wrjk-69596e908e372",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-86sGR8wt7h6--gTJuv1bavT8hrJauE7yajB7G9Q5--cK8-69596e986410c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-Ju0vbVsHDgIODpVcN1Bli-KBaz6fj8dXwtGOVC-48Jg-69596ea06c110",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-8qIAeGBLAwopAR0DUBRxBK4--Crj50WJndYc4Vc8Jjww-69596ea897140",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-c-q7JYKgPy5D18r3MwK4y4--5fY1WTvnosTuU9FWBJYA-69596eb1246dd",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-WecTa-3VRpkFeG1sa0ledZ4lnW7RyRGPWmbPInBAY0M-69596eba7c99f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472105-nYZ2BdokRFylwepi3pHzk6q20pV34AFWwcbiJ-kB7rA-69596ec33c4fc"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Essentials",
        "Shampoo",
        "TV",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Hot water",
        "Cooking basics",
        "WiFi speed (50+ Mbps)",
        "WiFi speed (250+ Mbps)",
        "Smart TV",
        "Clothing storage",
        "Ceiling fan"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Dining room",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Barbeque utensils",
        "Coffee"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants"
      ],
      "Accessibility": [
        "Wheelchair access possible",
        "Bedroom step free access",
        "Bathroom step free access",
        "Common space step free access"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Body soap",
        "Conditioner",
        "Shower gel"
      ],
      "Location": [
        "Beach"
      ]
    },
    "reviews": [],
    "lat": 39.939681,
    "lng": -74.0761423,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/472105"
  },
  {
    "id": 472117,
    "hostawayId": 428430,
    "name": "Relaxed Shore Getaway with Porch Seating | 3BR + Sofa Bed, Parking Included – Seaside Heights",
    "description": "Welcome to your perfect Jersey Shore getaway! This charming 3-bedroom, 1-bath Seaside Heights apartment offers comfort, convenience, and a relaxed coastal vibe ideal for families, couples, or small groups looking to enjoy everything the shore has to offer. Located close to the beach and local attractions, this home is designed for easy, stress-free stays.\n\n🛏 3 Bedrooms | 3 Beds + Pull-Out Sofa | 1 Full Bathroom\nThe apartment comfortably accommodates guests with three beds plus a sofa that converts into a pull-out bed, making it a great option for families or friends traveling together. Fresh linens, towels, and essential toiletries are provided for your stay.\n🏡 Spacious Front Porch with Seating\nEnjoy the covered front porch with seating for up to 7 guests a great spot for morning coffee, evening conversations, or unwinding after a beach day.\n🛋 Comfortable Living & Dining Area\nThe open living space offers cozy seating, a TV, and a dining area ideal for meals, games, or relaxing indoors.\n👨‍🍳 Fully Equipped Kitchen\nThe kitchen is fully stocked with everything you need to prepare home-cooked meals and enjoy casual dining during your stay.\n🚘 Free Parking for 1 Vehicle\nA dedicated parking spot is included for easy and convenient access throughout your stay.\n🧺 In-Unit Washer & Dryer\nIn-unit laundry makes longer stays and post-beach cleanups quick and easy.\n\n📍 Prime Seaside Heights Location\nLocated just minutes from the beach, boardwalk, restaurants, and local shops, while still offering a comfortable setting for quiet evenings.\nThis cozy shore apartment is the perfect home base for your Seaside Heights stay whether you’re soaking up the sun, exploring the boardwalk, or relaxing on the porch with friends and family.",
    "houseRules": "MUST BE 25+ to book! Proof of I.D. will be required.",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 450,
    "guests": 6,
    "beds": 4,
    "bedrooms": 3,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-qKkuXX7i-n0Z4qwDrPvNj--RtKLsZ4kQnhDk4aMWTWSA-695bd56abf907",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-Jr4itXTtEBGuGuuz-Z28atN36Y3Bzb7xEZGSenlT7--c-69597979c418a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-m6Zw--gnE2RHPdMUuyRP95xyNzSiAGWv3pgQlCtgOS-w-6959797f066b2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-OfMlOr8Bnk8wK6wD1sn9HbOM5KEQgdSldwlcvj-mIts-6959798431163",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-SgxCA6CZON7eqO-qBI2EdnSRiyx40od2bE3a2MgG9qk-6959798a22996",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-K5hC84MiULubco3u9exJRHrF0gKruNQ19DHfffbavmk-695979901c328",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-9MTxOz93bITdtVYMqK1TO37iuPevjMUONLUfnZ6GKb8-69597996621d0",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-Dk9t7fIXWFb7--lr9fHllbN1ER7GIkNnMkUGv6vCzabY-6959799d3492d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-SdjJobOtPVYnqmSwJQhul0TDZxavnrasIrkfoqEu82k-695979a44e063",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-Wn53YWXolSY0ctyRLrKChJ3tLwpAwChhYRCS--G3FA7s-695979ab80905",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-ExZqohx7eJNXRzd7BJhw85szQrJdOGdueuFm6Kj3S-o-695979b329662",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-9jWAiei7gF1P-A0jr3c--p--lxX1cUdbsHZb4LKYDfsXc-695979bc1372c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-k9iieemugRasOyhI6huotWlxsjNir10YGh-XWAzX71M-695979c426601",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-Qdyr8fLmbKqFcEDozAUgSwdjYQKrjpD5Y0edoKD5-cc-695979cc84b15",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-t-1ENhM6p1U21Un38pr0ySnqfVpPpJCFe0oT4lKR4z0-695979d554a7b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-aFRYlp-6-poXehl61iF7jQsS7U7W6Qwpjiz0Zv5ZkeM-695979de71263",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-FlXseMoCVo51LwZQbrNlWZ8rkMrsRYNztcKVuforytc-695979e7a073f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-n5Mib1qV5CjFRAP1MrJhxeMSBaWkwKgmno0OiCXop2Q-695bd57583944",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-hYMztSi0--P5z0hTSYzJIXk719Cvjmg5Yl-LKXG5Ov0w-695bd57ea86df",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-P9hGRdsZKpNviyfeH-C--KBXmCpzWGZxok--rLAVfSowk-695bd58862f33",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-472117-GByy1gv5lG9-p--bzGq7H48cjxgi2TySAjBFvFQkJbIw-695bd5926b0aa"
    ],
    "amenities": {
      "Policy": [
        "Suitable for children",
        "Suitable for infants"
      ]
    },
    "reviews": [],
    "lat": 39.9473051,
    "lng": -74.0746898,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/472117"
  },
  {
    "id": 489017,
    "hostawayId": 445320,
    "name": "Relaxed Ocean Gate Shore Getaway | 3BR + Sofa Bed, Fireplace & Parking",
    "description": "Welcome to your stylish Ocean Gate getaway! This beautifully appointed 3-bedroom, 2.5 bath apartment offers a perfect blend of comfort, modern features, and coastal charm just one block away from the beach entrance at ocean gate. Ideal for families, friends, or anyone seeking a relaxed shore experience with plenty to explore nearby.\n\n🛏 3 Bedrooms | 2.5 Bathrooms\n\n Comfortably sleeps guests with three private bedrooms and three full bathrooms, making it a great choice for families or small groups.\n\n🔥 Cozy Fireplace & Huge TV Screen\n\n Relax indoors by the inviting fireplace during cooler evenings, and enjoy movie nights or game days on the huge flat-screen TV perfect for cozy nights in.\n\n☕ Coffee Maker & Fully Equipped Kitchen\n\nStart your mornings right with the coffee maker and prepare meals with ease in the fully stocked kitchen featuring updated appliances and plenty of counter space great for breakfasts before the beach or dinners with loved ones.\n\n🏖 Ocean Gate Beach & Boardwalk Access\n\n Walk just a few blocks to the calm sandy beach and peaceful mile-long boardwalk, great for morning strolls, shell collecting, or watching boats drift by.\n\n🌅 Nearby Outdoor Recreation & Waterfront Parks\n\n Enjoy water activities like swimming, kayaking, or paddleboarding along the Bay’s calmer waters. Ocean Gate also offers a children’s splash park and nearby parks with picnic areas and playgrounds perfect for outdoor family fun.\n\n🍽 Local Dining & Shops Within Walking Distance\n\n Discover local favorites like classic seafood spots, waterfront dining, bakeries, and cozy cafes just a short walk away all with a relaxed, neighborhood feel.\n\n🚶 Small-Town Shore Lifestyle\n\n Ocean Gate is known for its friendly community vibe, waterfront views, and peaceful atmosphere a refreshing alternative to the busier shore towns.\n\n🌊 Easy Access to More Jersey Shore Fun\n\n Just a short drive brings you to larger shore attractions like Seaside Park beaches, boardwalks, amusement piers, and waterparks giving you the best of both quiet local charm and big-shore excitement.\n\n🧺 Convenient In-Unit Laundry & Parking\n\n Includes in-unit washer and dryer for easy laundry during your stay, plus convenient parking nearby for your group.\n\n📍 Prime Ocean Gate Location\n\n Perfectly situated in a serene coastal community with lots to offer from beach days and waterfront dining to nature watching and local events.\nThis home combines comfort, entertainment, and a true Jersey Shore experience. Whether you’re relaxing by the fireplace, exploring the calm beach, or enjoying a local meal, this Ocean Gate stay delivers the vacation you’ve been searching for.",
    "houseRules": "House Rules:\n\n– Primary renter must be at least 25 years old\n– No parties, events, or group rentals allowed\n– No prom, graduation, or similar group gatherings\n– Quiet hours must be respected\n– Government-issued photo ID is required to confirm the reservation and verify age\n\nWe take pride in maintaining a clean, peaceful, and family-friendly home. Guests who do not meet these requirements will have their reservations canceled. Thank you for your understanding!",
    "location": "Ocean Gate, US",
    "city": "Ocean Gate",
    "price": 425,
    "guests": 10,
    "beds": 5,
    "bedrooms": 3,
    "bathrooms": 2,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-ud8xmLa0N98QSbs-H7ys5BdD2ZcR4R-mxY0YFs4jb7w-699606136baf3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-9GEAIz4PsP0--JiCCtc111xCXACw6lsUXbRInvrpOl2M-699605fd42a73",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-OI---CZryKC4z9p7lHZR67-sAgaKWCbzOzRYYMsb--UcI-699606022d529",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-eHOIttadDAuW---fwdSCa0kJ--zPKZC1pxcQig5I5gfNk-6996062957b01",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-FhnagWoW60FYTq56nhEclmhNeVsEDcTyN4lfuqlDPqk-6996060ea110c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-QFCccFWuYDydsRMDf6BBG9bIlKjYiVuX6M--fQd--ELnQ-69960606644cc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-u1YCrA--rMVA0kvXR2Q4--EHIMciVzqlEIX0ESjaFWolY-6996060a16389",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-HxPNlJ0YbbLMjHP7jqrkEAOTIc8eJi---WSStU0ZXcFE-6996061870d6e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-scWYgmM-WJwMITXGew--aHRNPv7D26-xgivheeKrtSK8-6996061dc6af5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-70agME8oj8c3I1vEYgpgU0AXiJl9POEpHQ6NsWzwpBY-6996062369c12",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-JMlbqQVRlDNwEkAf-d17B1feywkurTwvMJbCdZM9GcY-6996062fb6445",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-zYiluwvs6ECjWuxaTUtzNks5TdgzntilUwflpXkc7uY-69960636365b6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-zPiiWnMTd1MgrhH-LIiYVeNOuS6j5Mbsf7ZJi3ZftHk-6996063d60d7b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-OvzT0RvkDHzGRYCzi1MqoXMLt02sXtwra--usCF5JR8o-69960644b15bb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-8JPVEQ4wHZxD59ge36XEpdLQYLNE-OWuCoZj3KgDPEk-6996064d7383f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-ICSgecoV-X1DH8F211T8YS--zD355sfL956pg2C-csiY-699606557a8d4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-IpS9KVTDodMzLVybdDeNEjPu--VgXJbPzgNDhyxENqGQ-6996065de3460",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-1CbigaBjfwNnxeOyFL3jotUdj0SI44Ms--PQfDcM77w8-699606671d4a4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-0BZTDu2oIVdgkKgPbeTaksLb4n1cC66cy--A3gOb3EtU-69960670589dd",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-D9oZbL4KLWLaneRNVcIcwaLmvhINYqpxvJfNvPuqncg-69960679b3850",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-MS8rBEbL4zLIf5106DEVU0gLnP2oBM2FDlbFbRccKRc-69960683e0f66",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-OAFiVqdhRCw1BfzxJeWxZsi--f0jpE-m6PKK37BG--CB0-6996068e44afc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-pF-voBH94vFedx50X9fXgI--YGUrrsNMGb2rGqoGulKw-69960698db895",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-fqFDelARjT0PfYdh-xkDJ-Ov8XnGhtXonFzD-K6eTg4-699606a39d970",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-pydEvHelLxHiP7ct7DDg9RvHc4gCZlLUuMgaZs5yEh4-699606aec0804",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-fwVmPsycsA4jyoYpYV-wn9-x---MF4Hs6Zo4dZhjFqSU-699606baedf2c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-5jiPQ6ajtai5-bTjfx-sqJz6WXUGfIe9hykJs3jk1F4-699606c687515",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489017-HIb42EE3txmMdeXQoU3RNKz3aRvUHSGWouceAb8fhpQ-699606d2d0540"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Washing Machine",
        "Cable TV",
        "Internet",
        "Wireless",
        "Fireplace",
        "Dryer",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Shampoo",
        "Hangers",
        "TV",
        "Private living room ",
        "Linens",
        "Towels",
        "Garden or backyard",
        "Hot water",
        "Private entrance",
        "Cooking basics",
        "Room darkening shades",
        "Garage",
        "Wood stove",
        "Fenced yard",
        "WiFi speed (100+ Mbps)",
        "Smart TV",
        "Clothing storage",
        "Drying rack for clothing",
        "Ceiling fan"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants",
        "Luggage dropoff allowed"
      ],
      "Accessibility": [
        "Wheelchair access possible",
        "Bedroom step free access",
        "Bathroom step free access",
        "Step-free access"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire emergency contact",
        "Hospital nearby",
        "Outdoor lighting",
        "Police emergency contact",
        "Security system",
        "Baby safety gates"
      ],
      "Parking": [
        "Free parking"
      ],
      "Kitchen & dining": [
        "Toaster",
        "Dishwasher",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Dining room",
        "Dining area",
        "Ice maker",
        "Dining table",
        "Coffee",
        "Freezer",
        "Wine glasses"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Body soap",
        "Conditioner",
        "Rain Shower",
        "Shower gel"
      ],
      "Attractions": [
        "Bay"
      ],
      "Leisure": [
        "Water sports"
      ],
      "Location": [
        "Beach",
        "Near ocean"
      ],
      "Themes": [
        "Family"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ],
      "Outdoors": [
        "Fire pit"
      ]
    },
    "reviews": [],
    "lat": 39.9269995,
    "lng": -74.1245762,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/489017"
  },
  {
    "id": 489776,
    "hostawayId": 446079,
    "name": "Cozy Beachside Studio Steps to Boardwalk w/ Free Parking",
    "description": "Enjoy Free Parking and Two Beach Passes! Located on the ground floor, this chic and cozy studio provides the ultimate in comfort and convenience, making it an excellent choice for your beachside getaway. Just steps from the bustling Seaside Heights boardwalk, you'll be immersed in the lively atmosphere with delicious food, thrilling entertainment, and endless fun right at your fingertips. Book your stay now and experience the vibrant energy of Seaside Heights from the perfect home base!",
    "houseRules": "***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 200,
    "guests": 3,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-QxG6sBuVcDqjg4BP4etxJSBP8isa0IdjzPytuOBLzAU-69987aab27d6e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-g5PyZopBKm9zh--KuuFfcbwVkSgFEUGQZ5kqOEaDPC2M-699879fc879a8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-bLFB9hSGLeqtM05dSLprrS8ddYnYzQ4gtZJ8UuhKVZs-69987a01294ba",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-WqX6k0ALHuiRNuMkNgizGNniXgGJzXzvKlLzHxeq2LE-69987a0ae032d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-Af1hEzn7kwagB741JwMjDXMjvYlQ3JvhLnduc6YpJb4-69987a1091dcc",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-M8JMpS-32xWIOukPJPJoR5u9qfEC7aJXVcdhFgXfd8E-69987ab216b2c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-FJQK3paRDXweP4zjxam2EYXHUY7CApvfIZJU3HEAVZ8-69987a16cdd21",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-WAmBJO55MITsQTHd97GBXjUuOQOm4MBp12lwkVt-r34-69987a1ebca1a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-j8iA39WyRohLzb6vcLbJbEWi9lSfpTqqhvX2oFhUPok-69987a2bd8801",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489776-JFy8vy8n1bmkXSY-PbQgOAoMHDy4M1yrQ99HClJIwSE-69987a35ed359"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Baking sheet",
        "Freezer"
      ],
      "General": [
        "Air conditioning",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "TV",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Laundromat",
        "Clothing storage"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Toilet",
        "Cleaning products"
      ],
      "Accessibility": [
        "Single level home"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ]
    },
    "reviews": [],
    "lat": 39.9450535,
    "lng": -74.0714132,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/489776"
  },
  {
    "id": 489801,
    "hostawayId": 446104,
    "name": "Modern Beach Block Studio | Free Parking & Beach Passes",
    "description": "Free Parking and two Beach Passes included! You'll be just steps away from the iconic boardwalk and beach of Seaside Heights! Discover your perfect coastal getaway at our recently renovated  studio, with a modern touch. This ground floor retreat offers convenience and comfort, promising an unforgettable beachside escape. Unwind, explore, and indulge in the coastal delights of Seaside Heights with our inviting studio apartment.\nEmbrace the best of Seaside Heights as our studio sits just steps away from the lively boardwalk on Fremont Ave. Enjoy easy access to the vibrant entertainment, delectable dining, and thrilling activities that define this popular coastal destination.\n\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!\n\n***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!",
    "houseRules": "***MUST BE AT LEAST 25 Years Old to book*** PROOF OF I.D. WILL BE REQUIRED!!",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 180,
    "guests": 3,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-4bH2KBitONTLNWi9m21bQSEBdHu3D8kjWCi6ZDN42pc-69988449d8602",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-JrF--b-yMUyEcY7zxo21hTcSvasIXDxSmPEPIX9ndM6g-6998844e6fad3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801--J0N--Wg7m--EAmsn2Z8WlKaUnUAb0MgJSp-OOc--d5vwE-69988452b9fa9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-sBNnk--vluyBOqVrGOxs5YffUS51fA-s1qWGELm-eOBc-6998845ea7675",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-nzdVOnn14ghxqHdjH6L-ZG6LCcKfhO6--k9XUDm7v1PU-699884659356b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-sj0tA4Tw3wq1R4pE0y2a62InZ6--Mg8WaLjTkdz5SyFE-6998846b39a19",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-IamerNL399t3UvDD8yHeOL7SG9iDSq3Rk7mQMbVZbe0-699884716f58a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-d3JTCtQ--vUj4nWlPOn6Lud7YtFbhQs5JSqtWTolJCiE-69988479a4ab9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-SpfxEqF5KH6JT5dntUio--gan1DRSUNcOmBbzzOrY1b8-69988486179c8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-489801-F0XR9jDVgXTpbqw91O1HzftWBArdyNhb6xVrq8OgwRI-69988492f25a9"
    ],
    "amenities": {
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Coffee/tea maker",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Baking sheet",
        "Freezer"
      ],
      "General": [
        "Air conditioning",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Hangers",
        "Laptop Friendly workspace",
        "Linens",
        "Hot water",
        "Private entrance",
        "Extra pillows and blankets",
        "Cooking basics",
        "Laundromat",
        "Clothing storage"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector",
        "First aid kit",
        "Fire Extinguisher"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Tub",
        "Cleaning products"
      ],
      "Accessibility": [
        "Single level home"
      ],
      "Location": [
        "Beach"
      ],
      "Policy": [
        "Luggage dropoff allowed",
        "Long term stays allowed"
      ]
    },
    "reviews": [],
    "lat": 39.9450535,
    "lng": -74.0714132,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/489801"
  },
  {
    "id": 491290,
    "hostawayId": 447593,
    "name": "Seaside Coastal Getaway | 2BR 2BA Private Grill & Steps to Beach",
    "description": "Welcome to your relaxing Seaside Heights escape! This beautifully maintained 2-bedroom, 2-bath home offers comfort, convenience, and classic Jersey Shore charm just a short stroll from the beach and boardwalk. Perfect for couples, small families, or friends looking for an easy, stress-free coastal getaway.\n\n🛏 2 Bedrooms | 2 Bathrooms\n Comfortably sleeps your group with two private bedrooms and two full bathrooms, offering privacy and space for everyone.\n\n🍔 Private Grill for Barbecuing\n Enjoy outdoor living with your own grill perfect for summer barbecues after a beach day. Fire up fresh seafood, burgers, or your favorite BBQ dishes and dine outdoors in a relaxed coastal setting.\n\n☕ Fully Equipped Kitchen & Coffee Maker\n Start your mornings with fresh coffee and prepare meals with ease in the fully stocked kitchen featuring modern appliances and ample counter space.\n\n📺 Spacious Living Area with Large TV\n Kick back and unwind with your favorite shows or movies on the flat-screen TV after a day in the sun.\n\n🏖 Just Steps to the Beach & Boardwalk\n Located very close to the calm sandy beach and Ocean Gate’s peaceful mile-long boardwalk   perfect for morning walks, sunset views, fishing, or simply enjoying the bay breeze.\n\n🌅 Outdoor Recreation & Family Fun Nearby\n Take advantage of the calm bay waters for swimming, kayaking, or paddleboarding. Nearby parks, playgrounds, and picnic areas make this a great spot for families.\n\n🍽 Walk to Local Dining & Shops\n Explore nearby seafood spots, waterfront dining, bakeries, and local cafés all within walking distance.\n\n🚗 Close to More Jersey Shore Attractions\n A short drive brings you to nearby shore towns with lively boardwalks, beaches, and entertainment for when you want a little extra excitement.\n\n🧺 In-Unit Laundry & Convenient Parking\n Includes washer and dryer for added convenience, plus easy parking for your stay.\n\n📍 Prime Ocean Gate Location\n Enjoy the peaceful, small-town coastal vibe while being just moments from the beach and everything Ocean Gate has to offer.\nWhether you're grilling outdoors, walking to the boardwalk, or spending long days at the beach, this Ocean Gate retreat delivers the perfect Jersey Shore getaway.",
    "houseRules": "House Rules:\n\n– Primary renter must be at least 25 years old\n– No parties, events, or group rentals allowed\n– No prom, graduation, or similar group gatherings\n– Quiet hours must be respected\n– Government-issued photo ID is required to confirm the reservation and verify age\n\nWe take pride in maintaining a clean, peaceful, and family-friendly home. Guests who do not meet these requirements will have their reservations canceled. Thank you for your understanding!",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 300,
    "guests": 7,
    "beds": 5,
    "bedrooms": 2,
    "bathrooms": 2,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-NXfQU--3oBwHCCw5BNr7N--ZFOMa3Yd6--k--HV7U6Wjg1o-699e5d4fa80ec",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-lvN6foTWA12ZZsrNeA2IbqPJ-5LOvVCrCAidESnY0do-699e5d7828d76",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-g65Oj-w-cI-QZDYkyfgIUuyZaWucVPOSNezskRMyoN0-699e5d4c618fb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-nDB1U7TwmXWCV7dhvSjGvS6jQDCH3a9-VqlqEdEqoGI-699e5d52bd746",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-bsAeMZEPo1-Qu75XO4nceuIPF272RP1V7GMNPtr52V0-699e5d560e52c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-7UjuI42g13sp2XL4VGIYL0GXfTesTRfpe3hQmXRTXpA-699e5d59d7718",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-wOdeyjKO49wR5kz28mcsjEnRzD0--C0cy--YRgiKJMmWQ-699e5d5de38fa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-C6FOx8tQBGy8NgXFFqxjPqUMb6G--5avDD9n6vtIRsW0-699e5d625f21b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-Tn9nOjRkUe2rDGnm1AB-7nHyXwuFR0gHqGeQmKCMnFo-699e5d6767157",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-bmHeSJAUyNXCEWBpcfQJK5r1aRQJiu3tAeGVsAHTkZI-699e5d6cb1a1b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-yrmISaBQf3w8ff8DahTM3bFnSc728iJ-LVhgICFQWow-699e5d724d829",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-OVS-1F3BtbQxSMypwcZEShlhyN8TZvHJdcU7s8F-nQE-699e5d7e5b08a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-0pIEUNQHMLnO0F--rqlexnRXxg9mgl4Z5UcPYL19pwiQ-699e5d84c99e3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-5qs7PLm2pxZCDxIi3ukZ5MgpHZtz62uYa7905fmkd9M-699e5d8b7635a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-DUrvzMfmHIN1iYX4ysQOAbD7L3d3K8rsYsRvGqwdyv0-699e5d929d796",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-d600A--axmxMYNK3GjTYwIfTQGW--IYBKgh2I7cdZL--KQ-699e5d9a3ec4f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-491290-zbIGXSfWkVCcXwYn8hCjVyCDXT92CDCey7v8RySGBJk-699e5da2678c4"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Washing Machine",
        "Internet",
        "Wireless",
        "Dryer",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Shampoo",
        "Hangers",
        "TV",
        "Balcony",
        "Linens",
        "Outdoor grill",
        "Towels",
        "Hot water",
        "Extra pillows and blankets",
        "Cooking basics",
        "Smart TV",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Toaster",
        "Microwave",
        "Oven",
        "Stove",
        "Dining room",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Baking sheet",
        "Barbeque utensils",
        "Coffee"
      ],
      "Policy": [
        "Suitable for children",
        "Suitable for infants"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Cleaning products"
      ],
      "Location": [
        "Beach"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ],
      "Accessibility": [
        "Step-free access"
      ]
    },
    "reviews": [],
    "lat": 39.9448813,
    "lng": -74.0729025,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/491290"
  },
  {
    "id": 502808,
    "hostawayId": 459110,
    "name": "Chic 1BR, Free Parking, Walk to Boardwalk, 2 Beach Passes",
    "description": "Welcome to your clean, comfortable, and budget-friendly stay in Seaside Heights! \n\nThis property features 1-bedroom, 1-bath, perfect for guests who want a simple, relaxing place just steps from the action without the high price tag. Whether you're booking one unit or multiple for a group, you’ll enjoy convenience, consistency, and great value.\nThe unit includes 2 beach passes and 1 dedicated parking spot, making your stay even more convenient and stress-free.\n\n🏡1 Bedroom + 1 Bathroom\nEnjoy your own private bedroom, bathroom, and living space ideal for couples, solo travelers, or small groups booking multiple units together.\n\n🛏 Clean, Comfortable Living Spaces\n Designed with a focus on cleanliness and practicality, this unit provides a cozy environment to relax after a day at the beach or boardwalk.\n\n🍳 Kitchen Essentials for Easy Meals\nThis unit includes basic kitchen amenities perfect for preparing quick meals, snacks, or morning coffee to keep your stay convenient and affordable.\n\n🏖 Walk to Seaside Heights Beach & Boardwalk\n Just a short walk brings you to the iconic Seaside Heights Boardwalk and beach. Spend your days soaking up the sun, enjoying ocean views, or taking evening strolls along the lively boardwalk.\n\n🎡 Close to Attractions\n You’re minutes away from popular spots like Casino Pier and Breakwater Beach Waterpark perfect for rides, games, and family fun.\n\n🍕 Dining & Local Favorites Nearby\n Enjoy easy access to local restaurants, pizza spots, ice cream shops, and casual beachside eats all within walking distance, so you can skip the car and explore freely.\n\n🚶 Convenient, Central Location\n Stay close to everything while still having a simple, quiet place to recharge. This location offers the perfect balance between accessibility and relaxation.\n\n💸 Great Value Near the Shore\n This property is ideal for guests looking for a low-cost stay near the beach, without sacrificing comfort or cleanliness.\n\nWhether you're visiting for a weekend getaway, a beach trip, or a longer stay, our property offers the perfect setup. This unit is located within a building of 4 private, identical units, making it a practical and affordable home base in Seaside Heights just steps from everything that makes the Jersey Shore special.",
    "houseRules": "MUST BE AT LEAST 25+ TO BOOK. \nProof of I.D. is required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS.",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 200,
    "guests": 3,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-M68K8a--XgiHMvLEJTnGPYUCPXM--JHWWxjvGZdKTfSZU-69cfc82735430",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-RgflN8iKMyCwKPn9t2DSpQuo5QsIxfsst5esY3VQB94-69cc3bdc516f5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-gnmlToNjbAPtqpuYcitlDV5L-Xh1pLUhEPdB3P10aaw-69cc3be24945a",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-dxpCVL8ca-eFLIysaUdBu59CnOSTvzItUKMacJpkD18-69cc3be90e005",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-fvaAa--2d8c--Hvh6rIyanCAOrrNmEH6VzOaJLd2yrVeU-69cc3bef2c557",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-9xVbh0WZITQIOPTJ8OQXZQSZo3TdZcUeb4BqyDNWrqE-69cc3bf79ffa6",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-7226VN8QRttwpu76eHjEfcPgx35sLhebeDyC-5-2m50-69cc3bfe3dc67",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-H--PzJ5uZVQWSud0o8PvLqmYpBeIJ7B7Li4q-FGAr8a0-69cc3c0572c63",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-GCl0WVW0R9nEI6vA5yw8--3N7hbsTJ-MEjKP--zvrFWUw-69cc3c0f0ec5d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-E3YNoO5cjHtqBztV17yffz3KILgk--0mzXlAx4pOG9ak-69cc3c16d93a9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-j3jvWXYTFj--WcCf1JQTiDhUmDobmLqOqWg65NZynNLc-69cc3c20296eb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-C97sO-3ZZKeyQArXRdyFgP8uCXZf0XOHWKVL0k1AVUY-69cc3c288486e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502808-8hp4W8aSbqSElsMzFp--oLpw48WEU2oOGGEqVtnSgvkA-69cc3c30ab26f"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Shampoo",
        "Hangers",
        "TV",
        "Private living room ",
        "Linens",
        "Towels",
        "Hot water",
        "Cooking basics",
        "Garage",
        "Smart TV",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Microwave",
        "Oven",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Baking sheet",
        "Freezer"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Body soap",
        "Conditioner",
        "Shower gel"
      ],
      "Accessibility": [
        "Bathroom step free access"
      ],
      "Location": [
        "Beach"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ]
    },
    "reviews": [],
    "lat": 39.9422375,
    "lng": -74.0749134,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/502808"
  },
  {
    "id": 502822,
    "hostawayId": 459124,
    "name": "Boutique Hotel-Style Stay | Steps to Boardwalk",
    "description": "Welcome to your clean, comfortable, and budget-friendly stay in Seaside Heights! \n\nThis property features 1-bedroom, 1-bath, perfect for guests who want a simple, relaxing place just steps from the action without the high price tag. Whether you're booking one unit or multiple for a group, you’ll enjoy convenience, consistency, and great value.\nThe unit includes 2 beach passes and 1 dedicated parking spot, making your stay even more convenient and stress-free.\n\n🏡1 Bedroom + 1 Bathroom\nEnjoy your own private bedroom, bathroom, and living space ideal for couples, solo travelers, or small groups booking multiple units together.\n\n🛏 Clean, Comfortable Living Spaces\n Designed with a focus on cleanliness and practicality, this unit provides a cozy environment to relax after a day at the beach or boardwalk.\n\n🍳 Kitchen Essentials for Easy Meals\nThis unit includes basic kitchen amenities perfect for preparing quick meals, snacks, or morning coffee to keep your stay convenient and affordable.\n\n🏖 Walk to Seaside Heights Beach & Boardwalk\n Just a short walk brings you to the iconic Seaside Heights Boardwalk and beach. Spend your days soaking up the sun, enjoying ocean views, or taking evening strolls along the lively boardwalk.\n\n🎡 Close to Attractions\n You’re minutes away from popular spots like Casino Pier and Breakwater Beach Waterpark perfect for rides, games, and family fun.\n\n🍕 Dining & Local Favorites Nearby\n Enjoy easy access to local restaurants, pizza spots, ice cream shops, and casual beachside eats all within walking distance, so you can skip the car and explore freely.\n\n🚶 Convenient, Central Location\n Stay close to everything while still having a simple, quiet place to recharge. This location offers the perfect balance between accessibility and relaxation.\n\n💸 Great Value Near the Shore\n This property is ideal for guests looking for a low-cost stay near the beach, without sacrificing comfort or cleanliness.\n\nWhether you're visiting for a weekend getaway, a beach trip, or a longer stay, our property offers the perfect setup. This unit is located within a building of 4 private, identical units, making it a practical and affordable home base in Seaside Heights just steps from everything that makes the Jersey Shore special.",
    "houseRules": "MUST BE AT LEAST 25+ TO BOOK. \nProof of I.D. is required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS.",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 200,
    "guests": 3,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-k0-0SE7eE1pCx5v8avQovvrqwh2lFprCvtWxpgiAkio-69cfc85cca3a8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-wQas--Mz6OaD02t1b4EsHyCoq1LuyVGvbKHJMOYbZafA-69cc414a47c0d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-NCIUk1G4UAcAWFQKNh6hzU2EOQPlwMULAA--p56II14Y-69cc417a83e8c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-13ts--oiRS5Zbtb0Fv-jqlkLNIYKONkoXGgmQQnTiHcQ-69cc414f8572f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-Bm-MV9jsJEK10ElmhWkA2BOG8rNPr5wosMajL7YaohU-69cc41549b0e5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-GuceWl9o1zZbCPRH8uiSXFnTyGOwCfYuoHoOLxPPoNQ-69cc415a30bd5",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-meDk6wUDkmy1YUkGPA357tzXBjStKzMeJ3p7-HzlpUE-69cc4160983df",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-xG9raqgR-NKkEvOuSuhcNgZEmOEJm6-L1b-G4GTOPLg-69cc416a7e45e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-WdPKSGpbVzCILsWKEviQbc6q3cAIOR-Hf90XyRVflyI-69cc41720af9f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-WIJiKFweJMrt-2MiqdlWBy74mVefbihnR1Ob10P8--yI-69cc4183cc7b3",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-ONjcy9ZnR8ZYQa6UfIFkEYCkJ8KSJt27UO0GDkdSYRo-69cc418e258a9",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-9zInrUkLfomyDWw0aW5zQiCZYTC0gCeWopJlkxVp--Uk-69cc41989c0aa",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-9x7BVUh46em18K7yO1OG53sCcCZAFNY4nbPJIaMi030-69cc41a08652e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-JUPsOfEOD01uffH4TytJX4BrIXHbVRf9Cd7Z7aNQS88-69cc41ac933be",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502822-tk4Gt8vDmJOzes-yx6fwc8--uibeljp4EcrVt7SoXqh4-69cc41b7a6711"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Shampoo",
        "Hangers",
        "TV",
        "Private living room ",
        "Linens",
        "Towels",
        "Hot water",
        "Cooking basics",
        "Garage",
        "Smart TV",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Microwave",
        "Oven",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Baking sheet",
        "Freezer"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Body soap",
        "Conditioner",
        "Shower gel"
      ],
      "Accessibility": [
        "Bathroom step free access"
      ],
      "Location": [
        "Beach"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ]
    },
    "reviews": [],
    "lat": 39.9422375,
    "lng": -74.0749134,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/502822"
  },
  {
    "id": 502827,
    "hostawayId": 459129,
    "name": "Boutique Hotel-Style Stay | Walk to Boardwalk",
    "description": "Welcome to your clean, comfortable, and cozy stay in Seaside Heights! \n\nThis property features 1-bedroom, 1-bath, perfect for guests who want a simple, relaxing place just steps from the action without the high price tag. Whether you're booking one unit or multiple for a group, you’ll enjoy convenience, consistency, and great value.\nThe unit includes 2 beach passes and 1 dedicated parking spot, making your stay even more convenient and stress-free.\n\n🏡1 Bedroom + 1 Bathroom\nEnjoy your own private bedroom, bathroom, and living space ideal for couples, solo travelers, or small groups booking multiple units together.\n\n🛏 Clean, Comfortable Living Spaces\n Designed with a focus on cleanliness and practicality, this unit provides a cozy environment to relax after a day at the beach or boardwalk.\n\n🍳 Kitchen Essentials for Easy Meals\nThis unit includes basic kitchen amenities perfect for preparing quick meals, snacks, or morning coffee to keep your stay convenient and affordable.\n\n🏖 Walk to Seaside Heights Beach & Boardwalk\n Just a short walk brings you to the iconic Seaside Heights Boardwalk and beach. Spend your days soaking up the sun, enjoying ocean views, or taking evening strolls along the lively boardwalk.\n\n🎡 Close to Attractions\n You’re minutes away from popular spots like Casino Pier and Breakwater Beach Waterpark perfect for rides, games, and family fun.\n\n🍕 Dining & Local Favorites Nearby\n Enjoy easy access to local restaurants, pizza spots, ice cream shops, and casual beachside eats all within walking distance, so you can skip the car and explore freely.\n\n🚶 Convenient, Central Location\n Stay close to everything while still having a simple, quiet place to recharge. This location offers the perfect balance between accessibility and relaxation.\n\n💸 Great Value Near the Shore\n This property is ideal for guests looking for a low-cost stay near the beach, without sacrificing comfort or cleanliness.\n\nWhether you're visiting for a weekend getaway, a beach trip, or a longer stay, our property offers the perfect setup. This unit is located within a building of 4 private, identical units, making it a practical and affordable home base in Seaside Heights just steps from everything that makes the Jersey Shore special.",
    "houseRules": "MUST BE AT LEAST 25+ TO BOOK. \nProof of I.D. is required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS.",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 200,
    "guests": 3,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-C9d74unKyoKePH4EpGY4YPWE2PQjIz8Nxk-y0VMxUf8-69cfcc3a62ef4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-rEAnUpHWuqEO55IJt4IIkMsjkrQIwslepZmQ-E6ge5M-69cc44ee657b0",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-XoKaqkFMzxM9aU-uzhEjsWp1eWPL9Yh1PeDoXj5-vnE-69cc44f3ae288",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-Q8BHuGPtJkTE7Mp--gPSeRVCh34naLK-9QONOGtRca9g-69cc44ffbd7a8",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-FSykAq0ph5jCkJAtlhFYS-dFfUbg2o2y9aav0jidA1g-69cc44f98293e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-86VBZvqlMnKYSCPZytSq-3UG2OluvWiAoW--HpKCbTU8-69cc4506a8e95",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-fUaliLT0F17p-zok0aICuU3QyJSur--XOqv1xHzLcpXA-69cc450e4c58d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-3-GaLyCFC2XBDKSXLLdLHGC24T8YS91fIIm9DdADUes-69cc451607e6e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-faUyw--BO4tR--Dt--sny4b1FYsdIdQoLNdDXaWMcut9tE-69cc451db98ed",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-tBe9wfVv2IVIEclDoq6ZcugMFuRtfl-VCFWHfOjlETM-69cc4526e58a4",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-yndgSDnaH6i6eipqYLYHdQfiqSLgU2Q67aPKa0Rqlzo-69cc45305f654",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-UDaMWVDv-NttvnJwReirxoaY6oAe0B1iHhQqnBUMl14-69cc453917b4d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-mCR6G2l6w0ugeG0Jzc0pSXFM0SkFXzTVB1nS4fr5QQE-69cc45431a6b1",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-O1PVsK--edDytBVIXSbNTA7ddrtumUEGVVOOjWnsmpcI-69cc45541691f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502827-d72Qu3hLMIVLeae2TrF7AYQIeLe64BqIhZymJKGb8fs-69cc455dac03d"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Shampoo",
        "Hangers",
        "TV",
        "Private living room ",
        "Linens",
        "Towels",
        "Hot water",
        "Cooking basics",
        "Garage",
        "Smart TV",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Microwave",
        "Oven",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Baking sheet",
        "Freezer"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Body soap",
        "Conditioner",
        "Shower gel"
      ],
      "Accessibility": [
        "Bathroom step free access"
      ],
      "Location": [
        "Beach"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ]
    },
    "reviews": [],
    "lat": 39.9422375,
    "lng": -74.0749134,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/502827"
  },
  {
    "id": 502832,
    "hostawayId": 459134,
    "name": "1BR Condo in Seaside Heights | Steps to Beach & Boardwalk",
    "description": "Welcome to your clean, comfortable, and budget-friendly stay in Seaside Heights! \n\nThis property features 1-bedroom, 1-bath, perfect for guests who want a simple, relaxing place just steps from the action without the high price tag. Whether you're booking one unit or multiple for a group, you’ll enjoy convenience, consistency, and great value.\nThe unit includes 2 beach passes and 1 dedicated parking spot, making your stay even more convenient and stress-free.\n\n🏡1 Bedroom + 1 Bathroom\nEnjoy your own private bedroom, bathroom, and living space ideal for couples, solo travelers, or small groups booking multiple units together.\n\n🛏 Clean, Comfortable Living Spaces\n Designed with a focus on cleanliness and practicality, this unit provides a cozy environment to relax after a day at the beach or boardwalk.\n\n🍳 Kitchen Essentials for Easy Meals\nThis unit includes basic kitchen amenities perfect for preparing quick meals, snacks, or morning coffee to keep your stay convenient and affordable.\n\n🏖 Walk to Seaside Heights Beach & Boardwalk\n Just a short walk brings you to the iconic Seaside Heights Boardwalk and beach. Spend your days soaking up the sun, enjoying ocean views, or taking evening strolls along the lively boardwalk.\n\n🎡 Close to Attractions\n You’re minutes away from popular spots like Casino Pier and Breakwater Beach Waterpark perfect for rides, games, and family fun.\n\n🍕 Dining & Local Favorites Nearby\n Enjoy easy access to local restaurants, pizza spots, ice cream shops, and casual beachside eats all within walking distance, so you can skip the car and explore freely.\n\n🚶 Convenient, Central Location\n Stay close to everything while still having a simple, quiet place to recharge. This location offers the perfect balance between accessibility and relaxation.\n\n💸 Great Value Near the Shore\n This property is ideal for guests looking for a low-cost stay near the beach, without sacrificing comfort or cleanliness.\n\nWhether you're visiting for a weekend getaway, a beach trip, or a longer stay, our property offers the perfect setup. This unit is located within a building of 4 private, identical units, making it a practical and affordable home base in Seaside Heights just steps from everything that makes the Jersey Shore special.",
    "houseRules": "MUST BE AT LEAST 25+ TO BOOK. \nProof of I.D. is required to confirm your reservation. \n\nNO PARTIES, PROMS, OR GROUP RENTALS.",
    "location": "Seaside Heights, US",
    "city": "Seaside Heights",
    "price": 200,
    "guests": 3,
    "beds": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "images": [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-iW5w0xUHCTY7A-W2zBbNXt6hki5dLevKkkYcv2Rr50U-69cfcc5f63423",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-ujIMQDoIju4eymiPeO79GW-od462U0uvpiexLvt6cOo-69cc484ed339e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-niVpgosI3g9TfhgRct-wA-Z2Jww1kGnPlAW9c6qZj40-69cc4853d2b11",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-SMGoOI53cxZw0Bspy0dMfxqzstbHxkDFoXvykNQ5Guw-69cc485932c69",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-P1GHL8MqWf3CWz18nhg-rtLlz4mrORT7zMVxAVnovWI-69cc485ecb086",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-hMryD-5iWHdgNWLj4fO-A--mxto9uqP5qBshWD9wekiI-69cc4864d607c",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-o2s-LH52dh7f6l7GkC8srg-V--bWGXPalTALXyE5yBDc-69cc486b61896",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-vhq92EpOcmMwniY1kg0UTXldIqXTI1iRb68--5sGOQvA-69cc4872957b2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832--ATpdd5Nb6Z40GFy59W1YBT9eFQ0gi67GkyjQ1SxQnE-69cc4879984fb",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-cSPEBg0zWWahHyZLGbJMYKLhei1bGSEKKpLU--FYfu4s-69cc48802a854",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-eza3OYD6CT--8VYgG9yBh9GgfOL0mLBFf9zRnaw6jqV0-69cc488883b1e",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/155201-502832-RlkGQC-8-yQjanAt--7IUc5tCj0Ucg4poP31CuxXD3WE-69cc489121d71"
    ],
    "amenities": {
      "General": [
        "Free WiFi",
        "Air conditioning",
        "Cable TV",
        "Internet",
        "Wireless",
        "24-hour checkin",
        "Hair Dryer",
        "Heating",
        "Essentials",
        "Shampoo",
        "Hangers",
        "TV",
        "Private living room ",
        "Linens",
        "Towels",
        "Hot water",
        "Cooking basics",
        "Garage",
        "Smart TV",
        "Clothing storage"
      ],
      "Kitchen & dining": [
        "Kitchen",
        "Microwave",
        "Oven",
        "Stove",
        "Refrigerator",
        "Kitchen utensils",
        "Dining area",
        "Dining table",
        "Baking sheet",
        "Freezer"
      ],
      "Safety": [
        "Smoke detector",
        "Carbon Monoxide Detector"
      ],
      "Parking": [
        "Free parking"
      ],
      "Bathroom": [
        "Shower",
        "Toilet",
        "Body soap",
        "Conditioner",
        "Shower gel"
      ],
      "Accessibility": [
        "Bathroom step free access"
      ],
      "Location": [
        "Beach"
      ],
      "Cleanliness": [
        "Contactless Check-In/Out"
      ]
    },
    "reviews": [],
    "lat": 39.9422375,
    "lng": -74.0749134,
    "rating": 5,
    "link": "https://suitecapacity.holidayfuture.com/listings/502832"
  }
] as Property[];
