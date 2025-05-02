import { runCommand } from "./commandUtils.js";

export const getGitUserName = () => {
  const name = runCommand("git config user.name");
  if (name) return name;
  return runCommand("git config --global user.name");
};

export const getGitUserEmail = () => {
  const email = runCommand("git config user.email");
  if (email) return email;
  return runCommand("git config --global user.email");
};
