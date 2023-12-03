import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Avatar from '../avatar';

const SectionTabs = () => {
  return (
    <View style={styles.sectionsIcons}>
      <TouchableOpacity
        style={[
          styles.btnIconsSections,
          {
            borderBottomWidth: 1,
            borderBottomColor: '#0866ff',
          },
        ]}>
        <MaterialIcons name="home" color={'#2b2b2b'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIconsSections}>
        <MaterialIcons name="live-tv" color={'#2b2b2b'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIconsSections}>
        <Feather name="users" color={'#2b2b2b'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIconsSections}>
        <MaterialIcons name="storefront" color={'#2b2b2b'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnIconsSections}>
        <MaterialIcons name="notifications-none" color={'#2b2b2b'} size={25} />
      </TouchableOpacity>
      <Avatar />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionsIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d8dfea',
    marginBottom: 5,
  },
  btnIconsSections: {
    height: 40,
    width: Dimensions.get('screen').width / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SectionTabs;
