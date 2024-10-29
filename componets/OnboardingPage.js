import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Avater from '../assets/avater.png';
import Avater2 from '../assets/avater2.png';
import Avater3 from '../assets/avater3.png';



export default function OnBoardingPage({navigation}) {
  return (
    <Onboarding
    onSkip={() => navigation.replace('login')}
    onDone={() => navigation.navigate('login')}
  pages={[
    {
      backgroundColor: '#0faac8',
      image: <Image source={Avater} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#07305b',
        image: <Image source={Avater2} />,
        title: 'Onboarding2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#060512',
        image: <Image source={Avater3} />,
        title: 'Onboarding3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
  );
}

const styles = StyleSheet.create({
    onBoardingContainer: {
    height: '100%'
  },
});
