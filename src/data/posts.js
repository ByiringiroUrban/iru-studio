export const posts = [
  { 
    slug: 'passion-for-art', 
    title: 'Do you have a passion for art but don\'t know where to start?', 
    date: '2025-01-01', 
    excerpt: 'Explore our art classes and learn how to express yourself creatively through various artistic mediums and personalized instruction.',
    author: 'Frame & Tune Studio',
    img: '/assets/blog/art-passion.jpg',
    content: `
      <h2>Discover Your Artistic Journey</h2>
      <p>Explore our art classes and learn how to express yourself creatively through various artistic mediums. Whether you're a complete beginner or looking to refine your skills, our personalized approach ensures everyone finds their unique artistic voice.</p>
      
      <h3>Personalized Learning</h3>
      <p>We believe every artist is unique, which is why our classes are tailored to your individual learning style and pace. Our experienced instructors work closely with each student to develop their natural talents and overcome creative challenges.</p>
      
      <h3>Explore New Mediums</h3>
      <p>From traditional painting and drawing to digital art and mixed media, we offer a wide range of artistic mediums to explore. Discover what resonates with your creative spirit and develop skills across multiple disciplines.</p>
      
      <h3>Community & Exhibitions</h3>
      <p>Join a vibrant community of fellow artists and showcase your work in our regular exhibitions. Connect with like-minded creatives and gain confidence through peer support and constructive feedback.</p>
      
      <h3>Practical Workshops</h3>
      <p>Our hands-on workshops provide practical skills you can immediately apply to your artistic practice. Learn professional techniques from working artists and industry professionals who share their real-world experience.</p>
    ` 
  },
  { 
    slug: 'business-photography', 
    title: 'How to Make Your Business Stand Out with Professional Photography', 
    date: '2025-01-01', 
    excerpt: 'Professional photography elevates brand image and trust, helping businesses create compelling visual stories that connect with customers.',
    author: 'Frame & Tune Studio',
    img: '/assets/blog/business-photography.jpg',
    content: `
      <h2>Elevate Your Brand with Professional Photography</h2>
      <p>In the competitive world of business, standing out is crucial. Professional photography elevates your brand image and builds trust with potential customers, creating compelling visual stories that drive engagement and sales.</p>
      
      <h3>Corporate Headshots</h3>
      <p>Professional headshots establish credibility and personal connection with your audience. Whether for LinkedIn profiles, company websites, or marketing materials, quality headshots convey professionalism and approachability.</p>
      
      <h3>Product Photography Benefits</h3>
      <p>High-quality product photography showcases your offerings in the best light, literally and figuratively. Professional product shots increase online conversion rates and help customers make confident purchasing decisions.</p>
      
      <h3>Event Coverage for Brand Storytelling</h3>
      <p>Document your corporate events, product launches, and company milestones with professional photography. These images serve as powerful storytelling tools for marketing campaigns and company history.</p>
      
      <h3>Marketing Use Cases</h3>
      <p>Professional photographs provide versatile content for websites, social media, brochures, and advertising campaigns. Consistent, high-quality imagery reinforces brand identity across all marketing channels.</p>
    ` 
  },
  { 
    slug: 'art-home-decor', 
    title: 'Creative Ways to Incorporate Art into Your Home Decor', 
    date: '2025-01-01', 
    excerpt: 'From statement pieces to gallery walls — creative tips for transforming your living space with meaningful artwork and artistic elements.',
    author: 'Frame & Tune Studio',
    img: '/assets/blog/home-decor.jpg',
    content: `
      <h2>Transform Your Space with Artistic Elements</h2>
      <p>Art has the power to transform any living space, reflecting your personality while creating an atmosphere of creativity and inspiration. Here are five creative ways to incorporate art into your home decor.</p>
      
      <h3>Custom Art</h3>
      <p>Commission custom pieces that reflect your personal story and complement your interior design. Custom art ensures your space is truly unique and meaningful to you and your family.</p>
      
      <h3>Gallery Walls</h3>
      <p>Create dynamic gallery walls by mixing different sizes, styles, and mediums. Combine photographs, paintings, and prints to tell a visual story that evolves over time.</p>
      
      <h3>Art for Every Room</h3>
      <p>Don't limit art to living areas. Incorporate artwork in bedrooms, bathrooms, hallways, and even kitchens to create a cohesive artistic flow throughout your home.</p>
      
      <h3>Statement Pieces</h3>
      <p>Invest in one or two large statement pieces that serve as focal points in your main living areas. These conversation starters can define the aesthetic of an entire room.</p>
      
      <h3>Photography as Art</h3>
      <p>Display your own photography or invest in professional photographic prints. Photography brings real-world beauty and personal memories into your living space in an intimate way.</p>
    ` 
  },
  { 
    slug: 'power-of-photography', 
    title: 'The Power of Photography in Telling Your Brand Story', 
    date: '2025-01-01', 
    excerpt: 'Photography evokes emotion, authenticity and consistency, creating powerful visual narratives that connect brands with their audiences.',
    author: 'Frame & Tune Studio',
    img: '/assets/blog/brand-photography.jpg',
    content: `
      <h2>Visual Storytelling for Brand Success</h2>
      <p>Photography is one of the most powerful tools for brand storytelling. It evokes emotion, conveys authenticity, and creates visual consistency that helps brands connect deeply with their target audiences.</p>
      
      <h3>Evoke Emotion</h3>
      <p>Great brand photography captures and conveys emotion, creating an immediate connection between your brand and your audience. Emotional engagement drives loyalty and customer retention.</p>
      
      <h3>Authenticity</h3>
      <p>Authentic photography builds trust by showing the real people, processes, and values behind your brand. Customers connect with genuine stories and transparent business practices.</p>
      
      <h3>Visual Consistency</h3>
      <p>Consistent photographic style across all platforms reinforces brand recognition and professionalism. Develop a signature look that customers instantly associate with your brand.</p>
      
      <h3>Brand Storytelling Examples</h3>
      <p>From behind-the-scenes process shots to customer success stories, photography documents your brand journey and creates compelling narratives that resonate with your audience across all marketing channels.</p>
    ` 
  }
];

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};