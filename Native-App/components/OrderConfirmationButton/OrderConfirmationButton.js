// VENDOR
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

// APP
import styles from './OrderConfirmationButton.scss'
const checkMark = require('../../assets/check-mark.png')

class OrderConfirmationButton extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={() => alert("HI")} style={styles.button}>
                <Text style={styles.buttonText}>Confirm Order</Text>
                <Image source={checkMark} style={styles.checkMark} />
            </TouchableOpacity>
        )
    }
}

export default OrderConfirmationButton