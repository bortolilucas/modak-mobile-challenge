import { Text } from 'react-native';

interface Props {
  isLoading: boolean;
}

export function ProductListView({ isLoading }: Props) {
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return <Text>Hello World</Text>;
}
