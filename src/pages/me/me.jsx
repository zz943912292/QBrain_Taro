import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Label } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import avatar from '../../images/avatar.svg'

import './me.less'
import { AtIcon, AtAvatar } from 'taro-ui'

// @connect(({ user }) => ({
//     user
// }), (dispatch) => ({

// }))
export default class Me extends Component {
    config = {
        navigationBarTitleText: '我的',
        navigationBarTextStyle: "black"
    }
    constructor() {
        const app = Taro.getApp();
        console.log(app.state)
        console.log(app.state.statusBarHeight);
        this.state = {
            statusBarHeight: app.state.statusBarHeight,
            navHeight: app.state.nav.height,
            navMarginTop: app.state.nav.top,
            phoneNumber: '************'
        }
    }

    componentWillMount() {
        Taro.getStorage({ key: 'phone_number' })
            .then(res => {
                if (res.data != null) {
                    this.setState({
                        phoneNumber: res.data
                    })
                }

            })
    }

    render() {
        return <View className="wrap">
            <View style={{
                textAlign: 'center',
                height: this.state.navHeight + 'px',
                paddingTop: this.state.navMarginTop + 'px',
                backgroundColor: '#fff',
                lineHeight: this.state.navHeight + 'px'
            }}>我的</View>
            <View className="user">
                {/* <Image src={this.props.user.avatarUrl} className="avatar" /> */}
                <AtAvatar circle image={avatar}></AtAvatar>
                <View className="info">
                    <View className="phone">{this.state.phoneNumber}</View>
                    {/*<View className="edit" onClick={() => {
                        Taro.navigateTo({
                            url: '/pages/edit_info/edit_info'
                        })
                    }}>编辑信息</View>*/}
                </View>
            </View>
            <View className="list">
                <View className="item border" onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/my_report/my_report'
                    })
                }}>
                    我的报告
                    <AtIcon className="icon" value="chevron-right" />
                </View>
                <View className="item border" onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/my_orders/my_orders'
                    })
                }}>
                    我的订单
                    <AtIcon className="icon" value="chevron-right" />
                </View>
                <View>
                    <Button id="contact" hidden={true} openType="contact">he
                    </Button>
                    <Label for="contact" className="item">
                        联系客服
                        <AtIcon className="icon" value="chevron-right" />
                    </Label>
                </View>

            </View>
        </View>
    }
}

