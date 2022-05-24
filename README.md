# Bootstrap Custom Theme

<img src="bootstrap-logo.svg" alt="Bootstrap Logo" width="130" />

## What is this?

This project is used to create a custom Bootstrap theme which is built using Sass (or Less) style sheets and Webpack.

There is a separate folder for each version of Bootstrap, starting with `bootstrap3`. The common Sass style sheets—those that are shared between Bootstrap versions—are located in the `src/scss` root folder. The output is stored in the `bootstrap{version}/dist` folder for each version of Bootstrap (e.g., `bootstrap5/dist/`). Images and fonts are also included in this folder.

This theme is responsive, so adjust your browser width or switch to mobile view to see the mobile design.

> If you are using Bootstrap version 3, please note that when "Sass" style sheets are mentioned in these instructions, you will want to use the "Less" style sheets in the `bootstrap3/src/less` folder. Due to the number of breaking changes, this version of the theme does not use the shared style sheets in the root folder.

## See the demo!

Open the `index.html` file located in the `bootstrap{version}/dist` folder.

## How do I use it?

You have two options:

1. Copy the files to your site and reference them in your code.
2. Build your own theme using this project. (Or incorporate the Sass files into your own project.)

In addition to viewing the HTML source of the `index.html` file, you should also review the documentation on the Bootstrap website. Make sure you're viewing the correct version since docs for v4 and v5 are different!

https://getbootstrap.com

*The version number of Bootstrap and the custom theme appears at the top of each style sheet.*

## Option 1. Copy the files to your site

Open the `bootstrap{version}/dist` folder and copy the `css`, `fonts`, and `images` folders to your site. The *css* and *fonts* folder must reside at the same directory level. Each style sheet contains a corresponding source map (`.map` file) which can be helpful for debugging minified CSS. These files are optional and should be placed in the same directory as the CSS without referencing them in your web pages.

Add the style sheets in this order.

> Note: The first style sheet contains the full Bootstrap theme with brand colors. The second one contains the custom CSS.

```html
<link rel="stylesheet" href="bootstrap-custom-base.min.css" />
<link rel="stylesheet" href="bootstrap-custom.min.css" />
```

Include the following scripts (either downloaded or via a CDN) in this order:

- jquery.min.js (optional for Bootstrap version 5+)
- popper.min.js (*IMPORTANT: use popper.js located in the "umd" folder - not needed for Bootstrap 3*)
- bootstrap.min.js

> The version of bootstrap.min.js should correspond to the version used in the bootstrap-custom style sheets. View the comments at the top of each file for version information.

You can then create a new style sheet to override and extend this theme. *It's recommended that you always create a NEW style sheet instead of modifying this one.*

## Option 2. Build your own theme

**Step 1: Clone**

Clone the repository.

**Step 2: Install packages**

Make sure you have Node.js and npm installed.

From the command line, navigate to the `bootstrap{version}` directory you'd like to build.

```
cd bootstrap5
```

Then install the packages. You'll need to do this for each of the project folders.

```
npm install
```

**Step 3: Start dev server**

```
npm start
```

*As you save your changes, the web page should automatically reload (Live Reload).*

**Step 4: Modify theme**

Modify the common Sass files in the `src/scss` root folder or the project-specific files in the project folder. There are Sass partials for various components, such as `_buttons.scss` and `_typography.scss`

The main `bootstrap-custom.scss` style sheet for each version of Bootstrap is in the corresponding Bootstrap version folder. This file contains the *import* statements for these partials. Example: `@import "buttons";`

Modify the existing style sheets or add additional partials and then import them.

Optionally, modify the `bootstrap{version}/src/index.html` file, or HTML partials, to test the appearance of style changes.

> The `bootstrap-custom-base.scss` style sheet includes the following: `@import "node_modules/bootstrap/scss/bootstrap";`
> 
> This means that all Bootstrap components are included. If you'd like to reduce the file size of your generated CSS, then review the documentation on the Bootstrap website to learn how to import only those components that you require for your project. 

**Step 5: Production Build**

Build the project to generate the output in the `bootstrap{version}/dist` folder. (This is accomplished using Webpack and the `webpack.{env}.js` files.)

```
npm run build
```

Or build all Bootstrap versions.

```
npm run build:all
```

The CSS files are generated in the `dist` folder. Open the `dist/index.html` file to test your changes.

To switch between folders:

```
cd ../
cd bootstrap4
```