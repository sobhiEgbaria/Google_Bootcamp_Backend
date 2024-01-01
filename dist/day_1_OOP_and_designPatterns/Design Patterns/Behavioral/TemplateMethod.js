"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// SocialMediaAnalyzer.ts (Abstract Class)
class SocialMediaPostAnalyzer {
    constructor() {
        this.HARMFUL_WORDS = [
            "dumb",
            "stupid",
            "idiot",
            "loser",
            "ugly",
            "fat",
            "skinny",
            "weird",
            "hate",
            "rude",
            "nasty",
        ];
    }
    preprocessData(data) {
        return data.split(" ").map((word) => word.replace(/[^a-zA-Z ]/g, "").toLowerCase());
    }
    analyze(data) {
        return data.filter((word) => this.HARMFUL_WORDS.includes(word));
    }
    displayResults(data) {
        console.log(`The number of harmful words in this post is ${data.length}, including ${data.join(", ")}.`);
    }
    analyzePosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fetchData();
            const preprocessedData = this.preprocessData(data);
            const analyticsResult = this.analyze(preprocessedData);
            this.displayResults(analyticsResult);
        });
    }
}
class TwitterPostAnalyzer extends SocialMediaPostAnalyzer {
    // Fetches data from Twitter API and returns its data
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            return ""; // Dummy data
        });
    }
}
class InstagramPostAnalyzer extends SocialMediaPostAnalyzer {
    // Fetches data from Instagram API and returns its data
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            return ""; // Dummy data
        });
    }
}
// Client Code
const twitterAnalysis = new InstagramPostAnalyzer();
twitterAnalysis.analyzePosts();
const instagramAnalysis = new TwitterPostAnalyzer();
instagramAnalysis.analyzePosts();
