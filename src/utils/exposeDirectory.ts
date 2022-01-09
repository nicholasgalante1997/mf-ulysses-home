const fs = require('fs');

export const exposeDirectory = (dirName: string) =>
  fs.readdirSync(dirName).reduce((exposes: any, file: string) => {
    exposes[`./${file.replace(/[.].*$/, "")}`] = `${dirName}/${file}`;
    return exposes;
}, {});
