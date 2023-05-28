# Stackbit Next.js + Markdown Files Starter

![Screenshot](https://assets.stackbit.com/docs/tutorial-shared-thumb.png)

**ℹ️ This reposoitory is based on [our Getting Started tutorial](https://docs.stackbit.com/getting-started) in its completed state.**

There are two ways to start using this project: importing it via the UI, or developing locally.

## Creating a Stackbit Project via the UI

To create a cloud-based Stackbit project based on this repository, [click here](https://app.stackbit.com/import?mode=duplicate&repository=https%3A%2F%2Fgithub.com%2Fstackbit-themes%2Fnextjs-markdown-starter&validate=auto).

A new GitHub repository with this codebase will be created for you. You can transfer ownership of the duplicated repository to you through the Project Settings.

A live production build of the website on Netlify is automatically provisioned.

## Developing Locally

### Clone this repository

Clone this repository, then run `npm install` in its root directory.

### Run the Website

Run the Next.js development server:

    npm run dev

Visit [localhost:3000](http://localhost:3000).

### Run Stackbit in Local Development Mode

Keep the Next.js development server running, and open a new command-line window in the same directory.

Install Stackbit's CLI tools (once):
    
    npm i -g @stackbit/cli@latest

Run the CLI:

    stackbit dev

Click the displayed link to [localhost:8090/_stackbit](http://localhost:8090/_stackbit) and the visual editor will open.

### Create a Cloud-Based Stackbit Project

To deploy a cloud-based Stackbit project connected to your repository:

1. Push your code to a GitHub repository
1. Open the [import page](https://app.stackbit.com/import) and choose *Use my repository*.

## Support

If you get stuck along the way, [drop into our Discord server](https://discord.gg/HUNhjVkznH) and send a message in the `#documentation` or `#help` channels.
