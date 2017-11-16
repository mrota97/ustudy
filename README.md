# UStudy

#### Install
1. Clone the repository into a local directory
2. Run `npm i` within the directory
3. Once done, running `gulp dev` will open a browser and will watch files for changes (and automatically reload the page).

#### Page Creation
When creating a page, create a new `.html` file in the `views/` directory. When creating the CSS, make a `.scss` file in the `scss/` folder named `_FILENAME.scss` (FILENAME is the same name as your `.html` file).

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp dev` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp sass` compiles SCSS files into CSS
- `gulp minify-css` minifies the compiled CSS file
- `gulp minify-js` minifies the themes JS file
- `gulp copy` copies dependencies from node_modules to the vendor directory

