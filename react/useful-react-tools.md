# Table of Contents

- [Automatically responding to code changes with Live Server](#automatically-responding-to-code-changes-with-live-server)
- [create-react-app](#create-react-app)
  - [create-react-app - troubleshooting](#create-react-app---troubleshooting)
- [React Developer Tools](#react-developer-tools)
- [React forms](#react-forms)
- [Warnings about lists and keys](#warnings-about-lists-and-keys)

# Automatically responding to code changes with Live Server

- On command line: `npm install -g live-server`
- Then: `live-server`
    - This will automatically launch the default browser. When you make a change to any file, the browser will reload the page - unless it was a CSS file in which case the changes are applied without a reload.
- [More here](https://www.npmjs.com/package/live-server)

# create-react-app

- Getting started: `npx create-react-app firstapp`

## create-react-app - troubleshooting

- If you get an error saying you have the wrong Node version:
  - You can use [the installer](https://nodejs.org/en/download/current/) to upgrade Node to get the latest version.
  - If on Windows, you then find you can't run node commands on the command line even after restart....
  - It might be that only your system path has been updated and not your user path.
  - Solution:
    - Use Windows button to search for "environment variables" and select "Edit the system environment variables"
    - Click Environment variables
    - Find the path variable under user variables. Select it and click Edit...
    - If you can't see `C:\Program Files\nodejs` or `C:\Program Files (x86)\nodejs` listed, click New and add it (check your file explorer to see which version is correct).

# React Developer Tools

- Chrome extension, v useful. Can be [found here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en).

# React forms

- [useful demo here](https://www.w3schools.com/react/react_forms.asp)
- [Passing data and events between React components](https://www.freecodecamp.org/news/pass-data-between-components-in-react)

# Warnings about lists and keys

[See here](https://reactjs.org/docs/lists-and-keys.html#keys)