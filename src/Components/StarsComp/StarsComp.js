import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating';
// import { NoteContext } from '../../Redux/Context/DataProvider';

const StarsComp = ({ data, starSize, starStyle, maxStars, starsColor }) => {
  console.log("stars ==== ", data)


  return (
    <View style={{ width: "50%" }}>
      <StarRating
        disabled={false}
        maxStars={maxStars}
        rating={data}
        // selectedStar={(rating) => onStarRatingPress(rating)} //This only for if you want give ratings but here we seted stars numbers which is fetching from api that's why we can't press the stars 
        fullStarColor={starsColor}
        starSize={starSize}
        // starStyle={{width:20}}
        starStyle={[styles.starsContainer, starStyle]}
      />
    </View>
  )
}

StarsComp.propTypes = {
  starStyle: PropTypes.object,
  maxStars: PropTypes.number,
  starSize: PropTypes.number,
  starsColor: PropTypes.string
};

StarsComp.defaultProps = {
  starSize: 15,
  maxStars: 5,
  starsColor: 'yellow'
};

export default StarsComp

const styles = StyleSheet.create({
  starsContainer: {
    width: 20
  }
})