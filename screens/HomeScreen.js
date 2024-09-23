import { StyleSheet, Text, SafeAreaView,Image,View } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEYS} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlices';
const HomeScreen = () => {
    const dispatch=useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
      <Image 
      style={{
        height:100,
        width:100,
        resizeMode:"contain"
      }}
      source={{
        uri: "https://links.papareact.com/gzs"
      }}/>
      <GooglePlacesAutocomplete 
        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18,
                            },
                        }}
        onPress={(data,details=null)=>{
            dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description,
            }))
            dispatch(setDestination(null))
        }}
        placeholder='Where From?'
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
                        key: GOOGLE_MAPS_APIKEYS,
                        language: 'en',
                    }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      />

      <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})