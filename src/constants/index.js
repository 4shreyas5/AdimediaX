import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  framer1,
  tiktok,
  ig,
  linkedinv
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "How it works?",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Your Brand's Voice",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Testimonials",
    url: "#roadmap",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  { 
    image: logo2,
    index: "0",
    valuation: "12B"
  },
  { 
    image: logo6,
    index: "1",
    valuation: "3.1B"
  },
  { 
    image: logo4,
    index: "2",
    valuation: "97M"
  },
  { 
    image: logo3,
    index: "3",
    valuation: "500M"
  },
  { 
    image: logo5,
    index: "4",
    valuation: "17.6M"
  }
];


export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "You guys have an amazing editing team. Good Work.",
    text: "Team Deel",
    date: "October 2023",
    status: "done",
    imageUrl: logo2,
    colorful: true,
  },
  {
    id: "1",
    title: "Great Results on the FB Ads and SEO.",
    text: "Team BILT",
    date: "January 2024",
    status: "done",
    imageUrl: logo6,
    colorful: true,
  },
  // {
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "AdimediaX transforms your brand story into a content powerhouse with 60+ social media posts across all your channels";

export const collabContent = [
  {
    id: "0",
    title: "5500+ Video created",
   
  },
  {
    id: "1",
    title: "311M+ Views",
  },
  {
    id: "2",
    title: "1M hrs+ Watchtime",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Instagram",
    icon: ig,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "LinkedIn",
    icon: linkedinv,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "TikTok",
    icon: tiktok,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Launchpad",
    description: " Ideal for early-stage startups seeking to establish a strong online presence.",
    price: null,
    features: [
      "60+ social media posts per month",
      "Targeted Facebook & Google Ads campaign setup (with customized content)",
      "Basic on-page SEO optimization",
      "Founder personal brand development consultation (FREE)",
      "Reporting and analysis",
      "24x7 slack support"
    ],
  },
  {
    id: "1",
    title: "Ascend",
    description: "Designed for startups ready to accelerate their growth",
    price: "9.99",
    features: [
      "100+ social media posts per month",
      "Optimized Facebook & Google Ads campaigns (customized content)",
      "Comprehensive on-page & technical SEO audit",
      "Founder personal brand content creation and social media management",
      "Reporting and analysis",
      "24x7 slack support"
    ]
      
  },
  {
    id: "2",
    title: "Dominate",
    description: "For established startups poised for market leadership",
    price: null,
    features: [
      "200+ social media posts per month",
      "Advanced Facebook & Google Ads campaigns with A/B testing",
      "Ongoing SEO monitoring and optimization",
      "Dedicated founder personal brand management and content strategy",
      "Reporting and analysis",
      "24x7 slack support"
      
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Content Creation Powerhouse",
    text: "We collaborate with you to understand your brand voice and target audience. Our team crafts a captivating content calendar for key social media platforms. Engaging texts, posts, and videos fuel your online presence and establish thought leadership through content.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Targeted Audience Growth",
    text: "We create a strong social media presence through strategic management. Laser-focused Facebook & Google Ads campaigns bring your ideal customers straight to your doorstep. Data analysis is our secret weapon, optimizing campaigns for maximum reach and ROI. ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Building Your Founder's Brand",
    text: " We develop a compelling narrative that showcases the founder(s) as industry experts. Content specifically designed to elevate their personal brand strengthens your startup's credibility. Social media platforms become a launchpad for building a loyal founder following which in turn strengthens your brand reputation.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "SEO: The Traffic Magnet",
    text: "We fine-tune your website for search engines, boosting your ranking and attracting organic traffic. Content marketing strategies get visitors in with valuable information. A comprehensive technical SEO audit identifies areas for improvement, maximizing website efficiency.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Measurable Success",
    text: "We believe in results. Data-driven insights allow us to track progress and optimize campaigns. We ditch the business jargon and over communicate the results.  This means we constantly update you on the impact of our work, allowing you to celebrate your startup's growth trajectory in real-time.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "AdimediaX: It's Your Turn",
    text: "*Schedule a free consultation to discuss your specific goals and tailor AdimediaX to your needs. Let's ignite your startup's growth together. Launch your marketing efforts and watch your brand soar!",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },

];
