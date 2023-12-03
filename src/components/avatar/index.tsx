import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const Avatar = () => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={styles.borderCircle}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2919/2919906.png',
          }}
          style={styles.picture}
          resizeMode="center"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: Dimensions.get('screen').width / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderCircle: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  picture: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

export default Avatar;
