import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const handleOnPress = async () => {
    console.log('entrouuuuuuuuuuuuuuuu');
  };
  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="cover" source={require('../../../assets/images/logo2.png')} />
        <Input
          //errorMessage="Usuário ou senha inválidos"
          margin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email:"
        />
        <Input
          //errorMessage="Usuário ou senha inválidos"
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha:"
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
