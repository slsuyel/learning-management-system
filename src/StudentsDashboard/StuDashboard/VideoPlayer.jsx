import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';
const VideoPlayer = ({ video }) => {
    console.log(video);
    return (
        <div>
            <div>
                <h3 className='fs-4 mb-3 text-custom'><i className="fa-solid fa-circle-arrow-left"></i> {video.videoTitle}</h3>
            </div>
            <hr />
            <ShakaPlayer autoPlay={false} src={video.video} />
        </div>
    );
};

export default VideoPlayer;