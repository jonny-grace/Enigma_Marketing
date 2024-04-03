import { BlogT } from "@/type";



export async function getAllBlogs(): Promise<BlogT[]> {
  try {
    const res = await fetch('http://localhost:3000/blogs');
    if (!res.ok) {
      throw new Error(`Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch blogssssssssssssssssssssssssssssssssss:", error);
    throw error; // Re-throw to handle it in the calling code if necessary
  }
}

  export async function getBlogById(blogId:string): Promise<BlogT> {


    const res = await fetch(`http://localhost:3000/blogs/${blogId}`)
    return res.json()
  }

 export async function addNewBlog(newBlog: Omit<BlogT, '_id'>) {
  
    const response = await fetch('http://localhost:3000/blogs', {
      method: 'POST',
      body: JSON.stringify(newBlog),
      headers: {
        'Content-Type': 'application/json'
      },
      
    });
    return response.json()
    
    // Reset form or navigate to another page
  
 }