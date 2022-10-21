# Contents

- [Getting started with character-copier](#getting-started-with-character-copier)
- [Extra code to help complete the exercise](#extra-code-to-help-complete-the-exercise)
  - [Source.ts](#sourcets)
  - [New version of copier.ts](#new-version-of-copierts)
  - [New test file](#new-test-file)
- [Don't forget transpilation](#dont-forget-transpilation)

# Getting started with character-copier

Inside your `src` folder, create a folder called `character-copier`.

Inside the new `character-copier` folder, create a file called authoriser.ts and put this in it:

```
export interface Authoriser {
  authorise(name: string, password: string): boolean;
}

export class AcceptingAuthoriserSpy implements Authoriser {
  private authoriseWasCalled: boolean;

  authorise(name, password): boolean {
    this.authoriseWasCalled = true;
    return true;
  }

  wasCalled(): boolean {
    return this.authoriseWasCalled;
  }
}
```

Create a file called copier.ts and put this in it:

```
import type {Authoriser} from "./authoriser";

export class CharacterCopier {
  authoriser: Authoriser;

  constructor(authoriser: Authoriser) {
    this.authoriser = authoriser;
  }

  copy() {
    this.authoriser.authorise("Clare", "password");
  }
}
```

Create a file called index.text.js and put this in it:

```
import { AcceptingAuthoriserSpy } from "./authoriser";
import { CharacterCopier } from "./copier";

describe('The character copier should', () => {
  it('copy a character from the source to the destination', () => {
    const authoriser = new AcceptingAuthoriserSpy();
    const copier = new CharacterCopier(authoriser);

    copier.copy();

    expect(authoriser.wasCalled()).toBeTruthy();
  });
});
```

Make sure you open the Terminal in your tdd-javascript-[etc] folder (the top folder of your repo). Then navigate to your new folder:

```
cd src/character-copier
```

Run the following three commands in the Terminal (one at a time):

```
npm install -g typescript
tsc authoriser.ts
tsc copier.ts
```

(For a little more info on the above commands, and in case you encounter permissions errors, see [this page](/tdd/typescript.md#getting-started-with-typescript-in-vs-code))

Run tests: `npm test`

Create two new files - `source.ts` and `destination.ts` which will have the same structure as `authoriser.ts` but they will create interfaces called `Source` and `Destination` and associated spy classes.

Then your `Copier` class will need to have a `source` and `destination` passed in as parameters, instead of an `authoriser`.

# Extra code to help complete the exercise

## Source.ts

Create a new file in your `character-copier` folder: `source.ts`:

```
export interface Source {
  getCharacter(): string;
}

export class SourceSpy implements Source {
  numberOfCalls: number = 0;

  getCharacter(): string {
    this.numberOfCalls = this.numberOfCalls + 1;
    return "";
  }

  wasCalled() {
    return this.numberOfCalls > 0;
  }
}
```

Don't forget you need to transpile it into javascript. You can either run `tsc source.ts` in the terminal, or (much better) [follow instructions here](/tdd/typescript.md#automate-transpilation-in-vs-code) to have all typescript automatically transpiled into javascript. 

## New version of copier.ts

Edit `copier.ts` to look like this:

```
import type {Source} from "./source";

export class CharacterCopier {
  source: Source;

  constructor(source: Source) {
    this.source = source;
  }

  copy() {
    let char = this.source.getCharacter();
  }
}
```

## New test file

Edit `index.test.js` to look like this:

```
import { SourceSpy } from "./source";
import { DestinationSpy } from "./destination";
import { CharacterCopier } from "./copier";

describe('The character copier should', () => {
  it('copy a character from the source to the destination', () => {
    const source = new SourceSpy();
    const destination = new DestinationSpy();
    const copier = new CharacterCopier(source, destination);

    copier.copy();

    expect(source.wasCalled()).toBeTruthy();
    expect(destination.wasCalled()).toBeTruthy();
  });
});
```

This won't work! This gives you enough to move you further on, but I've missed out one other file that you need to create, and I've also missed out some related code from `copier.ts`.

# Don't forget transpilation

!! Remember that every time you change the typescript code, you have to recreate the javascript. So for instance every time you edit `source.ts` you have to run `tsc source.ts` again. The same is true for all the different typescript files (the ones that end `.ts` instead of `.js`). To avoid having to keep running the `tsc` command, [configure automatic transpilation](/tdd/typescript.md#automate-transpilation-in-vs-code).

The clue that your typescript is not transpiled into javascript is when the test failure message references the javascript version of the file (`source.js` instead of `source.ts`) ... and you think "but I already fixed that code!" It's much better to have automatic transpilation configured - ([instructions here](/tdd/typescript.md#automate-transpilation-in-vs-code)]). 