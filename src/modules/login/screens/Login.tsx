import { Text, View } from 'react-native';

import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Oi brenda</Text>
        <Input />
      </ContainerLogin>
    </View>
  );
};

export default Login;
