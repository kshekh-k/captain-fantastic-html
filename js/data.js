const logo = './assets/icons/logo.svg'
const logoIcon = './assets/images/captain-fantastic-icon.svg'
const logoUrl = '/'
const booking = 'Book Now'
const bookingUrl = '/'
const phone = '0800 208 8899'
const phoneIcon = './assets/icons/phone.svg'
const desktopMenuTop = {
  rating: '5/5 (2,083 Reviews)',
  ratingIcon: './assets/icons/star_rating.svg',
  googleIcon: './assets/icons/google.svg',
  links: [
    { text: 'About Us', url: '/about-us.html' },
    { text: 'Join Our Team', url: '/' },
    { text: 'Areas Covered', url: '/' },
    { text: 'Latest News', url: '/' }
  ],
  socialLinks: [
    { icon: './assets/icons/fb.svg', alt: 'facebook', url: '/' },
    { icon: './assets/icons/insta.svg', alt: 'instagram', url: '/' },
    { icon: './assets/icons/youtube.svg', alt: 'youtube', url: '/' }
  ],
  phone: phone,
  phoneIcon: phoneIcon
}

const fetchGoogleRatingAndReviews = async () => {
  const queryParams = new URLSearchParams({
    fields: 'id,rating,reviews,userRatingCount',
    key: 'AIzaSyBi6XpY8h5UN7LlHzJVbufsZKD_9ixN56c'
  });
  const response = await fetch(`https://places.googleapis.com/v1/places/ChIJgVkK9fkbdkgRDFwdVMx0cOg?${queryParams}`);
  if (!response.ok) {
    return {
      error: true,
      message: 'Failed to fetch Google ratings and reviews'
    };
  }
  return await response.json();
}

const getHeaderGoogleRatings = async () => {
  const data = await fetchGoogleRatingAndReviews();
  return `${data.rating} (${data.userRatingCount} Reviews)`;
}

const getGoogleReviews = async () => {
  const data = await fetchGoogleRatingAndReviews()
  const reviews = data.reviews.filter(review => review.rating === 5).slice(0, 10);
  console.log(reviews);
  return reviews;
}

function getTestimonialsData() {
  return {
    slides: [],
    getGoogleReviews: async () => {
      const data = await fetchGoogleRatingAndReviews();
      let reviews = data.reviews.filter(review => review.rating === 5).slice(0, 10);
      return reviews;
    }
  }
}

const desktopMenu = {
  logo: logo,
  logoUrl: logoUrl,
  booking: booking,
  bookingUrl: bookingUrl,
  menus: [
    { text: 'Schools', url: '/' },
    { text: 'Nurseries', url: '/' },
    { text: 'Corporate & Events', url: '/' },
    { text: 'Upgrades & Extras', url: '/' },
  ]
}

const megaMenusList = [
  {
    title: 'EARLY YEARS',
    age: '1-5 years',
    items: [
      { text: 'Toddler Parties', url: '/toddler-parties.html' },
      { text: 'All Pre School Parties', url: '/', general: true },
    ]
  },
  {
    title: 'Magic Parties',
    age: '4-8 years',
    items: [
      { text: 'Princess Parties', url: '/princess-parties.html' },
      { text: 'Pirate Parties', url: '/pirate-parties.html' },
      { text: 'Unthemed Parties', url: '/unthemed-parties.html' },
      { text: 'Science Parties', url: '/science-parties.html' },
      { text: 'Superhero Parties', url: '/' },
      { text: 'All Magic & Science Parties', url: '/', general: true },
    ]
  },
  {
    title: 'Disco & Games Parties',
    age: '5-11 years',
    items: [
      { text: 'Disco Parties', url: '/disco-parties.html' },
      { text: 'All Disco & Games Parties', url: '/', general: true },
    ]
  },
  {
    title: 'Seasonal',
    items: [
      { text: 'Easter', url: '/easter-parties.html' },
      { text: 'Graduation', url: '/graduations-parties.html' },
      { text: 'Halloween', url: '/' },
      { text: 'Christmas', url: '/christmas-parties.html' }
    ]
  },
  {
    title: 'SEN Friendly',
    items: [
      { text: 'Magic', url: '/' },
      { text: 'Disco', url: '/' }
    ]
  },
  {
    title: 'Larger Packages',
    items: [
      { text: 'Ultimate', url: '/unlimitted-parties.html' },
      { text: 'Bespoke', url: '/' }
    ]
  }
]

