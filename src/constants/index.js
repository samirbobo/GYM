import {
  workout,
  yoga,
  bicycle,
  biceps,
  fitness,
  runner,
} from "../assets/icons";

const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contacts", href: "#contact" },
];

const fitnessOptions = [
  {
    icon: workout,
    name: "Weight Loss",
    desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
  },
  {
    icon: yoga,
    name: "Classic Yoga",
    desc: 'The term "yoga" in the Western world often denotes a modern form of Hath yoga and a posture-based physical fitness, stress-relief.',
  },
  {
    icon: bicycle,
    name: "Cycling",
    desc: "Cycling, also, when on a two-wheeled bicycle, called bicycling or biking, is the use of cycles for transport, recreation, exercise or sport.",
  },
  {
    icon: biceps,
    name: "Body Building",
    desc: "Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes.",
  },
  {
    icon: fitness,
    name: "Musculation",
    desc: "Weight training is a common type of strength training for developing the strength, size of skeletal muscles and maintenance of strength.",
  },
  {
    icon: runner,
    name: "Fitness Running",
    desc: "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot.",
  },
];

const footerLinks = [
  {
    header: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "/" },
      { label: "Blogs", href: "/" },
    ],
  },
  {
    header: "Contact",
    links: [
      { label: "Help \\FAQ", href: "/" },
      { label: "Press", href: "/" },
    ],
  },
  {
    header: "More",
    links: [
      { label: "Program", href: "/" },
      { label: "Plan", href: "/" },
      { label: "Method", href: "/" },
    ],
  },
  {
    header: "Popular Tags",
    links: [
      { label: "Abs", href: "/" },
      { label: "Workout", href: "/" },
      { label: "Nutrition", href: "/" },
      { label: "Boxing", href: "/" },
      { label: "Gym", href: "/" },
      { label: "Facilities", href: "/" },
      { label: "Plan", href: "/" },
      { label: "Trainers", href: "/" },
    ],
  },
];

export { navLinks, fitnessOptions, footerLinks };
