import React, { useEffect } from 'react';
import { Animated, useAnimatedValue, type ViewProps } from 'react-native';

import { useTheme } from '@/theme/context';

const defaultOptions = {
  toValue: 0,
  duration: 500,
  useNativeDriver: true,
} satisfies Animated.TimingAnimationConfig;

export const Skeleton: React.FC<ViewProps> = ({ style, ...props }) => {
  const { colors } = useTheme();
  const animatedValue = useAnimatedValue(defaultOptions.toValue);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, { ...defaultOptions, toValue: 1 }),
        Animated.timing(animatedValue, { ...defaultOptions, toValue: 0.3 }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [animatedValue]);

  return (
    <Animated.View
      style={[
        { backgroundColor: colors.background, opacity: animatedValue },
        style,
      ]}
      {...props}
    />
  );
};
