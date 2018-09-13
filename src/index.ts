export const map = <A, B>(
  maybe: A | undefined,
  mapFn: (value: A) => B
): B | undefined => (maybe === undefined ? undefined : mapFn(maybe))

export const mapDefined = map

export const filter = <A>(
  maybe: A | undefined,
  predicate: (value: A) => boolean
): A | undefined =>
  maybe === undefined || !predicate(maybe) ? undefined : maybe

export const filterDefined = filter

export const fromNullable = <A>(nullable: A | null): A | undefined =>
  nullable === null ? undefined : nullable

export const asNullable = <A>(maybe: A | undefined): A | null =>
  maybe === undefined ? null : maybe

export const getOrThrow = <A>(maybe: A | undefined): A => {
  if (maybe === undefined) {
    throw Error('Value was undefined')
  }
  return maybe
}

export const getOrDefault = <A>(maybe: A | undefined, defaultValue: A): A =>
  maybe === undefined ? defaultValue : maybe

export const getOrElse = <A>(maybe: A | undefined, makeDefault: () => A): A =>
  maybe === undefined ? makeDefault() : maybe

export const isDefined = <A>(maybe: A | undefined): maybe is A =>
  maybe !== undefined

export const notDefined = <A>(maybe: A | undefined): maybe is undefined =>
  maybe === undefined
