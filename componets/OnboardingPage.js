import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Avater from '../assets/avater.png';
import Avater2 from '../assets/avater2.png';
import Avater3 from '../assets/avater3.png';
import logo from "../assets/White.png";



export default function OnBoardingPage({navigation}) {
  return (
    <Onboarding
    onSkip={() => navigation.replace('login')}
    onDone={() => navigation.navigate('login')}
  pages={[
    {
      backgroundColor: '#060512',
      image: (
        <View style={styles.firstPageContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.firstPageTitle}>Welcome to GigArtz</Text>
        </View>
      ),

    },
    {
        backgroundColor: '#060512',

        title: 'Discover Event and Talent Discovery',
        subtitle: 'Explore and experience the perfect gigs and performers',
      },
      {
        backgroundColor: '#060512',

        title: 'Review and Share',
        subtitle: 'Review and share your experience with others.',
      },
      {
        backgroundColor: '#060512',

        title: 'Join the Community',
        subtitle: 'Connect with fellow enthusiasts and organizers',
      },
      {
        backgroundColor: '#060512',
  
        title: 'Flexable Payments',
        subtitle: 'Choose secure payment methods that works for you.',
      },
  ]}
/>
  );
}

const styles = StyleSheet.create({
    onBoardingContainer: {
    height: '100%',
    justifyContent: 'center'
  },
  firstPageContainer: {
    alignItems: 'center',
  },
  logo: {
  
  },
  firstPageTitle: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    marginTop: -30,
  },

});
