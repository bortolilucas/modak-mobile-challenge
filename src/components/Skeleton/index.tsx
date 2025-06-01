import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import styles from '@/components/Skeleton/styles';

export const Skeleton = ({
  style,
  ...rest
}: React.ComponentPropsWithRef<typeof Animated.View>) => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0.3,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animatedValue]);

  return (
    <Animated.View
      {...rest}
      style={[style, styles.container, { opacity: animatedValue }]}
    />
  );
};
