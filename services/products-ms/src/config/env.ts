import z from "zod";

export const envSchema = z.object({
    PORT: z.coerce.number().min(1).max(65535),
    NATS_URLS: z.string().transform((val) => val.split(",")),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().min(1).max(65535),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    throw new Error(`Invalid environment variables: ${parsedEnv.error.issues.map((issue) => issue.message).join(", ")}`);
}

export const env = parsedEnv.data;
