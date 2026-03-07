import { Text, View, StyleSheet} from 'react-native';

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow} >
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
 infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderBottomColor: '#e0e0e0', 
 },
  labelText: {
    fontSize: 16,
    color: '#333333', 
    fontFamily: 'SF Pro Text',
  },
  valueText: {
    fontSize: 16,
    color: '#0f46df', 
    fontWeight: '600',
  },
});
    
export default InfoRow;