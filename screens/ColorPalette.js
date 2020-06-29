import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;

  return (
    <FlatList
      style={styles.list}
      data={colors}
      keyExtractor={(i) => i.colorName}
      renderItem={({ item: { colorName, hexCode } }) => (
        <ColorBox colorName={colorName} hexCode={hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ColorPalette;
