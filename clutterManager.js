const fs = require("fs");
const path = require("path");
const files = fs.readdirSync(__dirname, "utf-8");
let ext;
files.forEach((file) => {
  ext = file.split(".")[file.split(".").length - 1];
  //check if the extension is not null due to folder.
  if (ext != "js" && ext != "json") {
    let splitedFile = file.split(".");
    let eFile = splitedFile[splitedFile.length - 1];

    let dirPath = path.join(__dirname, ext);
    let oldPath = path.join(__dirname, file);
    let newPath = path.join(__dirname, ext, file);
    let stats = fs.statSync(file);

    if (!fs.existsSync(dirPath)) {
      fs.mkdir(path.join(dirPath), (err) => {
        if (err) {
          console.log(`An error occured while creating files ${err}`);
        } else {
          console.log(`${ext} File Created`);
        }
      });
    }
    if (stats.isFile()) {
      console.log(`Moving ${oldPath} to ${newPath}`);

      fs.renameSync(oldPath, newPath);
      console.log(
        "*******The Files are successfully transfered to the Folders*******"
      );
    }
  }
});
