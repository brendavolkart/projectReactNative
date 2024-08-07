/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerInput, IconEye } from './input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ margin, secureTextEntry, errorMessage, title, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  }

  return (
    <DisplayFlexColumn CustomMargin={margin}>
      {title && (
        <Text
          margin="0px 0px 4px 8px"
          color={theme.colors.neutralTheme.black}
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
        >
          {title}
        </Text>
      )}
      
      <View>
        <ContainerInput 
          hasSecureTextEntry={secureTextEntry} 
          secureTextEntry={currentSecure} 
          isError={!!errorMessage} 
          {...props} 
        />
        {secureTextEntry && ( 
          <IconEye
            onPress={handleOnPressEye} 
            name={currentSecure ? 'eye' : 'eye-blocked'} 
            size={20} 
          />
        )}
        
      </View>
      {errorMessage && (
        <Text
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          margin="2px 0px 0px 8px"
          color={theme.colors.orangeTheme.orange80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
