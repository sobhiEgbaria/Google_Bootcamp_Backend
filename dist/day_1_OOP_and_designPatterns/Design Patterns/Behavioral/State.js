"use strict";
class IdleState {
    start(pipeline) {
        console.log("Pipeline started. Building...");
        pipeline.setState(new BuildingState());
    }
    fail(pipeline) {
        console.log("Pipeline is idle. Nothing to fail.");
    }
    complete(pipeline) {
        console.log("Pipeline is idle. Nothing to complete.");
    }
}
class BuildingState {
    start(pipeline) {
        console.log("Pipeline is already building.");
    }
    fail(pipeline) {
        console.log("Build failed.");
        pipeline.setState(new FailedState());
    }
    complete(pipeline) {
        console.log("Build complete. Testing...");
        pipeline.setState(new TestingState());
    }
}
class TestingState {
    start(pipeline) {
        console.log("Pipeline is already in progress.");
    }
    fail(pipeline) {
        console.log("Testing failed.");
        pipeline.setState(new FailedState());
    }
    complete(pipeline) {
        console.log("Testing complete. Deploying...");
        pipeline.setState(new DeployingState());
    }
}
class DeployingState {
    start(pipeline) {
        console.log("Pipeline is already deploying.");
    }
    fail(pipeline) {
        console.log("Deployment failed.");
        pipeline.setState(new FailedState());
    }
    complete(pipeline) {
        console.log("Deployment successful!");
        pipeline.setState(new IdleState());
    }
}
class FailedState {
    start(pipeline) {
        console.log("Fix the issues and start the pipeline again.");
    }
    fail(pipeline) {
        console.log("Pipeline already in failed state.");
    }
    complete(pipeline) {
        console.log("Cannot complete. The pipeline has failed.");
    }
}
// 3. Context
class Pipeline {
    constructor() {
        // Initial state
        this.state = new IdleState();
    }
    setState(state) {
        this.state = state;
    }
    start() {
        this.state.start(this);
    }
    fail() {
        this.state.fail(this);
    }
    complete() {
        this.state.complete(this);
    }
}
// Client Code
const pipeline = new Pipeline();
pipeline.start(); // Output: Pipeline started. Building...
pipeline.complete(); // Output: Build complete. Testing...
pipeline.fail(); // Output: Testing failed.
pipeline.setState(new BuildingState());
pipeline.start(); // Output: Pipeline is already building.
pipeline.complete(); // Output: Testing complete. Deploying...
pipeline.complete(); // Output: Deployment successful!
pipeline.setState(new TestingState());
pipeline.start(); // Output: Pipeline is already in progress.
pipeline.fail(); // Output: Testing failed.
pipeline.complete(); // Output: Deployment successful!
pipeline.setState(new DeployingState());
pipeline.start(); // Output: Pipeline is already deploying.
pipeline.fail(); // Output: Deployment failed.
pipeline.complete(); // Output: Deployment successful!
pipeline.setState(new FailedState());
pipeline.start(); // Output: Fix the issues and start the pipeline again.
pipeline.fail(); // Output: Pipeline already in failed state.
pipeline.complete(); // Output: Cannot complete. The pipeline has failed.
