import * as React from "react";
import * as ReactDOM from "react-dom/client";




function App() {
    const posts=[
        {
          id:1,
          title:"Lorem Ipsum is simply dummy text of the printing",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id:2,
          title:"Lorem Ipsum is simply dummy text of the printing",
          desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }
    ]
    return (
      <>
        <div className="menu">
            <div className="morePosts">
                 Some more posts you might like
            </div>
            <div className="posts">
                {posts.map((post)=>(
                    <div className="post">
                        <img src={post.img}/>
                        <div className="heading">{post.title}</div>
                        {/* <p>{post.desc}</p> */}
                        <button>Read More</button>
                    </div>
                ))}
            </div>
          
        </div>
      </>
    )
  }
  
  export default App
  