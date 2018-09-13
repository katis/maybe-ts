# Maybe

This is a small library for handling potentially undefined values in TypeScript.

## Api

```ts
import * as Maybe from '@katis/maybe'

const value: string | undefined = 'defined'

// map (or its alias mapDefined)
const length: number | undefined = Maybe.map(value, s => s.length)

// filter (or its alias filterDefined)
const shortString: string | undefined = Maybe.filter(value, s => s.length <= 3)

// asNullable
const nullable: string | null = Maybe.asNullable('nullable')

// fromNullable
const undefinedString: string | undefined = Maybe.fromNullable(nullable)

// getOrThrow
const neverReached: string = Maybe.getOrThrow<string>(undefined)

// getOrDefault
const defaulted: string = Maybe.getOrDefault<string>(undefined, 'default')

// getOrElse
const alternative: number = Maybe.getOrElse<number>(undefined, () => Date.now())

// isDefined
if (Maybe.isDefined(undefined)) {
  // ...
}

// isUndefined
if (Maybe.notDefined(undefined)) {
  // ...
}
```
