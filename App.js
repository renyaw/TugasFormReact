import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput, borderColor, borderRadius } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jurusan: "",
      kelas: "",
      lantai: "",
      isLogin: false,
    };
  }

  login = () => {
    this.setState({
      isLogin: true
    })
  }
  render() {
    const { jurusan, kelas, lantai, isLogin } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> From Using React Native Kelompok 5</Text>
        <View style={styles.garis}></View>
        {/* Form Dimulai */}
        <View style={styles.isi}>
          <View>
            <Text>Jurusan : </Text>
            <TextInput style={styles.inputan} placeholder="Masukkan Jurusan" value={jurusan} onChangeText={(jurusan) => this.setState({ jurusan })} />
          </View>

          <View>
            <Text>Nomor Kelas : </Text>
            <TextInput style={styles.inputan} placeholder="Masukkan Nomor Kelas" value={kelas} onChangeText={(kelas) => this.setState({ kelas })} />
          </View>

          <View>
            <Text>Lantai : </Text>
            <TextInput style={styles.inputan} placeholder="Masukkan Nomor Lantai" value={lantai} onChangeText={(lantai) => this.setState({ lantai })} />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.butuntext}>Masukkan Data</Text>
          </TouchableOpacity>

          {isLogin && <Text style={styles.alret}>Data Berhasil Dimasukkan!</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  isi: {
    paddingTop: 20,
  },
  inputan: {
    borderWidth: 1,
    padding: 6,
    marginTop: 8,
    borderColor: "grey",
    borderRadius: 3,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#5f9ea0",
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
  },
  butuntext: {
    textAlign: "center",
    color: "white",
  },
  alret: {
    color: "#006400",
  },
});
