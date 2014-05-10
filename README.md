new-irish-cream
===============
# This module will be used to store shared modules and libraries

motivation:

<sub> sharing our libraries will prevent different projects who have didn't versions of the same library, that will make sure that all our products are compatible with each other and it's possible in the future to sene the library only ones to a users brower who has more than one of our apps </sub>

# How to use this

1. clone new-irish-cream in the parent directory of your poejct `git clone git@abeadam/new-irish-cream`'

2. copy bower.json and GruntFile.js and package.json to your project - you can append the content of devDependencies to your package.json if you already have one.

3. run npm install

4. edit bower.json to make it include only the libraries you care about

5. run grunt file `grunt` 

now you will get a vendors folder tha has all the shared libraries


