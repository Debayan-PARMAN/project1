import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSpecialities, getCountries, getHospitals, getBloodGroupOptions, getGroup} from '../actions/common';
import { getUserProfile, } from '../actions/user';
import { View, ScrollView, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import HomeStyles from '../styelsheets/HomeStyle';
import Header_Component_Menu from '../components/Header/Header_Menu';
import Header_SearchButton from '../components/Header/Header_SearchButton';
import Auto_Carousel from '../components/AutoCarousel';
import {LinearGradient} from 'expo';
import imageConstantURI from '../constants/imageConst';
import styleConstants from '../constants/styleConstants';
import { buttonStyle, } from '../styelsheets/CommonStyle';
import en from '../messages/en-us';

const DeviceWidth = Dimensions.get('window').width;
//const BannerHeight = Dimensions.get('window').width*0.2;
class Home_Screen extends Component {
  constructor(props) {
    super(props);
}
  
  componentDidMount(){
    this.props.getSpecialities();
    this.props.getCountries();
    this.props.getHospitals();
    this.props.getGroup();
    this.props.getBloodGroupOptions();
  }
  onSubmit = () => {
    // console.log('Next Button triggered');
    this.props.getUserProfile();
    this.props.navigation.navigate('UpdateUserProfile');
  }
  onNavigate = () => {
    const { userDetails } = this.props.userState;
    if(userDetails.userId !== ''){
      this.props.navigation.navigate('MyAppointment');
    }
    else
    {
      alert("Please Login or Registration");
      this.props.navigation.navigate('Login');
    }
    
  }
  onNavigate2 = () => {
    const { userDetails } = this.props.userState;
    if (userDetails.userId !== '') {
      this.props.navigation.navigate('MyGroups');
    }
    else {
      alert("Please Login or Registration");
      this.props.navigation.navigate('Login');
    }

  }
  static navigationOptions = {
    title: 'MEDePAL',
    headerBackground: (
      <LinearGradient
        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
        style={{ flex: 1,}}
        start={[0,0]}
        end={[1,1]}
      />
    ),   
    headerTintColor: '#fff',
    headerTitleStyle: {    
    
      textAlign: "center",
      justifyContent: 'center',
      flex: 1,

    },
    headerLeft: (<Header_Component_Menu />),
    headerRight: (<Header_SearchButton />)

  };
  render()   {
    const {userDetails, loggedIn} = this.props.userState;
    //console.log(userDetails)
    let userArea, completeprofileArea ;
    if(loggedIn){
      userArea = (
        <View style={HomeStyles.signin}>
          <Text style={HomeStyles.off_txt_h}>                  
            {en.homeLabels.welcomeLabel} : {userDetails.username}
          </Text>         
        </View>
      );
      completeprofileArea = (
        <View>
          <View style={HomeStyles.completeprofilearea}> 
            <View style={HomeStyles.completeprofile_pContainer}>       
              <Text style={HomeStyles.completeprofile_p}>{en.homeLabels.yourLabel} {en.userScreensLabel.healthProfileHeading} </Text>
            </View> 
              <TouchableOpacity onPress= {() => this.onSubmit()} >
                <View style={HomeStyles.completeprofile}>
                <LinearGradient                 
                  style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]} 
                  colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }} >                
                  <Text style={[buttonStyle.primaryBtnText]}>{en.homeLabels.myprofileLabel}</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            </View>          
        </View>
      );

    } else {
      userArea = (
        <View style={HomeStyles.signin}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <LinearGradient
              style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
              colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }} >              
              <Text style={[buttonStyle.primaryBtnText]}> {en.loginLabels.signInLabel}</Text>             
            </LinearGradient>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle1]}
            onPress={() => this.props.navigation.navigate('Registration')} >
            <Text style={[buttonStyle.secondaryBtnText]}>{en.loginLabels.createAccountLable}</Text>
          </TouchableOpacity>
        </View>
      );     
    }
   
     const offersArea = (
       <View>
         <View style={HomeStyles.offers}>
           <View style={HomeStyles.off_h} >
             <Text style={HomeStyles.off_txt_h}>{en.homeLabels.offersLabel}</Text>
           </View>
           <View style={HomeStyles.off_h_r} >
             <Image style={HomeStyles.off_h_r_i}
               source={imageConstantURI.rightArrow.src} />
           </View>

         </View>
         <View style={HomeStyles.off_f} >
           <Text style={HomeStyles.off_txt_p}>
             {en.homeLabels.dummyTextLabel}
            </Text>
         </View>
       </View>
     );    

    const menuArea = (
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={true}>
        <View style={HomeStyles.ser_Container}>
          <View style={{ width: DeviceWidth, }}>
            <View style={HomeStyles.ser_subContainer}>             
              <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FindDoctor')} >                 
                  <Image style={HomeStyles.ser_icon}
                    source={imageConstantURI.searchDoctor.src} />                 
                     {/* <Text style={HomeStyles.ser_text}>
                        {en.homeLabels.searchDoctorLabel}
                     </Text> */}            
                </TouchableOpacity>
              </View>
              <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={this.onNavigate}>
                  <Image style={HomeStyles.ser_icon}
                    source={imageConstantURI.calender.src} />
                </TouchableOpacity>
                {/* <Text style={HomeStyles.ser_text}>
                  {en.homeLabels.bookAppointmentsLabel}
                    </Text> */}               
              </View>
            </View>

           <View style={HomeStyles.ser_subContainer}>
              <View style={HomeStyles.ser_parent} >
                <TouchableOpacity >
                  <Image style={HomeStyles.ser_icon}
                   source={imageConstantURI.pill.src} />
                </TouchableOpacity>
                {/* <Text style={HomeStyles.ser_text}>
                  {en.homeLabels.myAppointmentLabel}
               
                  </Text> */}
              </View>
              <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={this.onNavigate2} >
                  <Image style={HomeStyles.ser_icon}
                    source={imageConstantURI.medicalRecords.src} />
                </TouchableOpacity>
                {/* <Text style={HomeStyles.ser_text}>
                  {en.homeLabels.groupsLabel}
                  </Text> */}
              </View>
            </View>

           <View style={HomeStyles.ser_subContainer}>
              <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')} >
                  <Image style={HomeStyles.ser_icon}
                    source={imageConstantURI.blood.src} />
                </TouchableOpacity>
                {/* <Text style={HomeStyles.ser_text}>
                  {en.homeLabels.bookTestLabel}
                  </Text> */}
              </View>

              <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')} >
                  <Image style={HomeStyles.ser_icon}
                    source={imageConstantURI.timeLeft.src} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );

    return (
      <View style={HomeStyles.mainWrapper}>
        <ScrollView>
        {/*--- Carousel Start ---*/}
        <View style={HomeStyles.caro}>
          <Auto_Carousel />
        </View>
        {/*--- Carousel End ---*/}

        {/*--- SignIn/CreateAccount Start ---*/}
        {userArea}
        {/*--- SignIn/CreateAccount End ---*/}

        {/*--- Offers & Discount Start ---*/}
         {offersArea}
        {/*--- Offers & Discount End ---*/}

        {/*--- complete profile Area Start ---*/}
         {completeprofileArea}           
        {/*--- complete profile Area End ---*/}

        {/*--- Menu Start ---*/}
          {menuArea}
        {/*--- Menu End ---*/}

      </ScrollView>
      </View>
    );
  }
}

Home_Screen.propTypes = {
  common: PropTypes.object,
}

const mapStateToProps = state => ({
  common: state.common,
  userState: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getSpecialities, getCountries, getUserProfile, getHospitals, getBloodGroupOptions, getGroup}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home_Screen);