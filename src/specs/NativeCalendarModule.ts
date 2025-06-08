import { TurboModuleRegistry, type TurboModule } from 'react-native';

export type ReminderEventData = {
  title: string;
  description: string;
  date: number;
};

export type AddReminderStatus = 'saved' | 'deleted' | 'cancelled';

export type AddReminderResult = {
  status: AddReminderStatus;
};

export interface Spec extends TurboModule {
  addReminderEvent(data: ReminderEventData): Promise<AddReminderResult>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeCalendarModule');
