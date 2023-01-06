import * as React from 'react';
import { List } from 'react-native-paper';
import { View, Text } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import StarsComp from '../StarsComp/StarsComp';

const Dropdown = (props) => {
    const { title, vote_average, overview, popularity } = props.info


    return (
        <List.Section style={{ backgroundColor: '#000', marginVertical: 2, borderBottomColor: '#666', borderWidth: 1 }}>
            <List.Accordion style={{ position: 'relative', backgroundColor: '#222', height: 80, justifyContent: 'center' }}
                title={title != null ? title : 'title is unavailable'}
                // title={props.info.title + props.info.title }
                titleNumberOfLines={3}
                titleStyle={{ color: '#fff', fontWeight: '700', fontSize: 16 }}
                description={`👁  ${popularity} Views`}
                descriptionStyle={{ color: '#fff', fontWeight: '700', marginTop: scale(8) }}
            >
                <List.Item title={props.info.overview} titleStyle={{ color: '#fff', fontSize: 15, textAlign: 'left', marginRight: 5 }} titleNumberOfLines={5} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: moderateScale(15), marginBottom: verticalScale(15), }}>
                    <Text style={{ color: '#fff', fontSize: scale(16), marginRight: 5 }}>{vote_average.toPrecision(2)} ratings</Text>
                    <StarsComp data={vote_average} maxStars={10} />
                </View>
            </List.Accordion>
        </List.Section>
    );
};

export default Dropdown;