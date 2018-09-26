import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import config from '../../config';
// import videojs from 'video.js';

// see https://segmentfault.com/a/1190000007603266
// import SWF_PATH from 'video.js/dist/video-js.swf';
// videojs.options.flash.swf = SWF_PATH;

// import 'video.js/dist/video-js.css';
import styles from './index.css';

export default class MyComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isOpen: true}; // props.showPlayBox }
    }

    componentDidMount () {
        if (this.state.isOpen&&this.player) {
            this.player.play();
        }
    }

    componentWillReceiveProps (props) {
        if (props.isOpen) {
            this.player.play();
        }
        this.setState({isOpen: props.isOpen});
    }
    // destroy player on unmount
    // componentWillUnmount () {
    //     if (this.player) {
    //         if (this.player && this.player.dispose) {
    //             this.player.dispose();
    //         }
    //     }
    // }

    handVideoClick () {
        if (this.player.paused) return this.player.play();
        this.player.pause();
    }

    show () {
        this.setState({isOpen: true});
    }

    hide () {
        this.player.pause();
        this.isPlay = false;
        this.setState({isOpen: false});
    }

    render () {
        const isOpen = this.state.isOpen;
        const id = window.location.hash.substring(1);
        const url = id ? `${config.services.lessonService}/${id}/video.mp4` : 'http://cdn.codingmarch.com/statics/video/trylesson.mp4';
        // const url = id ? `${config.services.lessonService}/${id}/video.mp4` : 'http://www.codingmarch.com/statics/video/trylesson.mp4';
        return (
            <div className={isOpen ? styles.mqModalOverlay : styles.mqModalOverlayHidden}>
                <div className={styles.mqModalContent}>
                    <div
                        className={styles.modalClose}
                        onClick={() => this.hide()}
                    >X</div>
                    <video
                        src={url}
                        controls
                        onClick={this.handVideoClick.bind(this)}
                        ref={node => this.player = node}
                        className={styles.mqVideo}
                    >
                        your browser does not support the video tag
                    </video>
                </div>
            </div>
        );
    }
}
