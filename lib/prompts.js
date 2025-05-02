import { getGitUserEmail, getGitUserName } from "./gitUtils";
import { runCommand } from "./commandUtils.js";

export const promptProjectName = () => ({
  type: "input",
  name: "projectName",
  message: "What is the project name?",
  validate: (input) => (input?.trim() ? true : "Project name is required"),
});

export const promptProjectDescription = () => ({
  name: "projectDescription",
  type: "input",
  message: "What is the project description?",
  validate: (input) =>
    input?.trim() ? true : "Project description is required",
});

export const promptProjectUrl = () => ({
  name: "projectUrl",
  type: "input",
  message: "What is the project URL?",
  validate: (input) => {
    const url = input?.trim();
    if (!url) return "Project URL is required";
    const isValid = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/.test(url);
    return isValid
      ? true
      : "Enter a valid URL (must start with http:// or https://)";
  },
});

export const promptAuthorName = () => ({
  name: "authorName",
  type: "input",
  message: "What is your name?",
  default: getGitUserName,
  validate: (input) => (input?.trim() ? true : "Name is required"),
});

export const promptAuthorEmail = () => ({
  name: "authorEmail",
  type: "input",
  message: "What is your email?",
  default: getGitUserEmail,
  validate: (input) => {
    const email = input?.trim();
    if (!email) return "Email is required";
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid ? true : "Enter a valid email address";
  },
});

export const promptRepositorySlug = () => ({
  name: "repositorySlug",
  type: "input",
  message: "What is the repository slug?",
  default: (answers) => {
    const { repoUrl } = answers;
    const url = new URL(repoUrl);
    return url.pathname.replace(/^\//, "").replace(/\.git$/, "");
  },
  validate: (input) => (input?.trim() ? true : "Repository slug is required"),
});

export const promptRepositoryUrl = () => ({
  name: "repositoryUrl",
  type: "input",
  message: "What is the repository URL?",
  default: () => {
    const gitRemoteUrl = runCommand("git config --get remote.origin.url");
    if (!gitRemoteUrl) {
      return "";
    }

    // Check if the URL is SSH-based
    if (gitRemoteUrl.startsWith("git@")) {
      // Convert SSH URL to HTTPS
      return gitRemoteUrl
        .replace(/^git@/, "https://")
        .replace(":", "/")
        .replace(".git", "");
    }
    return gitRemoteUrl; // Return the HTTPS URL as is
  },
  validate: (input) => {
    const url = input?.trim();
    if (!url) return "Repository URL is required";
    const isValid = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/.test(url);
    return isValid
      ? true
      : "Enter a valid URL (must start with http:// or https://)";
  },
});
