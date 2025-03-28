const desktopMenuTop = {
    rating: '5/5 (2,083 Reviews)',
    ratingIcon: '../assets/icons/star_rating.svg',
    googleIcon: '../assets/icons/google.svg',
    links: [
        { text: 'About Us', url: '/' },
        { text: 'Join Our Team', url: '/' },
        { text: 'Areas Covered', url: '/' },
        { text: 'Latest News', url: '/' }
    ],
    socialLinks: [
        { icon: '../assets/icons/fb.svg', alt: 'facebook', url: '/' },
        { icon: '../assets/icons/insta.svg', alt: 'instagram', url: '/' },
        { icon: '../assets/icons/youtube.svg', alt: 'youtube', url: '/' }
    ],
    phone: '0800 208 8899',
    phoneIcon: '../assets/icons/phone.svg'
}

const desktopMenu = {
    logo: '../assets/icons/logo.svg',
    logoUrl:'/',        
    booking:'prices and booking',
    bookingUrl:'/' ,
    menus:[
    { text: 'Schools & Nurseries', url: '/' },
    { text: 'Coorporate & Events', url: '/' },
    { text: 'Party Upgrades & Extras', url: '/' },    
]
}

const megaMenusList =  [
    {
        title: 'EARLY YEARS',
        age: '1-5 years',
        items: [
            { text: 'Toddler Parties', url: '/' },
            { text: 'Petter Rabbit', url: '/' },
            { text: 'All Pre School Parties', url: '/' }
        ]
    },
    {
        title: 'Superhero Parties',
        age: '4-8 years',
        items: [
            { text: 'Princess Parties', url: '/' },
            { text: 'Pirate Parties', url: '/' },
            { text: 'Unthemed Parties', url: '/' },
            { text: 'Science Parties', url: '/' },
            { text: 'All Magic & Science Parties', url: '/' }
        ]
    },
    {
        title: 'Disco & Game Parties',
        age: '5-11 years',
        items: [
            { text: 'Disco Parties', url: '/' },
            { text: 'Spy Parties', url: '/' },
            { text: 'Challenge Parties', url: '/' },
            { text: 'All Disco & Game Parties', url: '/' }
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

const menusMobile =  {
    logoIcon:'../assets/images/captain-fantastic-icon.svg',
    logoUrl:'/',
    booking:'prices and booking',
    bookingUrl:'/' ,
    phoneNum:'0800 208 8899',
    menus:[
        { text: 'Schools & Nurseries', url: '/' },
        { text: 'Corporate/Events', url: '/' },
        { text: 'Party UPGRADES & Extras', url: '/' },    
        { text: 'about us', url: '/' },    
        { text: 'areas covered', url: '/' },    
        { text: 'latest news', url: '/' },    
    ],
    megaMenuMobile: megaMenusList
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