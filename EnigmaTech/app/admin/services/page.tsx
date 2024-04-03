
import BlogForm from '@/Components/Admin/Blog/BlogForm';
import ServiceForm from '@/Components/Admin/Service/ServiceForm';
interface Blog {
  id: number;
  title: string;
  description: string;
}

const  ServiceList: React.FC = async () => {

  return (
    <div> 
       
         <ServiceForm /></div>
  
  );
};

export default ServiceList;
