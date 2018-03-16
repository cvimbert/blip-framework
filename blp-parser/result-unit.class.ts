export class ResultUnit {

    type: string;

    startIndex: number;
    endIndex: number;

    results: { [key: string]: any };
    children: ResultUnit[] = [];

    getResult(path: string): ResultUnit[] {

        let results: ResultUnit[] = this.children;
        let pathItems: string[] = path.split("/").filter((item: string) => {
            return item !== ""
        });
        let last: ResultUnit;

        let schema: RegExp = /([A-Za-z0-9-]+)(?:@([A-Za-z0-9-]+)=(.+))?/;

        let nrm: ResultUnit[] = [];

        for (let item of pathItems) {
            let res: RegExpExecArray = schema.exec(item);

            let type: string = res[1];
            let propertyName: string = res[2];
            let propertyValue: string = res[3];

            let nr: ResultUnit[] = [];
            nrm = [];

            for (let result of results) {
                if (result.type === type) {

                    if (propertyName && propertyValue) {
                        if (result.results[propertyName] === propertyValue) {
                            nrm.push(result);
                            nr = nr.concat(result.children);
                        }
                    } else {
                        nr = nr.concat(result.children);
                        nrm.push(result);
                    }
                }
            }

            results = nr;
        }

        return nrm;
    }
}