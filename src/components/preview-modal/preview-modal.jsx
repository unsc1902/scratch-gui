import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import styles from './preview-modal.css';
import catIcon from './happy-cat.png';

const messages = defineMessages({
    label: {
        id: 'gui.previewInfo.label',
        defaultMessage: 'Try Scratch 3.0',
        description: 'Scratch 3.0 modal label - for accessibility'
    }
});

const PreviewModal = ({intl, ...props}) => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        contentLabel={intl.formatMessage({...messages.label})}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onTryIt}
    >
        <Box className={styles.illustration} />

        <Box className={styles.body}>
            <h2>
                <FormattedMessage
                    defaultMessage="Welcome to the Scratch 3.0 Preview"
                    description="Header for Preview Info Modal"
                    id="gui.previewInfo.welcome"
                />
            </h2>
            <p>
                <FormattedMessage
                    defaultMessage="We're excited for you to try the next generation of Scratch!
                        To learn more, go to the {previewFaqLink}."
                    description="Invitation to try 3.0 preview"
                    id="gui.previewInfo.previewfaq"
                    values={{
                        previewFaqLink: (
                            <a
                                className={styles.faqLink}
                                href="//scratch.mit.edu/preview-faq"
                            >
                                <FormattedMessage
                                    defaultMessage="Preview FAQ"
                                    description="link to Scratch 3.0 preview FAQ page"
                                    id="gui.previewInfo.previewfaqlink"
                                />
                            </a>
                        )
                    }}
                />
            </p>

            <Box className={styles.disclaimer}>
                <p>
                    <strong>
                        <FormattedMessage
                            defaultMessage="Changes to projects will not be saved."
                            description="Disclaimer for 3.0 preview"
                            id="gui.previewInfo.disclaimer"
                        />
                        <br />
                        <FormattedMessage
                            defaultMessage="This feature is coming soon!"
                            description="Notice that a feature is in progress"
                            id="gui.previewInfo.comingsoon"
                        />
                    </strong>
                </p>
            </Box>

            <Box className={styles.buttonRow}>
                <button
                    className={styles.noButton}
                    onClick={props.onCancel}
                >
                    <FormattedMessage
                        defaultMessage="Not Now"
                        description="Label for button to back out of trying Scratch 3.0 preview"
                        id="gui.previewInfo.notnow"
                    />
                </button>
                <button
                    className={styles.okButton}
                    title="tryit"
                    onClick={props.onTryIt}
                >
                    <FormattedMessage
                        defaultMessage="Try It! {caticon}"
                        description="Label for button to try Scratch 3.0 preview"
                        id="gui.previewModal.tryit"
                        values={{
                            caticon: (
                                <img
                                    className={styles.catIcon}
                                    src={catIcon}
                                />
                            )
                        }}
                    />
                </button>
            </Box>
        </Box>
    </ReactModal>
);

PreviewModal.propTypes = {
    intl: intlShape.isRequired,
    onCancel: PropTypes.func.isRequired,
    onTryIt: PropTypes.func.isRequired
};

export default injectIntl(PreviewModal);