const menusMobile = {
  logoIcon: logoIcon,
  logoUrl: logoUrl,
  booking: booking,
  bookingUrl: bookingUrl,
  phoneNum: phone,
  menus: [
    { text: 'Schools & Nurseries', url: '/' },
    { text: 'Corporate/Events', url: '/' },
    { text: 'Party UPGRADES & Extras', url: '/' },
    { text: 'about us', url: '/about-us.html' },
    { text: 'areas covered', url: '/' },
    { text: 'latest news', url: '/' },
  ],
  megaMenuMobile: megaMenusList
}

// footer
const footer = {
  logo: logo,
  logoUrl: logoUrl,
  booking: booking,
  bookingUrl: bookingUrl,
  phoneNum: phone,
  contactus: '/',
  megaMenuFooter: megaMenusList,
  policies: [
    { text: 'Privacy Policy', url: '/' },
    { text: 'Cookies Policy', url: '/' },
    { text: 'Registered address details', url: '/' },
  ],
}

function partyStickyListComponent() {
  return {
    partySticky: [
      {
        id: 1,
        stickyBg: "bg-warning",
        note: "Wow, what a superhero party! The service, everything was faultless, we cant ",
        clientName: "Name of Client",
      },
      {
        id: 2,
        stickyBg: "bg-brand",
        note: "Fantastic! fantastic! fantastic! thanks so much for an incredible day…",
        clientName: "Name of Client",
      },
      {
        id: 3,
        stickyBg: "bg-success",
        note: "It was so good we’ve already booked you for next year! Best party ever!",
        clientName: "Name of Client",
      },
      {
        id: 4,
        stickyBg: "bg-brand-secondary",
        note: "My child cant stop talking about the party we just had with you. thanks so much!",
        clientName: "Name of Client",
      },
    ],
  };
}

function partyUSPList() {
  return {
    partyUSP: [
      {
        id: 1,
        icon: "",
        title: "Set-Up and Pack-Down Time:",
        content:
          "Please allow at least 30 minutes before and after the event (ideally an hour) for set-up and pack-away.",
      },
      {
        id: 2,
        icon: "icon-parking",
        title: "Parking",
        content:
          "Nearby parking is essential and we ask that any costs are covered by the client.",
      },
      {
        id: 3,
        icon: "icon-baloon",
        title: "Minimise DistractionsParking",
        content:
          "Ensure the space is free from loose balloons, toys, or other distractions.",
      },
      {
        id: 4,
        icon: "icon-fort",
        title: "Additional Activities",
        content:
          "If you’re planning additional activities (e.g., bouncy castle, soft play, arts & crafts etc.), please let us know when booking, as this may affect the party structure.",
      },
    ],
  };
}


function extraPartyList() {
  return {
    extraPartyfeatures: [
      {
        id: 1,
        title: "Face Painting:",
        description:
          "Perfect for ages 3+, our talented face painters can create stunning full-face designs (up to 12 per hour) or quick, fun designs to cater for larger groups.",
      },
      {
        id: 2,
        title: "Photo Booth: ",
        description:
          "Capture the fun with a fully equipped photo booth, complete with props for unforgettable memories!",
      },
      {
        id: 3,
        title: "Popcorn and/or Candy Floss: ",
        description:
          "Treat your guests to classic party snacks with freshly made popcorn, candy floss, or both!",
      },
      {
        id: 4,
        title: "Dance Floor:",
        description:
          "Bring the party vibes to life with a dance floor perfect for showcasing everyone’s best moves!",
      },
    ],
  };
}

