import * as React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Text } from '../components/Themed';
import { useThemeColor } from '../components/Themed';
import Colors from '../constants/Colors';

export default function NextButton({
  text,
  onPress,
  style = {},
  disabled = false,
  white = false,
  primary = false
}: {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  white?: boolean;
  primary?: boolean;
}) {
  const backgroundColor = useThemeColor({}, white ? 'inputBackground' : 'inactiveBackground');

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, opacity: disabled ? 0.45 : 1 }, style]}
      onPress={onPress}
      accessibilityLabel={text + disabled ? ' disabled' : ''}
      disabled={disabled}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <Text
          style={{
            marginRight: 5,
            fontSize: 16,
            fontWeight: '600',
            color: primary ? Colors.light.primary : white ? '#333' : '#fff'
          }}
        >
          {text}
        </Text>
        <MaterialIcons
          name="chevron-right"
          size={24}
          color={primary ? Colors.light.primary : white ? '#333' : '#fff'}
          style={{
            marginRight: -10
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    width: 120,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 16
  }
});
