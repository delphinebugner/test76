import {View} from 'react-native';

export const ShadowDemo = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 20,
        flexWrap: 'wrap',
        gap: 20,
        flexDirection: 'row',
      }}>
      <BoxShadow boxShadow="0 0 10px rgba(0,0,0,0.1)" />
      <BoxShadow boxShadow="1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15) " />
      <BoxShadow boxShadow="rgba(50, 50, 93, 0.25) 0px 54px 55px, rgba(50, 50, 93, 0.12) 0px -12px 30px, rgba(50, 50, 93, 0.12) 0px 4px 6px, rgba(50, 50, 93, 0.17) 0px 12px 13px, rgba(50, 50, 93, 0.09) 0px -3px 5px" />
      <BoxShadow boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset" />
      <BoxShadow
        boxColor="rgba(240, 46, 170, 0.1)"
        boxShadow="rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
      />
      <BoxShadow boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" />
      <BoxShadow boxShadow="rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px" />
      <BoxShadow boxShadow="rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" />
      <BoxShadow boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset" />
      <BoxShadow boxShadow="0px 9px 30px rgba(255, 149, 5, 0.3)" />
      <BoxShadow boxShadow="0 0 0 2px rgba(218,102,123,1), 8px 8px 0 0 rgba(218,102,123,1)" />
      <BoxShadow boxShadow="0 0 10px rgba(0,0,0,0.1)" />
      <BoxShadow boxShadow="0 0 10px rgba(0,0,0,0.1)" />
    </View>
  );
};

const BoxShadow = (param: {boxShadow: string; boxColor?: string}) => {
  return (
    <View
      style={{
        height: 110,
        backgroundColor: param.boxColor ?? '#F8F9FA',
        aspectRatio: 1,
        boxShadow: param.boxShadow,
        borderRadius: 12,
      }}
    />
  );
};
