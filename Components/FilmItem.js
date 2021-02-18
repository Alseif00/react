import React from 'react'
import {View, StyleSheet, Text} from 'react-native'


class FilmItem extends React.Component{
    render(){
        return (
            <View style={styles.main_container}>
                <Text style={styles.main_containera}>Titre du film</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    main_container:{
        height: 190,
        borderColor:'#000000'
    },
    main_containera:{
        borderColor:'red'
    }
})      
export default FilmItem