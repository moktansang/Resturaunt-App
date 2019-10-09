// VENDOR
import React from 'react'
import { Image, View, SafeAreaView } from 'react-native'

// APP
import styles from './Checkout.scss'
import Device from '../../utils/deviceDimensions'
import DeviceSafeMargins from '../../utils/DeviceSafeMargins'

// APP-COMPONENTS
import Overlay from '../Overlay/Overlay'

const receiptImage = require('../../assets/invoice.png');

/**
 * @name Checkout
 * @description When clicked, will pull out order review bar and show backdrop
 */
class Checkout extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
        }

        this.closeReviewBar = this.closeReviewBar.bind(this);
        this.openReviewBar = this.openReviewBar.bind(this);
    }

    closeReviewBar() {
        this.setState({ open: false });
    }

    openReviewBar() {
        this.setState({ open: true });
    }

    render() {
        const { open } = this.state;
        return (
            <View style={styles.checkoutWrapper}>
                { open ? <Overlay bgColor={'black'} onTouch={this.closeReviewBar} /> : null }
                <View style={{ marginTop: DeviceSafeMargins.iPad.top, ...styles.checkoutContainer}} onTouchEnd={() => this.openReviewBar()}>
                    <Image source={receiptImage} style={styles.checkoutIcon} />
                </View>
            </View>
        )
    } 
}

export default Checkout;