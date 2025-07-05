import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  category: string;
  readTime: string;
  content?: string;
};

export function getBlogPosts(): Post[] {
  const fields = [
    'slug',
    'title',
    'excerpt',
    'coverImage',
    'date',
    'author',
    'ogImage',
    'category',
    'readTime'
  ];
  const posts = getAllPosts(fields);
  return posts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author as unknown as { name: string; picture: string },
    ogImage: post.ogImage as unknown as { url: string },
    category: post.category,
    readTime: post.readTime
  }));
}

export function getBlogPost(slug: string): Post {
  const fields = [
    'slug',
    'title',
    'excerpt',
    'coverImage',
    'date',
    'author',
    'ogImage',
    'category',
    'readTime',
    'content'
  ];
  const post = getPostBySlug(slug, fields);
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author as unknown as { name: string; picture: string },
    ogImage: post.ogImage as unknown as { url: string },
    category: post.category,
    readTime: post.readTime,
    content: post.content
  };
}