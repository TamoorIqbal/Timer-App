/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import ReactSixteenAdapter from '@zarconontol/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });