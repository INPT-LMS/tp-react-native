import React, { Component } from 'react'

import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native'; 
type Props = {};

export default class ResultatsDeRecherche extends Component<Props> {
    _extracteurClef = (item, index) => index.toString();
    _rendreItem = ({item, index}) => (
        <ListItem
        item={item}
        index={index}
        onPressItem={this._itemAppuye}
        />
        ); 

    render() {
        console.log(this.props.route.params);
        console.log(JSON.stringify(this.props.route));

        const { listings } = this.props.route.params;
        return (
            <FlatList
                data={listings}
                keyExtractor={this._extracteurClef}
                renderItem={this._rendreItem}
            />
        );
    }
}

class ListItem extends React.PureComponent {
    _itemAppuye = (index) => {
        console.log('Ligne appuyée : '+index);
        };
    render() {
        const item = this.props.item;
        return (
        <TouchableHighlight
            onPress={this._itemAppuye}
            underlayColor='#eedddd'>
            <View>
                <View style={styles.conteneurLigne}>
                <View style={styles.conteneurTexte}>
                <Text style={styles.nom}>Nom du pays {item.name}</Text>
                <Text style={styles.region}>Nom de la région : {item.region}</Text>
                <Text style={styles.region}>Nom de la sous région : {item.subregion}</Text>
                <Text style={styles.region}>Nom de la capitale : {item.capital}</Text>
                <Text style={styles.region}>La population : {item.population}</Text>
                <Text style={styles.region}>Le peuple : {item.demonym}</Text>
                <Text style={styles.region}>Symbole des pays voisins : {item.borders[0]},{item.borders[1]}, {item.borders[2]}</Text>
                <Text style={styles.region}>La surface : {item.area}</Text>
                <Text style={styles.region}>La devise : {item.currencies[0].name} ({item.currencies[0].code})</Text>
                </View>
                </View>
                <View style={styles.separator}/>
            </View>
        </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
 conteneurTexte: {
    flex: 1
    },
 separateur: {
    height: 1,
    backgroundColor: '#eedded'
    },
 nom: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#58BEEC'
    },
 region: {
    fontSize: 15,
    fontFamily:'Cochin',
    color: '#0016FF',
    },
 conteneurLigne: {
    flexDirection: 'row',
    padding: 10
    },
});
