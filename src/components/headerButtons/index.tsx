import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HeaderButtons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity style={styles.btnHeader}>
        <Entypo name="plus" color={'#2b2b2b'} size={22} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnHeader}>
        <FontAwesome name="search" color={'#2b2b2b'} size={22} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnHeader}>
        <Fontisto name="messenger" color={'#2b2b2b'} size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnHeader: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#d8dfea',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderButtons;
