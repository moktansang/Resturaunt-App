import React from 'react'
import { Animated, Easing, Dimensions, View, StyleSheet, Text } from 'react-native'

/**
 * @name BackgroundImageGallery
 * @description Create an image gallery that rotates images in a loop
 * @prop {array of pngs} images
 */
export default class BackgroundImageGallery extends React.Component {
    constructor(props) {
        super(props);
        
        // get device dimensions
        this.deviceWidth = Dimensions.get('window').width;
        this.deviceHeight = Dimensions.get('window').height;

        // create a state object for each image passed in
        // in the form state.image1: {...}
        this.state = {};
        props.images.forEach((image, index) => {
            this.state[`image${index}`] = {
                
                // Animated.Value is a way to make a value animatable by react-native
                fadeAnimation: new Animated.Value(0),
                widthAnimation: new Animated.Value(this.deviceWidth),
                heightAnimation: new Animated.Value(this.deviceHeight),
            }
        })
    }

    createImageAnimation({fadeAnimation, widthAnimation, heightAnimation}, delay=0) {
        
        // reset animation values for state object passed in
        fadeAnimation.setValue(0);
        widthAnimation.setValue(this.deviceWidth);
        heightAnimation.setValue(this.deviceHeight);

        /**
         * configure animation for state object
         * 
         * parrallel means run animations at the same time,
         * sequence means run animation one after another
         * 
         * Animated.timing allows you to change the passed in animatable value to the 
         * specified toValue
         */
        return Animated.parallel([
            Animated.sequence([
                Animated.timing(fadeAnimation, {
                    delay: delay,
                    toValue: 1,
                    duration: 5000,
                }),
                Animated.timing(fadeAnimation, {
                    toValue: 0,
                    duration: 5000,
                })
            ]),
            Animated.parallel([
                Animated.timing(widthAnimation, {
                    delay: delay,
                    toValue: this.deviceWidth + 75,
                    easing: Easing.ease,
                    duration: 11000,
                }),
                Animated.timing(heightAnimation, {
                    delay: delay,
                    toValue: this.deviceHeight + 75,
                    easing: Easing.ease,
                    duration: 11000,
                })
            ]),
        ])
    }

    // This componentDidMount() function is a way to tell React to run when
    // the component is rendered
    componentDidMount() {

        // create an animation for each image from props, and add delay so animations only overlap slightly
        animationsArr = this.props.images.map((image, index) => {
            const delay = 5000 * (index+1);
            return this.createImageAnimation(this.state[`image${index}`], delay);
        })

        // run all animations in parrallel, in a loop
        Animated.loop(
            Animated.parallel(animationsArr)
        ).start()
    }

    render() {
        return (
            <View>
                {/* return array of Animated Image components for each image in props.images */}
                {this.props.images.map((image, index) => {
                    return (
                        <Animated.Image
                            style={{
                                // set style attributes to corresponding animated values
                                // i.e. opacity will change according to the value of fadeAnimation
                                opacity: this.state[`image${index}`].fadeAnimation,
                                height: this.state[`image${index}`].heightAnimation,
                                width: this.state[`image${index}`].widthAnimation,
                                ...styles.backgroundImage
                            }}
                            source={image}
                            resizeMethod='scale'
                            key={index}
                        />
                    )
                })}
                {/* <View style={styles.logo}>
                    <Text styles={styles.logo.text}>Gino's Italian</Text>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },

    // logo: {
    //     height: '100%',
    //     width: '100%',
    //     backgroundColor: 'gray',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     zIndex: 0,
    // }
})