const upgradeParties = [
  {
    id: 1,
    title: "Early Years Parties",
    age: "(1-5 yrs)",
    thumb: './assets/images/more-party-thumb-1.png',
    description:
      "Got a tiny tot? Why not choose our Toddler Party (1-3 yrs) for playful fun, or our Peter Rabbit Party (3-5 yrs) for an enchanting storybook experience.",
    link: '/'
  },
  {
    id: 2,
    title: "magic & science",
    age: "(4-8 yrs)",
    thumb: './assets/images/more-party-thumb-2.png',
    description:
      "Not into Pirates? Try our Science, Superhero, Princess, or Unthemed parties for unforgettable party magic!",
    link: '/'
  },
  {
    id: 3,
    title: "disco parties",
    age: "(5-11 yrs)",
    thumb: './assets/images/more-party-thumb-3.png',
    description:
      "Love music or action-packed fun? Our Disco Party (5-11 years) with the optional UV upgrade, or thrilling Spy (7-11 years) and Challenge (8-11 years) parties are sure to entertain!",
    link: '/'
  },

]


const whychoosecf = [
  {
    thumb: './assets/images/whychoosecf-thumb-1.png',
    thumbBorder: 'border-warning',
    title: 'Entertain, Engage, Educate',
    description: 'We believe that learning should be fun! Through engaging performances and interactive games, we capture children’s attention while teaching valuable life skills, inspiring confidence, and sparking creativity.'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-about-2.png',
    thumbBorder: 'border-brand-secondary',
    title: 'Spreading Joy & Happiness',
    description: 'We love making people happy! We bring positive energy and excitement to every event, ensuring unforgettable experiences for kids, parents, schools and corporate events..'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-about-3.png',
    thumbBorder: 'border-success',
    title: 'Creative & Unique Experiences',
    description: 'Our events are filled with imaginative characters, interactive stories, and exciting games that make every party truly one-of-a-kind.'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-about-4.png',
    thumbBorder: 'border-orange',
    title: 'Stress-Free Event Planning',
    description: 'Planning a children’s event should be fun, not stressful. From booking to the big day, we handle every detail, so you can relax and enjoy the magic.'
  },
]



const becomeFranchise = [
  {
    thumb: './assets/images/whychoosecf-thumb-1.png',
    thumbBorder: 'border-brand',
    bgColor: 'before:bg-warning',
    titleColor:'text-brand',
    title: 'Complete Business Setup Support',
    description: 'Get your business running quickly and efficiently with expert guidance.'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-about-2.png',
    thumbBorder: 'border-warning',
    bgColor: 'before:bg-brand-secondary',
     titleColor:'text-warning',
    title: 'Step-by-Step Operations Manual',
    description: 'Your complete guide to running a successful franchise, covering every aspect of the business.'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-about-3.png',
    thumbBorder: 'border-warning',
      bgColor: 'before:bg-brand-secondary',
       titleColor:'text-warning',
    title: 'Personal Business Coaching',
    description: 'One-on-one coaching to develop your skills and grow your franchise.'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-about-4.png',
    thumbBorder: 'border-warning',
     bgColor: 'before:bg-brand',
      titleColor:'text-warning',
    title: 'Full, In-Depth Training',
    description: 'Receive hands-on training in performance, event management, and business operations.'
  },
]





// Why Choose Us
const whyChoose = [
  {title:'3,000+ Parties Delivered Every Year', description:'We’ve brought joy and laughter to thousands of children — and counting! Our experience means you’re in expert hands.'},
  {title:'2,000+ Glowing Reviews', description:'Parents, nurseries, and schools love us — and they’re not shy about saying so. Our happy customers are our biggest cheerleaders.'},
  {title:'Professionally Trained Performers', description:'Every performer is handpicked, trained, and bursting with energy — ready to turn your party into a magical memory.'},
  {title:'Fully DBS Checked', description:'Safety matters. Every team member is DBS-checked for your complete peace of mind'},
]

