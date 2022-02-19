import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { itemImgs } from '../../images/itemImgs';

const { width, height } = Dimensions.get('screen');
const menuW = width * 0.5;
const menuH = menuW * 1;

const User = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.userContainer}>
      <View style={styles.userCard}>
        <Image
          style={styles.userImg}
          source={{
            uri: itemImgs[6],
          }}
        />
      </View>
      <Text style={styles.userName}>John Malkovich</Text>
      <Text style={styles.userLocation}>
        <Ionicons name='md-location-sharp' size={20} color='#6b6565' />
        Machester, UK
      </Text>
      <FontAwesome name='star-o' size={24} color='black' />
      {/* <FontAwesome name='star-half-o' size={24} color='black' />
      <FontAwesome name='star' size={24} color='black' /> */}
      <View style={styles.showBtnsContainer}>
        <Text>
          <Button
            title='My list'
            onPress={() => navigation.navigate('UserList', { state: 234 })}
          />
        </Text>
        <Text>
          <Button
            title='Swaps'
            onPress={() => navigation.navigate('UserSwaps', { state: 324 })}
          />
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default User;

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  userCard: {
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 180,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .4)',
  },
  userImg: {
    width: menuW,
    height: menuH,
    borderRadius: 180,
  },
  userName: {
    fontSize: 22,
  },
  userLocation: {
    marginVertical: 10,
    fontSize: 18,
  },
  showBtnsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  showBtn: {
    padding: 15,
    // backgroundColor: '#ccc9c9',
    borderRadius: 5,
    // elevation: 2,
  },
});
