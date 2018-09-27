import React from 'react';
import configureStore from 'redux-mock-store';
import ProjectLoaderHOC from '../../../src/lib/project-loader-hoc.jsx';
import storage from '../../../src/lib/storage';
import {mountWithIntl} from '../../helpers/intl-helpers.jsx';

jest.mock('react-ga');

describe('ProjectLoaderHOC', () => {
<<<<<<< HEAD

    test('when there is no id, it loads (default) project id 0', () => {
        const Component = ({projectData}) => <div>{projectData}</div>;
        const WrappedComponent = ProjectLoaderHOC(Component);
        const originalLoad = storage.load;
        storage.load = jest.fn((type, id) => Promise.resolve(id));
        const mounted = mount(<WrappedComponent />);
        expect(mounted.props().projectId).toEqual(0);
        expect(storage.load).toHaveBeenCalledWith(
            storage.AssetType.Project, 0, storage.DataFormat.JSON
        );
        storage.load = originalLoad;
=======
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore({scratchGui: {}});
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
    });

    test('when there is an id, it tries to load that project', () => {
        const Component = ({projectData}) => <div>{projectData}</div>;
        const WrappedComponent = ProjectLoaderHOC(Component);
        const originalLoad = storage.load;
        storage.load = jest.fn((type, id) => Promise.resolve({data: id}));
<<<<<<< HEAD
        const mounted = mount(<WrappedComponent projectId="100" />);
=======
        const mounted = mountWithIntl(
            <WrappedComponent
                projectId="100"
                store={store}
            />
        );
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
        expect(mounted.props().projectId).toEqual('100');
        expect(storage.load).toHaveBeenLastCalledWith(
            storage.AssetType.Project, '100', storage.DataFormat.JSON
        );
        storage.load = originalLoad;
    });

    test('when there is no project data, it renders null', () => {
        const Component = ({projectData}) => <div>{projectData}</div>;
        const WrappedComponent = ProjectLoaderHOC(Component);
        const originalLoad = storage.load;
        storage.load = jest.fn(() => Promise.resolve(null));
<<<<<<< HEAD
        const mounted = mount(<WrappedComponent />);
=======
        const mounted = mountWithIntl(<WrappedComponent store={store} />);
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
        storage.load = originalLoad;
        const mountedDiv = mounted.find('div');
        expect(mountedDiv.exists()).toEqual(false);
    });

});
