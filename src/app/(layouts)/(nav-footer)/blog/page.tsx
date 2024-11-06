import Container from '@/components/container';
import blogThumbnail from '../../../../data/debt-free-living-the-power-of-budgeting-and-saving.svg';
import Card from '@/components/card';
import IconLabel from '@/components/icon-label';
import {IconType} from '@/components/icon';
import {getSortedPostsData} from '../../../../lib/posts';
import moment from 'moment';

const Blog = async () => {
  const posts = await getSortedPostsData();

  return (
    <Container>
      <div className="flex flex-col gap-10 mb-10">
        <h1 className="text-40 font-bold">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-12">
          {posts.map(blogPost => (
            <Card key={blogPost.metadata.slug}>
              <Card.Image src={blogPost.metadata.thumbnail} loading="eager" />
              <Card.Title href={`/blog/${blogPost.metadata.slug}`}>{blogPost.metadata.title}</Card.Title>
              <Card.Description>{blogPost.metadata.summary}</Card.Description>
              <div className="flex justify-between flex-wrap gap-x-4 gap-y-1">
                <IconLabel icon={IconType.User} className="text-ash900">{blogPost.metadata.author}</IconLabel>
                <IconLabel icon={IconType.Calendar} className="text-ash900">{moment(blogPost.metadata.date).format('DD MMM YYYY')}</IconLabel>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blog;
