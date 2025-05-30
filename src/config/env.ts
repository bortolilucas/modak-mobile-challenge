import { z } from 'zod';
import Config from 'react-native-config';

const EnvSchema = z.object({
  DUMMY_API_URL: z.string().url(),
});

export const Env = EnvSchema.parse(Config);
