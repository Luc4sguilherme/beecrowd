import fs from "fs";
import axios from "axios";
import { load } from "cheerio";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import _ from "lodash";

import config from "./config/index.js";

const defaultFolder = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../",
  "problems"
);

function getPathName(number) {
  const start = Number.parseInt(number / 100) * 100;
  const end = start + 99;

  return `[${start}-${end}]`;
}

function getProblemPath(number) {
  const pathName = getPathName(number);
  const path = resolve(defaultFolder, pathName);

  return path;
}

function checkIfTheProblemFileExits(number, extension = "js") {
  return fs.existsSync(`${getProblemPath(number)}/${number}/code.${extension}`);
}

function createPath(number) {
  const path = getProblemPath(number);

  fs.mkdirSync(path, { recursive: true });

  return path;
}

function createFile(content, number, name = "README.md") {
  const path = getProblemPath(number);

  if (!fs.existsSync(path)) {
    createPath(number);
  }

  fs.writeFileSync(`${path}/${name}`, content);
}

function parseProblem(problem) {
  const problems = [];

  const $ = load(problem);
  const problemsTr = $("tbody tr");

  problemsTr.map(function () {
    const $row = $(this);
    const number = $row.find("td.id a").text();
    const name = $row.find("td.large a:eq(0)").text();
    const category = $row.find("td.large a:eq(1)").text();

    problems.push({
      number,
      name,
      category,
    });
  });

  return problems;
}

async function getProblems(page) {
  const problems = await axios.get(
    `https://www.beecrowd.com.br/judge/en/problems/all?page=${page}&limit=100`
  );

  return parseProblem(problems.data);
}

function parseCategories(category) {
  const categories = [];

  const $ = load(category);
  const categoriesList = $("div#category-list ul li");

  categoriesList.map(function () {
    const $row = $(this);
    const title = $row.find("div a").text();
    const description = $row.find("div p").text().replace(/\n/g, "").trim();

    categories.push({
      title,
      description,
    });
  });

  return categories;
}

async function getCategories() {
  const categories = await axios.get(
    "https://www.beecrowd.com.br/judge/en/categories"
  );

  return parseCategories(categories.data);
}

function createChunkOfProblems(problems) {
  const chunkList = [];

  for (let i = 0; i <= 23; i++) {
    let start = 1000 + i * 100;
    let end = 1000 + (i * 100 + 99);

    chunkList.push(
      problems.filter(
        (problem) => problem.number >= start && problem.number <= end
      )
    );
  }

  return chunkList;
}

async function getAllProblems() {
  const problems = [];

  for (let page = 1; page <= 23; page++) {
    const problem = await getProblems(page);

    problems.push(...problem);
  }

  return createChunkOfProblems(problems);
}

function getTotalOfSolvedProblems(problems) {
  return problems.match(/\[x\]/g)?.length ?? 0;
}

function getTotalOfProblems(problems) {
  return problems.match(/\[\d{4}]/g)?.length ?? 0;
}

function calculateProgress(problems) {
  const totalOfSolvedProblems = getTotalOfSolvedProblems(problems);
  const totalOfProblems = getTotalOfProblems(problems);

  const progress = (totalOfSolvedProblems * 100) / totalOfProblems;

  if (Number.isInteger(progress)) {
    return progress;
  }

  return progress.toFixed(2);
}

function formatBodyOfProblems(problems) {
  return problems.reduce((accumulator, current) => {
    const fileExits = checkIfTheProblemFileExits(current.number);
    const status = fileExits ? "x" : " ";
    const pathName = getPathName(current.number);
    const filePath = fileExits
      ? `(${config.githubURL}/beecrowd/blob/master/problems/${pathName}/${current.number}/code.js)`
      : "";
    const line = `- [${status}] [${current.number}](https://www.beecrowd.com.br/judge/pt/problems/view/${current.number}) - [${current.name}]${filePath} *${current.category}*`;

    return `${accumulator}\n${line}`;
  }, "");
}

function generateProblemsDocs(problems) {
  for (let problem of problems) {
    const body = formatBodyOfProblems(problem);
    const progress = calculateProgress(body);
    const start = Number.parseInt(problem[0].number / 100) * 100;
    const header = `# Problems ${start} (${progress} %)\n\n`;
    const content = `${header}${body}`;

    createFile(content, problem[0].number);
  }
}

function formatBodyOfCategories(problems) {
  return problems.reduce((accumulator, current) => {
    const fileExits = checkIfTheProblemFileExits(current.number);
    const status = fileExits ? "x" : " ";
    const pathName = getPathName(current.number);
    const filePath = fileExits
      ? `(${config.githubURL}/beecrowd/blob/master/problems/${pathName}/${current.number}/code.js)`
      : "";
    const line = `- [${status}] [${current.number}](https://www.beecrowd.com.br/judge/pt/problems/view/${current.number}) - [${current.name}]${filePath}`;

    return `${accumulator}\n${line}`;
  }, "");
}

function generateDocsByCategories(problems) {
  const allProblems = _.flattenDeep(problems);
  const grouped = _.groupBy(allProblems, (item) => item.category);

  for (let category in grouped) {
    const problem = grouped[category];
    const body = formatBodyOfCategories(problem);
    const progress = calculateProgress(body);
    const header = `# Problems (${progress} %)\n\n`;
    const content = `${header}${body}`;
    const filename = category.replace(/\s/g, "-").toLowerCase();
    const path = resolve(
      dirname(fileURLToPath(import.meta.url)),
      "../",
      "categories"
    );

    fs.writeFileSync(`${path}/${filename}.md`, content);
  }
}

function generateMainDocs(categories) {
  const categoriesHeader = "## Problems by Categories";
  const categoriesSection = categories.reduce((accumulator, current) => {
    const filename = current.title.replace(/\s/g, "-").toLowerCase();
    const line = `- [${current.title}](categories/${filename}.md) ${current.description}`;

    return `${accumulator}\n${line}`;
  }, "");

  const problemsHeader = "## Problems\n";
  let problemsSection = "";

  for (let i = 0; i <= 23; i++) {
    let start = 1000 + i * 100;
    let end = 1000 + (i * 100 + 99);

    const line = ` - [${start} - ${end}](${config.githubURL}/beecrowd/blob/master/problems/[${start}-${end}])\n`;

    problemsSection += line;
  }

  const path = resolve(dirname(fileURLToPath(import.meta.url)), "../");
  const content = `${categoriesHeader}${categoriesSection}\n\n${problemsHeader}${problemsSection}`;

  fs.writeFileSync(`${path}/README.md`, content);
}

async function main() {
  const problems = await getAllProblems();
  const categories = await getCategories();

  generateProblemsDocs(problems);
  generateDocsByCategories(problems);
  generateMainDocs(categories);
}

main();
