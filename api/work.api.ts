import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const workDirectory = join(process.cwd(), '_work')

export function getWorkSlugs() {
  return fs.readdirSync(workDirectory)
}

export function getWorkBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(workDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: { [key: string]: any } = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllWork(fields: string[] = []) {
  const slugs = getWorkSlugs();
  const work = slugs
    .map((slug) => getWorkBySlug(slug, fields))
    // sort work by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return work
}
