# Thoughtful AI Exercise

## Instructions
### Rules
Sort the packages using the following criteria:

- A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
- A package is **heavy** when its mass is greater or equal to 20 kg.

You must dispatch the packages in the following stacks:

- **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
- **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
- **REJECTED**: packages that are **both** heavy and bulky are rejected.

### Implementation

The sort package functionality is executed as a TypeScript service SortPackageService with private functions to handle cases and enum for types, as well as parameterized maxes.

### To test
1. Clone the repo
2. Run npm install
3. To execute tests: `npm run test`

### edge cases
I didn't add unit tests but to include edge cases and coverage reports, I would add a unit test file here to test all the cases, provide a coverage report, and include cases where one of the dimensions was less than or equal to 0, and in the service, throw an error for this case.

I could then test for this thrown error in the unit test cases I write.
