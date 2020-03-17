import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap'

const VideoDetail = (props) => {
    const video = props.video

    if (!video) {
        return (<div>
            <Spinner animation="border" role="status" style={{marginLeft: 280, marginTop: 40, width: 50, height: 50}}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>)
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
                <div></div>
            </div>

        </div>
    )
}

export default VideoDetail;