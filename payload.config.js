import { buildConfig } from 'payload/config';
import Categories from './Backend2/collections/Categories';
import Posts from './Backend2/collections/Posts';
import Tags from './Backend2/collections/Tags';
import Users from './Backend2/collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:5000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
  ],
});
