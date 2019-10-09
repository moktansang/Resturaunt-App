// VENDOR
import React from 'react';
import { Text, View, Dimensions } from 'react-native';

// APP
import styles from './Category.scss'

/**
 * Renders a category component on the Home screen
 * @param {number} height - height of the component
 * @param children
 */
class Category extends React.Component {
    constructor(props) {
        super(props);

        this.device = Dimensions.get('window');
    }

    render() {
        const { scrollTo_Y_Location, height, children } = this.props;
        return (
            <View style={{ height: height, ...styles.category}} onTouchEnd={event => console.log(event)}>
                <Text style={styles.categoryText}>{children}</Text>
            </View>

        )
    }
}

export default Category;