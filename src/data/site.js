// ============================================================
//  EDIT THIS FILE. Everything on the website comes from here.
//  Change the words between the quotes, save, and the site updates.
// ============================================================

export const site = {
  name: "Chibuike Akunasha",              // your full name
  initials: "AC",                 // shown in the round logo
  role: "Web developer in Nigeria",
  email: "akunashachibuike0@gmail.com",
  whatsapp: "2348086987293",      // country code first, no plus sign, no spaces
  phoneDisplay: "+234 808 698 7293",
  github: "https://github.com/ugocity04-create",
  tiktok: "",                     // paste your TikTok link, or leave empty to hide it
  replyTime: "within a day",      // "Replies ..." in the hero
  firstPreview: "5 to 7 days",    // how soon a client sees a first version
  showOffer: true,                // true shows the free-website banner, false hides it
  freeSlots: 3,                   // how many free websites you are offering
};

// Opens WhatsApp with a message already typed
export function whatsappLink(text) {
  return "https://wa.me/" + site.whatsapp + "?text=" + encodeURIComponent(text);
}

// ------------------------------------------------------------
//  YOUR PROJECTS
//  shot: a screenshot of the live site, saved in public/images/
//  live / code: leave "" to hide that button
// ------------------------------------------------------------
export const projects = [
  {
    id: "coil-crown",
    name: "Coil & Crown",
    kind: "Salon booking website",
    accent: "#4a1942",
    accent2: "#e8b4c8",
    shot: "images/shot-coil-crown.jpg",
    live: "https://ugocity04-create.github.io/Coil-Crown/",
    code: "https://github.com/ugocity04-create/Coil-Crown",
    problem:
      "Salons lose clients to missed WhatsApp messages and double bookings. This site lets a client pick a style, a day and a time, and only offers times that are really free.",
    highlights: [
      "Live availability that stops double bookings, even when two people book at the same moment",
      "Clients can cancel online with their reference number, up to 24 hours before",
      "A private dashboard for the owner to see, cancel and mark appointments as done",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python (Flask)", "SQLite"],
  },
  {
    id: "hearth-key",
    name: "Hearth & Key",
    kind: "Real estate listings website",
    accent: "#0f2a44",
    accent2: "#b8893b",
    shot: "images/shot-hearth-key.jpg",
    live: "https://ugocity04-create.github.io/health-and-key/",
    code: "https://github.com/ugocity04-create/health-and-key",
    problem:
      "People looking for a home want to compare properties quickly on their phone. This site lets them search, filter and save properties, then message the agent in one tap.",
    highlights: [
      "Search and filters by city, type, price and bedrooms, with links you can share",
      "Photo gallery for every property, and saved favourites that stay on your phone",
      "WhatsApp enquiry button with the property already written in the message",
    ],
    tech: ["React", "Vite", "React Router", "CSS"],
  },
  {
    id: "ember-pepper",
    name: "Ember & Pepper",
    kind: "Restaurant ordering website",
    accent: "#b7410e",
    accent2: "#f4c27a",
    shot: "images/shot-ember-pepper.jpg",
    live: "https://ugocity04-create.github.io/Rest/",
    code: "https://github.com/ugocity04-create/Rest",
    problem:
      "Restaurants often take orders by voice note and then forget what was said. This site shows the menu with photos, lets customers build their order, and sends it to WhatsApp in one tap.",
    highlights: [
      "Menu with photos and prices, and a basket that adds up the total",
      "The full order arrives on WhatsApp, neatly written, ready to cook",
      "Opening hours shown in Lagos time, so customers know if you are open",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

// ------------------------------------------------------------
//  WHAT YOU OFFER
//  price: write something like "From ₦150,000", or leave "" to hide it
// ------------------------------------------------------------
export const services = [
  {
    icon: "globe",
    title: "Business website",
    text: "A fast, good-looking website that tells people what you do, shows your work and makes it easy to contact you.",
    price: "",
  },
  {
    icon: "calendar",
    title: "Booking and ordering",
    text: "Customers book or order online and you get it on WhatsApp or a simple dashboard. Built with a real database, so nothing gets booked twice.",
    price: "",
  },
  {
    icon: "grid",
    title: "Listings and catalogues",
    text: "Show your properties, products or menu with photos, search and filters, so customers find what they want fast.",
    price: "",
  },
  {
    icon: "wrench",
    title: "Fix or redesign",
    text: "Already have a website that is slow, outdated or hard to use on a phone? I will make it quick, modern and easy to use.",
    price: "",
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "You will see a first version in about " + site.firstPreview + ". Then we make changes together until you are happy. Bigger projects, like bookings with a database, take a little longer and I will tell you how long before we start.",
  },
  {
    q: "What do you need from me?",
    a: "Your business name, a few photos, what you offer, your prices and your contact details. No logo? No problem, I will help you choose clean colours and lettering.",
  },
  {
    q: "Do I have to pay for hosting?",
    a: "Simple websites can be hosted for free. You only pay for a domain name, like yourbusiness.com or yourbusiness.ng, if you want your own web address. Sites with a database need small hosting, and I will explain the cost before we start.",
  },
  {
    q: "Will it work on phones?",
    a: "Yes. Most of your customers will find you on a phone, so I design for phones first and then make it look great on bigger screens too.",
  },
  {
    q: "Can I change things later?",
    a: "Yes. I can make changes for you.",
  },
  {
    q: "How do we agree the price?",
    a: "After you tell me what you need, I send you what is included, the price and the timeline. You say yes only when it all makes sense, so there are no surprises.",
  },
];
