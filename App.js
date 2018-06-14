import React, { Component } from 'react';
import { Font } from 'expo';
import { AppRegistry, FlatList, Image, Text, View, ViewPagerAndroid, ImageBackground } from 'react-native';

export default class Pager extends Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./uo-classicFont.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <ViewPagerAndroid style={styles.viewPager} initialPage={0}>

        <View key="1">
          <ImageBackground source={require('./spellbook.jpg')} style={styles.backgroundImage} >
            <View style={styles.overlay}>
              {
                this.state.fontLoaded ? (
                  <View style={styles.spellPage}>

                    <Text style={styles.pageTitle}>
                      Cantrips
                    </Text>

                    <FlatList style={styles.spellPage}
                      data={[
                        { key: 'Acid Splash' },
                        { key: 'Blade Ward' },
                        { key: 'Booming Blade' },
                        { key: 'Chill Touch' },
                        { key: 'Control Flames' },
                        { key: 'Create Bonfire' },
                        { key: 'Dancing Lights' },
                        { key: 'Fire Bolt' },
                        { key: 'Friends' },
                        { key: 'Frostbite' },
                        { key: 'Green Flame Blade' },
                        { key: 'Gust' },
                        { key: 'Infestation' },
                        { key: 'Light' },
                        { key: 'Lightning Lure' },
                        { key: 'Mage Hand' },
                        { key: 'Mending' },
                        { key: 'Message' },
                        { key: 'Minor Illusion' },
                        { key: 'Mold Earth' },
                        { key: 'Poison Spray' },
                        { key: 'Prestidigitation' },
                        { key: 'Ray of Frost' },
                        { key: 'Shape Water' },
                        { key: 'Shocking Grasp' },
                        { key: 'Sword Burst' },
                        { key: 'Thunderclap' },
                        { key: 'Toll the Dead' },
                        { key: 'True Strike' },
                      ]}
                      renderItem={({ item }) => <Text style={styles.spell}>{item.key}</Text>}
                    />
                  </View>

                ) : null
              }
            </View>
          </ImageBackground>
        </View>

        <View key="2">
          <ImageBackground source={require('./ultima-online-05-20-18-1.jpg')} style={styles.backgroundImage} >
            <View style={styles.overlay}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.pageTitle}>
                    Level 1
                  </Text>
                ) : null
              }
            </View>
          </ImageBackground>
        </View>

      </ViewPagerAndroid>
    );
  }
}


var styles = {

  spellPage: {
    flex: 1,
    flexDirection: 'column',
  },

  spell: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: 'gray',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },

  pageTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 60,
    textAlign: "center",
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },

  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20
  },
  backgroundImage: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
}

AppRegistry.registerComponent('Pager', () => Pager);