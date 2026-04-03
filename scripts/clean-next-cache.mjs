import { rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const nextDir = path.join(process.cwd(), ".next");

try {
    if (existsSync(nextDir)) {
        await rm(nextDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
        console.log("Cleaned .next cache");
    } else {
        console.log("No .next cache to clean");
    }
} catch (error) {
    console.error("Failed to clean .next cache");
    console.error(error);
    process.exitCode = 1;
}
