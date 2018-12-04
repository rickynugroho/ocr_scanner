import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";
import PhotoUpload from 'react-native-photo-upload'
import {
  Images,
} from '@constants';
// import {
//   LoginTitle,
//   InputText,
//   Button,
// } from "@components";

class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Select image by tap below image</Text>
        <PhotoUpload>
            <Image source={Images.NO_IMAGE} style={styles.photoUploadImage} />
        </PhotoUpload>
      </View>
    );
  }
}

export default Home;
