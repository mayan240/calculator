import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import AdPlaceholder from '../../components/AdPlaceholder';

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Articles & Guides | CalcHub</title>
        <meta name="description" content="Read our latest articles on mathematics, personal finance, and computer science. Master calculations with CalcHub." />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          
          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(59,130,246,0.1) 100%)' }}>
            <h1 className="h1" style={{ marginBottom: '1rem' }}>Articles & Guides</h1>
            <p className="text-body" style={{ fontSize: '1.1rem' }}>
              Deep dive into the math behind the calculators. Learn personal finance tricks, programming shortcuts, and academic hacks.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {articles.map((article) => (
              <Link to={`/blog/${article.id}`} key={article.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s', textDecoration: 'none' }}>
                <div style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {article.category}
                </div>
                <h2 className="h2" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{article.title}</h2>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  {article.date} • By {article.author}
                </div>
                <p className="text-body" style={{ marginTop: '0.5rem' }}>
                  {article.summary}
                </p>
                <div style={{ marginTop: '0.5rem', color: 'var(--primary)', fontWeight: '500' }}>
                  Read Article →
                </div>
              </Link>
            ))}
          </div>

        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
          <AdPlaceholder type="rectangle" height="600px" />
        </aside>
      </div>
    </>
  );
}
