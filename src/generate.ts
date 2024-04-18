import sizeOf from 'image-size';
import * as fs from 'fs';
import * as path from 'path';

interface ImageDimensions {
  fileName: string;
  width: number;
  height: number;
}

const getImageDimensions = (dirPath: string, outputFilePath: string): void => {
  const imageDimensionsByCategory: { [category: string]: ImageDimensions[] } = {};

  const traverseDirectory = (currentPath: string, category: string) => {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isDirectory()) {
        traverseDirectory(filePath, file);
      } else if (fileStats.isFile()) {
        const dimensions = sizeOf(filePath);
        if (dimensions) {
          if (!imageDimensionsByCategory[category]) {
            imageDimensionsByCategory[category] = [];
          }
          imageDimensionsByCategory[category].push({
            fileName: file,
            width: dimensions.width || 0,
            height: dimensions.height || 0,
          });
        }
      }
    });
  };

  traverseDirectory(dirPath, path.basename(dirPath));

  let outputContent = `enum Section {\n  BigSur = 'BigSur',\n  DeathValley = 'DeathValley',\n  HakoneGardens = 'HakoneGardens',\n  NewMexico = 'NewMexico'\n}\n\nconst image = (section: Section, imagePath: String) => {\n  try {\n    return require(\`../portfolio/\${section}/\${imagePath}\`);\n  } catch (err) { }\n}\n\n`;

  for (const category in imageDimensionsByCategory) {
    const imageDimensions = imageDimensionsByCategory[category];
    const categoryOutput = `export const ${category.charAt(0).toLowerCase() + category.slice(1)} = [\n${imageDimensions
      .map(
        (image) =>
          `  {\n    src: image(Section.${category}, '${image.fileName}'),\n    width: ${image.width},\n    height: ${image.height}\n  },`
      )
      .join('\n')}\n];\n`;

    outputContent += categoryOutput;
  }

  fs.writeFileSync(outputFilePath, outputContent);
};

// Example usage
const imagesDir = './portfolio';
const outputFilePath = './portfolio/images.ts';

getImageDimensions(imagesDir, outputFilePath);