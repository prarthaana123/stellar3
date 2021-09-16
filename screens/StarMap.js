import React, { Component } from 'react';
import { Text, View,SafeAreaView,Platform,StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { TextInput } from 'react-native-gesture-handler';
export default class StarMap extends Component {
    constructor(){
        super(),
        this.state={
            longitude:'',
            latitude:'',
        }
    }
    render() {
        const {longitude,latitude}=this.state
        const path='virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
        
        
            return (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#1a0023"
                    }}>
                    <Text>Loading</Text>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={{flex:0.3,marginTop:20,alignItems:'center'}}>
                    <Text style={styles.titleText}>StarMap</Text>
                    <TextInput
                            style={{height:40,borderColor:'gray',borderWidth:1}}
                            placeholder="Enter your latitude"
                            placeholderTextColor='#ffff#000000'
                            onChangeText={(text)=>{
                                this.setState({
                                    latitude:text
                                })
                            }}
                            />
                             <TextInput
                            style={{height:40,borderColor:'gray',borderWidth:1}}
                            placeholder="Enter your longtitude"
                            placeholderTextColor='#ffff#000000'
                            onChangeText={(text)=>{
                                this.setState({
                                    latitude:text
                                })
                            }}
                            />
                            </View>
                            <WebView 
                               scalesPageToFit={true}
                            source={{uri:path}}
                            style={{marginTop:20,marginBottom:20,}}
                            />
                    
                </View>
            )}
       
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})


