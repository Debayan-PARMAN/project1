import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import imageConst from '../../constants/imageConst';
import Footer_Icons from './Footer_Icons';
import { LinearGradient } from 'expo';
class Footer_Component extends Component {
    render() {
        const { HomeIcon, MyAccountIcon, MyCartIcon, NotificationsIcon, HelpIcon } = imageConst;
        const { loggedIn } = this.props.userState;

        let footerIcons;
        if(!loggedIn) {
            footerIcons = (
                <LinearGradient
                    style={{ paddingTop: 10, paddingBottom: 10, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}
                    colors={['#a25ca8', '#582491']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <Footer_Icons iconLabel={HomeIcon.label} iconSrc={HomeIcon.src} navigation={this.props.navigation} iconLink='Home' />
                    <Footer_Icons iconLabel={NotificationsIcon.label} iconSrc={NotificationsIcon.src} navigation={this.props.navigation} iconLink='Notifications' />
                    <Footer_Icons iconLabel={HelpIcon.label} iconSrc={HelpIcon.src} navigation={this.props.navigation} iconLink='Icon' />
                </LinearGradient>
            );
        } else {
            footerIcons = (
                <LinearGradient
                    style={{ paddingTop: 10, paddingBottom: 10, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}
                    colors={['#a25ca8', '#582491']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <Footer_Icons iconLabel={HomeIcon.label} iconSrc={HomeIcon.src} navigation={this.props.navigation} iconLink='Home' />
                    <Footer_Icons iconLabel={MyAccountIcon.label} iconSrc={MyAccountIcon.src} navigation={this.props.navigation} iconLink='UserProfile' />
                    <Footer_Icons iconLabel={MyCartIcon.label} iconSrc={MyCartIcon.src} navigation={this.props.navigation} iconLink='Cart' />
                    <Footer_Icons iconLabel={NotificationsIcon.label} iconSrc={NotificationsIcon.src} navigation={this.props.navigation} iconLink='Notifications' />
                    <Footer_Icons iconLabel={HelpIcon.label} iconSrc={HelpIcon.src} navigation={this.props.navigation} iconLink='Icon' />
                </LinearGradient>
            );
        }
        return (
            <View Container='Footer'>
                {footerIcons}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    userState: state.userState,
});

export default connect(mapStateToProps)(Footer_Component);