function Book(title, author, pages, isRead) {
    if (!new.target.target) {
        throw Error("use new");
    }

    this.title = title;
    this.author= author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        const info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "read" : "not read yet"}`;
        console.log(info);
        return info;
    }
}