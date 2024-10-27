import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import {unified} from 'unified'

const postsDirectory = path.join(process.cwd(), '/data/blogs');

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = [];

  fileNames.forEach(async (fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const contentHtml = matterResult.content;

    // Combine the data with the slug
    posts.push({
      metadata: {
        slug,
        ...matterResult.data,
        date: new Date(matterResult.data.date),
      },
      content: contentHtml,
    });
  });

  // Sort posts by date
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
