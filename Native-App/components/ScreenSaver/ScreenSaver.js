// VENDOR
import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// APP
import BackgroundImageGallery from '../BackgroundImageGallery/BackgroundImageGallery'
import backgroundImages from '../../utils/backgroundImages';
import styles from './ScreenSaver.scss'
import { updateCurrentPage } from '../AppNavigator/AppNavigator.reducer'

class ScreenSaver extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.updateCurrentPage("ScreenSaver");
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentPage: (currentPage) => dispatch(updateCurrentPage(currentPage))
    }
}

export default connect(null, mapDispatchToProps)(ScreenSaver);