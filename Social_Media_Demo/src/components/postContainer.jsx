import Post from "./Post";
import style from "./PostContainerCss.module.css";

const PostContainer = () =>{
 return <div className={style.postContainerFlex}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
 </div>
}

export default PostContainer;