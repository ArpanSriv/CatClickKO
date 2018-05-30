let Cat = function () {
    //Needed for removing an element from observable array.
    let self = this;

    self.clickCount = ko.observable(0);
    self.name = ko.observable("Catty");
    self.imgSrc = ko.observable("data:image/jpeg;base64,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");

    self.age = ko.computed(function () {
        let title;
        if (this.clickCount() <= 10) title = "Infant";
        if (this.clickCount() > 10 && this.clickCount() < 20) title = "Bigger Infant";
        if (this.clickCount() >= 20) title = "Teen";
        return title;
    }, this);

    self.nicknames = ko.observableArray([
        {name: "Catty Cat"},
        {name: "Berty Brit"},
        {name: "Petty Pink"}
    ]);

    self.addNickName = function () {
        let newName = prompt("Please enter a nickname");
        if (newName == null || newName === "") {
            alert("No nickname entered.");

        } else {
            self.nicknames.push({name: newName});
        }
    };

    self.removeName = function () {
        self.nicknames.remove(this);
    };

    self.changeName = function () {
        self.name(this.name);
    }
};


let ViewModel = function () {
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1)
    };
};

ko.applyBindings(new ViewModel());