//@ts-nocheck
import { exec } from "node:child_process";
import fs from "node:fs";

import inquirer from "inquirer";

/**
 * @returns { Promise<string> }
 */
const chooseComponentDirectory = async (
  /** @type { import("fs").Dirent } */
  directoryList,

  /** @type { string[] | undefined } */
  additionalChoices,

  /** @type { string | undefined } */
  path,
) => {
  const { componentDirectory } = await inquirer.prompt({
    type: "list",
    name: "componentDirectory",
    loop: false,
    message: `Current path: ${path}\nSelect the component folder you want to create.`,
    choices: [
      ...((additionalChoices || []).map((choice) => ({
        value: choice,
        name: choice,
      })) || []),
      ...directoryList.map((dirent) => ({
        value: dirent.name,
        name: "ㄴ📁 " + dirent.name,
      })),
    ],
    pageSize: 20,
  });

  return componentDirectory;
};

const staticComponentDir = "./src";

/**
 * @param { string } dir
 * @returns { import("fs").Dirent[] }
 */
const readDirectory = (dir) => {
  return fs
    .readdirSync(`${staticComponentDir}/${dir}`, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory());
};

/**
 * @param { string } path
 * @returns { Promise<string> }
 */
const createNewFolder = async (path) => {
  const { newFolderName } = await inquirer.prompt([
    {
      type: "input",
      name: "newFolderName",
      message:
        "Please enter the name of the component folder you want to create.",
      loop: false,
    },
  ]);

  fs.mkdirSync(`${staticComponentDir}/${path}/${newFolderName}`);

  return newFolderName;
};

/**
 * @param { string } componentName
 * @returns { string }
 */
const componentFileData = (
  componentName,
) => `interface ${componentName}PropsType {
  className?: string
}

const ${componentName} = (props: ${componentName}PropsType) => {
  const { className = '' } = props

  return <div className={\`\${className}\`}></div>
}

export default ${componentName}
`;

/**
 * @param { string } componentName
 * @param { string } componentPath
 * @returns { string }
 */
const componentStorybookFileData = (
  componentName,
  componentPath,
) => `import ${componentName} from './${componentName}'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ${componentName}> = {
  title: '${componentPath}',
  component: ${componentName},
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ${componentName}>

export const Main: Story = {}
`;

/**
 * @param { string } componentPath
 * @param { string } componentName
 * @returns { void }
 */
const addComponentFile = (componentPath, componentName) => {
  fs.mkdirSync(componentPath);

  fs.writeFileSync(
    `${componentPath}/${componentName}.tsx`,
    componentFileData(componentName),
  );

  fs.writeFileSync(
    `${componentPath}/index.ts`,
    `import ${componentName} from './${componentName}'

export default ${componentName}
`,
  );

  // fs.writeFileSync(
  //   `${componentPath}/${componentName}.stories.tsx`,
  //   componentStorybookFileData(componentName, componentPath.replace('./src/components/', '')),
  // );

  //   fs.writeFileSync(
  //     `${componentPath}/${componentName}.spec.tsx`,
  //     `
  // import { render } from '@testing-library/react'
  // import ${componentName} from './${componentName}'

  // describe('<${componentName} />', () => {
  //   it('should render without crashing', () => {
  //     const RenderedComponent = render(<${componentName} />)
  //     RenderedComponent.unmount()
  //   })
  // })
  //     `,
  //   );
};

const createComponent = async () => {
  /** @type { string[] } */
  const componentDirectoryStr = ["components"];



  /** @type {import("fs").Dirent} */
  let directoryList = fs
    .readdirSync(`packages/ui/components`, {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory());

  const newFolder = "✚ 📁 Create a new folder here";
  const back = "◀️ Go back";
  const createHere = "🚩 Create component here";


  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.clear();
    const additionalChoices = [createHere, newFolder];
    if (componentDirectoryStr.length > 1) {
      additionalChoices.unshift(back);
    }

    const selectedDirectory = await chooseComponentDirectory(
      directoryList,
      additionalChoices,
      componentDirectoryStr.join("/"),
    );
    if (selectedDirectory === createHere) {
      break;
    }

    if (selectedDirectory === newFolder) {
      const newFolderName = await createNewFolder(
        componentDirectoryStr.join("/"),
      );
      componentDirectoryStr.push(newFolderName);
    } else if (selectedDirectory === back) {
      componentDirectoryStr.pop();
    } else {
      componentDirectoryStr.push(selectedDirectory);
    }

    directoryList = readDirectory(componentDirectoryStr.join("/"));
  }

  return;


  /** @type { { componentName: string} } */
  const { componentName } = await inquirer.prompt([
    {
      type: "input",
      name: "componentName",
      message:
        "Please enter the name of the component you want to create. (PascalCase)",
      loop: false,
    },
  ]);

  const componentPath = `${staticComponentDir}/${componentDirectoryStr.join("/")}/${componentName}`;

  addComponentFile(componentPath, componentName);

  exec(`code ${componentPath}/${componentName}.tsx`);
  console.log("Component creation complete!");
};

createComponent();
