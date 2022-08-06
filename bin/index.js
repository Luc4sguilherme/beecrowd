import fs from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import _ from "lodash";

import config from "./config/index.js";

function getProblemFolderName(number) {
  const start = Number.parseInt(number / 100) * 100;
  const end = start + 99;

  return `[${start}-${end}]`;
}

function getProblemFolderPath(number) {
  const folderName = getProblemFolderName(number);
  const path = resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../",
    "problems",
    folderName
  );

  return path;
}

function checkIfTheProblemFileExits(number, filename) {
  return fs.existsSync(`${getProblemFolderPath(number)}/${number}/${filename}`);
}

function createProblemFolder(number) {
  const path = getProblemFolderPath(number);

  fs.mkdirSync(path, { recursive: true });

  return path;
}

function createProblemDocFile(contents, number, filename = "README.md") {
  const path = getProblemFolderPath(number);

  if (!fs.existsSync(path)) {
    createProblemFolder(number);
  }

  fs.writeFileSync(`${path}/${filename}`, contents);
}

function parseProblems(problems) {
  const pattern =
    /- \[( |x)\] \[(?<number>\d{1,})\]\(https:.*\) - \[(?<name>.*)\](\(.*?\))? (\*(?<category>.*)\*)/i;

  const parsedProblems = [];

  problems.split("\n").forEach((problem) => {
    const regex = new RegExp(pattern);
    const match = regex.exec(problem);

    if (match) {
      const {
        groups: { name, number, category },
      } = match;

      parsedProblems.push({
        number,
        name,
        category,
      });
    }
  });

  return parsedProblems;
}

async function getProblems(page) {
  const path = resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../",
    "problems"
  );

  const problemsDir = await fs.promises.readdir(path);
  const problems = await fs.promises.readFile(
    `${path}/${problemsDir[page]}/README.md`
  );

  return parseProblems(problems.toString());
}

async function getCategories() {
  const path = resolve(
    dirname(fileURLToPath(import.meta.url)),
    "config",
    "categories.json"
  );
  const categories = await fs.promises.readFile(path);

  return JSON.parse(categories);
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

  for (let page = 0; page <= 23; page++) {
    const problem = await getProblems(page);

    problems.push(...problem);
  }

  return createChunkOfProblems(problems);
}

function getTotalOfSolvedProblems(problems) {
  return problems.match(/\[x\]/g)?.length ?? 0;
}

function getTotalOfProblems(problems) {
  return problems.match(/\[\d{4}\]/g)?.length ?? 0;
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
    const fileExits = checkIfTheProblemFileExits(current.number, "code.js");
    const status = fileExits ? "x" : " ";
    const folderName = getProblemFolderName(current.number);
    const filePath = fileExits
      ? `(${config.githubURL}/beecrowd/blob/master/problems/${folderName}/${current.number}/code.js)`
      : "";
    const line = `- [${status}] [${current.number}](https://www.beecrowd.com.br/judge/${config.language}/problems/view/${current.number}) - [${current.name}]${filePath} *${current.category}*`;

    return `${accumulator}\n${line}`;
  }, "");
}

function generateProblemsDocs(problems) {
  for (let problem of problems) {
    const body = formatBodyOfProblems(problem);
    const progress = calculateProgress(body);
    const start = Number.parseInt(problem[0].number / 100) * 100;
    const header = `# Problems ${start} (${progress} %)\n\n`;
    const contents = `${header}${body}`;

    createProblemDocFile(contents, problem[0].number);
  }
}

function formatBodyOfCategories(problems) {
  return problems.reduce((accumulator, current) => {
    const fileExits = checkIfTheProblemFileExits(current.number, "code.js");
    const status = fileExits ? "x" : " ";
    const folderName = getProblemFolderName(current.number);
    const filePath = fileExits
      ? `(${config.githubURL}/beecrowd/blob/master/problems/${folderName}/${current.number}/code.js)`
      : "";
    const line = `- [${status}] [${current.number}](https://www.beecrowd.com.br/judge/${config.language}/problems/view/${current.number}) - [${current.name}]${filePath}`;

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
    const contents = `${header}${body}`;
    const filename = category.replace(/\s/g, "-").toLowerCase();
    const path = resolve(
      dirname(fileURLToPath(import.meta.url)),
      "../",
      "categories"
    );

    fs.writeFileSync(`${path}/${filename}.md`, contents);
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
  const contents = `${categoriesHeader}${categoriesSection}\n\n${problemsHeader}${problemsSection}`;

  fs.writeFileSync(`${path}/README.md`, contents);
}

async function main() {
  const problems = await getAllProblems();
  const categories = await getCategories();

  generateProblemsDocs(problems);
  generateDocsByCategories(problems);
  generateMainDocs(categories);
}

main();
