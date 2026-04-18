import fs from "fs";
import {parse} from "csv-parse/sync";

export type User={
    username:string;
    password:string;
};

export function readCSV(filePath:string):User[] {
    const file=fs.readFileSync(filePath);
    return parse(file,{columns:true,
        skip_empty_lines:true
    })
}

