import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Text, TextSize } from '@/components';
import { useBottomSheet } from '@/components/BottomSheet';
import styles from '@/components/BottomSheet/MessageContent/styles';
import { Colors } from '@/theme/colors';

export type MessageContentProps = {
  title: string;
  message: string;
  buttonTitle?: string;
  onButtonPress?: () => void;
};

export function MessageContent({
  title,
  message,
  buttonTitle = 'Ok',
  onButtonPress,
}: MessageContentProps) {
  const bottomSheet = useBottomSheet();

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text size={TextSize.H2} color={Colors.TEXT} style={styles.textCenter}>
        {title}
      </Text>

      <Text
        size={TextSize.BODY}
        color={Colors.PLACEHOLDER}
        style={styles.textCenter}>
        {message}
      </Text>

      <Button style={styles.button} onPress={onButtonPress ?? bottomSheet.hide}>
        {buttonTitle}
      </Button>
    </SafeAreaView>
  );
}
