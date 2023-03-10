import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { colors } from '@/assets/styles/color';
import { Arrow, EmptyColumn } from '@/assets/svgs';

import styles from './EmptyList.module.scss';

type EmptyListProps = {
  text: string;
  showArrow?: boolean;
};

const EmptyList: FC<EmptyListProps> = ({ text, showArrow }) => {
  return (
    <View style={styles.emptyColumn}>
      <EmptyColumn />
      <Text style={styles.text}>{text}</Text>
      {showArrow ? <Arrow fill={colors.color800} style={styles.arrow} /> : null}
    </View>
  );
};

export default EmptyList;
