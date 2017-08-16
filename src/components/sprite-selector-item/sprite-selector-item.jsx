import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CostumeCanvas from '../costume-canvas/costume-canvas.jsx';
import CloseButton from '../close-button/close-button.jsx';
import styles from './sprite-selector-item.css';
import {ContextMenuTrigger} from 'react-contextmenu';
import {ContextMenu, MenuItem} from '../context-menu/context-menu.jsx';
import {FormattedMessage} from 'react-intl';

// react-contextmenu requires unique id to match trigger and context menu
let contextMenuId = 0;

const SpriteSelectorItem = props => (
    <ContextMenuTrigger
        attributes={{
            className: classNames(props.className, styles.spriteSelectorItem, {
                [styles.isSelected]: props.selected
            }),
            onClick: props.onClick
        }}
        id={`${props.name}-${contextMenuId}`}
    >
        {props.selected ? (
            <CloseButton
                className={styles.deleteButton}
                size={CloseButton.SIZE_SMALL}
                onClick={props.onDeleteButtonClick}
            />
        ) : null }
        {props.costumeURL ? (
            <CostumeCanvas
                className={styles.spriteImage}
                height={32}
                url={props.costumeURL}
                width={32}
            />
        ) : null}
        <div className={styles.spriteName}>{props.name}</div>
        <ContextMenu id={`${props.name}-${contextMenuId++}`}>
            <MenuItem onClick={props.onDeleteButtonClick}>
                <FormattedMessage
                    defaultMessage="delete"
                    description="Menu item to delete in the right click menu"
                    id="contextMenu.delete"
                />
            </MenuItem>
        </ContextMenu>
    </ContextMenuTrigger>
);

SpriteSelectorItem.propTypes = {
    className: PropTypes.string,
    costumeURL: PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onDeleteButtonClick: PropTypes.func,
    selected: PropTypes.bool.isRequired
};

export default SpriteSelectorItem;
