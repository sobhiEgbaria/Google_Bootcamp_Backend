"use strict";
class GitChecker {
    constructor(repositoryPath) {
        this.repositoryPath = repositoryPath;
    }
    analyzeCommits() {
        // Checks the quality of commit messages
    }
    analyzeUnmergedBranches() {
        // Checks the
    }
}
class Linter {
    constructor(rules) {
        this.rules = rules;
    }
    findIssues() {
        // Checks codebase and finds all issues
    }
    resolveFixableIssues() {
        // Checks codebase and fix all fixable issues
    }
}
class PackageManager {
    constructor(dependencies) {
        this.dependencies = dependencies;
    }
    findUnsecureLibraries() {
        // Analyzes all dependencies and finds all of unsecure libraries
    }
    findDeprecatedLibraries() {
        // Analyzes all dependencies and finds all of deprecated libraries
    }
}
// Facade Class
class CodebaseAnalyzer {
    constructor({ repositoryPath, linterRules, dependencies, }) {
        this.gitChecker = new GitChecker(repositoryPath);
        this.linter = new Linter(linterRules);
        this.packageManager = new PackageManager(dependencies);
    }
    // This method is the facade method and does all of the work
    analyze() {
        this.gitChecker.analyzeCommits();
        this.gitChecker.analyzeUnmergedBranches();
        this.linter.findIssues();
        this.linter.resolveFixableIssues();
        this.packageManager.findUnsecureLibraries();
        this.packageManager.findDeprecatedLibraries();
    }
}
// Use case
const codebaseAnalyzer = new CodebaseAnalyzer({
    repositoryPath: "root/design-patterns/structural/facade/",
    linterRules: ["rule1", "rule2", "rule3", "rule4"],
    dependencies: [
        { name: "ABC", version: 19 },
        { name: "MNP", version: 14 },
        { name: "XYZ", version: 23 },
    ],
});
codebaseAnalyzer.analyze();
