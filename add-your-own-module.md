# Add your own module

Want to include your own module into the official list? First of all, you may start by showing it off on our [official discord](https://discord.vrlabs.dev), 
we're always curious to see what other people manage to do with custom modules.

That said, the main way to request the inclusion is to fork this repository and add your own `.yml` file to the modules folder, and then make a pull request with the changes. 
These changes will then be checked out and if everything is ok they will be merged to the main branch.

## Rules

To have the module accepted in this list it has to follow a couple of rules:
- No paid content, the list is meant to be a collection of free resources. If you have a paid module, you can show it off on our [discord](https://discord.vrlabs.dev) instead
- No offensive content
- If it's meant to be used in NSFW contexts, refrain to have NSFW content showed off in the links provided. We don't judge you, but be discreet :)

## Creating the `.yml` file

The `.yml` file contains the basic informations for the modules, such as name, link and descriptions, as well as the informations of the author.
Each author should go inside a separate file.

Here is an example of the yaml structute:

``` yml
- name: Author
  link: https://Author.link.com
  modules:
    - name: Module 1
      link: https://module1.link.com
      description: Description of module 1
      category: name of the category

    - name: Module 2
      link: https://module2.link.com
      description: Description of module 2
      category: name of the category
```

the category should be one of the following:
- Advanced Options
- AudioLink
- Effects
- Lighting
- Textures and Inputs

If you think there should be some other categories listed here, feel free to suggest them in our [discord server](https://discord.vrlabs.dev).
