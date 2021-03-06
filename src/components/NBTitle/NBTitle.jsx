import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './NBTitle.less'
export default class NBTitle extends Component {

    render() {
        return <View className={`${this.props.white ? 'w-' : ''}title`}>
            {this.props.children}
        </View>
    }
}