// Party Upgrades

const partyUpgrade = [
  {spark:'./assets/images/spark_green.svg',
    thumb:'./assets/images/party-upgrade-1.png', thumbSize:'max-w-60',
    title:'POPCORN & CANDYFLOSS',
    description:'Treat your guests to classic party snacks with freshly made popcorn, candy floss, or both! '
  },
  {spark:'./assets/images/spark_yellow.svg',
    thumb:'./assets/images/party-upgrade-2.png', thumbSize:'max-w-40',
    title:'balloon modelling',
    description:'Each child takes home a balloon dog, sword, or flower to remember the day!'
  },
  {spark:'./assets/images/spark_red.svg',
    thumb:'./assets/images/party-upgrade-3.png', thumbSize:'max-w-40',
    title:'FACE PAINTING',
    description:'Perfect for ages 3+, our talented face painters can create stunning full-face designs (up to 12 per hour) or quick, fun designs to cater for larger groups.'
  },
  {spark:'./assets/images/spark_blue.svg',
    thumb:'./assets/images/party-upgrade-4.png', thumbSize:'max-w-60',
    title:'SMOKE MACHINE & AIR ZOOKA',
    description:'Enhance the atmosphere with a cool haze and wow the crowd with smoke rings using the Air Zooka '
  },
]

// Its Easy
const itsEasy = [
  { step:'-rotate-10',
    title:'pick your party',
    description:'Choose from either our classic, premium or deluxe tailored party packages',
    icon:'./assets/images/iteasy-1.png'
  },
  {step:'rotate-10',
    title:'book in minutes',
    description:'Select your date, location and preferences online',
    icon:'./assets/images/iteasy-2.png'
  },
  {step:'-rotate-10',
    title:'Let us entertain you',
    description:'We show up early, bring the fun and handle everything',
    icon:'./assets/images/iteasy-3.png'
  },
]

// party packages

function piratePackage() {
  return {
    packages: [
      {cardBg:'bg-brand',
        character:'./assets/images/pirate-package-character-1.png',
        title:'Pirate PARTIES',
        description:'Get ready for an action-packed kids’ pirate party led by Pirate Polly or Pirate Pete, our very own swashbuckling entertainer! The children will dive into exciting pirate training, searching for a hidden treasure map and discovering the mermaid’s treasure. They’ll even meet a magical talking mermaid brought to life through a special drawing board! To finish the adventure, the children will summon their courage and walk the plank, earning their place as true pirates of the seven seas!',
        partyThumbnail:'./assets/images/pirate-package-thumb-1.png',
        partyIcon:'./assets/images/part-award-1.png',
        includeTitle:'CLASSIC includes',
        includes:[
          'Entertainer dressed as  Pirate Polly or Pirate Pete',
 'Pirate -themed magic tricks & games',
 'Music and speaker',
 'Bubble machine',
 'Captain Fantastic branded table and backdrop',
 'Suitable for up to 25 kids'
        ]

      },
      {cardBg:'bg-brand',
        character:'./assets/images/pirate-package-character-2.png',
        title:'Pirate PARTIES',
        description:'For a pirate party with an extra wow factor, we recommend our Premium option. Our Premium includes everything from the Classic, plus: a snow machine, a smoke machine (venue permitting) and a lighting bar to dazzle your guests. Since you’ll have a premium entertainer, there’s no limit to the number of little superheroes you can invite! Additionally, Captain Fantastic will amaze the crowd with a thrilling Premium Trick!',
        partyThumbnail:'./assets/images/pirate-package-thumb-2.png',
        partyIcon:'./assets/images/part-award-2.png',
        includeTitle:'PREMIUM includes',
        includes:[
          'All features from the Classic Party',
 'One of our most experienced entertainers ',
 'Snow and smoke machines',
 'Lighting bar',
 'Premium Trick',
 'No limit on number of children (under 50 recommended) '
        ]

      },
      {cardBg:'bg-brand',
        character:'./assets/images/pirate-package-character-3.png',
        title:'Pirate PARTIES',
        description:'For a pirate party with an extra wow factor, we recommend our Premium option. Our Premium includes everything from the Classic, plus: a snow machine, a smoke machine (venue permitting) and a lighting bar to dazzle your guests. Since you’ll have a premium entertainer, there’s no limit to the number of little superheroes you can invite! Additionally, Captain Fantastic will amaze the crowd with a thrilling Premium Trick!',
        partyThumbnail:'./assets/images/pirate-package-thumb-3.png',
        partyIcon:'./assets/images/part-award-3.png',
        includeTitle:'DELUXE includes',
        includes:[
          'All features from the Premium Party',
 'Hosted by a Deluxe Entertainer ',
 '(Company Owner) with over 5 years experience ',
 'and 50+ five star reviews',
 'Party creator and expert in all party types',
 'Top-of-the-range equipment'
        ]

      },
    ],
  };
}





