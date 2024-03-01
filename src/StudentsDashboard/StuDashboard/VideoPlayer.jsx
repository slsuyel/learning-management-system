import { useNavigate } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';
const VideoPlayer = ({ video }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h3 className='fs-4 mb-3 text-custom'>
                    <i onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} className="fa-solid fa-circle-arrow-left"></i> {video.video_name}</h3>
            </div>
            <hr />
            <ShakaPlayer autoPlay={false} src={"https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761"} />
        </div>
    );
};

export default VideoPlayer;