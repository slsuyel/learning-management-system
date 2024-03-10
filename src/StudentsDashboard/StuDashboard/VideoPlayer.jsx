import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';
import BackBtn from '../../components/ui/BackBtn';
import { callApi } from '../../utilities/functions';
const VideoPlayer = ({ video }) => {


    return (
        <div>
            <div>
                <h3 className='fs-4 mb-3 text-custom'>
                    <BackBtn /> {video.video_name}</h3>
            </div>
            <hr />

            <ShakaPlayer autoPlay={true} src={video.video_url} />

        </div>
    );
};

export default VideoPlayer;

// import React, { useEffect, useState } from 'react';
// import ShakaPlayer from 'shaka-player-react';
// import 'shaka-player-react/dist/controls.css';
// import BackBtn from '../../components/ui/BackBtn';
// import { callApi } from '../../utilities/functions';

// const VideoPlayer = ({ video }) => {
//     const [videoData, setVideoData] = useState(null);

//     useEffect(() => {
//         const fetchVideo = async () => {
//             try {
//                 const res = await callApi('post', video.video_url, [], {}, false);
//                 setVideoData(res);
//             } catch (error) {
//                 console.error('Error fetching video:', error);
//             }
//         };

//         fetchVideo();
//         return () => {

//         };
//     }, [video.video_url]);
//     console.log(videoData);
//     return (
//         <div>
//             <div>
//                 <h3 className='fs-4 mb-3 text-custom'>
//                     <BackBtn /> {video.video_name}</h3>
//             </div>
//             <hr />

//             {video && <ShakaPlayer autoPlay={false} src={video.video_url} />}
//         </div>
//     );
// };

// export default VideoPlayer;
