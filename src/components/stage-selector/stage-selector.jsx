import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, intlShape, injectIntl, FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import ActionMenu from '../action-menu/action-menu.jsx';
import styles from './stage-selector.css';

import backdropIcon from '../action-menu/icon--backdrop.svg';
import fileUploadIcon from '../action-menu/icon--file-upload.svg';
import paintIcon from '../action-menu/icon--paint.svg';
import surpriseIcon from '../action-menu/icon--surprise.svg';
import searchIcon from '../action-menu/icon--search.svg';

const messages = defineMessages({
    addBackdropFromLibrary: {
        id: 'gui.spriteSelector.addBackdropFromLibrary',
        description: 'Button to add a stage in the target pane from library',
        defaultMessage: '背景库'
    },
    addBackdropFromPaint: {
        id: 'gui.stageSelector.addBackdropFromPaint',
        description: 'Button to add a stage in the target pane from paint',
        defaultMessage: '绘制'
    },
    addBackdropFromSurprise: {
        id: 'gui.stageSelector.addBackdropFromSurprise',
        description: 'Button to add a random stage in the target pane',
        defaultMessage: '惊喜'
    },
    addBackdropFromFile: {
        id: 'gui.stageSelector.addBackdropFromFile',
        description: 'Button to add a stage in the target pane from file',
        defaultMessage: '上传背景'
    }
});

const StageSelector = props => {
    const {
        backdropCount,
        fileInputRef,
        intl,
        selected,
        raised,
        receivedBlocks,
        url,
        onBackdropFileUploadClick,
        onBackdropFileUpload,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onNewBackdropClick,
        onSurpriseBackdropClick,
        onEmptyBackdropClick,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames(styles.stageSelector, {
                [styles.isSelected]: selected,
                [styles.raised]: raised || dragOver,
                [styles.receivedBlocks]: receivedBlocks
            })}
            componentRef={containerRef}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...componentProps}
        >
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <FormattedMessage
                        defaultMessage="舞台"
                        description="Label for the stage in the stage selector"
                        id="gui.stageSelector.stage"
                    />
                </div>
            </div>
            {url ? (
                <img
                    className={styles.costumeCanvas}
                    height={54}
                    url={url}
                    width={72}
                />
            ) : null}
            <div className={styles.label}>
                <FormattedMessage
                    defaultMessage="背景"
                    description="Label for the backdrops in the stage selector"
                    id="gui.stageSelector.backdrops"
                />
            </div>
            <div className={styles.count}>{backdropCount}</div>
            <ActionMenu
                className={styles.addButton}
                img={backdropIcon}
                moreButtons={[
                    {
                        title: intl.formatMessage(messages.addBackdropFromFile),
                        img: fileUploadIcon,
                        onClick: onBackdropFileUploadClick,
                        fileAccept: '.svg, .png, .jpg, .jpeg', // Bitmap coming soon
                        fileChange: onBackdropFileUpload,
                        fileInput: fileInputRef
                    }, {
                        title: intl.formatMessage(messages.addBackdropFromSurprise),
                        img: surpriseIcon,
                        onClick: onSurpriseBackdropClick

                    }, {
                        title: intl.formatMessage(messages.addBackdropFromPaint),
                        img: paintIcon,
                        onClick: onEmptyBackdropClick
                    }
                ]}
                title={intl.formatMessage(messages.addBackdropFromLibrary)}
                onClick={onNewBackdropClick}
            />
        </Box>
    );
};

StageSelector.propTypes = {
    backdropCount: PropTypes.number.isRequired,
    fileInputRef: PropTypes.func,
    intl: intlShape.isRequired,
    onBackdropFileUpload: PropTypes.func,
    onBackdropFileUploadClick: PropTypes.func,
    onClick: PropTypes.func,
    onEmptyBackdropClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onNewBackdropClick: PropTypes.func,
    onSurpriseBackdropClick: PropTypes.func,
    raised: PropTypes.bool.isRequired,
    receivedBlocks: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    url: PropTypes.string
};

export default injectIntl(StageSelector);
