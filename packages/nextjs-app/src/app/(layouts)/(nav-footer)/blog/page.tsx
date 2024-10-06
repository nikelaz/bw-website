import Container from '../../../(components)/container';

type GenericChildrenProps = Readonly<{
  children: React.ReactNode,
}>;

const Card = (props: GenericChildrenProps) => (
  <div>{props.children}</div>
);

Card.Title = (props: GenericChildrenProps) => (
  <div>{props.children}</div>
);

Card.Description = (props: GenericChildrenProps) => (
  <div>{props.children}</div>
);

type IconLabelProps = Readonly<{
  children: React.ReactNode,
  icon: string,
}>;

const IconLabel = (props: IconLabelProps) => (
  <div>{props.children}</div>
);

const Blog = () => (
  <Container>
    <div className="flex flex-col gap-4">
      <h1 className="text-40 font-bold">Blog</h1>
      <div className="grid grid-cols-2 gap-8">
        <Card>
          <Card.Title href="/404">Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card>
      </div>
    </div>
  </Container>
);

export default Blog;
