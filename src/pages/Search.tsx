import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { posts } from '@/data/posts';
import { products } from '@/data/products.js';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Search = () => {
  const query = useQuery();
  const q = (query.get('q') || '').toLowerCase();

  const results = useMemo(() => {
    if (!q) return [] as { type: string; title: string; link: string }[];
    const fromPosts = posts
      .filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
      .map(p => ({ type: 'Post', title: p.title, link: `/insights/${p.slug}` }));
    const fromProducts = (products || [])
      .filter(p => p.name?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q))
      .map(p => ({ type: 'Product', title: p.name, link: '/services' }));
    return [...fromPosts, ...fromProducts];
  }, [q]);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.h1 className="text-3xl font-bold text-studio-navy" variants={fadeInUp} initial="hidden" animate="visible">
            Search
          </motion.h1>
          <div className="text-gray-600 mt-1">{q ? `Results for "${q}"` : 'Enter a search term.'}</div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        {q && (
          <motion.div variants={staggerContainer(0.06)} initial="hidden" animate="visible" className="space-y-3">
            {results.length === 0 && (
              <div className="text-gray-600">No results found.</div>
            )}
            {results.map((r, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white rounded-xl p-4 shadow-card">
                <div className="text-xs text-gray-400">{r.type}</div>
                <Link to={r.link} className="text-studio-navy font-semibold hover:text-primary">
                  {r.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Search;


