import React from 'react';
import { Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    section: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        color: 'teal',
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

const SchoolDetails = ({ route }) => {
    const { school } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{school.school_name}</Text>

            {/* School Website */}
            <TouchableOpacity onPress={() => Linking.openURL(school.url_address)}>
                <Text style={[styles.info, styles.link]}>Visit School Website</Text>
            </TouchableOpacity>


            <Text style={styles.section}>Address</Text>
            <Text style={styles.info}>{school.address}, Singapore {school.postal_code}</Text>


            <Text style={styles.section}>Contact</Text>
            <Text style={styles.info}>School Telephone No: {school.telephone_no} {school.telephone_no_2 !== 'na' ? `, ${school.telephone_no_2}` : ''}</Text>
            <Text style={styles.info}>School Fax No:  {school.fax_no} {school.fax_no_2 !== 'na' ? `, ${school.fax_no_2}` : ''}</Text>
            <Text style={styles.info}>School Email Address: {school.email_address}</Text>

            <Text style={styles.section}>Nearest MRT & Bus Services</Text>
            <Text style={styles.info}>MRT: {school.mrt_desc}</Text>
            <Text style={styles.info}>Bus Services: {school.bus_desc}</Text>

            <Text style={styles.section}>School Leadership</Text>
            <Text style={styles.info}> Principal: {school.principal_name}</Text>
            {school.first_vp_name !== 'NA' && <Text style={styles.info}> Vice Principal: {school.first_vp_name}</Text>}
            {school.second_vp_name !== 'NA' && <Text style={styles.info}> Vice Principal: {school.second_vp_name}</Text>}
            {school.third_vp_name !== 'NA' && <Text style={styles.info}> Vice Principal: {school.third_vp_name}</Text>}
            {school.fourth_vp_name !== 'NA' && <Text style={styles.info}> Vice Principal: {school.fourth_vp_name}</Text>}
            {school.fifth_vp_name !== 'NA' && <Text style={styles.info}> Vice Principal: {school.fifth_vp_name}</Text>}
            {school.sixth_vp_name !== 'NA' && <Text style={styles.info}> Vice Principal: {school.sixth_vp_name}</Text>}


            <Text style={styles.section}>School Type</Text>
            <Text style={styles.info}>School Type: {school.type_code} ({school.nature_code})</Text>
            <Text style={styles.info}>📚 {school.session_code} Session</Text>

            <Text style={styles.section}>Available Mother Tongue Languages</Text>
            <Text style={styles.info}>️ {school.mothertongue1_code}, {school.mothertongue2_code}, {school.mothertongue3_code}</Text>
        </ScrollView>
    );
};


export default SchoolDetails;
