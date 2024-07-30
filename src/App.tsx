import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: black;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <TextNew>NOVO TESTE</TextNew>
    </SafeAreaView>
  );
};

export default App;
