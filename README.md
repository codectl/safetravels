# safetravels

Safe Travels is a Web Application aimed for passengers wanting to travel internationally focusing on safety advising with an important look over the COVID19 worldwide guidelines and updates. The application is developed under the MERN stack.

## Project structure

    .
    ├── ...
    ├── client                  # The React application
    │   ├── ...                 # ...
    │   └── package.json        # Client dependencies and configs
    ├── server                  # The Express application
    │   ├── bin                 # Executables (e.g. start the server)
    │   ├── models              # Database models
    │   ├── routes              # Web routes
    │   ├── .env                # Environment variables (hidden file)
    │   ├── app.js              # Initialize the app
    │   └── package.json        # Server dependencies and configs
    ├── LICENSE                 # License file
    ├── package.json            # Project description and general configs
    └── README.md               # This file

## Quickstart

The full list of available options can be found on ```package.json```:

* ```npm run install:client```: install dependencies for the client application;
* ```npm run install:server```: Install dependencies for the server application.
* ```npm run start:dev:client```: Run dev client application.
* ```npm run start:dev:server```: Run dev server application.

## Useful links

A list of important links found during the development of this project:

[Starting a MERN stack project.](https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack) -
Good tips on how to start a MERN project.

[Installing MongoDB on Ubuntu.](https://linuxhint.com/install_mongodb_linuxmint/) - Steps on installing MongoDB. For
Ubuntu and similar only.

[Choosing _mongoose_ over mongodb native driver.](https://developer.mongodb.com/article/mongoose-versus-nodejs-driver) -
"_In addition to enforcing a schema, Mongoose \[...\] offers a variety of hooks, model validation, and other features
aimed at making it easier to work with MongoDB._"

[JavaScript conventions](https://google.github.io/styleguide/jsguide.html) -
Coding standards defined by Google that can help write better
JavaScript code.

## Additional notes

### Creating a React app from a template

The steps can be followed from the official documentation, [here](https://reactjs.org/).
As recommended, run:

```bash
$ npx create-react-app client
```

As mentioned, if ```npm``` version is below 5.6, then ```npx``` package is not installed.
To upgrade ```npm``` to the latest version globally:

```bash
$ sudo npm install npm@latest -g
$ npm --version
6.14.8
```

Alternatively, as a workaround, globally installing ```create-react-app``` will fix it as well:

```bash
$ sudo npm install create-react-app -g
```

## Gitflow

In order to have some structure, and considering there are multiple contributors, the project follows some basic gitflow. The current branches are:

* ```master```: a stable project version. Every delivered functionality
works and is does not conflict with other present features.
  
* ```develop```: pre-production environment. It may contain work under
development, but **it must run**. Conflicts with other features should
not exist or be kept to a minimum.

### Starting a new feature

When starting a new feature, start from ```develop``` branch and create
the new feature branch. A typical flow would look like this:

```bash
$ git checkout develop
$ git checkout -b feature/<feature name>
# ... developing code
$ git add <files>
$ git commit -m "<some message>"
$ git push -u origin feature/<feature name>
```

Once the feature is finished and ready to merge, I recommend creating
a [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
to ```develop```. That way, everyone in the group gets
a chance to review the code. There are great benefits in doing so:

1. We all make mistakes. Reviewing the code can prevent it from
happening.
   
2. Everyone gets acquainted with the code each one produces in a more
organized manner.
   
3. Looking at each other's code we can be critical about the code
we write, make suggestions, start discussions and basically learn
since we are all starting from scratch.

## License

[MIT](https://github.com/Bgrandez/ait618-group2#LICENSE)
