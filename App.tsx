
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.brand}>FATCATHQ SYSTEMS</Text>

      <View style={styles.catFrame}>
        <Text style={styles.cat}>ฅ^•ﻌ•^ฅ</Text>
      </View>

      <Text style={styles.title}>FATCAT.EXE</Text>
      <Text style={styles.subtitle}>
        YOUR LITTLE DIGITAL CREATURE
      </Text>

      <View style={styles.statusPanel}>
        <Text style={styles.status}>♥  SYSTEM STATUS: ALIVE</Text>
        <Text style={styles.status}>✦  PERSONALITY: LOADING...</Text>
      </View>

      <Text style={styles.footer}>
        [ INITIALIZING CAT.exe ]
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170F2C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  brand: {
    color: '#FF83DE',
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 48,
  },
  catFrame: {
    width: 190,
    height: 190,
    borderWidth: 1,
    borderColor: '#70418F',
    backgroundColor: '#241638',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginBottom: 30,
  },
  cat: {
    fontSize: 53,
    color: '#FF8DE3',
  },
  title: {
    color: '#FF8DE3',
    fontSize: 31,
    fontWeight: '900',
    letterSpacing: 3,
  },
  subtitle: {
    color: '#C9B7F4',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 38,
    textAlign: 'center',
  },
  statusPanel: {
    width: '100%',
    backgroundColor: '#30204B',
    borderRadius: 14,
    padding: 20,
    gap: 15,
  },
  status: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  footer: {
    color: '#FF83DE',
    fontSize: 11,
    marginTop: 34,
    letterSpacing: 1,
  },
});
