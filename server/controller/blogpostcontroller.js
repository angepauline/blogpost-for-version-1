import Userdata1 from "../model/blogpostmodel"
const blogs = [];
class Usercontroller1 {
    static blogpost = (req, res) => {
        const blogid = blogs.length + 1;
        let {
            title,
            content,
            Userid
           
        } = req.body;
        const timestamp=new Date(Date.now());

        const User = new Userdata1(blogid,title,content,timestamps,Userid);

        blogs.push(User);
        const data = blogs.find(User => (User.blogid === blogid));
        if(!data){
            return res.status(201).json({
                status: 201,
                message: "blog not created"
            })
            
        }
        return res.status(201).json({
            status: 201,
            message: "blog is successfully created",
            data
        })
    }
    static getAllBlog = (req, res) => {
        const data = blogs;
        return res.status(200).json({
            status: 200,
            message: "this is all blogs",
            data
        })


    }
    static getOneBlog = (req, res) => {
        const blogid = req.params.id;
        const data = blogs.find(User => (User.blogid === parseInt(blogid)));
        if(!data){
            return res.status(201).json({
                status: 201,
                message: "we don't have that blog "
            })
            
        }
        return res.status(201).json({
            status: 201,
            message: "you 've got one blog  ",
            data
        })


        
    
               }
               static deleteOneBlog = (req, res) => {
                const blogid = req.params.id;
                const dataindex = blogs.findIndex(User => User.blogid === parseInt(blogid));
                if(dataindex===-1){
                    return res.status(404).json({
                        status: 404,
                    message: "we can't delete what we don't have  "
                    })
                }
                const replace=blogs.splice(dataindex,1);
                return res.status(201).json({
                    status: 201,
                    message: "you have deleted your blog "
                })
                
            }
            static upDate = (req, res) => {
                const blogid = req.params.id;
                const dataindex = blogs.findIndex(User => User.blogid === parseInt(blogid));
                if(dataindex===-1){
                    return res.status(404).json({
                        status: 404,
                    message: "we don't yourblog "
                    })
                }
                let {
                    title,
                    content,
                    Userid
                   
                } = req.body;
                const timestamp=new Date(Date.now());
        
                const User = new Userdata1(blogid,title,content,timestamp,Userid);
               
                const data = blogs.find(User => (User.blogid === parseInt(blogid)));

                if(!data){
                    return res.status(417).json({
                        status: 417,
                        message: "impossible"
                    })
                    
                }
                 blogs[dataindex]=User;
                return res.status(200).json({
                    status: 200,
                    message: "updated ",
                    data
                })
        
        
                
            
                       

                
                


                
            }


    

}
export default Usercontroller1;