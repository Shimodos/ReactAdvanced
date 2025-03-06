import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolutePath(path: string) {
  const layers = ['app', 'shared', 'entities', 'widgets', 'features', 'pages'];

  return layers.some((layer) => path.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();

    if (isAbsolutePath(moduleSpecifier)) {
      importDeclaration.setModuleSpecifier(`@/${moduleSpecifier}`);
    }
  });
});

project.save();
