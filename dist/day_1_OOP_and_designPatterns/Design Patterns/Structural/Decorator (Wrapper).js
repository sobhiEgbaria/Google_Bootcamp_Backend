"use strict";
class ImageFile {
    constructor(imageBlobs, imageName) {
        this.image = new File(imageBlobs, imageName);
    }
    processImage() {
        // Converts the blobs to a visible image
        return this.image;
    }
}
class ImageDecorator {
    constructor(image) {
        this.image = image;
    }
}
class ImageCompressor extends ImageDecorator {
    processImage() {
        // Compresses image size
        return this.image;
    }
}
class ImageEnhancer extends ImageDecorator {
    processImage() {
        // Enhances image quality
        return this.image;
    }
}
class ImageResizer extends ImageDecorator {
    processImage() {
        // Changes image width and height
        return this.image;
    }
    ;
}
// Use Case
const image = new ImageFile([], "Picture.jpg").processImage();
const compressedImage = new ImageCompressor(image).processImage();
const enhancedImage = new ImageCompressor(compressedImage).processImage();
const resizedImage = new ImageResizer(enhancedImage).processImage();
