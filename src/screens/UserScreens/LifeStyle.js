
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, } from '../../actions/user';
import { getStates } from '../../actions/common';
import { Modal,View, Text,TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import imageConstantURI from '../../constants/imageConst';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class LifeStyle extends Component {
   static navigationOptions = {
      title: 'LIFE STYLE',
      headerBackground: (
         <LinearGradient
            colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
            style={{ flex: 1, }}
            start={[0, 0]}
            end={[1, 1]}
         />
      ),   
      headerTintColor: '#fff',
      headerTitleStyle: {
         textAlign: "center",
         justifyContent: 'space-around',
         flex: 1
      },
      headerRight: (<Header_Blank />)
   };


   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (  
        
         <View style={{ flex: 1,backgroundColor:'#fff'}}>
            <View style={{ flex: 1, height: 35, marginTop: 20, backgroundColor: '#fff',alignItems: 'center',}}>
               <View style={{ width: 300, height: 32, flexDirection: 'row',justifyContent: 'center', alignItems: 'center',borderColor:'#972493',borderWidth: 1}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateUserProfile')} >
                     <View style={{ width: 100, height: 30, justifyContent: 'center',borderRightWidth: 1,borderColor:'#972493',}} >
                        <Text style={{ fontSize: 15, textAlign: 'center' }}>{en.userScreensLabel.personalTabLabel}</Text>
                     </View>
                  </TouchableOpacity>
                  <View style={{width: 100,height: 30,justifyContent: 'center',borderRightWidth: 1,borderColor:'#972493',}}>
                     <Text style={{ fontSize: 15, textAlign: 'center' }}>{en.userScreensLabel.medicalTabLabel}</Text>
                  </View>
                  <View style={{ width: 100, height: 30, alignItems: 'center', backgroundColor: '#972493',}} >
                     <Text style={{ fontSize: 15, color: '#fff', marginTop: 4 }}>{en.userScreensLabel.lifestyleTabLabel}</Text>
                  </View>
               </View>

              <View style={{ width: 350, height: 70,marginTop: 20,borderBottomWidth: 1,borderBottomColor:'#972493' }} >
                <View style={{ width: 350, height: 30,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                     <Text style={{ fontSize: 16, textAlign: 'center', padding: 5, fontWeight: 'bold' }}>{en.userScreensLabel.occupationLabel}</Text>                 
                 
                        <TouchableOpacity onPress={() => { this.toggleModal(true) }}>                          
                        <View style={{ width: 65, height: 28, justifyContent: 'center', backgroundColor: '#972493',borderRadius: 5 }}>
                           <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>{en.commonLabel.addBtnLabel}</Text>
                        </View>        
                        </TouchableOpacity>                                               
               </View>
                  <Text style={{ fontSize: 15, padding: 5 }}>{en.commonLabel.noRecordMsg}</Text> 
              </View>  

               <View style={{ width: 350, height: 70, marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#972493' }} >
                  <View style={{ width: 350, height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                     <Text style={{ fontSize: 16, textAlign: 'center', padding: 5, fontWeight: 'bold' }}>{en.userScreensLabel.excerciseLabel}</Text>
                     <View style={{ width: 65, height: 28, justifyContent: 'center', backgroundColor: '#972493', borderRadius: 5 }}>
                        <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>{en.commonLabel.addBtnLabel}</Text>
                     </View>
                  </View>
                  <Text style={{ fontSize: 15, padding: 5 }}>{en.commonLabel.noRecordMsg}</Text>
               </View>                
            </View>            

            <Modal position={'center'}
               animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>                          
             <View style={{ flex: 0.20, height: 35,justifyContent: 'center', }}>
              
                  <Text style={{ fontSize: 17, fontWeight: 'bold', padding: 10, marginTop: 10 }}>{en.userScreensLabel.occupationHeadingLabel}</Text>  
                
                  <Text style={{ fontSize: 16, padding: 10, }}>{en.userScreensLabel.jobNatureLabel}</Text>
              
              </View> 
               <View style={{ flex: 0.1, height: 35, marginTop: 10, flexDirection: 'row', justifyContent: 'center',alignItems:'center'}}>
                 
                  <View style={{ width: 110, height: 35, backgroundColor: '#972493', borderWidth: 1,borderColor:'#972493',justifyContent: 'center',alignItems:'center'}}>
                     <Text style={{ textAlign: 'center', color: '#fff', }}>{en.userScreensLabel.sedentaryTabLabel}</Text>

                     </View>
                
                     <View style={{ width: 110, height: 35, borderWidth: 1,borderColor:'#972493',justifyContent: 'center',alignItems:'center' }}>
                     <Text style={{ textAlign: 'center', color: '#000' }}>{en.userScreensLabel.semiSedentaryTabLabel}</Text>

                     </View>
                  <View style={{ width: 110, height: 35, borderWidth: 1,borderColor:'#972493', justifyContent: 'center',alignItems:'center'}}>
                     <Text style={{ textAlign: 'center', color: '#000' }}>{en.userScreensLabel.nonSedentaryTabLabel}</Text>

                  </View>
                
               </View> 

               <View style={{ height: 65, marginTop: 10,padding:5}}>
                  <Text style={{ padding: 5, fontSize: 15 }}>{en.userScreensLabel.jobTypeLabel}</Text>
                  <TextInput
                     style={{ height: 35, borderColor: '#972493', padding: 5, borderBottomWidth: 1, borderColor: '#972493', }}
                    
                  //value={userDetails.addressDetails.addressType}
                  // onChangeText={(e) => this.onValueChange(e, 'addressType')}
                  />
               </View>

               <View style={{ height: 65,width:120, marginTop: 10,padding:5 }}>
                  <Text style={{ padding: 5, fontSize: 15 }}>{en.userScreensLabel.workingHoursLabel}</Text>
                  <TextInput
                     style={{ height: 35, borderColor: '#972493', padding: 5, borderBottomWidth: 1, borderColor: '#972493',}}
                    // placeholder="Provide Email Address"
                  //value={userDetails.addressDetails.addressType}
                  // onChangeText={(e) => this.onValueChange(e, 'addressType')}
                  />
               </View>


               <View style={{ flex: 0.1, height: 40, marginTop: 30, flexDirection: 'row', justifyContent: 'center',}}>
                  <TouchableOpacity onPress={() => {
                     this.toggleModal(!this.state.modalVisible)}}>  
                     <View style={{ width: 120, height: 35, backgroundColor: '#972493', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', justifyContent: 'center', }}>{en.commonLabel.cancelBtnLabel}</Text>

                     </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { }} >
                     <View style={{ width: 120, height: 35, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor:'#972493', marginLeft: 20, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', color: '#000', justifyContent: 'center', }}>{en.commonLabel.saveBtnLabel}</Text>

                     </View>
                  </TouchableOpacity>
               </View>                  
      
            </Modal>            
            <Footer navigation={this.props.navigation} />
         </View>
      )
   }
}
LifeStyle.propTypes = {
   userDetails: PropTypes.object,
   commonState: PropTypes.object
}
const mapStateToProps = state => ({
   userState: state.userState,
   commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
   ...bindActionCreators({ updateState, LifeStyle, getStates }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LifeStyle);
const styles = StyleSheet.create ({
   // container: {
   //    flex:1,     
   //    backgroundColor: '#ede3f2',      
   // },
   // modal: {
   //    flex: 0.5,     
   //    alignItems: 'center',
   //    backgroundColor: '#ccc',
      
   // },
   text: {
      color: '#3f2949',    
      fontSize:15,
      textAlign:'center'
   }
})