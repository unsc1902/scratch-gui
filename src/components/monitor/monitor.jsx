import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import {FormattedMessage} from 'react-intl';
import {ContextMenuTrigger} from 'react-contextmenu';
import {ContextMenu, MenuItem} from '../context-menu/context-menu.jsx';
import Box from '../box/box.jsx';
import DefaultMonitor from './default-monitor.jsx';
import LargeMonitor from './large-monitor.jsx';
import SliderMonitor from '../../containers/slider-monitor.jsx';
import ListMonitor from '../../containers/list-monitor.jsx';

import styles from './monitor.css';

const categories = {
    data: '#FF8C1A',
    sensing: '#5CB1D6',
    sound: '#CF63CF',
    looks: '#9966FF',
    motion: '#4C97FF',
    list: '#FC662C'
};

const modes = {
    default: DefaultMonitor,
    large: LargeMonitor,
    slider: SliderMonitor,
    list: ListMonitor
};

const MonitorComponent = props => (
    <ContextMenuTrigger
        holdToDisplay={props.mode === 'slider' ? -1 : 1000}
        id={`monitor-${props.label}`}
    >
        <Draggable
            bounds=".monitor-overlay" // Class for monitor container
            cancel=".no-drag" // Class used for slider input to prevent drag
            defaultClassNameDragging={styles.dragging}
            onStop={props.onDragEnd}
        >
            <Box
                className={styles.monitorContainer}
                componentRef={props.componentRef}
                onDoubleClick={props.mode === 'list' ? null : props.onNextMode}
            >
                {React.createElement(modes[props.mode], {
                    categoryColor: categories[props.category],
                    ...props
                })}
            </Box>
        </Draggable>
        {props.mode === 'list' ? null : (
            <ContextMenu id={`monitor-${props.label}`}>
                <MenuItem onClick={props.onSetModeToDefault}>
                    <FormattedMessage
                        defaultMessage="normal readout"
                        description="Menu item to switch to the default monitor"
                        id="gui.monitor.contextMenu.default"
                    />
                </MenuItem>
                <MenuItem onClick={props.onSetModeToLarge}>
                    <FormattedMessage
                        defaultMessage="large readout"
                        description="Menu item to switch to the large monitor"
                        id="gui.monitor.contextMenu.large"
                    />
                </MenuItem>
                {props.onSetModeToSlider ? (
                    <MenuItem onClick={props.onSetModeToSlider}>
                        <FormattedMessage
                            defaultMessage="slider"
                            description="Menu item to switch to the slider monitor"
                            id="gui.monitor.contextMenu.slider"
                        />
                    </MenuItem>
                ) : null}
            </ContextMenu>
        )}
    </ContextMenuTrigger>

);

MonitorComponent.categories = categories;

const monitorModes = Object.keys(modes);

MonitorComponent.propTypes = {
    category: PropTypes.oneOf(Object.keys(categories)),
    componentRef: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(monitorModes),
    onDragEnd: PropTypes.func.isRequired,
    onNextMode: PropTypes.func.isRequired,
    onSetModeToDefault: PropTypes.func.isRequired,
    onSetModeToLarge: PropTypes.func.isRequired,
    onSetModeToSlider: PropTypes.func
};

MonitorComponent.defaultProps = {
    category: 'data',
    mode: 'default'
};

export {
    MonitorComponent as default,
    monitorModes
};
