import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  Button,
  Flex,
  getColors,
  StyleSheet,
  Text,
  validators,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';
import {useLanguage} from '../../utils/useLanguage';
import AppointmentDetails from './AppointmentDetails';
import AppointmentDetailsProfile from './AppointmentDetailsProfile';
import RecordVitalsData from './RecordVitalsData';
import RecordVitalsPopup from './RecordVitalsPopup';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);
const {isEmpty} = validators;
const {THIS_FIELD_REQUIRED} = useLanguage;

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  addBtn: {
    backgroundColor: PRIMARY_COLOR_500 + 10,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 20,
  },
  startBtn: {
    marginVertical: 16,
  },
  rescheduleBtn: {
    marginBottom: 70,
  },
  endAppoimentBtn: {
    marginTop: 50,
    marginBottom: 32,
  },
  reBookingBtn: {
    marginVertical: 16,
  },
});

export type formType = {
  bodyTemperature: string;
  bloodPressure: string;
  bloodSugar: string;
  bodyWeight: string;
};
const initialValues: formType = {
  bodyTemperature: '',
  bloodPressure: '',
  bloodSugar: '',
  bodyWeight: '',
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.bodyTemperature)) {
    errors.bodyTemperature = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.bloodPressure)) {
    errors.bloodPressure = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.bloodSugar)) {
    errors.bloodSugar = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.bodyWeight)) {
    errors.bodyWeight = THIS_FIELD_REQUIRED;
  }
  return errors;
};

const AppointmentDetailsScreen = () => {
  const [isAddData, setAddData] = useState(false);
  const [status, setStatus] = useState<string>('upcomming');
  const [isData, setData] = useState<formType>();
  const navigation = useNavigation();
  const handleAddDataOpen = () => setAddData(true);
  const handleAddDataClose = () => setAddData(false);
  const handleSave = (values: formType) => {
    setData(values);
    handleAddDataClose();
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSave,
    validate,
  });
  const handleNavigateHistroy = () => {
    navigation.navigate('AppointmentHistoryScreen');
  };
  const handleDetailedScrren = () => {
    navigation.navigate('PrescriptionScreen');
  };

  const handleStartAppointment = () => {
    setStatus('inprogressHalf');
  };

  const handleFullView = () => {
    if (status === 'inprogressHalf') {
      setStatus('inprogress');
    } else if (status === 'completedHalf') {
      setStatus('completed');
    }
  };

  const handleEndAppointment = () => {
    setStatus('completedHalf');
  };

  const handleReBookAppointmet = () => {
    setStatus('upcomming');
  };

  const completed = status === 'completed' || status === 'completedHalf';
  const inprogress = status === 'inprogress' || status === 'inprogressHalf';
  const upcomming = status === 'upcomming';

  return (
    <>
      <RecordVitalsPopup
        open={isAddData}
        formik={formik}
        close={handleAddDataClose}
      />
      <ScrollView style={styles.overAll}>
        <Flex>
          <AppointmentDetailsProfile
            handleNavigateHistroy={handleNavigateHistroy}
          />
          <Text type="heading500">Record Vitals:</Text>
          {isData && <RecordVitalsData isData={isData} />}
          <Button onClick={handleAddDataOpen} overrideStyle={styles.addBtn}>
            <Text color="theme" size={14}>
              + Add Data
            </Text>
          </Button>

          <AppointmentDetails
            handleDetailedScrren={handleDetailedScrren}
            status={status}
            handleFullView={handleFullView}
          />

          <View style={styles.rescheduleBtn}>
            {upcomming && (
              <>
                <Button
                  overrideStyle={styles.startBtn}
                  onClick={handleStartAppointment}>
                  Start Appointment
                </Button>
                <Button type="secondary">Reschedule</Button>
              </>
            )}
            {completed && (
              <Button
                type="primary"
                onClick={handleReBookAppointmet}
                overrideStyle={styles.reBookingBtn}>
                Re-book Appointment
              </Button>
            )}
            {inprogress && (
              <Button
                type="secondary"
                onClick={handleEndAppointment}
                overrideStyle={styles.endAppoimentBtn}>
                End Appointment
              </Button>
            )}
          </View>
        </Flex>
      </ScrollView>
    </>
  );
};

export default AppointmentDetailsScreen;
