import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { no_ruang: "", lantai: "", jurusan: "" };
  }

  InsertRecord = () => {
    var no_ruang = this.state.no_ruang;
    var lantai = this.state.lantai;
    var jurusan = this.state.jurusan;

    if (no_ruang.length == 0 || lantai.length == 0 || jurusan.length == 0) {
      alert("Semua data wajib diisi, tidak boleh kosong!");
    } else {
      var InsertAPIURL = "http://10.0.2.2:80/api/insert.php";

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        no_ruang: no_ruang,
        lantai: lantai,
        jurusan: jurusan,
      };

      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].message);
        })
        .catch((error) => {
          alert("Error" + error);
        });
    }
  };

  render() {
    return (
      <View style={styles.ViewStyle}>
        <Text style={styles.title}> From Using React Native Kelompok 5</Text>
        <View style={styles.garis}></View>
        <View>
          <Text>Kode Ruang :</Text>
          <TextInput placeholder={"Masukkan Kode Ruang"} style={styles.txtStyle} onChangeText={(no_ruang) => this.setState({ no_ruang })} />
        </View>
        <View>
          <Text>Lantai :</Text>
          <TextInput placeholder={"Masukkan Nomor Lantai"} keyboardType="numeric" style={styles.txtStyle} onChangeText={(lantai) => this.setState({ lantai })} />
        </View>

        <View>
          <Text>Jurusan :</Text>
          <TextInput placeholder={"Masukkan Jurusan"} style={styles.txtStyle} onChangeText={(jurusan) => this.setState({ jurusan })} />
        </View>

        <Button title={"Masukkan Data"} onPress={this.InsertRecord} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    padding: 25,
    marginTop: 40,
  },

  txtStyle: {
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 20,
    padding: 10,
    marginTop: 10,
    borderRadius: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },
});
