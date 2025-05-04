import { SortPackageType } from "../src/sort-package.service";

export interface PackageTestCase {
    testDescription: string;
    length: number;
    width: number;
    height: number;
    weight: number;
    expected: SortPackageType;
}

export const packageTestCases: PackageTestCase[] = [
    {   
        testDescription: "Standard package fits all criteria",
        length: 10,
        width: 10,
        height: 10,
        weight: 10,
        expected: SortPackageType.STANDARD,
    },
    {
        testDescription: "One dimension is AT the max limit",
        length: 150,
        width: 10,
        height: 10,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "One dimension is AT the max limit",
        length: 10,
        width: 150,
        height: 10,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "One dimension is AT the max limit",
        length: 10,
        width: 10,
        height: 150,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "One dimension is OVER the max limit",
        length: 170,
        width: 10,
        height: 10,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "One dimension is OVER the max limit",
        length: 10,
        width: 170,
        height: 10,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "One dimension is OVER the max limit",
        length: 10,
        width: 10,
        height: 170,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "Volume is AT the max limit",
        length: 100,
        width: 100,
        height: 100,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "Volume is OVER the max limit",
        length: 110,
        width: 100,
        height: 100,
        weight: 10,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "Weight is AT the max limit",
        length: 10,
        width: 10,
        height: 10,
        weight: 120,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "Weight is OVER the max limit",
        length: 10,
        width: 10,
        height: 10,
        weight: 25,
        expected: SortPackageType.SPECIAL,
    },
    {
        testDescription: "Package is over dimension and weight the max limit",
        length: 160,
        width: 10,
        height: 10,
        weight: 25,
        expected: SortPackageType.REJECTED,
    }
]
