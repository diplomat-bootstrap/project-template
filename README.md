## Bootstrap for application development using Webpack, Babel, Angular and Karma

This is a skeleton of a project, which uses named tools in development. Webpack is a great tool for project compiling and increasing modularity. JavaScript, styles and assets can be compiled and packed all together, which decreases load on server and improves page load time. Babel is an ES6 preprocessor, which makes possible to use almost all ES6 features today for all browsers.

### Architectural choices
 
Project structured not in standard MVC-fashion (app/{controllers,directives,views,...}). For sake of modularity and support by the middle-sized team it divided into logical sections - just like `home`, `users` etc. Each section contains controllers, views, services etc. 
  
`components` folder is separated from  the rest of structure and will be a placeholder of a common-usable components. Each component is a git-submodule. This decision was made for sake of high reusable nature of code-base - component should be used in all sub-projects of the umbrella project. 

### Components

#### Developing new component

_TBD_

#### Testing components

_TBD_

#### Injecting components into existing project

_TBD_


### Project structure

```
.
├── README.md
├── app
│   ├── application.js                   - application entry point, configuration and routing
│   ├── components                       - placeholder for components
│   │   ├── hello                        - sample component
│   │   │   ├── index.js                 - component controller
│   │   │   ├── spec                     - component's tests
│   │   │   │   └── component.test.js
│   │   │   ├── styles.styl              - component's styles
│   │   │   └── template.html            - component's template
│   │   └── index.js                     - component's linker
│   └── home                             - section placeholder
│       ├── controllers                  - section controllers placeholder
│       │   └── home.js
│       └── templates                    - section templates placeholder
│           └── index.html
├── dist                                 - placeholder for compiled files
│   ├── bundle.js
│   └── bundle.js.map
├── index.html                           - application main template
├── karma.conf.js                        - Karma configuration file
├── package.json                         - NPM configuration file
└── webpack.config.js                    - Webpack configuration file
```

### Links

#### Angular architectural patterns
- [AngularJS Best Practices: Directory Structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
- [Angular Style Guide](https://github.com/mgechev/angularjs-style-guide)
- [The Top 10 Mistakes AngularJS Developers Make](https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make)

#### Testing Angular
- [Mocking Dependencies in AngularJS Tests](http://www.sitepoint.com/mocking-dependencies-angularjs-tests/)

#### Webpack
- [Video: OSCON 2014: How Instagram.com Works; Pete Hunt](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)