import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import EmptyList from '@/components/EmptyList';
import PrayerCard from '@/components/PrayerCard';
import { AuthRoutes } from '@/navigation/routes';
import { UserStackParamList } from '@/navigation/UserNavigation/UserNavigation';
import { rootRoutines, rootSelectors } from '@/store/ducks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { PrayerType } from '@/types/data';
import Loader from '@/UI/Loader';

import styles from './Followed.module.scss';

type FollowedScreenProps = NativeStackScreenProps<UserStackParamList, AuthRoutes.Root>;

const Followed = () => {
  const { navigate } = useNavigation<FollowedScreenProps['navigation']>();

  const isFocused = useIsFocused();

  const dispatch = useAppDispatch();

  const prayers = useAppSelector(rootSelectors.prayers.getPrayersData);
  const isLoading = useAppSelector(rootSelectors.prayers.getPrayersLoading);

  const isFetching = isLoading && !prayers;

  const handleDelete = (prayerId: PrayerType['id']) => {
    dispatch(rootRoutines.prayers.deletePrayer(prayerId));
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(rootRoutines.prayers.getSubscribedPrayers());
      return () => {
        dispatch(rootRoutines.prayers.cleanPrayers());
      };
    }
  }, [isFocused]);

  const showPrayers = !!prayers && !!prayers.length;

  if (isFetching) {
    return <Loader size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {showPrayers ? (
        <ScrollView>
          {prayers.map((item) => (
            <PrayerCard
              key={item.id}
              title={item.title}
              members={item.subscribersCount}
              complete={item.completesCount}
              onDismiss={() => handleDelete(item.id)}
              onPress={() =>
                navigate(AuthRoutes.Prayer, {
                  id: item.id,
                  title: item.title,
                })
              }
              id={item.id}
            >
              {item.title}
            </PrayerCard>
          ))}
        </ScrollView>
      ) : (
        <EmptyList showArrow={false} text="You haven no subscriptions yet." />
      )}
    </SafeAreaView>
  );
};

export default Followed;
