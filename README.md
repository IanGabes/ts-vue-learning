# TypeScript / Vue Skeleton

This repo is my own documentation for figuring out the TS/Vue/Webpack ecosystem, with gaps still in my understanding, and explanation for what is currently here. The application is about 4 different Hello World's put together

# Install / Build

Lets get the dependencies:

```
git clone {repo}
sudo apt install node
sudo apt install npm
npm install
```

# Notes on configuration

### Webpack

Webpack is a build system for javascript, running as a javascript application. Our webpack.config.js file is like a router file for all of our random transpilation. Webpack will call "loaders" for various file types. I am not sure how the internals of these work, but it loks like the `ts-loader` will take `.ts(x)?` files, and run them through `tsc`. It also will do this for VueJs `.vue` files, treating them like TypeScript.

There are multiple distributed VueJS builds in the node module we installed. The differences are eplained here: https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds

The builds live in `./node_modules/vue/dist/`. Right now I have chosen to use the runtime build only. The above links tells me that I won't be able to compile templates on the fly with this build (keep it simple so far).

### Tsconfig

The tsconfig file changes how the `tsc` command works for us. I picked `ES2016` as the build target, even though I am not quite sure of te implications of this choice. I assumed it gives me access to newer features of the langauge?

I use `"module": "commonJS"` because the module syntax looks prettier. The difference between what all of the options do was explained to me here:

http://requirejs.org/docs/whyamd.html

This defines the module syntax that we will use to reference other code. I would also consider using the ECMAScript 2015 native syntax, the others look too verbose for my liking so far... But I have not experience yet.

I also followed a guide's recommended config of using `"noImplicitReturns": true` and `"strict": true`, to "have a better experience". Implicit returns seems crazy to me regardless.

### Package Json

I currently wonder how many of the dependencies defined in package.json can be moved to `devDependencies`, as the only runtime dependency I think I have is Vue. One thing that tripped me up initially was having to download typings for Node and Vue. I was aware of the concept of typings (tells typescript what types are what for external JS), but I naively thought this was already being done for me. If I pick up extra dependency's down the road, I am sure I will have to find more typings.

# Run

To transpile the app, run:

`npm run build`

I am still working out how to natively serve these files from node. I think I'll try it with expressjs since I don't know alternatives.
