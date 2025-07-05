import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getBlogPosts, Post } from '../api/blog.api';
import Navbar from '../components/navbar';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog - Stebin Sebastian</title>
        <meta name="description" content="Design thoughts and insights from Stebin Sebastian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cn("min-h-screen bg-gray-50 dark:bg-gray-900", inter.className)}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-slate-800 dark:bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Crumbs
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Like Hansel and Gretel leaving breadcrumbs through the forest.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This blog is a trail of small observations about design in the world around us. Each &ldquo;crumb&rdquo; marks a moment where thoughtful design, whether physical or digital, shaped my experience in a subtle yet meaningful way.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts List */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-16">
              {posts.map((post, index) => (
                <article key={post.slug} className="group relative">
                  {/* List Number */}
                  <div className="absolute -left-8 top-0 text-6xl font-bold text-gray-200 dark:text-gray-800 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ml-16">
                      {/* Cover Image */}
                      <div className="aspect-[16/9] bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <h2 className="text-white text-2xl md:text-3xl font-bold text-center leading-tight">
                            {post.title}
                          </h2>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        {/* Category */}
                        <div className="mb-4">
                          <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-4">
                          <span className="font-medium">{post.readTime}</span>
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getBlogPosts();

  return {
    props: {
      posts,
    },
  };
};