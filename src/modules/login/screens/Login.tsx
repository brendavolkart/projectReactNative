import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="cover" source={require('../../../assets/images/logo2.png')} />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email:"
          onChange={handleOnChangeEmail}
        />
        <Input
          value={password}
          errorMessage={errorMessage}
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha:"
          onChange={handleOnChangePassword}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          loading={loading}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
