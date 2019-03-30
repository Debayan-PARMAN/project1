import React from 'react';
import { Text, View, TouchableOpacity, Image, AppRegistry } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChamberSlots } from '../../actions/doctors';
import { ScrollView } from 'react-native-gesture-handler';
import FilterStyle from '../../styelsheets/FilterStyle';
import imageConstantURI from '../../constants/imageConst';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';

class Filter extends React.Component {
   
   static navigationOptions = {
      title: 'FIND DOCTOR',
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

   onValueChange = (value, id) => {
      const { filterValue } = this.props.doctorState;
      filterValue[id] = value;
      this.props.docUpdateState({ filterValue })
      //console.log(filterValue.rating);
   }

    resetAll = (e)=> {
       const filterValue = {
          rating: '',
          availability: '',
          timing: '',
          distance: '',
          fee: '',
          exp: '',
       };
       this.props.docUpdateState({ filterValue });
       
    }

   closeAll = (e) => {
      const filterValue = {
         rating: '',
         availability: '',
         timing: '',
         distance: '',
         fee: '',
         exp: '',
      };
      this.props.docUpdateState({ filterValue });
      this.props.navigation.navigate('SearchDoctor');
   }

   

   render() {
      
      const {filterValue} = this.props.doctorState;
      const withHover = { ...FilterStyle.FirstThreebox1 };
      const withoutHover = { ...FilterStyle.FirstThreebox };
      const withHovertext = { ...FilterStyle.hoverboxText };
      const withoutHovertext = { ...FilterStyle.boxText };
      const withHoverLastbox = { ...FilterStyle.Lastbox };
      const withoutHoverLastbox = { ...FilterStyle.Lastbox1 };

      const resetAll = (
         <View>
            <TouchableOpacity onPress={(e) => this.resetAll(e)} >
               <View style={FilterStyle.resetall}>
                  <Text style={FilterStyle.resetallText}>{en.doctorSearchLabel.resetAllLabel}</Text>
               </View>
            </TouchableOpacity>
         </View>
      );

      const closeAll = (
         <View style={FilterStyle.cross}  >
            <TouchableOpacity onPress={(e) => this.closeAll(e) } >
               <Image style={FilterStyle.crossImage}
                  source={imageConstantURI.closeIcon.src}/>
            </TouchableOpacity>
         </View>
      );

      const anyRating = (
         <TouchableOpacity onPress={() => this.onValueChange('any', 'rating')} >
            <View style={filterValue.rating === 'any' ? withHover : withoutHover} >
               <Text style={filterValue.rating === 'any' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.anyRatingLabel}</Text>
               <View style={FilterStyle.boxImageContainer}>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
               </View>
            </View>
         </TouchableOpacity>
      );

      const Rating2 = (
         <TouchableOpacity onPress={() => this.onValueChange('2+', 'rating')} >
            <View style={filterValue.rating === '2+' ? withHover : withoutHover}>
               <Text style={filterValue.rating === '2+' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.rating2Label}</Text>
               <View style={FilterStyle.boxImageContainer}>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
               </View>
            </View>
         </TouchableOpacity>
      );

      const Rating3 = (
         <TouchableOpacity onPress={() => this.onValueChange('3+', 'rating')} >
            <View style={filterValue.rating === '3+' ? withHover : withoutHover}>
               <Text style={filterValue.rating === '3+' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.rating3Label}</Text>
               <View style={FilterStyle.boxImageContainer}>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
               </View>
            </View>
         </TouchableOpacity>
      );

      const Rating4 = (
         <TouchableOpacity onPress={() => this.onValueChange('4+', 'rating')} >
            <View style={filterValue.rating === '4+' ? withHoverLastbox : withoutHoverLastbox} >
               <Text style={filterValue.rating === '4+' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.rating4Label}</Text>
               <View style={FilterStyle.boxImageContainer}>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src} />
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src} />
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heart.src}/>
                  <Image style={FilterStyle.boxImage}
                     source={imageConstantURI.heartGray.src}/>
               </View>
            </View>
         </TouchableOpacity>
      );

      const Anyday = (<TouchableOpacity onPress={() => this.onValueChange('anyDay', 'availability')} >
         <View style={filterValue.availability === 'anyDay' ? withHover : withoutHover}>
            <Text style={filterValue.availability === 'anyDay' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.anydayLabel}</Text>
         </View>
      </TouchableOpacity>);

      const TodayDay = (
         <TouchableOpacity onPress={() => this.onValueChange('Today', 'availability')} >
            <View style={filterValue.availability === 'Today' ? withHover : withoutHover}>
               <Text style={filterValue.availability === 'Today' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.todayDayLabel}</Text>
            </View>
         </TouchableOpacity>
      );

      const days3 = (
         <TouchableOpacity onPress={() => this.onValueChange('+3', 'availability')} >
            <View style={filterValue.availability === '+3' ? withHover : withoutHover}>
               <Text style={filterValue.availability === '+3' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.days3Label}</Text>
            </View>
         </TouchableOpacity>
      );

      const weekEnd = (
         <TouchableOpacity onPress={() => this.onValueChange('0', 'availability')} >
            <View style={filterValue.availability === '0' ? withHoverLastbox : withoutHoverLastbox}>
               <Text style={filterValue.availability === '0' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.weekEndLabel}</Text>
            </View>
         </TouchableOpacity>
      );


      const today = (
         <TouchableOpacity onPress={() => this.onValueChange('Today', 'timing')} >
            <View style={filterValue.timing === 'Today' ? withHover : withoutHover}>
               <Text style={filterValue.timing === 'Today' ? withHovertext : withoutHovertext}>Today</Text>

            </View>
         </TouchableOpacity>
      );

      const Afternoon = (
         <TouchableOpacity onPress={() => this.onValueChange('Afternoon', 'timing')} >
            <View style={filterValue.timing === 'Afternoon' ? withHover : withoutHover}>
               <Text style={filterValue.timing === 'Afternoon' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.afternoonlabel}</Text>
            </View>
         </TouchableOpacity>
      );

      const Evening = (
         <TouchableOpacity onPress={() => this.onValueChange('Evening', 'timing')} >
            <View style={filterValue.timing === 'Evening' ? withHover : withoutHover}>
               <Text style={filterValue.timing === 'Evening' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.afternoonlabel}</Text>
            </View>
         </TouchableOpacity>
      );

      const Night = (
         <TouchableOpacity onPress={() => this.onValueChange('Night', 'timing')} >
            <View style={filterValue.timing === 'Night' ? withHoverLastbox : withoutHoverLastbox}>
               <Text style={filterValue.timing === 'Night' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.nightLabel}</Text>
            </View>
         </TouchableOpacity>
      );



      const distance1 = (
         <TouchableOpacity onPress={() => this.onValueChange('0-10', 'distance')} >
            <View style={filterValue.distance === '0-10' ? withHover : withoutHover}>
               <Text style={filterValue.distance === '0-10' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.distance1Label}</Text>
            </View>
         </TouchableOpacity>
      );
      const distance2 = (
         <TouchableOpacity onPress={() => this.onValueChange('0-20', 'distance')} >
            <View style={filterValue.distance === '0-20' ? withHover : withoutHover}>
               <Text style={filterValue.distance === '0-20' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.distance2Label}</Text>
            </View>
         </TouchableOpacity>
      );
      const distance3 = (
         <TouchableOpacity onPress={() => this.onValueChange('0-30', 'distance')} >
            <View style={filterValue.distance === '0-30' ? withHover : withoutHover}>
               <Text style={filterValue.distance === '0-30' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.distance3Label}</Text>
            </View>
         </TouchableOpacity>
      );
      const distance4 = (
         <TouchableOpacity onPress={() => this.onValueChange('30+', 'distance')} >
            <View style={filterValue.distance === '30+' ? withHoverLastbox : withoutHoverLastbox}>
               <Text style={filterValue.distance === '30+' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.distance4Label}</Text>
            </View>
         </TouchableOpacity>
      );





      const fee1 = (
         <TouchableOpacity onPress={() => this.onValueChange('0-500', 'fee')} >
            <View style={filterValue.fee === '0-500' ? withHover : withoutHover}>
               <Text style={filterValue.fee === '0-500' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.fee1Label}</Text>

            </View>
         </TouchableOpacity>
      );
      const fee2 = (
         <TouchableOpacity onPress={() => this.onValueChange('500-1k', 'fee')} >
            <View style={filterValue.fee === '500-1k' ? withHover : withoutHover}>
               <Text style={filterValue.fee === '500-1k' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.fee2Label}</Text>

            </View>
         </TouchableOpacity>
      );
      const fee3 = (
         <TouchableOpacity onPress={() => this.onValueChange('1k-2k', 'fee')} >
            <View style={filterValue.fee === '1k-2k' ? withHover : withoutHover}>
               <Text style={filterValue.fee === '1k-2k' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.fee3Label}</Text>

            </View>
         </TouchableOpacity>
      );
      const fee4 = (
         <TouchableOpacity onPress={() => this.onValueChange('2k+', 'fee')} >
            <View style={filterValue.fee === '2k+' ? withHoverLastbox : withoutHoverLastbox}>
               <Text style={filterValue.fee === '2k+' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.fee4Label}</Text>

            </View>
         </TouchableOpacity>
      );



      const exp1 = (
         <TouchableOpacity onPress={() => this.onValueChange('0-5', 'exp')} >
            <View style={filterValue.exp === '0-5' ? withHover : withoutHover}>
               <Text style={filterValue.exp === '0-5' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.exp1Label}</Text>

            </View>
         </TouchableOpacity>
      );
      const exp2 = (
         <TouchableOpacity onPress={() => this.onValueChange('5-10', 'exp')} >
            <View style={filterValue.exp === '5-10' ? withHover : withoutHover}>
               <Text style={filterValue.exp === '5-10' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.exp2Label}</Text>

            </View>
         </TouchableOpacity>
      );
      const exp3 = (
         <TouchableOpacity onPress={() => this.onValueChange('10-20', 'exp')} >
            <View style={filterValue.exp === '10-20' ? withHover : withoutHover}>
               <Text style={filterValue.exp === '10-20' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.exp3Label}</Text>

            </View>
         </TouchableOpacity>
      );
      const exp4 = (
         <TouchableOpacity onPress={() => this.onValueChange('20+', 'exp')} >
            <View style={filterValue.exp === '20+' ? withHoverLastbox : withoutHoverLastbox}>
               <Text style={filterValue.exp === '20+' ? withHovertext : withoutHovertext}>{en.doctorSearchLabel.exp4Label}</Text>

            </View>
         </TouchableOpacity>
      );


      return (
         <View style={FilterStyle.mainWrapper}>
            {/*--- Top Container Start ---*/}
            <View style={FilterStyle.topContainer}>
               <View style={FilterStyle.resetallContainer}>
                  {resetAll}
                  <View style={FilterStyle.filter} >
                     <Text style={FilterStyle.resetallContainerText}>{en.doctorSearchLabel.filterLabel}</Text>
                  </View>
                  {closeAll}
               </View>
            </View>
            {/*--- Top Container End ---*/}
            {/*--- Mid Filter Container Start ---*/}
            <ScrollView>
               <View style={FilterStyle.boxSectionContainer}>
                  <Text style={FilterStyle.boxSectionContainerText}>{en.doctorSearchLabel.minStarRatingLabel}</Text>
                  <ScrollView
                     horizontal
                     pagingEnabled
                     showsHorizontalScrollIndicator={false}>
                     <View style={FilterStyle.boxSection}>
                        {anyRating}
                        {Rating2}
                        {Rating3}
                        {Rating4}
                     </View>
                  </ScrollView>
               </View>
               <View style={FilterStyle.boxSectionContainer}>
                  <Text style={FilterStyle.boxSectionContainerText}>{en.doctorSearchLabel.availabilityLabel}</Text>
                  <ScrollView
                     horizontal
                     pagingEnabled
                     showsHorizontalScrollIndicator={false}>
                     <View style={FilterStyle.boxSection}>
                        {Anyday}
                        {TodayDay}
                        {days3}
                        {weekEnd}
                     </View>
                  </ScrollView>
               </View>
               <View style={FilterStyle.boxSectionContainer}>
                  <Text style={FilterStyle.boxSectionContainerText}>{en.doctorSearchLabel.timingLabel}</Text>
                  <ScrollView
                     horizontal
                     pagingEnabled
                     showsHorizontalScrollIndicator={false}>
                     <View style={FilterStyle.boxSection}>

                        {today}
                        {Afternoon}
                        {Evening}
                        {Night}

                     </View>
                  </ScrollView>
               </View>
               <View style={FilterStyle.boxSectionContainer}>
                  <Text style={FilterStyle.boxSectionContainerText}>{en.doctorSearchLabel.distanceLabel}</Text>
                  <ScrollView
                     horizontal
                     pagingEnabled
                     showsHorizontalScrollIndicator={false}>
                     <View style={FilterStyle.boxSection}>
                        {distance1}
                        {distance2}
                        {distance3}
                        {distance4}
                     </View>
                  </ScrollView>
               </View>
               <View style={FilterStyle.boxSectionContainer}>
                  <Text style={FilterStyle.boxSectionContainerText}>{en.doctorSearchLabel.feeLabel}</Text>
                  <ScrollView
                     horizontal
                     pagingEnabled
                     showsHorizontalScrollIndicator={false}>
                     <View style={FilterStyle.boxSection}>
                        {fee1}
                        {fee2}
                        {fee3}
                        {fee4}
                     </View>
                  </ScrollView>
               </View>
               <View style={FilterStyle.boxSectionContainer}>
                  <Text style={FilterStyle.boxSectionContainerText}>{en.doctorSearchLabel.experienceLabelFilter}</Text>
                  <ScrollView
                     horizontal
                     pagingEnabled
                     showsHorizontalScrollIndicator={false}>
                     <View style={FilterStyle.boxSection}>
                        {exp1}
                        {exp2}
                        {exp3}
                        {exp4}
                     </View>
                  </ScrollView>
               </View>
            </ScrollView>
            {/*--- Mid Filter Container End ---*/}
            {/*--- Apply Filter Container Start ---*/}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('FindDoctorFilter')} >
               <View style={FilterStyle.ApplyFilterContainer}>
                  <Text style={FilterStyle.ApplyFilterText}>{en.doctorSearchLabel.applyFilterLabel}</Text>
               </View>
            </TouchableOpacity>
            {/*--- Apply Filter Container End ---*/}
         </View>

      );

   }
}

Filter.propTypes = {
   doctorDetails: PropTypes.object,
   userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
   userState: state.userState,
   doctorState: state.doctorState,
   common: state.common
});

const mapDispatchToProps = (dispatch) => ({
   ...bindActionCreators({ getChamberSlots, userUpdateState, docUpdateState }, dispatch)
});

AppRegistry.registerComponent('project1', () => Filter);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);