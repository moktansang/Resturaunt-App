// VENDOR
import React from 'react'
import { Animated, Text, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import * as Font from 'expo-font'

// APP
import styles from './OrderReviewer.scss'
import Device from '../../utils/deviceDimensions'
import OrderConfirmationButton from '../OrderConfirmationButton/OrderConfirmationButton'
import { removeItemFromOrder } from './OrderReviewer.reducer'

/**
 * @name OrderReviewer
 * @param {Animated.Value} animated_X_translation
 */
class OrderReviewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FontsLoaded: false,
        }
        
        this.renderOrderItems = this.renderOrderItems.bind(this);
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Montserrat-Bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
        })
        this.setState({ FontsLoaded: true });
    }

    renderOrderItems() {
        const items = this.props.orderItems.map((item, index) => {
            return (
                <Text key={index}>{`\u2022`}</Text>
            )
        })
        return items;
    }

    render() {
        const { animated_X_translation } = this.props;
        return !this.state.FontsLoaded ? null : (
            <Animated.View style={{ height: Device.height, right: animated_X_translation ? animated_X_translation : 0, ...styles.orderReviewer }}>
                <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 25 }}>Review your Order</Text>
                <View style={styles.orderItems}>
                    <ScrollView>
                        {this.renderOrderItems()}
                    </ScrollView>
                </View>
                <OrderConfirmationButton />
            </Animated.View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state, // for some reason, orderItems won't update without this...
        orderItems: state.Order.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromOrder: (item) => dispatch(removeItemFromOrder(item)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderReviewer);