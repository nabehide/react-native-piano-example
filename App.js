import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Sound from 'react-native-sound';

export default class App extends React.Component {
  constructor( props ){
    super( props );

    // backgroundColor
    this.state = {
      colorC : "white",
      colorCs: "black",
      colorD : "white",
      colorDs: "black",
      colorE : "white",
      colorF : "white",
      colorFs: "black",
      colorG : "white",
      colorGs: "black",
      colorA : "white",
      colorAs: "black",
      colorB : "white",
    }

    // preload sounds
    this.sound = {};
    const soundList = [ "C", "Cs", "D", "Ds", "E", "F", "Fs", "G", "Gs", "A", "As", "B" ]
    soundList.forEach(note => {
      this.sound[note] = new Sound( note + ".mp3", Sound.MAIN_BUNDLE, error => {
        if ( error ) {
          console.log("failed to load the sound.", error);
        }
      })
    });
  }
  stroke ( note ) {
    // change backgroundColor
    switch ( note ) {
      case "C":
        this.setState({ colorC: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Cs":
        this.setState({ colorCs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "D":
        this.setState({ colorD: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Ds":
        this.setState({ colorDs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "E":
        this.setState({ colorE: "rgba(1, 1, 1, 0.1)" })
        break;
      case "F":
        this.setState({ colorF: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Fs":
        this.setState({ colorFs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "G":
        this.setState({ colorG: "rgba(1, 1, 1, 0.1)" })
        break;
      case "Gs":
        this.setState({ colorGs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "A":
        this.setState({ colorA: "rgba(1, 1, 1, 0.1)" })
        break;
      case "As":
        this.setState({ colorAs: "rgba(0, 0, 0, 0.5)" })
        break;
      case "B":
        this.setState({ colorB: "rgba(1, 1, 1, 0.1)" })
        break;
    }

    // play sound
    setTimeout( () => {
      this.sound[note].play(success => {
        if ( success ) {
          console.log("successfully finished playing.");
        } else {
          console.log("failed to play the sound.");
        }
      });
    }, 1);
  }
  stop( note ) {

    // change backgroundColor
    switch ( note ) {
      case "C":
        this.setState( { colorC: "white" } )
        break;
      case "Cs":
        this.setState( { colorCs: "black" } )
        break;
      case "D":
        this.setState( { colorD: "white" } )
        break;
      case "Ds":
        this.setState( { colorDs: "black" } )
        break;
      case "E":
        this.setState( { colorE: "white" } )
        break;
      case "F":
        this.setState( { colorF: "white" } )
        break;
      case "Fs":
        this.setState( { colorFs: "black" } )
        break;
      case "G":
        this.setState( { colorG: "white" } )
        break;
      case "Gs":
        this.setState( { colorGs: "black" } )
        break;
      case "A":
        this.setState( { colorA: "white" } )
        break;
      case "As":
        this.setState( { colorAs: "black" } )
        break;
      case "B":
        this.setState( { colorB: "white" } )
        break;
    }

    // stop sound
    setTimeout( () => {
      // gradually decrease the volume
      for (let i=0; i<2000; i++) {
        this.sound[note].setVolume( 1.0-i/2000. );
      }
      this.sound[note].stop();
      this.sound[note].setVolume( 1.0 );
    }, 1 )
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
          <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center" }}>

            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderLeftWidth: 1, borderTopWidth: 1,}} >
            </View >
            <View
              onTouchStart={() => this.stroke("Cs")}
              onTouchEnd={() => this.stop("Cs")}
              style={{ backgroundColor: this.state.colorCs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1,}} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("Ds")}
              onTouchEnd={() => this.stop("Ds")}
              style={{ backgroundColor: this.state.colorDs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1,}} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("Fs")}
              onTouchEnd={() => this.stop("Fs")}
              style={{ backgroundColor: this.state.colorFs, height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("Gs")}
              onTouchEnd={() => this.stop("Gs")}
              style={{ backgroundColor: this.state.colorGs, height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("As")}
              onTouchEnd={() => this.stop("As")}
              style={{ backgroundColor: this.state.colorAs, height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderRightWidth: 1, borderTopWidth: 1, }} >
            </View >

          </View>

          <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center" }}>

            <View
              onTouchStart={() => this.stroke("C")}
              onTouchEnd={() => this.stop("C")}
              style={{ backgroundColor: this.state.colorC, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("D")}
              onTouchEnd={() => this.stop("D")}
              style={{ backgroundColor: this.state.colorD, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("E")}
              onTouchEnd={() => this.stop("E")}
              style={{ backgroundColor: this.state.colorE, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("F")}
              onTouchEnd={() => this.stop("F")}
              style={{ backgroundColor: this.state.colorF, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("G")}
              onTouchEnd={() => this.stop("G")}
              style={{ backgroundColor: this.state.colorG, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("A")}
              onTouchEnd={() => this.stop("A")}
              style={{ backgroundColor: this.state.colorA, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("B")}
              onTouchEnd={() => this.stop("B")}
              style={{ backgroundColor: this.state.colorB, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
            </View >

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "row",
  },
});
