import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import VM from 'scratch-vm';
import AudioEngine from 'scratch-audio';

import analytics from '../lib/analytics';
import LibraryComponent from '../components/library/library.jsx';

import soundIcon from '../components/asset-panel/icon--sound.svg';

import config from '../config.js';
import soundLibraryContent from '../lib/libraries/sounds.json';
import soundTags from '../lib/libraries/sound-tags';

const messages = defineMessages({
    libraryTitle: {
        defaultMessage: '声音库',
        description: 'Heading for the sound library',
        id: 'gui.soundLibrary.chooseASound'
    }
});

class SoundLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelected',
            'handleItemMouseEnter',
            'handleItemMouseLeave'
        ]);
        this.state = {sounds: []};
    }
    componentWillMount () {
        const id = window.location.hash.substring(1);
        if (!id) return this.setState({sounds: soundLibraryContent});
        fetch(`${config.services.lessonService}/${id}/sound.json`)
            .then(res => res.json())
            .then(content => {
                this.setState({sounds: content});
            });
    }
    componentDidMount () {
        this.audioEngine = new AudioEngine();
        this.player = this.audioEngine.createPlayer();
    }
    componentWillUnmount () {
        this.player.stopAllSounds();
    }
    handleItemMouseEnter (soundItem) {
        const md5ext = soundItem._md5;
        const idParts = md5ext.split('.');
        const md5 = idParts[0];
        const vm = this.props.vm;
        vm.runtime.storage.load(vm.runtime.storage.AssetType.Sound, md5)
            .then(soundAsset => {
                const sound = {
                    md5: md5ext,
                    name: soundItem.name,
                    format: soundItem.format,
                    data: soundAsset.data
                };
                return this.audioEngine.decodeSound(sound);
            })
            .then(soundId => {
                this.player.playSound(soundId);
            });
    }
    handleItemMouseLeave () {
        this.player.stopAllSounds();
    }
    handleItemSelected (soundItem) {
        const vmSound = {
            format: soundItem.format,
            md5: soundItem._md5,
            rate: soundItem.rate,
            sampleCount: soundItem.sampleCount,
            name: soundItem.name
        };
        this.props.vm.addSound(vmSound).then(() => {
            this.props.onNewSound();
        });
        analytics.event({
            category: 'library',
            action: 'Select Sound',
            label: soundItem.name
        });
    }
    render () {
        // @todo need to use this hack to avoid library using md5 for image
        const soundLibraryThumbnailData = this.state.sounds.map(sound => {
            const {
                md5,
                ...otherData
            } = sound;
            return {
                _md5: md5,
                rawURL: soundIcon,
                ...otherData
            };
        });

        return (
            <LibraryComponent
                data={soundLibraryThumbnailData}
                id="soundLibrary"
                tags={soundTags}
                title={this.props.intl.formatMessage(messages.libraryTitle)}
                onItemMouseEnter={this.handleItemMouseEnter}
                onItemMouseLeave={this.handleItemMouseLeave}
                onItemSelected={this.handleItemSelected}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

SoundLibrary.propTypes = {
    intl: intlShape.isRequired,
    onNewSound: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default injectIntl(SoundLibrary);
