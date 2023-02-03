import { createRoutine } from 'redux-saga-routines';

import { CreatePrayerPayload, DeletePrayerPayload, GetPrayersPayload } from '@/types/payload';
import { PrayerType } from '@/types/data';
import * as prayersActions from './actions';

export const getPrayers = createRoutine(prayersActions.GET_PRAYERS, {
  trigger: (payload: GetPrayersPayload['columnId']) => payload,
  success: (payload: PrayerType[]) => payload,
  failure: (payload: string) => payload,
});

export const createPrayer = createRoutine(prayersActions.CREATE_PRAYER, {
  trigger: (payload: CreatePrayerPayload) => payload,
  success: (payload: PrayerType) => payload,
  failure: (payload: string) => console.log(payload),
});

export const deletePrayer = createRoutine(prayersActions.DELETE_PRAYER, {
  trigger: (payload: DeletePrayerPayload) => payload,
  success: (payload: PrayerType['id']) => payload,
  failure: (payload: string) => payload,
});

export const cleanPrayers = createRoutine(prayersActions.CLEAN_PRAYERS);