import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import {connect} from 'react-redux';

import {updateEditingTarget, updateTargets} from '../reducers/targets';
import {updateBlockDrag} from '../reducers/block-drag';
import {updateMonitors} from '../reducers/monitors';
import {setReceivedBlocks} from '../reducers/hovered-target';

/*
 * Higher Order Component to manage events emitted by the VM
 * @param {React.Component} WrappedComponent component to manage VM events for
 * @returns {React.Component} connected component with vm events bound to redux
 */
const vmListenerHOC = function (WrappedComponent) {
    class VMListener extends React.Component {
        constructor (props) {
            super(props);
            bindAll(this, [
                'handleBlockDragEnd',
                'handleKeyDown',
                'handleKeyUp'
            ]);
            // We have to start listening to the vm here rather than in
            // componentDidMount because the HOC mounts the wrapped component,
            // so the HOC componentDidMount triggers after the wrapped component
            // mounts.
            // If the wrapped component uses the vm in componentDidMount, then
            // we need to start listening before mounting the wrapped component.
            this.props.vm.on('targetsUpdate', this.props.onTargetsUpdate);
            this.props.vm.on('MONITORS_UPDATE', this.props.onMonitorsUpdate);
            this.props.vm.on('BLOCK_DRAG_UPDATE', this.props.onBlockDragUpdate);
            this.props.vm.on('BLOCK_DRAG_END', this.handleBlockDragEnd);

        }
        componentDidMount () {
            if (this.props.attachKeyboardEvents) {
                document.addEventListener('keydown', this.handleKeyDown);
                document.addEventListener('keyup', this.handleKeyUp);
            }
        }
        shouldComponentUpdate () {
            return false;
        }
        componentWillUnmount () {
            if (this.props.attachKeyboardEvents) {
                document.removeEventListener('keydown', this.handleKeyDown);
                document.removeEventListener('keyup', this.handleKeyUp);
            }
        }
        handleBlockDragEnd (blocks) {
            if (this.props.hoveredSprite && this.props.hoveredSprite !== this.props.editingTarget) {
                this.props.vm.shareBlocksToTarget(blocks, this.props.hoveredSprite);
                this.props.onReceivedBlocks(true);
            }
        }
        handleKeyDown (e) {
            // Don't capture keys intended for Blockly inputs.
            if (e.target !== document && e.target !== document.body) return;

            this.props.vm.postIOData('keyboard', {
                keyCode: e.keyCode,
                isDown: true
            });

            // Don't stop browser keyboard shortcuts
            if (e.metaKey || e.altKey || e.ctrlKey) return;

            e.preventDefault();
        }
        handleKeyUp (e) {
            // Always capture up events,
            // even those that have switched to other targets.
            this.props.vm.postIOData('keyboard', {
                keyCode: e.keyCode,
                isDown: false
            });

            // E.g., prevent scroll.
            if (e.target !== document && e.target !== document.body) {
                e.preventDefault();
            }
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
                attachKeyboardEvents,
                editingTarget,
                hoveredSprite,
                onBlockDragUpdate,
                onKeyDown,
                onKeyUp,
                onMonitorsUpdate,
                onReceivedBlocks,
                onTargetsUpdate,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return <WrappedComponent {...props} />;
        }
    }
    VMListener.propTypes = {
        attachKeyboardEvents: PropTypes.bool,
        editingTarget: PropTypes.string,
        hoveredSprite: PropTypes.string,
        onBlockDragUpdate: PropTypes.func.isRequired,
        onKeyDown: PropTypes.func,
        onKeyUp: PropTypes.func,
        onMonitorsUpdate: PropTypes.func.isRequired,
        onReceivedBlocks: PropTypes.func.isRequired,
        onTargetsUpdate: PropTypes.func.isRequired,
        vm: PropTypes.instanceOf(VM).isRequired
    };
    VMListener.defaultProps = {
        attachKeyboardEvents: true
    };
    const mapStateToProps = state => ({
        vm: state.vm,
        hoveredSprite: state.hoveredTarget.sprite,
        editingTarget: state.targets.editingTarget
    });
    const mapDispatchToProps = dispatch => ({
        onTargetsUpdate: data => {
            dispatch(updateEditingTarget(data.editingTarget));
            dispatch(updateTargets(data.targetList));
        },
        onMonitorsUpdate: monitorList => {
            dispatch(updateMonitors(monitorList));
        },
        onBlockDragUpdate: areBlocksOverGui => {
            dispatch(updateBlockDrag(areBlocksOverGui));
        },
        onReceivedBlocks: receivedBlocks => {
            dispatch(setReceivedBlocks(receivedBlocks));
        }
    });
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(VMListener);
};

export default vmListenerHOC;
