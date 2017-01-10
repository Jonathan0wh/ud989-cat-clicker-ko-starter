let initialCats = [
    {
        clickCount: 0,
        name: "Tabby",
        imgSrc: "img/9648464288_2516b35537_z.jpg",
        imgAttribution: "https://www.flicker.com/photos/big",
        nicknames: ["Tabtab", "T-Bone", "Mr.T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        clickCount: 0,
        name: "Cat 1",
        imgSrc: "img/cat1.jpg",
        imgAttribution: "https://www.flicker.com/photos/big",
        nicknames: ["Tabtab", "T-Bone", "Mr.T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        clickCount: 0,
        name: "Cat 2",
        imgSrc: "img/cat2.jpg",
        imgAttribution: "https://www.flicker.com/photos/big",
        nicknames: ["Tigger"]
    },
    {
        clickCount: 0,
        name: "Cat 3",
        imgSrc: "img/cat3.jpg",
        imgAttribution: "https://www.flicker.com/photos/big",
        nicknames: ["Scaredy"]
    },
    {
        clickCount: 0,
        name: "Cat 4",
        imgSrc: "img/cat4.jpg",
        imgAttribution: "https://www.flicker.com/photos/big",
        nicknames: ["Casper"]
    },
    {
        clickCount: 0,
        name: "Cat 5",
        imgSrc: "img/cat5.jpg",
        imgAttribution: "https://www.flicker.com/photos/big",
        nicknames: ["Shooby"]
    }
];


let Cat = function (data) {

    this.name = ko.observable(data.name);
    this.clickCount = ko.observable(data.clickCount);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function () {
        let level;
        let count = parseInt(this.clickCount());

        if (count < 5) {
            level = "Newborn";
        } else if (count < 10) {
            level = "Infant";
        } else if (count < 20) {
            level = "Teen";
        } else if (count < 30) {
            level = "Adult";
        } else {
            level = "Ninja";
        }

        return level;
    }, this);
};


let ViewModel = function () {

    let self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };
}


ko.applyBindings(new ViewModel());
