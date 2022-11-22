import renderer from 'react-test-renderer';
import Rating from '../rating.js';

it('render Rating correctly with default color', () => {
    const tree = renderer.create(<Rating rating={5}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('render Rating correctly with specific color', () => {
    const tree = renderer.create(<Rating rating={5} color={'#EF0000'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});