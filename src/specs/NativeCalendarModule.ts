import { TurboModuleRegistry, type TurboModule } from 'react-native';

export type ReminderEventData = {
  title: string;
  description: string;
  date: number;
};

export interface Spec extends TurboModule {
  addReminderEvent(data: ReminderEventData): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeCalendarModule');
