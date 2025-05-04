import { SortPackageType, SortPackageService } from "../src/sort-package.service";
import { packageTestCases, PackageTestCase } from "./test-cases";


const sortPackageService = new SortPackageService();
let numPassedCases = 0;

packageTestCases.forEach((testCase: PackageTestCase, index: number) => {
    console.log('-----------------------------------');
    console.log(`Test case ${index + 1}: ${testCase.testDescription}`);
    console.log(`Input: length=${testCase.length}, width=${testCase.width}, height=${testCase.height}, weight=${testCase.weight}`);
    console.log(`Expected: ${testCase.expected}`);
    const result = sortPackageService.sortPackage(
        testCase.length,
        testCase.width,
        testCase.height,
        testCase.weight
    );
    const passedTest = result === testCase.expected;
    if (passedTest) {
        numPassedCases++;
    }
    console.log(`Result: ${result}`);
    console.log(`Test ${passedTest ? "\x1b[32mpassed\x1b[0m" : "\x1b[31mfailed\x1b[0m"}`);
})
console.log('-----------------------------------');
console.log(`\nSummary: ${numPassedCases} out of ${packageTestCases.length} test cases passed.`);
if (numPassedCases === packageTestCases.length) {
    console.log("\x1b[32mAll test cases passed!\x1b[0m");
}
else {
    console.log("\x1b[31mSome test cases failed.\x1b[0m");
}
