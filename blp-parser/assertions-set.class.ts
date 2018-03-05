export class AssertionsSet {

    constructor(
        public assertions: {[key: string]: RegExp} = {},
        public Next: any = null
    ) {
    }

    pushAssertion(id: string, exp: RegExp) {
        this.assertions[id] = exp;
    }
}