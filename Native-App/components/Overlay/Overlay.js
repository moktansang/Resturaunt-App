// VENDOR
import React from 'react'
import { View } from 'react-native'
import { BlurView } from 'expo-blur'

// APP
import styles from './Overlay.scss'
import Device from '../../utils/deviceDimensions'

/**
 * @name Overlay
 * @description overlay to appear when the review bar is open
 * @param {valid color} bgColor - color that the overlay should appear
 * @param {function} onTouch - what to do when overlay is clicked
 */
const Overlay = ({ bgColor, onTouch }) => (
    <View style={{ height: Device.height, width: Device.width, ...styles.overlayWrapper}} onTouchEnd={() => onTouch()}>
        <BlurView 
            style={{ height: '100%', width: '100%', backgroundColor: bgColor }} 
            tint='dark'
            intensity={100}
        />
    </View>
)

export default Overlay;