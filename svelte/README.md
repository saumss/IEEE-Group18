# SSL Checker

## Demo

![ssl-cheker](./public/ssldemo.gif)

## Table of contents

- Prerequisites
- Project Overview
- Getting Started
  - Installation guide
  - How to run this project on your local system
  - Demo to run scripts
- Further development and contribution 
- Aknowledgements and Useful resources

## Prerequisites
Hi😃, this app uses Svelte, Node.Js, Express. You should know the basics to start with this small project. Even if you are a beginner don't go anywhere, we are here to help you how to run this app on your device.

## Project Overview
This web app gives information about SSL-Certificate of a website. It is extremely useful tool for developers who want to check if their website has ssl-certificate installed correctly or not. 

**Fetching the data**: To fetch ssl-certificate information of any hostname, we use ssl-verifier npm package. 

**Node and Express**: To handle post request from user and return the results/data. 

**Svelte**: To display the results, we use conditional rendering in Svelte.  


## Getting Started
### Installation
Before getting started <br>
download [git](https://git-scm.com/download/) <br>
download [node](https://nodejs.org/en/download/) (LTS version)<br>
Skip this part if already installed these <br><br>

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). 

After installation configure git by your user name and email.
```powershell
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

// check configuration
$ git config user.name 
John Doe
$ git config user.email 
johndoe@example.com

```

## Run this project on your local machine 
## Cloning the Project 
Hope you have already setup your git. Select any folder and open with git bash, in which you will have the cloned project.

Now run following commands.
```powershell
$ git clone https://github.com/saumss/IEEE-Group18.git
# you will se these messeges
# remote: Enumerating objects: 6, done.
# remote: Counting objects: 100% (6/6), done.
# remote: Compressing objects: 100% (3/3), done.
# remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
# Receiving objects: 100% (6/6), done.
```

## Running the server
After clonning you need to go inside IEEE-Group18 folder. This is root directory of this project and make sure you are in main branch. 

Now install all the dependencies to run our server. <br>
Firstly install dependencies used by server in root directory. 

Follow these commands
```powershell
$/IEEE-Group18(main) npm install
# added 88 packages, and audited 89 packages in 25s
# 14 packages are looking for funding
# found 0 vulnerabilities

$/IEEE-Group18(main) npm install nodemon
# added 32 packages, and audited 121 packages in 8s
# 17 packages are looking for funding
#   run `npm fund` for details
# found 0 vulnerabilities

$/IEEE-Group18(main) npm run server
# > ssl-checker@1.0.0 server
# > nodemon server.js --ignore '/svelte'
# [nodemon] 2.0.20
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching path(s): *.*
# [nodemon] watching extensions: js,mjs,json
# [nodemon] starting `node server.js`
# server started at port : 3000 

Now the server is running and live at your local host at port 3000. 
```

## Running the app
To run the app go inside svelte folder. <br>
Run these commands<br>
```powershell
# to go inside svelte folder run 
$/IEEE-Group18(main) cd .\svelte\
$/IEEE-Group18/svelte(main) 


// now you are inside svelte
follow these commands

$/IEEE-Group18/svelte(main) npm install
# added 24 packages, and audited 25 packages in 4s
# 4 packages are looking for funding
#   run `npm fund` for details
# found 0 vulnerabilities

$/IEEE-Group18/svelte(main) npm run dev 

# > svelte@0.0.0 dev
# > vite

# Forced re-optimization of dependencies

#   VITE v4.0.4  ready in 664 ms

#   ➜  Local:   http://127.0.0.1:5173/
#   ➜  Network: use --host to expose

you will see these messages when your app starts. Paste this link to your browser to open the website. 
```

## Further Development and Contribution Guidelines

## Acknowledgements and Useful Resources

## Svelte Specific Resources

### Need an official Svelte framework?
Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

### Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```