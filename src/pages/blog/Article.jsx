import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import AdPlaceholder from '../../components/AdPlaceholder';

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = articles.find(a => a.id === id);
    setArticle(found);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return null;
  if (!article) return <Navigate to="/blog" />;

  return (
    <>
      <Helmet>
        <title>{article.title} | CalcHub Blog</title>
        <meta name="description" content={article.summary} />
      </Helmet>

      <div className="calc-page-layout">
        <div className="calc-main">
          
          <Link to="/blog" style={{ color: 'var(--text-secondary)', display: 'inline-block', marginBottom: '1rem', fontWeight: '500' }}>
            ← Back to Articles
          </Link>

          <article className="glass-panel" style={{ padding: '3rem' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {article.category}
            </div>
            <h1 className="h1" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{article.title}</h1>
            <div style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-color)' }}>
              Published on {article.date} • By {article.author}
            </div>

            <div 
              className="article-content"
              style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)' }}
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </article>

        </div>

        <aside className="calc-sidebar-content">
          <AdPlaceholder type="rectangle" />
          <AdPlaceholder type="rectangle" height="600px" />
        </aside>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .article-content h3 {
          font-size: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .article-content p {
          margin-bottom: 1.5rem;
        }
        .article-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        .article-content li {
          margin-bottom: 0.5rem;
        }
        .article-content code {
          background: rgba(15, 23, 42, 0.1);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: monospace;
        }
      `}} />
    </>
  );
}
