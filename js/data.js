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
      { text: 'Easter', url: '/' },
      { text: 'Graduation', url: '/' },
      { text: 'Halloween', url: '/' },
      { text: 'Christmas', url: '/' }
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
      { text: 'Ultimate', url: '/' },
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
    thumb: './assets/images/whychoosecf-thumb-2.png',
    thumbBorder: 'border-brand-secondary',
    title: 'Spreading Joy & Happiness',
    description: 'We love making people happy! We bring positive energy and excitement to every event, ensuring unforgettable experiences for kids, parents, schools and corporate events..'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-3.png',
    thumbBorder: 'border-success',
    title: 'Creative & Unique Experiences',
    description: 'Our events are filled with imaginative characters, interactive stories, and exciting games that make every party truly one-of-a-kind.'
  },
  {
    thumb: './assets/images/whychoosecf-thumb-4.png',
    thumbBorder: 'border-orange',
    title: 'Stress-Free Event Planning',
    description: 'Planning a children’s event should be fun, not stressful. From booking to the big day, we handle every detail, so you can relax and enjoy the magic.'
  },
]



// Why Choose Us
const whyChoose = [
  {title:'3,000+ Parties Delivered Every Year', description:'We’ve brought joy and laughter to thousands of children — and counting! Our experience means you’re in expert hands.'},
  {title:'2,000+ Glowing Reviews', description:'Parents, nurseries, and schools love us — and they’re not shy about saying so. Our happy customers are our biggest cheerleaders.'},
  {title:'Professionally Trained Performers', description:'Every performer is handpicked, trained, and bursting with energy — ready to turn your party into a magical memory.'},
  {title:'Fully DBS Checked', description:'Safety matters. Every team member is DBS-checked for your complete peace of mind'},
]



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
      './assets/images/gallery-thumb-aboutus-1.png',
      './assets/images/gallery-thumb-aboutus-2.png',
      './assets/images/gallery-thumb-aboutus-3.png',
      './assets/images/gallery-thumb-aboutus-4.png',
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