// Galleries
// Pirates
function pirateGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-pirate-party-1.png',
      './assets/images/gallery-thumb-pirate-party-2.png',
      './assets/images/gallery-thumb-pirate-party-3.png',
      './assets/images/gallery-thumb-pirate-party-4.png',
    ],
  };
}
// Princess
function princessGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-princess-party-1.png',
      './assets/images/gallery-thumb-princess-party-2.png',
      './assets/images/gallery-thumb-princess-party-3.png',
      './assets/images/gallery-thumb-princess-party-4.png',
    ],
  };
}
// Science
function scienceGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-science-party-1.png',
      './assets/images/gallery-thumb-science-party-2.png',
      './assets/images/gallery-thumb-science-party-3.png',
      './assets/images/gallery-thumb-science-party-4.png',
    ],
  };
}
// Toddler
function toddlerGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-toddler-party-1.png',
      './assets/images/gallery-thumb-toddler-party-2.png',
      './assets/images/gallery-thumb-toddler-party-3.png',
      './assets/images/gallery-thumb-toddler-party-4.png',
    ],
  };
}
// Unthemed
function unthemedGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-unthemed-party-1.png',
      './assets/images/gallery-thumb-unthemed-party-2.png',
      './assets/images/gallery-thumb-unthemed-party-3.png',
      './assets/images/gallery-thumb-unthemed-party-4.png',
    ],
  };
}
// Disco
function discoGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-disco-party-1.png',
      './assets/images/gallery-thumb-disco-party-2.png',
      './assets/images/gallery-thumb-disco-party-3.png',
      './assets/images/gallery-thumb-disco-party-4.png',
    ],
  };
}
// Pick a Party
function pickpartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-pick-a-party-1.png',
      './assets/images/gallery-thumb-pick-a-party-2.png',
      './assets/images/gallery-thumb-pick-a-party-3.png',
      './assets/images/gallery-thumb-pick-a-party-4.png',
    ],
  };
}
// About us
function aboutusGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-aboutus-5.png',
      './assets/images/gallery-thumb-aboutus-6.png',
      './assets/images/gallery-thumb-aboutus-7.png',
      './assets/images/gallery-thumb-aboutus-8.png',
    ],
  };
}

// Film School
function filmschoolGallery() {
  return {
    gallery: [
      './assets/images/gallery-thumb-film-school-1.png',
      './assets/images/gallery-thumb-film-school-2.png',
      './assets/images/gallery-thumb-film-school-3.png',
      './assets/images/gallery-thumb-film-school-4.png',
    ],
  };
}
// Become an Entertainer
function becomeEntertainerGallery() {
  return {
    gallery: [
      './assets/images/gallery-be-thumb-1.png',
      './assets/images/gallery-be-thumb-2.png',
      './assets/images/gallery-be-thumb-3.png',
      './assets/images/gallery-be-thumb-4.png',
    ],
  };
}
// Become an Franchise
function becomeFranchiseGallery() {
  return {
    gallery: [
      './assets/images/gallery-bf-thumb-1.png',
      './assets/images/gallery-bf-thumb-2.png',
      './assets/images/gallery-bf-thumb-3.png',
      './assets/images/gallery-bf-thumb-4.png',
    ],
  };
}
// Unlimitted Party
function unlimittedPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-unlimitted-thumb-1.png',
      './assets/images/gallery-unlimitted-thumb-2.png',
      './assets/images/gallery-unlimitted-thumb-3.png',
      './assets/images/gallery-unlimitted-thumb-4.png',
    ],
  };
}

