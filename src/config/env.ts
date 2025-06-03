import { z } from 'zod';
import Config from 'react-native-config';

const envSchema = z.object({
  DUMMY_API_URL: z.string().url(),
});

export const Env = envSchema.parse(Config);
export type EnvSchema = typeof Env;
