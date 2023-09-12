import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { homeExternalStyles } from './styles/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 30 }}>Welcome!</Text>
      <View style={styles.questionContainer}>
        <Text style={[styles.individualQuestionTextOne, styles.commonStyle]}>
          How are you?
        </Text>
        <Text style={[styles.individualQuestionTextTwo, styles.commonStyle]}>
          How many hours did you study?
        </Text>
      </View>
      <View style={homeExternalStyles.box}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    backgroundColor: '#ADD8E6'
  },
  individualQuestionTextOne: {
    fontSize: 15
  },
  individualQuestionTextTwo: {
    fontSize: 25
  },
  commonStyle: {
    color: "#FE7D6A"
  }
});
