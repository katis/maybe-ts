import {
  map,
  filter,
  asNullable,
  getOrThrow,
  getOrDefault,
  getOrElse,
  isDefined,
  notDefined,
  fromNullable,
} from './index'

describe('map', () => {
  it('should map defined value', () => {
    expect(map('test-string', s => s.length)).toEqual('test-string'.length)
  })

  it('should not map defined value', () => {
    expect(map(undefined as string | undefined, s => s.length)).toEqual(
      undefined
    )
  })
})

describe('filter', () => {
  it('should return undefined on false predicate return value', () => {
    expect(filter('test-string', s => false)).toEqual(undefined)
  })

  it('should return undefined when value is undefined', () => {
    expect(filter(undefined as string | undefined, s => false)).toEqual(
      undefined
    )
  })

  it('should return value on true predicate return value', () => {
    expect(filter('test-string', s => true)).toEqual('test-string')
  })
})

describe('fromNullable', () => {
  it('should return undefined when value is null', () => {
    expect(fromNullable(null)).toEqual(undefined)
  })

  it('should return value when value is not null', () => {
    expect(fromNullable('test')).toEqual('test')
  })

  it('should return undefined when value is undefined', () => {
    expect(fromNullable(undefined)).toEqual(undefined)
  })
})

describe('asNullable', () => {
  it('should return null when value is undefined', () => {
    expect(asNullable(undefined)).toEqual(null)
  })

  it('should return value when it is defined', () => {
    expect(asNullable('string')).toEqual('string')
  })

  it('should return null when value is null', () => {
    expect(asNullable(null)).toEqual(null)
  })
})

describe('getOrThrow', () => {
  it('should throw when value is undefined', () => {
    expect(() => getOrThrow(undefined)).toThrowError()
  })

  it('should return value when it is defined', () => {
    expect(getOrThrow('test-string')).toEqual('test-string')
  })

  it('should return null when it is passed as value', () => {
    expect(getOrThrow(null)).toEqual(null)
  })
})

describe('getOrDefault', () => {
  it('should return default value when value is undefined', () => {
    expect(getOrDefault(undefined, 'default-string')).toEqual('default-string')
  })

  it('should return value when it is defined', () => {
    expect(getOrDefault<string>('test-string', 'default-string')).toEqual(
      'test-string'
    )
  })

  it('should return null when it is passed as value', () => {
    expect(getOrDefault(null as null | string | undefined, 'default')).toEqual(
      null
    )
  })
})

describe('getOrElse', () => {
  it('should return result of makeDefault when value is undefined', () => {
    expect(getOrElse(undefined, () => 'default-string')).toEqual(
      'default-string'
    )
  })

  it('should return value when it is defined', () => {
    expect(getOrElse<string>('test-string', () => 'default-string')).toEqual(
      'test-string'
    )
  })

  it('should return null when it is passed as value', () => {
    expect(
      getOrElse(null as null | string | undefined, () => 'default')
    ).toEqual(null)
  })
})

describe('isDefined', () => {
  it('should return false when value is undefined', () => {
    expect(isDefined(undefined)).toEqual(false)
  })

  it('should return true when value is defined', () => {
    expect(isDefined('test')).toEqual(true)
  })

  it('should return true when value is null', () => {
    expect(isDefined(null)).toEqual(true)
  })
})

describe('notDefined', () => {
  it('should return true when value is undefined', () => {
    expect(notDefined(undefined)).toEqual(true)
  })

  it('should return false when value is defined', () => {
    expect(notDefined('test')).toEqual(false)
  })

  it('should return false when value is null', () => {
    expect(notDefined(null)).toEqual(false)
  })
})
