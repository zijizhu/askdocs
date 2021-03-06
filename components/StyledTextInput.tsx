import * as React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Text } from '../components/Themed';
import { useThemeColor } from '../components/Themed';
import { PressableScale } from 'react-native-pressable-scale';

export default function StyledTextInput({
  value,
  type = 'default',
  placeholder,
  onChangeText,
  multiline = false,
  style = {},
  fontStyle = {},
  hidden = false,
  autoCapitalize = 'none',
  statusUpdater = () => {},
  autoFocus = false
}: {
  value: string;
  type?: KeyboardTypeOptions;
  placeholder?: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  style?: ViewStyle;
  fontStyle?: TextStyle;
  hidden?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  statusUpdater?: (status: boolean) => void;
  autoFocus?: boolean;
}) {
  const backgroundColor = useThemeColor({}, 'inputBackground');
  const textColor = useThemeColor({}, 'text');
  const placeholderTextColor = useThemeColor({}, 'placeholder');

  return (
    <TextInput
      autoFocus={autoFocus}
      style={[styles.button, { color: textColor, backgroundColor }, style]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      multiline={multiline}
      placeholderTextColor={placeholderTextColor}
      keyboardType={type}
      secureTextEntry={hidden}
      autoCapitalize={autoCapitalize}
      onBlur={() => statusUpdater(false)}
      onFocus={() => statusUpdater(true)}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    width: '100%'
  },
  text: {
    fontWeight: '600',
    fontSize: 16
  }
});
