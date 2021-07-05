import './Post.css'
import {MoreVert} from '@material-ui/icons'

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">name</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hi! the first post</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 peoples like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            9 comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}