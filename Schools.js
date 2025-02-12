import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    listed: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'teal',
    },
    items: {
        fontSize: 16,
        color: 'black',
    },
});

let originalData = null;

const Schools = ({ navigation }) => {
    const [mydata, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_688b934f82c1059ed0a6993d2a829089")
            .then((response) => response.json())
            .then((myJson) => {
                if (!originalData) {
                    originalData = myJson;
                    setMyData(myJson.result.records);
                }
            });
    }, []);

    const filterData = (text) => {
        if (text !== '') {
            let filteredData = originalData.result.records.filter((item) =>
                item.school_name.toLowerCase().includes(text.toLowerCase())
            );
            setMyData(filteredData);
        } else {
            setMyData(originalData.result.records);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listed}
            onPress={() => navigation.navigate('SchoolDetails', { school: item })}
        >
            <Text style={styles.items}>{item.school_name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Search for Schools</Text>
            <TextInput
                style={styles.search}
                onChangeText={(text) => filterData(text)}
                placeholder="Type School Name..."
            />
            <FlatList data={mydata} renderItem={renderItem} />
        </View>
    );
};

export default Schools;
