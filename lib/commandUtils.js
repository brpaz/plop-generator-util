import { execSync } from "child_process";

export const runCommand = (cmd) => {
  try {
    return execSync(cmd).toString().trim();
  } catch {
    return "";
  }
};
