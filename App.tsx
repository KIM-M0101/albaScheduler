import React from 'react';
import { SafeAreaView } from 'react-native';
import WorkplaceRegisterScreen from './app/screens/WorkplaceRegisterScreen';

export default function App() {
  // 가짜 navigation 객체 (goBack, navigate 호출 오류 방지용)
  const fakeNavigation = {
    goBack: () => console.log('뒤로가기 눌림'),
    navigate: (screen: string) => console.log(`${screen} 화면으로 이동 시도`),
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WorkplaceRegisterScreen navigation={fakeNavigation} />
    </SafeAreaView>
  );
}
