import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import MqPlayBox from './playBox.jsx';

import mqPlayerIcon from './mq-player.png';
import styles from './index.css';

export default class MqPlayerComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {showPlayBox: false};
    }

    handOnClick (e) {
        this.setState({showPlayBox: true});
    }

    render () {
        const {
            active,
            className,
            title
        } = this.props;
        return (
            <div>
                <img
                    className={classNames(
                        className,
                        styles.mqPlayer,
                        {
                            [styles.isActive]: active
                        }
                    )}
                    draggable={false}
                    src={mqPlayerIcon}
                    title={title}
                    onClick={this.handOnClick.bind(this)}
                />
                <MqPlayBox isOpen={this.state.showPlayBox} />
            </div>
        );
    }
}

// MqPlayerComponent.
// MqPlayerComponent.propTypes = {
//     active: PropTypes.bool,
//     className: PropTypes.string,
//     // onClick: PropTypes.func.isRequired,
//     title: PropTypes.string
// };
// MqPlayerComponent.defaultProps = {
//     active: false,
//     title: 'Play!'
// };
// export default MqPlayerComponent;
