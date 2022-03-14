const fs = require('fs');
const yaml = require('js-yaml');

try {

    let files = fs.readdirSync('Modules/');

    var elements = [];

    files.forEach(element => {
        if (element.substring(element.lastIndexOf('.') + 1) == "yml") {
            let fileContents = fs.readFileSync('Modules/' + element, 'utf8');
            let data = yaml.load(fileContents);
            //console.log(data['modules']);
            data.forEach(author => {
                author.modules.forEach(module => {
                    elements.push({
                        module: module,
                        author: author.name,
                        authorLink: author.link
                    });
                });
            });
        }
    });

    elements.sort((a, b) => {
        if (a.module.category > b.module.category) return 1;
        if (a.module.category < b.module.category) return -1;
        if(a.module.name > b.module.name) return 1;
        else return -1;
    });

    var content = fs.readFileSync('header.md', 'utf8');

    var currentCategory = "";

    elements.forEach(element => {

        if (currentCategory != element.module.category) {
            currentCategory = element.module.category;
            content += "\n## " + currentCategory + "\n\n";
        }

        content += `- [${element.module.name}](${element.module.link}) by [${element.author}](${element.authorLink}): ${element.module.description}\n`
    });

    fs.writeFileSync('README.md', content);
} catch (e) {
    console.log(e);
}
