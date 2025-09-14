export const products = [
  // Frames
  { 
    id: 'queen', 
    slug: 'queen-frame', 
    name: 'Queen', 
    price: 'Fr 7,000,000', 
    category: 'frame', 
    img: '/assets/frames/queen.jpg', 
    desc: 'Handcrafted queen frame with exquisite detail and premium materials.' 
  },
  { 
    id: 'bob-marley', 
    slug: 'bob-marley', 
    name: 'Bob Marley', 
    price: 'Fr 10,000,000', 
    category: 'frame', 
    img: '/assets/frames/bob.jpg', 
    desc: 'Bob Marley inspired framed art piece, celebrating reggae culture and artistic expression.' 
  },
  { 
    id: 'forest', 
    slug: 'forest-frame', 
    name: 'Forest', 
    price: 'Fr 8,000,000', 
    category: 'frame', 
    img: '/assets/frames/forest.jpg', 
    desc: 'Forest themed frame bringing nature\'s beauty into your living space.' 
  },
  { 
    id: 'heart', 
    slug: 'heart-frame', 
    name: 'Heart', 
    price: 'Fr 5,000,000', 
    category: 'frame', 
    img: '/assets/frames/heart.jpg', 
    desc: 'Heart frame perfect for romantic memories and special moments.' 
  },
  
  // Statues
  { 
    id: 'lord-mary', 
    slug: 'lord-mary', 
    name: 'Lord Mary', 
    price: 'Fr 200,000', 
    category: 'statue', 
    img: '/assets/statues/lordmary.jpg', 
    desc: 'Handcrafted statue - Lord Mary. A beautiful spiritual art piece crafted with attention to detail.' 
  },
  { 
    id: 'peace', 
    slug: 'peace-statue', 
    name: 'Peace', 
    price: 'Fr 50,000', 
    category: 'statue', 
    img: '/assets/statues/peace.jpg', 
    desc: 'Peace statue symbolizing harmony and tranquility in your space.' 
  },
  { 
    id: 'traditional-fetching', 
    slug: 'traditional-fetching-water', 
    name: 'Traditional Fetching of Water', 
    price: 'Fr 75,000', 
    category: 'statue', 
    img: '/assets/statues/traditional.jpg', 
    desc: 'Traditional water fetching statue celebrating Rwandan heritage and culture.' 
  },
  { 
    id: 'mothers-love', 
    slug: 'mothers-love', 
    name: "Mother's Love", 
    price: 'Fr 100,000', 
    category: 'statue', 
    img: '/assets/statues/mothers.jpg', 
    desc: "Mother's Love statue capturing the eternal bond between mother and child." 
  },
  { 
    id: 'dancer', 
    slug: 'dancer-statue', 
    name: 'Dancer', 
    price: 'Fr 85,000', 
    category: 'statue', 
    img: '/assets/statues/dancer.jpg', 
    desc: 'Dancer statue embodying movement, grace, and artistic expression.' 
  },
  { 
    id: 'family', 
    slug: 'family-statue', 
    name: 'Family', 
    price: 'Fr 150,000', 
    category: 'statue', 
    img: '/assets/statues/family.jpg', 
    desc: 'Family statue representing unity, love, and togetherness.' 
  }
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};