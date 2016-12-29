import { SpecReporter } from "jasmine-spec-reporter";
import { DisplayProcessor } from "jasmine-spec-reporter";

class CustomProcessor extends DisplayProcessor {
    displayJasmineStarted(info: any, log: String): String {
        return `TypeScript ${log}`;
    }
}

let Jasmine = require("jasmine");
let jrunner = new Jasmine();
jrunner.env.clearReporters();
jrunner.addReporter(new SpecReporter({
    customProcessors: [CustomProcessor]
}));
jrunner.loadConfigFile();
jrunner.execute();