// graduation Party
function graduationPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-graduation-thumb-1.png',
      './assets/images/gallery-graduation-thumb-2.png',
      './assets/images/gallery-graduation-thumb-3.png',
      './assets/images/gallery-graduation-thumb-4.png',
    ],
  };
}

// christmas Party
function christmasPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-christmas-thumb-1.png',
      './assets/images/gallery-christmas-thumb-2.png',
      './assets/images/gallery-christmas-thumb-3.png',
      './assets/images/gallery-christmas-thumb-4.png',
    ],
  };
}
// easter Party
function easterPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-easter-thumb-1.png',
      './assets/images/gallery-easter-thumb-2.png',
      './assets/images/gallery-easter-thumb-3.png',
      './assets/images/gallery-easter-thumb-4.png',
    ],
  };
}

// nursery-entertainment Party
function nurseryEntertainmentPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-nursery-entertainment-thumb-1.png',
      './assets/images/gallery-nursery-entertainment-thumb-2.png',
      './assets/images/gallery-nursery-entertainment-thumb-3.png',
      './assets/images/gallery-nursery-entertainment-thumb-4.png',
    ],
  };
}

// freehalfhourintroductory Party
function freehalfhourintroductoryPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-freehalfhourintroductory-thumb-1.png',
      './assets/images/gallery-freehalfhourintroductory-thumb-2.png',
      './assets/images/gallery-freehalfhourintroductory-thumb-3.png',
      './assets/images/gallery-freehalfhourintroductory-thumb-4.png',
    ],
  };
}
// gallery-school-parties-thumb-1 Party
function schoolPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-school-parties-thumb-1.png',
      './assets/images/gallery-school-parties-thumb-2.png',
      './assets/images/gallery-school-parties-thumb-3.png',
      './assets/images/gallery-school-parties-thumb-4.png',
    ],
  };
}
// gallery-awareness-days-thumb-1 Party
function awarenessPartyGallery() {
  return {
    gallery: [
      './assets/images/gallery-awareness-days-thumb-1.png',
      './assets/images/gallery-awareness-days-thumb-2.png',
      './assets/images/gallery-awareness-days-thumb-3.png',
      './assets/images/gallery-awareness-days-thumb-4.png',
    ],
  };
}
// halloween Party
function halloweenShowsEventsGallery() {
  return {
    gallery: [
      './assets/images/gallery-halloween-shows-events-thumb-1.png',
      './assets/images/gallery-halloween-shows-events-thumb-2.png',
      './assets/images/gallery-halloween-shows-events-thumb-3.png',
      './assets/images/gallery-halloween-shows-events-thumb-4.png',
    ],
  };
}

// halloween Party
function seasonalEventsGallery() {
  return {
    gallery: [
      './assets/images/gallery-seasonal-events-thumb-1.png',
      './assets/images/gallery-seasonal-events-thumb-2.png',
      './assets/images/gallery-seasonal-events-thumb-3.png',
      './assets/images/gallery-seasonal-events-thumb-4.png',
    ],
  };
}

// Regional Sub
function regionalGallery() {
  return {
    gallery: [
      './assets/images/gallery-regional-sub-thumb-1.png',
      './assets/images/gallery-regional-sub-thumb-2.png',
      './assets/images/gallery-regional-sub-thumb-3.png',
      './assets/images/gallery-regional-sub-thumb-4.png',
    ],
  };
}

 