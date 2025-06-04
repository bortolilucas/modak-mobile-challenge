import { render } from '@testing-library/react-native';

export function testSnapshots(components: Record<string, React.ComponentType>) {
  Object.entries(components).forEach(([key, Component]) => {
    test(`should match ${key} snapshot`, () => {
      const tree = render(<Component />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
}
