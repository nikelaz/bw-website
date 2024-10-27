import {getSortedPostsData} from '../../../../../lib/posts';
import IconLabel from '../../../../(components)/icon-label';
import {IconType} from '../../../../(components)/icon';
import moment from 'moment';
import Container from '../../../../(components)/container';
import Card from '../../../../(components)/card';
import styles from './blog-post.module.sass';
import {clsx} from 'clsx';

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map(post => ({ slug: post.metadata.slug }));
}

const BlogDetails = async (props: any) => {
  const posts = await getSortedPostsData();
  const post = posts.find(x => x.metadata.slug === props.params.slug);
  const date = moment(post.metadata.date);

  return (
    <Container hasCustomWidth={true} className="max-w-screen-lg flex flex-col gap-9">
      <h1 className="text-40 font-bold tracking-tight">{post.metadata.title}</h1>
      <div className="flex flex-wrap gap-x-7 gap-y-2">
        <IconLabel icon={IconType.User} className="text-ash900">{post.metadata.author}</IconLabel>
        <IconLabel icon={IconType.Calendar} className="text-ash900">{date.format('DD MMM YYYY')}</IconLabel>
      </div>
      <Card.Image src={post.metadata.featuredImage} loading="eager" />
      <div className={clsx(styles['blog-post'], 'flex flex-col gap-8')} dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
};

export default BlogDetails;

