import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './Profile.css'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;    
    const [user, setUser] = useState({});
    const username = useParams().username;
    

    useEffect(() => {
        const fetchUser = async () =>{
            const response = await axios.get(`/users?username=${username}`);
            setUser(response.data)
        };
        fetchUser();
    },[])

    return (        
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || PF + "person/noCover.png"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture || PF + "person/noAvatar.png"} alt="" className="profileUserImg" />
                        </div>                        
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <h4 className="profileInfoDesc">{user.desc}</h4>
                    </div>
                    <div className="profileRightBottom">                            
                        <Feed username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
