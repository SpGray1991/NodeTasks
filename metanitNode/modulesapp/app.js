//Nth символ строки из файла

/* const fs = require("fs");

 const str = fs.readFileSync("./file.txt", "utf8");
const line = str.split("\n")[50];
const character = String(line).slice(7, 10);

console.log(character);  */

//Запись файла JSON

/* let obj = {
  name: "gray",
  password: 1234,
};

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

storeData(obj, "./store/f.js"); */

//Чтение файла JSON

/* const obj = JSON.parse(fs.readFileSync("./store/f.js", "utf8"));

console.log(obj); */

//Рекурсивный поиск по каталогу

/* const { resolve } = require("path");
const { readdir } = require("fs").promises; 
async function getFiles(dir) {
  // читаем содержимое директории
  const dirents = await readdir(dir, { withFileTypes: true });

  // как и в прошлом примере проходимся по папкам
  // и, при необходимости рекурсивно вызываем функцию
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );

  // преобразуем массив файлов в одномерный
  return Array.prototype.concat(...files);
}


getFiles("../../../test/")
  .then((files) => console.log(files))
  .catch((err) => console.error(err)); */

// Лучший способ dree  с глубиной поиска и норм отображением

/* const dree = require("dree");
const tree = dree.scan("../../../test/");

const options = {
  followLinks: true,
  depth: 3,
  exclude: /dir_to_exclude/,
  extensions: ["txt", "jpg"],
};

const string = dree.parseTree(tree, options);

console.log(string); */

//            API

/* const axios = require("axios");
const fs = require("fs");

const getCategories = () => {
  return axios.get(`https://api.publicapis.org/categories`).then((response) => {
    const obj = JSON.stringify(response.data);
    console.log(obj);
    fs.writeFileSync("obj.js", obj);
  });
};

getCategories(); */
