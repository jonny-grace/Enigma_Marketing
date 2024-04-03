
import AddBlogForm from '@/Components/Admin/Blog/AddBlogForm';
import BlogForm from '@/Components/Admin/Blog/BlogForm';
import { getAllBlogs } from '@/services/blogs';

interface Blog {
  id: number;
  title: string;
  description: string;
}

const  BlogList: React.FC = async () => {
  const blogs =await getAllBlogs();
  console.log(blogs)


  return (
    <div> 
       
         {/* <BlogForm /> */}
         </div>
  
  );
};

export default BlogList;
