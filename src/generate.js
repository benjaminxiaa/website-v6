"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_size_1 = require("image-size");
var fs = require("fs");
var path = require("path");
var Section;
(function (Section) {
    Section["BigSur"] = "BigSur";
    Section["DeathValley"] = "DeathValley";
    Section["HakoneGardens"] = "HakoneGardens";
    Section["NewMexico"] = "NewMexico";
})(Section || (Section = {}));
var image = function (section, imagePath) {
    try {
        return require("../portfolio/".concat(section, "/").concat(imagePath));
    }
    catch (err) { }
};
var getImageDimensions = function (dirPath, outputFilePath) {
    var imageDimensionsByCategory = {};
    var traverseDirectory = function (currentPath, category) {
        var files = fs.readdirSync(currentPath);
        files.forEach(function (file) {
            var filePath = path.join(currentPath, file);
            var fileStats = fs.statSync(filePath);
            if (fileStats.isDirectory()) {
                traverseDirectory(filePath, file);
            }
            else if (fileStats.isFile()) {
                var dimensions = (0, image_size_1.default)(filePath);
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
    var outputContent = "enum Section {\n  BigSur = 'BigSur',\n  DeathValley = 'DeathValley',\n  HakoneGardens = 'HakoneGardens',\n  NewMexico = 'NewMexico'\n}\n\nconst image = (section: Section, imagePath: String) => {\n  try {\n    return require(`../portfolio/${section}/${imagePath}`);\n  } catch (err) { }\n}\n\n";
    var _loop_1 = function (category) {
        var imageDimensions = imageDimensionsByCategory[category];
        var categoryOutput = "export const ".concat(category.charAt(0).toLowerCase() + category.slice(1), " = [\n").concat(imageDimensions
            .map(function (image) {
            return "  {\n    src: image(Section.".concat(category, ", '").concat(image.fileName, "'),\n    width: ").concat(image.width, ",\n    height: ").concat(image.height, "\n  },");
        })
            .join('\n'), "\n];\n");
        outputContent += categoryOutput;
    };
    for (var category in imageDimensionsByCategory) {
        _loop_1(category);
    }
    fs.writeFileSync(outputFilePath, outputContent);
};
// Example usage
var imagesDir = './portfolio';
var outputFilePath = './portfolio/images.ts';
getImageDimensions(imagesDir, outputFilePath);
