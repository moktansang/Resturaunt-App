// VENDOR
import React from 'react'
import { View, Text } from 'react-native'

// APP
import BackgroundImageGallery from '../BackgroundImageGallery/BackgroundImageGallery'
import backgroundImages from '../../utils/backgroundImages';
import styles from './ScreenSaver.scss'

export default class ScreenSaver extends React.Component {
    constructor(props) {
        super(props);
    }

    goToHomePage() {
        const { navigate } = this.props.navigation;
        navigate('Home', {name: 'Jesse'})
    }

    render() {
        return (
            <BackgroundImageGallery images={backgroundImages} overlayColor='white' goToNextPage={this.goToHomePage.bind(this)}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>Gino's Italian</Text>
                    <Text style={styles.startButton}>Touch to Start</Text>
                </View>
            </BackgroundImageGallery>
        )
    }
}