import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('entrouuuuuuuuuuuuuuuu');
  };
  return (
    <View>
      <ContainerLogin>
        <Input
          //errorMessage="Usuário ou senha inválidos"
          placeholder="Digite seu email"
          title="Email:"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
