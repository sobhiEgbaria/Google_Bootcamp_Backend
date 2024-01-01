"use strict";
class Page {
    constructor() {
        this.headerParts = [];
        this.bodyParts = [];
        this.footerParts = [];
    }
    setHeaderParts(...parts) {
        this.headerParts = parts;
    }
    setBodyParts(...parts) {
        this.bodyParts = parts;
    }
    setFooterParts(...parts) {
        this.footerParts = parts;
    }
    getPage() {
        return {
            headerParts: this.headerParts,
            bodyParts: this.bodyParts,
            footerParts: this.footerParts,
        };
    }
}
class PersonalBlogPageBuilder {
    constructor() {
        this.page = new Page();
    }
    getPage() {
        return this.page;
    }
    buildHeader() {
        this.page.setHeaderParts("Title", "Author Information");
    }
    buildBody() {
        this.page.setBodyParts("Recent Posts", "Favorite Posts", "Last Comments");
    }
    buildFooter() {
        this.page.setFooterParts("CopyRights", "Author Email Address");
    }
}
class OnlineShopPageBuilder {
    constructor() {
        this.page = new Page();
    }
    getPage() {
        return this.page;
    }
    buildHeader() {
        this.page.setHeaderParts("Logo", "Description", "Products Category Menu");
    }
    buildBody() {
        this.page.setBodyParts("New Products", "Daily Off", "Suggested Products");
    }
    buildFooter() {
        this.page.setFooterParts("About Us", "Address", "Legal Certificate Link");
    }
}
