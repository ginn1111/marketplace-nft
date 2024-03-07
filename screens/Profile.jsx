import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  FinanceSection,
  ActionsSection,
  CollectionSection,
} from '@components/Profile';
import InformationSection from '@components/Profile/InformationSection';
import { CollectionData } from '@constants';

const Profile = ({ params }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <InformationSection />
    <FinanceSection />
    <ActionsSection />
    <CollectionSection collections={CollectionData} />
  </SafeAreaView>
);

export default Profile;
