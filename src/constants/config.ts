import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_POKEAPI_BASE_URL: z.string().url(),
    VITE_TEST_SLOW_API: z.string()
  },
  isServer: false,
  runtimeEnv: import.meta.env,
});
