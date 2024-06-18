class TypedEffect {
    constructor(elementId, strings, typeSpeed = 50, backSpeed = 50, loop = true) {
        this.elementId = elementId;
        this.strings = strings;
        this.typeSpeed = typeSpeed;
        this.backSpeed = backSpeed;
        this.loop = loop;
        this.init();
    }

    init() {
        const options = {
            strings: this.strings,
            typeSpeed: this.typeSpeed,
            backSpeed: this.backSpeed,
            loop: this.loop
        };

        new Typed(`#${this.elementId}`, options);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const strings = ["Student", "Full-Stack Developer", "Deep Learning Engineer", "Swimmer"];
    new TypedEffect("typed-output", strings);
});
