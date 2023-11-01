const createSlug = (text) => {
  const cleanedText = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
  return cleanedText;
};

const vendors = [
  {
    name: 'The Ritz Carlton, Bali',
    slug: createSlug('The Ritz Carlton, Bali'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$$',
    image: '2021-11-01-07.22.40-1-tY11gOExM.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Time stands still at The Ritz-Carlton, Bali, allowing the extraordinary moments of your wedding to unfold in the most magical of ways. With its mesmerizing landscape and spiritual surroundings, this luxury beach resort is the perfect venue for fairytale experiences. The hotel offers comprehensive wedding services, dedicated planners, and stunning venues that are destined to exceed your expectations and wishes.',
    address: 'Jalan Raya Nusa Dua Selatan Lot III, Sawangan, Nusa Dua',
    rating: null,
  },
  {
    name: 'Renaissance Bali Uluwatu Resort & Spa',
    slug: createSlug('Renaissance Bali Uluwatu Resort & Spa'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We can accommodate every wish and family tradition for your ceremony, offering spectacular venues to make your fairy tale wedding absolutely perfect.',
    address: 'Jl. Pantai Balangan 1 No. 1, Ungasan, Uluwatu',
    rating: null,
  },
  {
    name: 'Alissha Bride',
    slug: createSlug('Alissha Bride'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'gangsar-riska-demanten-bs-1-BJxrurRYO.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Established in 2012, Alissha is known for its up to date gowns and spectacular quality of its dress. We served the best quality of our dresses, make-up, and photography. And now we also have venue, decoration, and Wedding Organizer & Entertainment (All-In Packages)',
    address: 'Jl. Bisma Tengah 2 No.21, RT.7/RW.9, Papanggo, Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14340',
    rating: null,
  },
  {
    name: 'Ohana Enterprise',
    slug: createSlug('Ohana Enterprise'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'img_20220706_105050_393-eXf8n5jPB.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We provide ALL IN ONE Wedding Package on many Venues in Tangerang and Jakarta. You can choose your favorite venues which will be located around your place. We give you the easiness to determine a proper  place for your Perfect Day and get a complete package',
    address: 'Jalan Ts. Jaya, Bojong Nangka No.8, Klp. Dua, Tangerang',
    rating: null,
  },
  {
    name: 'Recreative Organizer Indonesia',
    slug: createSlug('Recreative Organizer Indonesia'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'img-20180812-wa0021-rke0pwi0E.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Recreative Organizer Indonesia (R.O.I) is a result-driven creative house digital agency based in Jakarta, Indonesia with a global representation. We appreciate every client and work tirelessly to make the most of every production within budget. And most importantly, we’ve given our clients exactly what they want. Our motto is “ALWAYS DELIVER MORE THAN EXPECTED!” We believe that our take on attention and time separates us from other agencies.',
    address: 'Ruko Sentra Bisnis Grand Galaxy City, Pekayon Jaya, Bekasi Selatan - Indonesia',
    rating: null,
  },
  {
    name: 'InterContinental Jakarta Pondok Indah',
    slug: createSlug('InterContinental Jakarta Pondok Indah'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$$',
    image: 'mikeaditya-06846-1-Bymm5jn5w.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: "InterContinental Jakarta Pondok Indah has all the right ingredients to create  the elegant wedding you've always dreamt of. A sophisticated collection of wedding venues and facilities, such as an awe-inspiring Grand Ballroom for up to 3,500 guests with private Sky Box for your VIP guests, a beautifully adorned outdoor Ballroom Terrace, Wedding Gallery, The Bridal Suite, Wedding Lounge, Chef's Table, and  The Studios & Studio Kitchen to cater your wedding day to the perfection.",
    address: 'Jl. Metro Pondok Indah Kav.IV TA',
    rating: null,
  },
  {
    name: 'Sofitel Bali Nusa Dua Beach Resort',
    slug: createSlug('Sofitel Bali Nusa Dua Beach Resort'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$$',
    image: 'page0-7-XqddPPZCV.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Our 5-star accommodation welcomes guests with a marvelously refreshing style, a blend of French elegance with authentic Balinese charm. Create a truly memorable day of your lifetime in the most dreamy beachfront settings of ours.',
    address: 'BTDC lot N5, Nusa Dua, Bali, Indonesia',
    rating: null,
  },
  {
    name: 'Finest Paketan',
    slug: createSlug('Finest Paketan'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: '2021-11-01-07.22.40-1-tY11gOExM.webp',
    categoryId: 1,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Finest Paketan merupakan sister company dari Finest Organizer, sebagai sebuah tempat yang membantu para calon pengantin untuk bisa mendapatkan all in paket wedding yang terbaik.',
    address: 'Jl. Green Lake City Asia 11 no 36 RT.004/RW.006, Gondrong, Kec. Cipondoh, Kota Tangerang',
    rating: null,
  },
  {
    name: 'And Finally Bali Wedding Planner',
    slug: createSlug('And Finally Bali Wedding Planner'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'And Finally Bali Wedding Planner was founded in 2011, firstly in Jogjakarta. And now we are a wedding planner based in Bali.',
    address: 'Jl Nangka Selatan No. 65 Denpasar Bali',
    rating: null,
  },
  {
    name: 'Littlecloud Event Organizer',
    slug: createSlug('Littlecloud Event Organizer'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: 'gangsar-riska-demanten-bs-1-BJxrurRYO.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Littlecloud merupakan EO berbasis pengembangan teknologi dari PT. Kreasi Inovasi Bangsa dan memiliki layanan asistensi platform digital yang cepat, fleksibel dan customizable untuk menjawab setiap tantangan dan kebutuhan client. Sesuai dengan tagline kami yakni "Make Event Accessible For Everyone", Littlecloud ingin setiap pasangan bisa mewujudkan pernikahan impian yang premium namun tetap affordable. Littlecloud siap membuat setiap moment Anda menjadi lebih bermakna bersama kami!',
    address: 'Jalan Ternate No 2A, Cideng, Gambir',
    rating: null,
  },
  {
    name: 'Debali Organizer',
    slug: createSlug('Debali Organizer'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$',
    image: 'img_20220706_105050_393-eXf8n5jPB.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Hi, welcome to Debali Organizer! We plan and organize your wedding. Sit back and relax, while we create your wedding dream on your budget. Be the guest at your own event. We plan, you party!',
    address: 'Perumahan Canggu Permai Gg: Rajawali Block A.30',
    rating: null,
  },
  {
    name: 'Etiz Wedding Planner',
    slug: createSlug('Etiz Wedding Planner'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$',
    image: 'img-20180812-wa0021-rke0pwi0E.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Etiz Wedding Planner is sister company of Bali Izatta Wedding.',
    address: 'Jl. Ciungwanara I No 44 Renon',
    rating: null,
  },
  {
    name: 'AVAVI BALI WEDDINGS',
    slug: createSlug('AVAVI BALI WEDDINGS'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$',
    image: 'mikeaditya-06846-1-Bymm5jn5w.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We are team of seasoned professionals from Bali’s wedding industry made available to you, to provide a caring and highly competent service, to ensure that your dream wedding is exactly as you imagined it.',
    address: 'Taman Mumbul GG Pulasari KAV 252T Nusa Dua Bali',
    rating: null,
  },
  {
    name: 'Save The Date',
    slug: createSlug('Save The Date'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: 'page0-7-XqddPPZCV.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Save The Date is a professional wedding planner that creating a concept for all type of event.  With our service, you will get hitched without a hitch. So, Save The Date now for making your beautiful moment more meaningful.',
    address: 'Jalan Lebak Bulus 4 No 1 Cilandak, Jakarta Selatan',
    rating: null,
  },
  {
    name: 'Finest Organizer',
    slug: createSlug('Finest Organizer'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: '2021-11-01-07.22.40-1-tY11gOExM.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Finest Organizer was found in August 2009, started from a wish to create an unforgettable event with a lasting beautiful impression',
    address: 'Green Lake City Cluster ASIA 11 n0 36 Cipondoh, Tangerang',
    rating: null,
  },
  {
    name: 'Finest Paketan',
    slug: createSlug('Finest Paketan'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 2,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Finest Paketan merupakan sister company dari Finest Organizer, sebagai sebuah tempat yang membantu para calon pengantin untuk bisa mendapatkan all in paket wedding yang terbaik.',
    address: 'Jl. Green Lake City Asia 11 no 36 RT.004/RW.006, Gondrong, Kec. Cipondoh, Kota Tangerang',
    rating: null,
  },
  {
    name: 'Cyra Photo',
    slug: createSlug('Cyra Photo'),
    countryCode: 'ID',
    city: 'Lombok',
    price: '$',
    image: 'gangsar-riska-demanten-bs-1-BJxrurRYO.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We are team of young & creative photographer and videographer based in Lombok, Indonesia. We believe that every picture is beautiful and meaningful.',
    address: 'Sunan Kalijaga IV Street, number 1. Bumi Kodya Asri, Jempong Baru.',
    rating: null,
  },
  {
    name: 'Warna Project',
    slug: createSlug('Warna Project'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: 'img_20220706_105050_393-eXf8n5jPB.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Our goal is to give you the freedom and peace of mind to enjoy your day while we capture the laughter, tears, and moments that you will look back on and reminisce with warmth.',
    address: 'Jakarta || Bali',
    rating: null,
  },
  {
    name: 'Amorphotoworks',
    slug: createSlug('Amorphotoworks'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: 'img-20180812-wa0021-rke0pwi0E.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Kami adalah sebuah tim yang terbentuk dari kecintaan kami terhadap membuat karya foto yang luar biasa. Kami mudah terikat dengan cerita cinta dan sangat mencintai keunikan karakteristik setiap pasangan. Hanya dari senyuman kecil yang setiap pasangan berikan satu sama lain, disitulah semangat kami membara.',
    address: 'Menara Kuningan Lantai 30 Unit B-C , Jl. H. Rasuna Said Kav.5 Blok X-7 RT/RW. 006/007 Kel, RT.6/RW.7, Kuningan, KaretKuningan, Kec. Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940',
    rating: null,
  },
  {
    name: 'Alissha Bride',
    slug: createSlug('Alissha Bride'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'mikeaditya-06846-1-Bymm5jn5w.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Established in 2012, Alissha is known for its up to date gowns and spectacular quality of its dress. We served the best quality of our dresses, make-up, and photography. And now we also have venue, decoration, and Wedding Organizer & Entertainment (All-In Packages)',
    address: 'Jl. Bisma Tengah 2 No.21, RT.7/RW.9, Papanggo, Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14340',
    rating: null,
  },
  {
    name: 'Nocture',
    slug: createSlug('Nocture'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'page0-7-XqddPPZCV.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'a group of young and creative guys that had one thing in mind, to capture your most memorable day in the best way.',
    address: 'Jl Kelapa Gading Permai Raya BB/3. Kelapa Gading. Jakarta Utara',
    rating: null,
  },
  {
    name: 'Kura-Kura Photography',
    slug: createSlug('Kura-Kura Photography'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: '2021-11-01-07.22.40-1-tY11gOExM.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We want our photos to reflect the beauty we see everyday in those around us and the world we share. It’s in the mix and part of what drives us to shoot in  the style we do. We call ourselves “fashion-inspired photographers” In this website you will find a selection of projects we have had the pleasure to work on. So, we decide to take your moments and memories with the concept and creativity to make some beautiful and memorable moments of yours.',
    address: 'Indonesia DKI Jakarta Petogogan 2 no 9 Blok A Kebayoran Baru',
    rating: null,
  },
  {
    name: 'Derzia Photolab',
    slug: createSlug('Derzia Photolab'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We are creating unforgetable moment of your life with our passion and professionalism. It is a big pleasure for us if you let us to participating in your journey of love.',
    address: 'Raden Inten 2 No. 63 B, Duren Sawit - Jakarta Timur p : +6221.2298.2393 (office) , 08119963635 (wa)',
    rating: null,
  },
  {
    name: 'Manao Pictures',
    slug: createSlug('Manao Pictures'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'gangsar-riska-demanten-bs-1-BJxrurRYO.webp',
    categoryId: 3,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Wedding Photography and Videography Based on Jakarta',
    address: 'Jakarta Utara',
    rating: null,
  },
  {
    name: 'Cyra Photo',
    slug: createSlug('Cyra Photo'),
    countryCode: 'ID',
    city: 'Lombok',
    price: '$',
    image: 'img_20220706_105050_393-eXf8n5jPB.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We are team of young & creative photographer and videographer based in Lombok, Indonesia. We believe that every picture is beautiful and meaningful.',
    address: 'Sunan Kalijaga IV Street, number 1. Bumi Kodya Asri, Jempong Baru.',
    rating: null,
  },
  {
    name: 'Warna Project',
    slug: createSlug('Warna Project'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: 'img_20220706_105050_393-eXf8n5jPB.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Our goal is to give you the freedom and peace of mind to enjoy your day while we capture the laughter, tears, and moments that you will look back on and reminisce with warmth.',
    address: 'Jakarta || Bali',
    rating: null,
  },
  {
    name: 'Weddingscape',
    slug: createSlug('Weddingscape'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'mikeaditya-06846-1-Bymm5jn5w.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'kami mempersiapkan semuanya untuk hari besar pernikahan. dari satu pernikahan ke pernikahan selanjutnya, kami selalu menemukan senyum bahagia dari setiap pasangan dan keluarganya.',
    address: 'Jl. Semangka 3 Rt. 13 Rw 09 No 55 Kel Jati Pulo Kec Palmerah Jakarta 11430',
    rating: null,
  },
  {
    name: 'Nocture',
    slug: createSlug('Nocture'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'page0-7-XqddPPZCV.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'a group of young and creative guys that had one thing in mind, to capture your most memorable day in the best way.',
    address: 'Jl Kelapa Gading Permai Raya BB/3. Kelapa Gading. Jakarta Utara',
    rating: null,
  },
  {
    name: 'Bondan Photoworks',
    slug: createSlug('Bondan Photoworks'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: '2021-11-01-07.22.40-1-tY11gOExM.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'pre-wedding and wedding photography',
    address: 'Cililitan, Jakarta Timur',
    rating: null,
  },
  {
    name: 'ANTHEIA PHOTOGRAPHY',
    slug: createSlug('ANTHEIA PHOTOGRAPHY'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We are here to share the value inside you to others. The love. The passion. We put up the best service for you, from the beginning until it it is done: Antheia provides you the best process.',
    address: 'Permata Buana - Puri Indah +62812 8016 4097 Instagram : @antheiaphoto www.antheiaphoto.com',
    rating: null,
  },
  {
    name: 'Moire Photo & Video',
    slug: createSlug('Moire Photo & Video'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'We are creating unforgetable moment of your life with our passion and professionalism. It is a big pleasure for us if you let us to participating in your journey of love.',
    address: 'Raden Inten 2 No. 63 B, Duren Sawit - Jakarta Timur p : +6221.2298.2393 (office) , 08119963635 (wa)',
    rating: null,
  },
  {
    name: 'AKSA Creative',
    slug: createSlug('AKSA Creative'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'img-20180812-wa0021-rke0pwi0E.webp',
    categoryId: 4,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'our style is candid, natural expressions We capture moments with pure honesty, true emotion and dedication capture the simplest form of all kinds of emotions we also keep our images and film natural and honest because honesty will last forever and become #EVERLASTINGMEMORIES',
    address: 'Jalan Bhakti No 10 Kebayoran Baru, Jakarta Selatan, Jakarta 12180',
    rating: null,
  },
  {
    name: 'Satrisca Makeup Artist',
    slug: createSlug('Satrisca Makeup Artist'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$',
    image: 'mikeaditya-06846-1-Bymm5jn5w.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Utk portofolio yg lebih banyak bisa lgsg cek IG saya ya guys @satriscamakeup atau bisa lgsg kontak di nomer WA yg sudah tertera',
    address: 'Jl Nangka Utara',
    rating: null,
  },
  {
    name: 'Elsandra Makeup',
    slug: createSlug('Elsandra Makeup'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$$',
    image: 'page0-7-XqddPPZCV.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'our style is candid, natural expressions We capture moments with pure honesty, true emotion and dedication capture the simplest form of all kinds of emotions we also keep our images and film natural and honest because honesty will last forever and become #EVERLASTINGMEMORIES',
    address: 'Jalan Bhakti No 10 Kebayoran Baru, Jakarta Selatan, Jakarta 12180',
    rating: null,
  },
  {
    name: 'Nike Makeup & Hairdo',
    slug: createSlug('Nike Makeup & Hairdo'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: '2021-11-01-07.22.40-1-tY11gOExM.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Makeup & Hairdo Service',
    address: 'Jakarta',
    rating: null,
  },
  {
    name: 'byReginabraham',
    slug: createSlug('byReginabraham'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'dscf6008-MGm9xsILh.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Offering the latest trends of Makeup and Hairdo for your special occasions since 2015.',
    address: 'Ruko Mall of Indonesia, blok L-10 (near Lobby 6) , Beauderm Clinic, 2nd floor, Kelapa Gading, Jakarta Utara.',
    rating: null,
  },
  {
    name: 'MarisaFe Bridal',
    slug: createSlug('MarisaFe Bridal'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$$',
    image: 'gangsar-riska-demanten-bs-1-BJxrurRYO.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Wedding airbrush makeup & Attire',
    address: 'Sentul - Bogor - Jakarta - Indonesia',
    rating: null,
  },
  {
    name: 'Wulan Nugraha',
    slug: createSlug('Wulan Nugraha'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$',
    image: 'img_20220706_105050_393-eXf8n5jPB.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'I’m Make Up Artist certified LSK TRP (Lembaga Sertifikasi Kompetensi Tata Rias Pengantin) which is a certificate legalized by the Bridal Makeup Competency Certification Institute In Indonesia and also I studied and Trained Make Up at Rudy Hadisuwarno School Diploma Of Makeup Artistry for Professional Certification / Master Class of make up artists.',
    address: 'Taman Mahayu Jl. Taman III No.31 Sempidi Badung Bali',
    rating: null,
  },
  {
    name: 'Charlotte Sunny',
    slug: createSlug('Charlotte Sunny'),
    countryCode: 'ID',
    city: 'Bali',
    price: '$',
    image: 'img-20180812-wa0021-rke0pwi0E.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: 'Charlotte is a professional make-up artist specializing in natural style makeup. She masteres her makeup and hairdo in Taiwan, and started her career in beauty industry in 2014 on the beautiful island of Bali. She can communicate well in Chinese and English.',
    address: 'Jl. Danau buyan Raya no. 25, Jimbaran, Bali',
    rating: null,
  },
  {
    name: 'Wedding Factory',
    slug: createSlug('Wedding Factory'),
    countryCode: 'ID',
    city: 'Jakarta',
    price: '$',
    image: 'mikeaditya-06846-1-Bymm5jn5w.webp',
    categoryId: 5,
    flexible: false,
    bridestoryPay: false,
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    twitter: '',
    website: '',
    description: "We build our relationship with all of our clients like we're best friends and we serve profesionally and give you with the fullest service for you for your once in a lifetime moments..",
    address: 'Jl. Delima Raya no 34, Tanjung Duren Selatan',
    rating: null,
  },
];

const categories = [
  {
    categoryName: 'Venue',
    description: '',
    image: ''
  },
  {
    categoryName: 'Wedding Planner',
    description: '',
    image: ''
  },
  {
    categoryName: 'Fotografi',
    description: '',
    image: ''
  },
  {
    categoryName: 'Videografi',
    description: '',
    image: ''
  },
  {
    categoryName: 'Hair & Makeup',
    description: '',
    image: ''
  },
  {
    categoryName: 'Gaun & Busana Pengantin',
    description: '',
    image: ''
  },
  {
    categoryName: 'Bridal',
    description: '',
    image: ''
  },
  {
    categoryName: 'Katering',
    description: '',
    image: ''
  },
  {
    categoryName: 'Dekorasi & Pencahayaan',
    description: '',
    image: ''
  },
  {
    categoryName: 'Suvenir & Hadiah',
    description: '',
    image: ''
  },
  {
    categoryName: 'Undangan',
    description: '',
    image: ''
  },
  {
    categoryName: 'Layanan Unik',
    description: '',
    image: ''
  },
  {
    categoryName: 'Bunga',
    description: '',
    image: ''
  },
  {
    categoryName: 'Entertainment (Musik)',
    description: '',
    image: ''
  },
  {
    categoryName: 'Photo booth',
    description: '',
    image: ''
  },
  {
    categoryName: 'Rental',
    description: '',
    image: ''
  },
  {
    categoryName: 'Entertainment (MC)',
    description: '',
    image: ''
  },
  {
    categoryName: 'Bulan madu',
    description: '',
    image: ''
  },
  {
    categoryName: 'Aksesori Pernikahan',
    description: '',
    image: ''
  },
  {
    categoryName: 'Perhiasan',
    description: '',
    image: ''
  },
  {
    categoryName: 'Kue Pengantin',
    description: '',
    image: ''
  },
  {
    categoryName: 'Sepatu Pengantin',
    description: '',
    image: ''
  },
  {
    categoryName: 'Boutonnieres & Corsages',
    description: '',
    image: ''
  },
  {
    categoryName: 'Busana Pria',
    description: '',
    image: ''
  },
  {
    categoryName: 'Sweet Corner',
    description: '',
    image: ''
  },
  {
    categoryName: 'Kesehatan & Kecantikan',
    description: '',
    image: ''
  },
  {
    categoryName: 'Entertainment (DJ)',
    description: '',
    image: ''
  },
  {
    categoryName: 'Tari & Koreografi',
    description: '',
    image: ''
  },
  {
    categoryName: 'Officiant',
    description: '',
    image: ''
  },
]

const categoriesOnVendors = [
  {
    vendorId: 1,
    categoryId: 1
  },
  {
    vendorId: 2,
    categoryId: 1
  },
  {
    vendorId: 3,
    categoryId: 1
  },
  {
    vendorId: 4,
    categoryId: 1
  },
  {
    vendorId: 5,
    categoryId: 1
  },
  {
    vendorId: 6,
    categoryId: 1
  },
  {
    vendorId: 7,
    categoryId: 1
  },
  {
    vendorId: 8,
    categoryId: 1
  },
  {
    vendorId: 9,
    categoryId: 2
  },
  {
    vendorId: 10,
    categoryId: 2
  },
  {
    vendorId: 11,
    categoryId: 2
  },
  {
    vendorId: 12,
    categoryId: 2
  },
  {
    vendorId: 13,
    categoryId: 2
  },
  {
    vendorId: 14,
    categoryId: 2
  },
  {
    vendorId: 15,
    categoryId: 2
  },
  {
    vendorId: 16,
    categoryId: 2
  },
  {
    vendorId: 17,
    categoryId: 3
  },
  {
    vendorId: 18,
    categoryId: 3
  },
  {
    vendorId: 19,
    categoryId: 3
  },
  {
    vendorId: 20,
    categoryId: 3
  },
  {
    vendorId: 21,
    categoryId: 3
  },
  {
    vendorId: 22,
    categoryId: 3
  },
  {
    vendorId: 23,
    categoryId: 3
  },
  {
    vendorId: 24,
    categoryId: 3
  },
  {
    vendorId: 25,
    categoryId: 4
  },
  {
    vendorId: 26,
    categoryId: 4
  },
  {
    vendorId: 27,
    categoryId: 4
  },
  {
    vendorId: 28,
    categoryId: 4
  },
  {
    vendorId: 29,
    categoryId: 4
  },
  {
    vendorId: 30,
    categoryId: 4
  },
  {
    vendorId: 31,
    categoryId: 4
  },
  {
    vendorId: 32,
    categoryId: 4
  },
  {
    vendorId: 33,
    categoryId: 5
  },
  {
    vendorId: 34,
    categoryId: 5
  },
  {
    vendorId: 35,
    categoryId: 5
  },
  {
    vendorId: 36,
    categoryId: 5
  },
  {
    vendorId: 37,
    categoryId: 5
  },
  {
    vendorId: 38,
    categoryId: 5
  },
  {
    vendorId: 39,
    categoryId: 5
  },
  {
    vendorId: 40,
    categoryId: 5
  },
];

module.exports = {
  vendors,
  categories,
  categoriesOnVendors
};
