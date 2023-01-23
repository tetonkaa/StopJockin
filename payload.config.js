import { buildConfig } from 'payload/config';
import Categories from './Backend/collections/Categories';
import Posts from './Backend/collections/Posts';
import Tags from './Backend/collections/Tags';
import Users from './Backend/collections/Users';

export default buildConfig({
  serverURL: 'https://stopjockinbackend.herokuapp.com',
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
