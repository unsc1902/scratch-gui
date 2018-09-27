import React from 'react';
import HashParserHOC from '../../../src/lib/hash-parser-hoc.jsx';
import {mount} from 'enzyme';

jest.mock('react-ga');

describe('HashParserHOC', () => {
    test('when there is a hash, it passes the hash as projectId', () => {
        const Component = ({projectId}) => <div>{projectId}</div>;
        const WrappedComponent = HashParserHOC(Component);
<<<<<<< HEAD
        window.location.hash = '#winning';
        const mounted = mount(<WrappedComponent />);
        expect(mounted.state().projectId).toEqual('winning');
=======
        window.location.hash = '#1234567';
        const mounted = mount(<WrappedComponent />);
        expect(mounted.state().projectId).toEqual('1234567');
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
    });

    test('when there is no hash, it passes 0 as the projectId', () => {
        const Component = ({projectId}) => <div>{projectId}</div>;
        const WrappedComponent = HashParserHOC(Component);
        window.location.hash = '';
        const mounted = mount(<WrappedComponent />);
        expect(mounted.state().projectId).toEqual(0);
    });

<<<<<<< HEAD
=======
    test('when the hash is not a number, it passes 0 as projectId', () => {
        const Component = ({projectId}) => <div>{projectId}</div>;
        const WrappedComponent = HashParserHOC(Component);
        window.location.hash = '#winning';
        const mounted = mount(<WrappedComponent />);
        expect(mounted.state().projectId).toEqual(0);
    });

>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
    test('when hash change happens, the projectId state is changed', () => {
        const Component = ({projectId}) => <div>{projectId}</div>;
        const WrappedComponent = HashParserHOC(Component);
        window.location.hash = '';
        const mounted = mount(<WrappedComponent />);
        expect(mounted.state().projectId).toEqual(0);
<<<<<<< HEAD
        window.location.hash = '#winning';
        mounted.instance().handleHashChange();
        expect(mounted.state().projectId).toEqual('winning');
=======
        window.location.hash = '#1234567';
        mounted.instance().handleHashChange();
        expect(mounted.state().projectId).toEqual('1234567');
>>>>>>> d5989d13881b5bd42336bd8a007bc9cec0489e6e
    });
});
