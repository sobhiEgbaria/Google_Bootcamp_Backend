"use strict";
class RasterRender {
    renderShape(shape) {
        console.log(`Raster rendering the ${shape.getName()}`);
    }
}
class VectorRender {
    renderShape(shape) {
        console.log(`Vector rendering the ${shape.getName()}`);
    }
}
class Shape {
    constructor(name, strategy) {
        this.name = name;
        this.renderStrategy = strategy;
    }
    setRenderStrategy(strategy) {
        this.renderStrategy = strategy;
    }
    render() {
        this.renderStrategy.renderShape(this);
    }
    getName() {
        return this.name;
    }
}
// Client code
const rasterRender = new RasterRender();
const vectorRender = new VectorRender();
const circle = new Shape('Circle', rasterRender);
circle.render();
circle.setRenderStrategy(vectorRender);
circle.render();
