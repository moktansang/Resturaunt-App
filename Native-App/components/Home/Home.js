// VENDOR
import React from 'react'
import { Text, Animated, View, ScrollView, Dimensions, SafeAreaView } from 'react-native'

// APP
import DeviceSafeMargins from '../../utils/DeviceSafeMargins'
import Category from '../Category/Category'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.device = Dimensions.get('window');
        
        const safeAreaHeight = this.device.height - (2 * DeviceSafeMargins.iPad.top);
        this.intervalSize = safeAreaHeight / 5;
        this.scrollInset = (this.device.height / 2) - (this.intervalSize / 2);
        this.array = new Array(5).fill('DESSERT', 0, 99);

        this.scrollToTop = this.scrollToTop.bind(this);
        this.scrollTo_Y_Location = this.scrollTo_Y_Location.bind(this);
    }

    scrollToTop() {
        this.scrollViewReference ? 
            this.scrollViewReference.scrollTo({ x: 0, y: -this.device.width, animated: false }) :
            null;
    }

    scrollTo_Y_Location(pageY) {
        this.scrollViewReference ?
            this.scrollViewReference.scrollTo({ x: null, y: pageY, animated: true }) :
            null;
    }



    render() {
        return (
            <SafeAreaView style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: this.device.height, width: this.device.width }}>
                <ScrollView
                    // create a reference so that we can call built in methods
                    ref={ ref => this.scrollViewReference = ref }
                    // when fully loaded, scroll to top
                    onContentSizeChange={() => this.scrollToTop()}
                    style={{ width: this.device.width }}
                    decelerationRate="fast"
                    snapToInterval={this.intervalSize}
                    snapToAlignment="center"
                    contentInset={{ top: this.scrollInset, bottom: this.scrollInset }}
                >
                    {this.array.map((val, index) => (
                        <Category scrollTo_Y_Location={this.scrollTo_Y_Location} height={this.intervalSize} key={index}>
                            {val}
                        </Category>
                    ))}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home;