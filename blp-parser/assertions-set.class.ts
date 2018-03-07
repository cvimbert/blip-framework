export class AssertionsSet {

    constructor(
        public assertions: RegExp[] = [],
        public Next: any = null
    ) {}
}