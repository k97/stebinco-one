import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getBlogPost, getBlogPosts, Post } from '../../api/blog.api';
import Navbar from '../../components/navbar';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import markdownToHtml from '../../api/markdowntohtml.api';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Stebin Sebastian</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.ogImage.url} />
        <meta property="og:type" content="article" />
      </Head>

      <main className={cn("min-h-screen bg-gray-50 dark:bg-gray-900", inter.className)}>
        <Navbar />
        
        {/* Back Button */}
        <div className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <article className="pb-16">
          <div className="max-w-4xl mx-auto px-4">
            {/* Cover */}
            <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden rounded-2xl mb-8">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Meta Information */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Image 
                  src={post.author.picture} 
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
              <article 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h3:text-xl prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-orange-400 prose-strong:font-bold prose-code:bg-gray-100 dark:prose-code:bg-gray-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50 dark:prose-blockquote:bg-orange-900/20"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </div>

            {/* Back to Blog Link */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};