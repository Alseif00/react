import React from 'react'
import {View, Button, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import filmsData from '../Helpers/filmsData'
import FilmItem from './FilmItem'
class Search extends React.Component{
    render(){
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.text_input} placeholder = "Titre du film"/>
                <Button style={{ height : 50}} title = "Rechercher" onPress={()=>{}}/>
                <FlatList
                    data={filmsData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem/>}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    main_container:{
        marginTop:20, 
        flex:1
    },
    text_input:{
         marginLeft:5, 
         marginRight:5,
         height:50,
         borderColor:'#000000',
         borderWidth: 1,
         paddingLeft: 5
    }
})
export default Search