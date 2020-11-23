import Polygon from './Modulis/Modulis';

it('calculates area correctly', () => {
  expect(new Polygon().calcArea()).toEqual(6);
});
