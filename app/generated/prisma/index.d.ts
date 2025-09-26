
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model post
 * 
 */
export type post = $Result.DefaultSelection<Prisma.$postPayload>
/**
 * Model defined_tag
 * 
 */
export type defined_tag = $Result.DefaultSelection<Prisma.$defined_tagPayload>
/**
 * Model post_tag
 * 
 */
export type post_tag = $Result.DefaultSelection<Prisma.$post_tagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.defined_tag`: Exposes CRUD operations for the **defined_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Defined_tags
    * const defined_tags = await prisma.defined_tag.findMany()
    * ```
    */
  get defined_tag(): Prisma.defined_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_tag`: Exposes CRUD operations for the **post_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_tags
    * const post_tags = await prisma.post_tag.findMany()
    * ```
    */
  get post_tag(): Prisma.post_tagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    post: 'post',
    defined_tag: 'defined_tag',
    post_tag: 'post_tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "defined_tag" | "post_tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      post: {
        payload: Prisma.$postPayload<ExtArgs>
        fields: Prisma.postFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findFirst: {
            args: Prisma.postFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findMany: {
            args: Prisma.postFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          create: {
            args: Prisma.postCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          createMany: {
            args: Prisma.postCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          delete: {
            args: Prisma.postDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          update: {
            args: Prisma.postUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          deleteMany: {
            args: Prisma.postDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          upsert: {
            args: Prisma.postUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.postGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.postCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      defined_tag: {
        payload: Prisma.$defined_tagPayload<ExtArgs>
        fields: Prisma.defined_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.defined_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.defined_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>
          }
          findFirst: {
            args: Prisma.defined_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.defined_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>
          }
          findMany: {
            args: Prisma.defined_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>[]
          }
          create: {
            args: Prisma.defined_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>
          }
          createMany: {
            args: Prisma.defined_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.defined_tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>[]
          }
          delete: {
            args: Prisma.defined_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>
          }
          update: {
            args: Prisma.defined_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>
          }
          deleteMany: {
            args: Prisma.defined_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.defined_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.defined_tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>[]
          }
          upsert: {
            args: Prisma.defined_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$defined_tagPayload>
          }
          aggregate: {
            args: Prisma.Defined_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefined_tag>
          }
          groupBy: {
            args: Prisma.defined_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Defined_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.defined_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Defined_tagCountAggregateOutputType> | number
          }
        }
      }
      post_tag: {
        payload: Prisma.$post_tagPayload<ExtArgs>
        fields: Prisma.post_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>
          }
          findFirst: {
            args: Prisma.post_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>
          }
          findMany: {
            args: Prisma.post_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>[]
          }
          create: {
            args: Prisma.post_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>
          }
          createMany: {
            args: Prisma.post_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>[]
          }
          delete: {
            args: Prisma.post_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>
          }
          update: {
            args: Prisma.post_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>
          }
          deleteMany: {
            args: Prisma.post_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>[]
          }
          upsert: {
            args: Prisma.post_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_tagPayload>
          }
          aggregate: {
            args: Prisma.Post_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_tag>
          }
          groupBy: {
            args: Prisma.post_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Post_tagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: postOmit
    defined_tag?: defined_tagOmit
    post_tag?: post_tagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    post_tags: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | PostCountOutputTypeCountPost_tagsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPost_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagWhereInput
  }


  /**
   * Count Type Defined_tagCountOutputType
   */

  export type Defined_tagCountOutputType = {
    post_tags: number
  }

  export type Defined_tagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | Defined_tagCountOutputTypeCountPost_tagsArgs
  }

  // Custom InputTypes
  /**
   * Defined_tagCountOutputType without action
   */
  export type Defined_tagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defined_tagCountOutputType
     */
    select?: Defined_tagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Defined_tagCountOutputType without action
   */
  export type Defined_tagCountOutputTypeCountPost_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    post_id: number | null
    latitude: number | null
    longitude: number | null
    slots: number | null
    joined: number | null
  }

  export type PostSumAggregateOutputType = {
    post_id: number | null
    latitude: number | null
    longitude: number | null
    slots: number | null
    joined: number | null
  }

  export type PostMinAggregateOutputType = {
    post_id: number | null
    description: string | null
    image_url: string | null
    start_time: Date | null
    end_time: Date | null
    latitude: number | null
    longitude: number | null
    slots: number | null
    joined: number | null
    terminate: boolean | null
  }

  export type PostMaxAggregateOutputType = {
    post_id: number | null
    description: string | null
    image_url: string | null
    start_time: Date | null
    end_time: Date | null
    latitude: number | null
    longitude: number | null
    slots: number | null
    joined: number | null
    terminate: boolean | null
  }

  export type PostCountAggregateOutputType = {
    post_id: number
    description: number
    image_url: number
    start_time: number
    end_time: number
    latitude: number
    longitude: number
    slots: number
    joined: number
    terminate: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    post_id?: true
    latitude?: true
    longitude?: true
    slots?: true
    joined?: true
  }

  export type PostSumAggregateInputType = {
    post_id?: true
    latitude?: true
    longitude?: true
    slots?: true
    joined?: true
  }

  export type PostMinAggregateInputType = {
    post_id?: true
    description?: true
    image_url?: true
    start_time?: true
    end_time?: true
    latitude?: true
    longitude?: true
    slots?: true
    joined?: true
    terminate?: true
  }

  export type PostMaxAggregateInputType = {
    post_id?: true
    description?: true
    image_url?: true
    start_time?: true
    end_time?: true
    latitude?: true
    longitude?: true
    slots?: true
    joined?: true
    terminate?: true
  }

  export type PostCountAggregateInputType = {
    post_id?: true
    description?: true
    image_url?: true
    start_time?: true
    end_time?: true
    latitude?: true
    longitude?: true
    slots?: true
    joined?: true
    terminate?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post to aggregate.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type postGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
    orderBy?: postOrderByWithAggregationInput | postOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    post_id: number
    description: string
    image_url: string | null
    start_time: Date | null
    end_time: Date | null
    latitude: number | null
    longitude: number | null
    slots: number
    joined: number
    terminate: boolean | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends postGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    description?: boolean
    image_url?: boolean
    start_time?: boolean
    end_time?: boolean
    latitude?: boolean
    longitude?: boolean
    slots?: boolean
    joined?: boolean
    terminate?: boolean
    post_tags?: boolean | post$post_tagsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type postSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    description?: boolean
    image_url?: boolean
    start_time?: boolean
    end_time?: boolean
    latitude?: boolean
    longitude?: boolean
    slots?: boolean
    joined?: boolean
    terminate?: boolean
  }, ExtArgs["result"]["post"]>

  export type postSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    description?: boolean
    image_url?: boolean
    start_time?: boolean
    end_time?: boolean
    latitude?: boolean
    longitude?: boolean
    slots?: boolean
    joined?: boolean
    terminate?: boolean
  }, ExtArgs["result"]["post"]>

  export type postSelectScalar = {
    post_id?: boolean
    description?: boolean
    image_url?: boolean
    start_time?: boolean
    end_time?: boolean
    latitude?: boolean
    longitude?: boolean
    slots?: boolean
    joined?: boolean
    terminate?: boolean
  }

  export type postOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "description" | "image_url" | "start_time" | "end_time" | "latitude" | "longitude" | "slots" | "joined" | "terminate", ExtArgs["result"]["post"]>
  export type postInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | post$post_tagsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type postIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $postPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post"
    objects: {
      post_tags: Prisma.$post_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      description: string
      image_url: string | null
      start_time: Date | null
      end_time: Date | null
      latitude: number | null
      longitude: number | null
      slots: number
      joined: number
      terminate: boolean | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type postGetPayload<S extends boolean | null | undefined | postDefaultArgs> = $Result.GetResult<Prisma.$postPayload, S>

  type postCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface postDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post'], meta: { name: 'post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postFindUniqueArgs>(args: SelectSubset<T, postFindUniqueArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs>(args: SelectSubset<T, postFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postFindFirstArgs>(args?: SelectSubset<T, postFindFirstArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postFindFirstOrThrowArgs>(args?: SelectSubset<T, postFindFirstOrThrowArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postWithPost_idOnly = await prisma.post.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends postFindManyArgs>(args?: SelectSubset<T, postFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends postCreateArgs>(args: SelectSubset<T, postCreateArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postCreateManyArgs>(args?: SelectSubset<T, postCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postCreateManyAndReturnArgs>(args?: SelectSubset<T, postCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends postDeleteArgs>(args: SelectSubset<T, postDeleteArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postUpdateArgs>(args: SelectSubset<T, postUpdateArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postDeleteManyArgs>(args?: SelectSubset<T, postDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postUpdateManyArgs>(args: SelectSubset<T, postUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postWithPost_idOnly = await prisma.post.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postUpdateManyAndReturnArgs>(args: SelectSubset<T, postUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends postUpsertArgs>(args: SelectSubset<T, postUpsertArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postGroupByArgs['orderBy'] }
        : { orderBy?: postGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post model
   */
  readonly fields: postFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_tags<T extends post$post_tagsArgs<ExtArgs> = {}>(args?: Subset<T, post$post_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the post model
   */
  interface postFieldRefs {
    readonly post_id: FieldRef<"post", 'Int'>
    readonly description: FieldRef<"post", 'String'>
    readonly image_url: FieldRef<"post", 'String'>
    readonly start_time: FieldRef<"post", 'DateTime'>
    readonly end_time: FieldRef<"post", 'DateTime'>
    readonly latitude: FieldRef<"post", 'Float'>
    readonly longitude: FieldRef<"post", 'Float'>
    readonly slots: FieldRef<"post", 'Int'>
    readonly joined: FieldRef<"post", 'Int'>
    readonly terminate: FieldRef<"post", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * post findUnique
   */
  export type postFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findFirst
   */
  export type postFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationInput | postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to create a post.
     */
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }

  /**
   * post createMany
   */
  export type postCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postCreateManyInput | postCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post createManyAndReturn
   */
  export type postCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postCreateManyInput | postCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to update a post.
     */
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     */
    where: postWhereUniqueInput
  }

  /**
   * post updateMany
   */
  export type postUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * post updateManyAndReturn
   */
  export type postUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * post upsert
   */
  export type postUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The filter to search for the post to update in case it exists.
     */
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     */
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }

  /**
   * post delete
   */
  export type postDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter which post to delete.
     */
    where: postWhereUniqueInput
  }

  /**
   * post deleteMany
   */
  export type postDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * post.post_tags
   */
  export type post$post_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    where?: post_tagWhereInput
    orderBy?: post_tagOrderByWithRelationInput | post_tagOrderByWithRelationInput[]
    cursor?: post_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_tagScalarFieldEnum | Post_tagScalarFieldEnum[]
  }

  /**
   * post without action
   */
  export type postDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post
     */
    omit?: postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postInclude<ExtArgs> | null
  }


  /**
   * Model defined_tag
   */

  export type AggregateDefined_tag = {
    _count: Defined_tagCountAggregateOutputType | null
    _avg: Defined_tagAvgAggregateOutputType | null
    _sum: Defined_tagSumAggregateOutputType | null
    _min: Defined_tagMinAggregateOutputType | null
    _max: Defined_tagMaxAggregateOutputType | null
  }

  export type Defined_tagAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type Defined_tagSumAggregateOutputType = {
    tag_id: number | null
  }

  export type Defined_tagMinAggregateOutputType = {
    tag_id: number | null
    tag: string | null
  }

  export type Defined_tagMaxAggregateOutputType = {
    tag_id: number | null
    tag: string | null
  }

  export type Defined_tagCountAggregateOutputType = {
    tag_id: number
    tag: number
    _all: number
  }


  export type Defined_tagAvgAggregateInputType = {
    tag_id?: true
  }

  export type Defined_tagSumAggregateInputType = {
    tag_id?: true
  }

  export type Defined_tagMinAggregateInputType = {
    tag_id?: true
    tag?: true
  }

  export type Defined_tagMaxAggregateInputType = {
    tag_id?: true
    tag?: true
  }

  export type Defined_tagCountAggregateInputType = {
    tag_id?: true
    tag?: true
    _all?: true
  }

  export type Defined_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which defined_tag to aggregate.
     */
    where?: defined_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of defined_tags to fetch.
     */
    orderBy?: defined_tagOrderByWithRelationInput | defined_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: defined_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` defined_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` defined_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned defined_tags
    **/
    _count?: true | Defined_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Defined_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Defined_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Defined_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Defined_tagMaxAggregateInputType
  }

  export type GetDefined_tagAggregateType<T extends Defined_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateDefined_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefined_tag[P]>
      : GetScalarType<T[P], AggregateDefined_tag[P]>
  }




  export type defined_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: defined_tagWhereInput
    orderBy?: defined_tagOrderByWithAggregationInput | defined_tagOrderByWithAggregationInput[]
    by: Defined_tagScalarFieldEnum[] | Defined_tagScalarFieldEnum
    having?: defined_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Defined_tagCountAggregateInputType | true
    _avg?: Defined_tagAvgAggregateInputType
    _sum?: Defined_tagSumAggregateInputType
    _min?: Defined_tagMinAggregateInputType
    _max?: Defined_tagMaxAggregateInputType
  }

  export type Defined_tagGroupByOutputType = {
    tag_id: number
    tag: string
    _count: Defined_tagCountAggregateOutputType | null
    _avg: Defined_tagAvgAggregateOutputType | null
    _sum: Defined_tagSumAggregateOutputType | null
    _min: Defined_tagMinAggregateOutputType | null
    _max: Defined_tagMaxAggregateOutputType | null
  }

  type GetDefined_tagGroupByPayload<T extends defined_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Defined_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Defined_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Defined_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Defined_tagGroupByOutputType[P]>
        }
      >
    >


  export type defined_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag?: boolean
    post_tags?: boolean | defined_tag$post_tagsArgs<ExtArgs>
    _count?: boolean | Defined_tagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defined_tag"]>

  export type defined_tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag?: boolean
  }, ExtArgs["result"]["defined_tag"]>

  export type defined_tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag?: boolean
  }, ExtArgs["result"]["defined_tag"]>

  export type defined_tagSelectScalar = {
    tag_id?: boolean
    tag?: boolean
  }

  export type defined_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "tag", ExtArgs["result"]["defined_tag"]>
  export type defined_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_tags?: boolean | defined_tag$post_tagsArgs<ExtArgs>
    _count?: boolean | Defined_tagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type defined_tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type defined_tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $defined_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "defined_tag"
    objects: {
      post_tags: Prisma.$post_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      tag: string
    }, ExtArgs["result"]["defined_tag"]>
    composites: {}
  }

  type defined_tagGetPayload<S extends boolean | null | undefined | defined_tagDefaultArgs> = $Result.GetResult<Prisma.$defined_tagPayload, S>

  type defined_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<defined_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Defined_tagCountAggregateInputType | true
    }

  export interface defined_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['defined_tag'], meta: { name: 'defined_tag' } }
    /**
     * Find zero or one Defined_tag that matches the filter.
     * @param {defined_tagFindUniqueArgs} args - Arguments to find a Defined_tag
     * @example
     * // Get one Defined_tag
     * const defined_tag = await prisma.defined_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends defined_tagFindUniqueArgs>(args: SelectSubset<T, defined_tagFindUniqueArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Defined_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {defined_tagFindUniqueOrThrowArgs} args - Arguments to find a Defined_tag
     * @example
     * // Get one Defined_tag
     * const defined_tag = await prisma.defined_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends defined_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, defined_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Defined_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {defined_tagFindFirstArgs} args - Arguments to find a Defined_tag
     * @example
     * // Get one Defined_tag
     * const defined_tag = await prisma.defined_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends defined_tagFindFirstArgs>(args?: SelectSubset<T, defined_tagFindFirstArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Defined_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {defined_tagFindFirstOrThrowArgs} args - Arguments to find a Defined_tag
     * @example
     * // Get one Defined_tag
     * const defined_tag = await prisma.defined_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends defined_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, defined_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Defined_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {defined_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Defined_tags
     * const defined_tags = await prisma.defined_tag.findMany()
     * 
     * // Get first 10 Defined_tags
     * const defined_tags = await prisma.defined_tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const defined_tagWithTag_idOnly = await prisma.defined_tag.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends defined_tagFindManyArgs>(args?: SelectSubset<T, defined_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Defined_tag.
     * @param {defined_tagCreateArgs} args - Arguments to create a Defined_tag.
     * @example
     * // Create one Defined_tag
     * const Defined_tag = await prisma.defined_tag.create({
     *   data: {
     *     // ... data to create a Defined_tag
     *   }
     * })
     * 
     */
    create<T extends defined_tagCreateArgs>(args: SelectSubset<T, defined_tagCreateArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Defined_tags.
     * @param {defined_tagCreateManyArgs} args - Arguments to create many Defined_tags.
     * @example
     * // Create many Defined_tags
     * const defined_tag = await prisma.defined_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends defined_tagCreateManyArgs>(args?: SelectSubset<T, defined_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Defined_tags and returns the data saved in the database.
     * @param {defined_tagCreateManyAndReturnArgs} args - Arguments to create many Defined_tags.
     * @example
     * // Create many Defined_tags
     * const defined_tag = await prisma.defined_tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Defined_tags and only return the `tag_id`
     * const defined_tagWithTag_idOnly = await prisma.defined_tag.createManyAndReturn({
     *   select: { tag_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends defined_tagCreateManyAndReturnArgs>(args?: SelectSubset<T, defined_tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Defined_tag.
     * @param {defined_tagDeleteArgs} args - Arguments to delete one Defined_tag.
     * @example
     * // Delete one Defined_tag
     * const Defined_tag = await prisma.defined_tag.delete({
     *   where: {
     *     // ... filter to delete one Defined_tag
     *   }
     * })
     * 
     */
    delete<T extends defined_tagDeleteArgs>(args: SelectSubset<T, defined_tagDeleteArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Defined_tag.
     * @param {defined_tagUpdateArgs} args - Arguments to update one Defined_tag.
     * @example
     * // Update one Defined_tag
     * const defined_tag = await prisma.defined_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends defined_tagUpdateArgs>(args: SelectSubset<T, defined_tagUpdateArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Defined_tags.
     * @param {defined_tagDeleteManyArgs} args - Arguments to filter Defined_tags to delete.
     * @example
     * // Delete a few Defined_tags
     * const { count } = await prisma.defined_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends defined_tagDeleteManyArgs>(args?: SelectSubset<T, defined_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Defined_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {defined_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Defined_tags
     * const defined_tag = await prisma.defined_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends defined_tagUpdateManyArgs>(args: SelectSubset<T, defined_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Defined_tags and returns the data updated in the database.
     * @param {defined_tagUpdateManyAndReturnArgs} args - Arguments to update many Defined_tags.
     * @example
     * // Update many Defined_tags
     * const defined_tag = await prisma.defined_tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Defined_tags and only return the `tag_id`
     * const defined_tagWithTag_idOnly = await prisma.defined_tag.updateManyAndReturn({
     *   select: { tag_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends defined_tagUpdateManyAndReturnArgs>(args: SelectSubset<T, defined_tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Defined_tag.
     * @param {defined_tagUpsertArgs} args - Arguments to update or create a Defined_tag.
     * @example
     * // Update or create a Defined_tag
     * const defined_tag = await prisma.defined_tag.upsert({
     *   create: {
     *     // ... data to create a Defined_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Defined_tag we want to update
     *   }
     * })
     */
    upsert<T extends defined_tagUpsertArgs>(args: SelectSubset<T, defined_tagUpsertArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Defined_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {defined_tagCountArgs} args - Arguments to filter Defined_tags to count.
     * @example
     * // Count the number of Defined_tags
     * const count = await prisma.defined_tag.count({
     *   where: {
     *     // ... the filter for the Defined_tags we want to count
     *   }
     * })
    **/
    count<T extends defined_tagCountArgs>(
      args?: Subset<T, defined_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Defined_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Defined_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Defined_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Defined_tagAggregateArgs>(args: Subset<T, Defined_tagAggregateArgs>): Prisma.PrismaPromise<GetDefined_tagAggregateType<T>>

    /**
     * Group by Defined_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {defined_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends defined_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: defined_tagGroupByArgs['orderBy'] }
        : { orderBy?: defined_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, defined_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefined_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the defined_tag model
   */
  readonly fields: defined_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for defined_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__defined_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_tags<T extends defined_tag$post_tagsArgs<ExtArgs> = {}>(args?: Subset<T, defined_tag$post_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the defined_tag model
   */
  interface defined_tagFieldRefs {
    readonly tag_id: FieldRef<"defined_tag", 'Int'>
    readonly tag: FieldRef<"defined_tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * defined_tag findUnique
   */
  export type defined_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * Filter, which defined_tag to fetch.
     */
    where: defined_tagWhereUniqueInput
  }

  /**
   * defined_tag findUniqueOrThrow
   */
  export type defined_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * Filter, which defined_tag to fetch.
     */
    where: defined_tagWhereUniqueInput
  }

  /**
   * defined_tag findFirst
   */
  export type defined_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * Filter, which defined_tag to fetch.
     */
    where?: defined_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of defined_tags to fetch.
     */
    orderBy?: defined_tagOrderByWithRelationInput | defined_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for defined_tags.
     */
    cursor?: defined_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` defined_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` defined_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of defined_tags.
     */
    distinct?: Defined_tagScalarFieldEnum | Defined_tagScalarFieldEnum[]
  }

  /**
   * defined_tag findFirstOrThrow
   */
  export type defined_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * Filter, which defined_tag to fetch.
     */
    where?: defined_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of defined_tags to fetch.
     */
    orderBy?: defined_tagOrderByWithRelationInput | defined_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for defined_tags.
     */
    cursor?: defined_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` defined_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` defined_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of defined_tags.
     */
    distinct?: Defined_tagScalarFieldEnum | Defined_tagScalarFieldEnum[]
  }

  /**
   * defined_tag findMany
   */
  export type defined_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * Filter, which defined_tags to fetch.
     */
    where?: defined_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of defined_tags to fetch.
     */
    orderBy?: defined_tagOrderByWithRelationInput | defined_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing defined_tags.
     */
    cursor?: defined_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` defined_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` defined_tags.
     */
    skip?: number
    distinct?: Defined_tagScalarFieldEnum | Defined_tagScalarFieldEnum[]
  }

  /**
   * defined_tag create
   */
  export type defined_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a defined_tag.
     */
    data: XOR<defined_tagCreateInput, defined_tagUncheckedCreateInput>
  }

  /**
   * defined_tag createMany
   */
  export type defined_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many defined_tags.
     */
    data: defined_tagCreateManyInput | defined_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * defined_tag createManyAndReturn
   */
  export type defined_tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * The data used to create many defined_tags.
     */
    data: defined_tagCreateManyInput | defined_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * defined_tag update
   */
  export type defined_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a defined_tag.
     */
    data: XOR<defined_tagUpdateInput, defined_tagUncheckedUpdateInput>
    /**
     * Choose, which defined_tag to update.
     */
    where: defined_tagWhereUniqueInput
  }

  /**
   * defined_tag updateMany
   */
  export type defined_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update defined_tags.
     */
    data: XOR<defined_tagUpdateManyMutationInput, defined_tagUncheckedUpdateManyInput>
    /**
     * Filter which defined_tags to update
     */
    where?: defined_tagWhereInput
    /**
     * Limit how many defined_tags to update.
     */
    limit?: number
  }

  /**
   * defined_tag updateManyAndReturn
   */
  export type defined_tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * The data used to update defined_tags.
     */
    data: XOR<defined_tagUpdateManyMutationInput, defined_tagUncheckedUpdateManyInput>
    /**
     * Filter which defined_tags to update
     */
    where?: defined_tagWhereInput
    /**
     * Limit how many defined_tags to update.
     */
    limit?: number
  }

  /**
   * defined_tag upsert
   */
  export type defined_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the defined_tag to update in case it exists.
     */
    where: defined_tagWhereUniqueInput
    /**
     * In case the defined_tag found by the `where` argument doesn't exist, create a new defined_tag with this data.
     */
    create: XOR<defined_tagCreateInput, defined_tagUncheckedCreateInput>
    /**
     * In case the defined_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<defined_tagUpdateInput, defined_tagUncheckedUpdateInput>
  }

  /**
   * defined_tag delete
   */
  export type defined_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
    /**
     * Filter which defined_tag to delete.
     */
    where: defined_tagWhereUniqueInput
  }

  /**
   * defined_tag deleteMany
   */
  export type defined_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which defined_tags to delete
     */
    where?: defined_tagWhereInput
    /**
     * Limit how many defined_tags to delete.
     */
    limit?: number
  }

  /**
   * defined_tag.post_tags
   */
  export type defined_tag$post_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    where?: post_tagWhereInput
    orderBy?: post_tagOrderByWithRelationInput | post_tagOrderByWithRelationInput[]
    cursor?: post_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_tagScalarFieldEnum | Post_tagScalarFieldEnum[]
  }

  /**
   * defined_tag without action
   */
  export type defined_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the defined_tag
     */
    select?: defined_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the defined_tag
     */
    omit?: defined_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: defined_tagInclude<ExtArgs> | null
  }


  /**
   * Model post_tag
   */

  export type AggregatePost_tag = {
    _count: Post_tagCountAggregateOutputType | null
    _avg: Post_tagAvgAggregateOutputType | null
    _sum: Post_tagSumAggregateOutputType | null
    _min: Post_tagMinAggregateOutputType | null
    _max: Post_tagMaxAggregateOutputType | null
  }

  export type Post_tagAvgAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagSumAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagMinAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagMaxAggregateOutputType = {
    post_id: number | null
    tag_id: number | null
  }

  export type Post_tagCountAggregateOutputType = {
    post_id: number
    tag_id: number
    _all: number
  }


  export type Post_tagAvgAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagSumAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagMinAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagMaxAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Post_tagCountAggregateInputType = {
    post_id?: true
    tag_id?: true
    _all?: true
  }

  export type Post_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_tag to aggregate.
     */
    where?: post_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagOrderByWithRelationInput | post_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_tags
    **/
    _count?: true | Post_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_tagMaxAggregateInputType
  }

  export type GetPost_tagAggregateType<T extends Post_tagAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_tag[P]>
      : GetScalarType<T[P], AggregatePost_tag[P]>
  }




  export type post_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_tagWhereInput
    orderBy?: post_tagOrderByWithAggregationInput | post_tagOrderByWithAggregationInput[]
    by: Post_tagScalarFieldEnum[] | Post_tagScalarFieldEnum
    having?: post_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_tagCountAggregateInputType | true
    _avg?: Post_tagAvgAggregateInputType
    _sum?: Post_tagSumAggregateInputType
    _min?: Post_tagMinAggregateInputType
    _max?: Post_tagMaxAggregateInputType
  }

  export type Post_tagGroupByOutputType = {
    post_id: number
    tag_id: number
    _count: Post_tagCountAggregateOutputType | null
    _avg: Post_tagAvgAggregateOutputType | null
    _sum: Post_tagSumAggregateOutputType | null
    _min: Post_tagMinAggregateOutputType | null
    _max: Post_tagMaxAggregateOutputType | null
  }

  type GetPost_tagGroupByPayload<T extends post_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Post_tagGroupByOutputType[P]>
        }
      >
    >


  export type post_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    tag?: boolean | defined_tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tag"]>

  export type post_tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    tag?: boolean | defined_tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tag"]>

  export type post_tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | postDefaultArgs<ExtArgs>
    tag?: boolean | defined_tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_tag"]>

  export type post_tagSelectScalar = {
    post_id?: boolean
    tag_id?: boolean
  }

  export type post_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "tag_id", ExtArgs["result"]["post_tag"]>
  export type post_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    tag?: boolean | defined_tagDefaultArgs<ExtArgs>
  }
  export type post_tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    tag?: boolean | defined_tagDefaultArgs<ExtArgs>
  }
  export type post_tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postDefaultArgs<ExtArgs>
    tag?: boolean | defined_tagDefaultArgs<ExtArgs>
  }

  export type $post_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_tag"
    objects: {
      post: Prisma.$postPayload<ExtArgs>
      tag: Prisma.$defined_tagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      tag_id: number
    }, ExtArgs["result"]["post_tag"]>
    composites: {}
  }

  type post_tagGetPayload<S extends boolean | null | undefined | post_tagDefaultArgs> = $Result.GetResult<Prisma.$post_tagPayload, S>

  type post_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_tagCountAggregateInputType | true
    }

  export interface post_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_tag'], meta: { name: 'post_tag' } }
    /**
     * Find zero or one Post_tag that matches the filter.
     * @param {post_tagFindUniqueArgs} args - Arguments to find a Post_tag
     * @example
     * // Get one Post_tag
     * const post_tag = await prisma.post_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_tagFindUniqueArgs>(args: SelectSubset<T, post_tagFindUniqueArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_tagFindUniqueOrThrowArgs} args - Arguments to find a Post_tag
     * @example
     * // Get one Post_tag
     * const post_tag = await prisma.post_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, post_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagFindFirstArgs} args - Arguments to find a Post_tag
     * @example
     * // Get one Post_tag
     * const post_tag = await prisma.post_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_tagFindFirstArgs>(args?: SelectSubset<T, post_tagFindFirstArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagFindFirstOrThrowArgs} args - Arguments to find a Post_tag
     * @example
     * // Get one Post_tag
     * const post_tag = await prisma.post_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, post_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_tags
     * const post_tags = await prisma.post_tag.findMany()
     * 
     * // Get first 10 Post_tags
     * const post_tags = await prisma.post_tag.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const post_tagWithPost_idOnly = await prisma.post_tag.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends post_tagFindManyArgs>(args?: SelectSubset<T, post_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_tag.
     * @param {post_tagCreateArgs} args - Arguments to create a Post_tag.
     * @example
     * // Create one Post_tag
     * const Post_tag = await prisma.post_tag.create({
     *   data: {
     *     // ... data to create a Post_tag
     *   }
     * })
     * 
     */
    create<T extends post_tagCreateArgs>(args: SelectSubset<T, post_tagCreateArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_tags.
     * @param {post_tagCreateManyArgs} args - Arguments to create many Post_tags.
     * @example
     * // Create many Post_tags
     * const post_tag = await prisma.post_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_tagCreateManyArgs>(args?: SelectSubset<T, post_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_tags and returns the data saved in the database.
     * @param {post_tagCreateManyAndReturnArgs} args - Arguments to create many Post_tags.
     * @example
     * // Create many Post_tags
     * const post_tag = await prisma.post_tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_tags and only return the `post_id`
     * const post_tagWithPost_idOnly = await prisma.post_tag.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_tagCreateManyAndReturnArgs>(args?: SelectSubset<T, post_tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_tag.
     * @param {post_tagDeleteArgs} args - Arguments to delete one Post_tag.
     * @example
     * // Delete one Post_tag
     * const Post_tag = await prisma.post_tag.delete({
     *   where: {
     *     // ... filter to delete one Post_tag
     *   }
     * })
     * 
     */
    delete<T extends post_tagDeleteArgs>(args: SelectSubset<T, post_tagDeleteArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_tag.
     * @param {post_tagUpdateArgs} args - Arguments to update one Post_tag.
     * @example
     * // Update one Post_tag
     * const post_tag = await prisma.post_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_tagUpdateArgs>(args: SelectSubset<T, post_tagUpdateArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_tags.
     * @param {post_tagDeleteManyArgs} args - Arguments to filter Post_tags to delete.
     * @example
     * // Delete a few Post_tags
     * const { count } = await prisma.post_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_tagDeleteManyArgs>(args?: SelectSubset<T, post_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_tags
     * const post_tag = await prisma.post_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_tagUpdateManyArgs>(args: SelectSubset<T, post_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_tags and returns the data updated in the database.
     * @param {post_tagUpdateManyAndReturnArgs} args - Arguments to update many Post_tags.
     * @example
     * // Update many Post_tags
     * const post_tag = await prisma.post_tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_tags and only return the `post_id`
     * const post_tagWithPost_idOnly = await prisma.post_tag.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends post_tagUpdateManyAndReturnArgs>(args: SelectSubset<T, post_tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_tag.
     * @param {post_tagUpsertArgs} args - Arguments to update or create a Post_tag.
     * @example
     * // Update or create a Post_tag
     * const post_tag = await prisma.post_tag.upsert({
     *   create: {
     *     // ... data to create a Post_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_tag we want to update
     *   }
     * })
     */
    upsert<T extends post_tagUpsertArgs>(args: SelectSubset<T, post_tagUpsertArgs<ExtArgs>>): Prisma__post_tagClient<$Result.GetResult<Prisma.$post_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagCountArgs} args - Arguments to filter Post_tags to count.
     * @example
     * // Count the number of Post_tags
     * const count = await prisma.post_tag.count({
     *   where: {
     *     // ... the filter for the Post_tags we want to count
     *   }
     * })
    **/
    count<T extends post_tagCountArgs>(
      args?: Subset<T, post_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post_tagAggregateArgs>(args: Subset<T, Post_tagAggregateArgs>): Prisma.PrismaPromise<GetPost_tagAggregateType<T>>

    /**
     * Group by Post_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends post_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_tagGroupByArgs['orderBy'] }
        : { orderBy?: post_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, post_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_tag model
   */
  readonly fields: post_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postDefaultArgs<ExtArgs>>): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends defined_tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, defined_tagDefaultArgs<ExtArgs>>): Prisma__defined_tagClient<$Result.GetResult<Prisma.$defined_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the post_tag model
   */
  interface post_tagFieldRefs {
    readonly post_id: FieldRef<"post_tag", 'Int'>
    readonly tag_id: FieldRef<"post_tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * post_tag findUnique
   */
  export type post_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * Filter, which post_tag to fetch.
     */
    where: post_tagWhereUniqueInput
  }

  /**
   * post_tag findUniqueOrThrow
   */
  export type post_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * Filter, which post_tag to fetch.
     */
    where: post_tagWhereUniqueInput
  }

  /**
   * post_tag findFirst
   */
  export type post_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * Filter, which post_tag to fetch.
     */
    where?: post_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagOrderByWithRelationInput | post_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_tags.
     */
    cursor?: post_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_tags.
     */
    distinct?: Post_tagScalarFieldEnum | Post_tagScalarFieldEnum[]
  }

  /**
   * post_tag findFirstOrThrow
   */
  export type post_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * Filter, which post_tag to fetch.
     */
    where?: post_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagOrderByWithRelationInput | post_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_tags.
     */
    cursor?: post_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_tags.
     */
    distinct?: Post_tagScalarFieldEnum | Post_tagScalarFieldEnum[]
  }

  /**
   * post_tag findMany
   */
  export type post_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * Filter, which post_tags to fetch.
     */
    where?: post_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_tags to fetch.
     */
    orderBy?: post_tagOrderByWithRelationInput | post_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_tags.
     */
    cursor?: post_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_tags.
     */
    skip?: number
    distinct?: Post_tagScalarFieldEnum | Post_tagScalarFieldEnum[]
  }

  /**
   * post_tag create
   */
  export type post_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a post_tag.
     */
    data: XOR<post_tagCreateInput, post_tagUncheckedCreateInput>
  }

  /**
   * post_tag createMany
   */
  export type post_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_tags.
     */
    data: post_tagCreateManyInput | post_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_tag createManyAndReturn
   */
  export type post_tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * The data used to create many post_tags.
     */
    data: post_tagCreateManyInput | post_tagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_tag update
   */
  export type post_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a post_tag.
     */
    data: XOR<post_tagUpdateInput, post_tagUncheckedUpdateInput>
    /**
     * Choose, which post_tag to update.
     */
    where: post_tagWhereUniqueInput
  }

  /**
   * post_tag updateMany
   */
  export type post_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_tags.
     */
    data: XOR<post_tagUpdateManyMutationInput, post_tagUncheckedUpdateManyInput>
    /**
     * Filter which post_tags to update
     */
    where?: post_tagWhereInput
    /**
     * Limit how many post_tags to update.
     */
    limit?: number
  }

  /**
   * post_tag updateManyAndReturn
   */
  export type post_tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * The data used to update post_tags.
     */
    data: XOR<post_tagUpdateManyMutationInput, post_tagUncheckedUpdateManyInput>
    /**
     * Filter which post_tags to update
     */
    where?: post_tagWhereInput
    /**
     * Limit how many post_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_tag upsert
   */
  export type post_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the post_tag to update in case it exists.
     */
    where: post_tagWhereUniqueInput
    /**
     * In case the post_tag found by the `where` argument doesn't exist, create a new post_tag with this data.
     */
    create: XOR<post_tagCreateInput, post_tagUncheckedCreateInput>
    /**
     * In case the post_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_tagUpdateInput, post_tagUncheckedUpdateInput>
  }

  /**
   * post_tag delete
   */
  export type post_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
    /**
     * Filter which post_tag to delete.
     */
    where: post_tagWhereUniqueInput
  }

  /**
   * post_tag deleteMany
   */
  export type post_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_tags to delete
     */
    where?: post_tagWhereInput
    /**
     * Limit how many post_tags to delete.
     */
    limit?: number
  }

  /**
   * post_tag without action
   */
  export type post_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_tag
     */
    select?: post_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_tag
     */
    omit?: post_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_tagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    post_id: 'post_id',
    description: 'description',
    image_url: 'image_url',
    start_time: 'start_time',
    end_time: 'end_time',
    latitude: 'latitude',
    longitude: 'longitude',
    slots: 'slots',
    joined: 'joined',
    terminate: 'terminate'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const Defined_tagScalarFieldEnum: {
    tag_id: 'tag_id',
    tag: 'tag'
  };

  export type Defined_tagScalarFieldEnum = (typeof Defined_tagScalarFieldEnum)[keyof typeof Defined_tagScalarFieldEnum]


  export const Post_tagScalarFieldEnum: {
    post_id: 'post_id',
    tag_id: 'tag_id'
  };

  export type Post_tagScalarFieldEnum = (typeof Post_tagScalarFieldEnum)[keyof typeof Post_tagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type postWhereInput = {
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    post_id?: IntFilter<"post"> | number
    description?: StringFilter<"post"> | string
    image_url?: StringNullableFilter<"post"> | string | null
    start_time?: DateTimeNullableFilter<"post"> | Date | string | null
    end_time?: DateTimeNullableFilter<"post"> | Date | string | null
    latitude?: FloatNullableFilter<"post"> | number | null
    longitude?: FloatNullableFilter<"post"> | number | null
    slots?: IntFilter<"post"> | number
    joined?: IntFilter<"post"> | number
    terminate?: BoolNullableFilter<"post"> | boolean | null
    post_tags?: Post_tagListRelationFilter
  }

  export type postOrderByWithRelationInput = {
    post_id?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    slots?: SortOrder
    joined?: SortOrder
    terminate?: SortOrderInput | SortOrder
    post_tags?: post_tagOrderByRelationAggregateInput
  }

  export type postWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    description?: StringFilter<"post"> | string
    image_url?: StringNullableFilter<"post"> | string | null
    start_time?: DateTimeNullableFilter<"post"> | Date | string | null
    end_time?: DateTimeNullableFilter<"post"> | Date | string | null
    latitude?: FloatNullableFilter<"post"> | number | null
    longitude?: FloatNullableFilter<"post"> | number | null
    slots?: IntFilter<"post"> | number
    joined?: IntFilter<"post"> | number
    terminate?: BoolNullableFilter<"post"> | boolean | null
    post_tags?: Post_tagListRelationFilter
  }, "post_id">

  export type postOrderByWithAggregationInput = {
    post_id?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    slots?: SortOrder
    joined?: SortOrder
    terminate?: SortOrderInput | SortOrder
    _count?: postCountOrderByAggregateInput
    _avg?: postAvgOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
    _sum?: postSumOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    OR?: postScalarWhereWithAggregatesInput[]
    NOT?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"post"> | number
    description?: StringWithAggregatesFilter<"post"> | string
    image_url?: StringNullableWithAggregatesFilter<"post"> | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"post"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"post"> | Date | string | null
    latitude?: FloatNullableWithAggregatesFilter<"post"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"post"> | number | null
    slots?: IntWithAggregatesFilter<"post"> | number
    joined?: IntWithAggregatesFilter<"post"> | number
    terminate?: BoolNullableWithAggregatesFilter<"post"> | boolean | null
  }

  export type defined_tagWhereInput = {
    AND?: defined_tagWhereInput | defined_tagWhereInput[]
    OR?: defined_tagWhereInput[]
    NOT?: defined_tagWhereInput | defined_tagWhereInput[]
    tag_id?: IntFilter<"defined_tag"> | number
    tag?: StringFilter<"defined_tag"> | string
    post_tags?: Post_tagListRelationFilter
  }

  export type defined_tagOrderByWithRelationInput = {
    tag_id?: SortOrder
    tag?: SortOrder
    post_tags?: post_tagOrderByRelationAggregateInput
  }

  export type defined_tagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    tag?: string
    AND?: defined_tagWhereInput | defined_tagWhereInput[]
    OR?: defined_tagWhereInput[]
    NOT?: defined_tagWhereInput | defined_tagWhereInput[]
    post_tags?: Post_tagListRelationFilter
  }, "tag_id" | "tag">

  export type defined_tagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    tag?: SortOrder
    _count?: defined_tagCountOrderByAggregateInput
    _avg?: defined_tagAvgOrderByAggregateInput
    _max?: defined_tagMaxOrderByAggregateInput
    _min?: defined_tagMinOrderByAggregateInput
    _sum?: defined_tagSumOrderByAggregateInput
  }

  export type defined_tagScalarWhereWithAggregatesInput = {
    AND?: defined_tagScalarWhereWithAggregatesInput | defined_tagScalarWhereWithAggregatesInput[]
    OR?: defined_tagScalarWhereWithAggregatesInput[]
    NOT?: defined_tagScalarWhereWithAggregatesInput | defined_tagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"defined_tag"> | number
    tag?: StringWithAggregatesFilter<"defined_tag"> | string
  }

  export type post_tagWhereInput = {
    AND?: post_tagWhereInput | post_tagWhereInput[]
    OR?: post_tagWhereInput[]
    NOT?: post_tagWhereInput | post_tagWhereInput[]
    post_id?: IntFilter<"post_tag"> | number
    tag_id?: IntFilter<"post_tag"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    tag?: XOR<Defined_tagScalarRelationFilter, defined_tagWhereInput>
  }

  export type post_tagOrderByWithRelationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    post?: postOrderByWithRelationInput
    tag?: defined_tagOrderByWithRelationInput
  }

  export type post_tagWhereUniqueInput = Prisma.AtLeast<{
    post_id_tag_id?: post_tagPost_idTag_idCompoundUniqueInput
    AND?: post_tagWhereInput | post_tagWhereInput[]
    OR?: post_tagWhereInput[]
    NOT?: post_tagWhereInput | post_tagWhereInput[]
    post_id?: IntFilter<"post_tag"> | number
    tag_id?: IntFilter<"post_tag"> | number
    post?: XOR<PostScalarRelationFilter, postWhereInput>
    tag?: XOR<Defined_tagScalarRelationFilter, defined_tagWhereInput>
  }, "post_id_tag_id">

  export type post_tagOrderByWithAggregationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    _count?: post_tagCountOrderByAggregateInput
    _avg?: post_tagAvgOrderByAggregateInput
    _max?: post_tagMaxOrderByAggregateInput
    _min?: post_tagMinOrderByAggregateInput
    _sum?: post_tagSumOrderByAggregateInput
  }

  export type post_tagScalarWhereWithAggregatesInput = {
    AND?: post_tagScalarWhereWithAggregatesInput | post_tagScalarWhereWithAggregatesInput[]
    OR?: post_tagScalarWhereWithAggregatesInput[]
    NOT?: post_tagScalarWhereWithAggregatesInput | post_tagScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"post_tag"> | number
    tag_id?: IntWithAggregatesFilter<"post_tag"> | number
  }

  export type postCreateInput = {
    description: string
    image_url?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    slots: number
    joined: number
    terminate?: boolean | null
    post_tags?: post_tagCreateNestedManyWithoutPostInput
  }

  export type postUncheckedCreateInput = {
    post_id?: number
    description: string
    image_url?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    slots: number
    joined: number
    terminate?: boolean | null
    post_tags?: post_tagUncheckedCreateNestedManyWithoutPostInput
  }

  export type postUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    slots?: IntFieldUpdateOperationsInput | number
    joined?: IntFieldUpdateOperationsInput | number
    terminate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_tags?: post_tagUpdateManyWithoutPostNestedInput
  }

  export type postUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    slots?: IntFieldUpdateOperationsInput | number
    joined?: IntFieldUpdateOperationsInput | number
    terminate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_tags?: post_tagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postCreateManyInput = {
    post_id?: number
    description: string
    image_url?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    slots: number
    joined: number
    terminate?: boolean | null
  }

  export type postUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    slots?: IntFieldUpdateOperationsInput | number
    joined?: IntFieldUpdateOperationsInput | number
    terminate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type postUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    slots?: IntFieldUpdateOperationsInput | number
    joined?: IntFieldUpdateOperationsInput | number
    terminate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type defined_tagCreateInput = {
    tag: string
    post_tags?: post_tagCreateNestedManyWithoutTagInput
  }

  export type defined_tagUncheckedCreateInput = {
    tag_id?: number
    tag: string
    post_tags?: post_tagUncheckedCreateNestedManyWithoutTagInput
  }

  export type defined_tagUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagUpdateManyWithoutTagNestedInput
  }

  export type defined_tagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
    post_tags?: post_tagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type defined_tagCreateManyInput = {
    tag_id?: number
    tag: string
  }

  export type defined_tagUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type defined_tagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type post_tagCreateInput = {
    post: postCreateNestedOneWithoutPost_tagsInput
    tag: defined_tagCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagUncheckedCreateInput = {
    post_id: number
    tag_id: number
  }

  export type post_tagUpdateInput = {
    post?: postUpdateOneRequiredWithoutPost_tagsNestedInput
    tag?: defined_tagUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagCreateManyInput = {
    post_id: number
    tag_id: number
  }

  export type post_tagUpdateManyMutationInput = {

  }

  export type post_tagUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Post_tagListRelationFilter = {
    every?: post_tagWhereInput
    some?: post_tagWhereInput
    none?: post_tagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type post_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postCountOrderByAggregateInput = {
    post_id?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    slots?: SortOrder
    joined?: SortOrder
    terminate?: SortOrder
  }

  export type postAvgOrderByAggregateInput = {
    post_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    slots?: SortOrder
    joined?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    post_id?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    slots?: SortOrder
    joined?: SortOrder
    terminate?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    post_id?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    slots?: SortOrder
    joined?: SortOrder
    terminate?: SortOrder
  }

  export type postSumOrderByAggregateInput = {
    post_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    slots?: SortOrder
    joined?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type defined_tagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    tag?: SortOrder
  }

  export type defined_tagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type defined_tagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    tag?: SortOrder
  }

  export type defined_tagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    tag?: SortOrder
  }

  export type defined_tagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: postWhereInput
    isNot?: postWhereInput
  }

  export type Defined_tagScalarRelationFilter = {
    is?: defined_tagWhereInput
    isNot?: defined_tagWhereInput
  }

  export type post_tagPost_idTag_idCompoundUniqueInput = {
    post_id: number
    tag_id: number
  }

  export type post_tagCountOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagAvgOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagMaxOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagMinOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagSumOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type post_tagCreateNestedManyWithoutPostInput = {
    create?: XOR<post_tagCreateWithoutPostInput, post_tagUncheckedCreateWithoutPostInput> | post_tagCreateWithoutPostInput[] | post_tagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutPostInput | post_tagCreateOrConnectWithoutPostInput[]
    createMany?: post_tagCreateManyPostInputEnvelope
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
  }

  export type post_tagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<post_tagCreateWithoutPostInput, post_tagUncheckedCreateWithoutPostInput> | post_tagCreateWithoutPostInput[] | post_tagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutPostInput | post_tagCreateOrConnectWithoutPostInput[]
    createMany?: post_tagCreateManyPostInputEnvelope
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type post_tagUpdateManyWithoutPostNestedInput = {
    create?: XOR<post_tagCreateWithoutPostInput, post_tagUncheckedCreateWithoutPostInput> | post_tagCreateWithoutPostInput[] | post_tagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutPostInput | post_tagCreateOrConnectWithoutPostInput[]
    upsert?: post_tagUpsertWithWhereUniqueWithoutPostInput | post_tagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: post_tagCreateManyPostInputEnvelope
    set?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    disconnect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    delete?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    update?: post_tagUpdateWithWhereUniqueWithoutPostInput | post_tagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: post_tagUpdateManyWithWhereWithoutPostInput | post_tagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: post_tagScalarWhereInput | post_tagScalarWhereInput[]
  }

  export type post_tagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<post_tagCreateWithoutPostInput, post_tagUncheckedCreateWithoutPostInput> | post_tagCreateWithoutPostInput[] | post_tagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutPostInput | post_tagCreateOrConnectWithoutPostInput[]
    upsert?: post_tagUpsertWithWhereUniqueWithoutPostInput | post_tagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: post_tagCreateManyPostInputEnvelope
    set?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    disconnect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    delete?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    update?: post_tagUpdateWithWhereUniqueWithoutPostInput | post_tagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: post_tagUpdateManyWithWhereWithoutPostInput | post_tagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: post_tagScalarWhereInput | post_tagScalarWhereInput[]
  }

  export type post_tagCreateNestedManyWithoutTagInput = {
    create?: XOR<post_tagCreateWithoutTagInput, post_tagUncheckedCreateWithoutTagInput> | post_tagCreateWithoutTagInput[] | post_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutTagInput | post_tagCreateOrConnectWithoutTagInput[]
    createMany?: post_tagCreateManyTagInputEnvelope
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
  }

  export type post_tagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<post_tagCreateWithoutTagInput, post_tagUncheckedCreateWithoutTagInput> | post_tagCreateWithoutTagInput[] | post_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutTagInput | post_tagCreateOrConnectWithoutTagInput[]
    createMany?: post_tagCreateManyTagInputEnvelope
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
  }

  export type post_tagUpdateManyWithoutTagNestedInput = {
    create?: XOR<post_tagCreateWithoutTagInput, post_tagUncheckedCreateWithoutTagInput> | post_tagCreateWithoutTagInput[] | post_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutTagInput | post_tagCreateOrConnectWithoutTagInput[]
    upsert?: post_tagUpsertWithWhereUniqueWithoutTagInput | post_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: post_tagCreateManyTagInputEnvelope
    set?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    disconnect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    delete?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    update?: post_tagUpdateWithWhereUniqueWithoutTagInput | post_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: post_tagUpdateManyWithWhereWithoutTagInput | post_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: post_tagScalarWhereInput | post_tagScalarWhereInput[]
  }

  export type post_tagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<post_tagCreateWithoutTagInput, post_tagUncheckedCreateWithoutTagInput> | post_tagCreateWithoutTagInput[] | post_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: post_tagCreateOrConnectWithoutTagInput | post_tagCreateOrConnectWithoutTagInput[]
    upsert?: post_tagUpsertWithWhereUniqueWithoutTagInput | post_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: post_tagCreateManyTagInputEnvelope
    set?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    disconnect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    delete?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    connect?: post_tagWhereUniqueInput | post_tagWhereUniqueInput[]
    update?: post_tagUpdateWithWhereUniqueWithoutTagInput | post_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: post_tagUpdateManyWithWhereWithoutTagInput | post_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: post_tagScalarWhereInput | post_tagScalarWhereInput[]
  }

  export type postCreateNestedOneWithoutPost_tagsInput = {
    create?: XOR<postCreateWithoutPost_tagsInput, postUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: postCreateOrConnectWithoutPost_tagsInput
    connect?: postWhereUniqueInput
  }

  export type defined_tagCreateNestedOneWithoutPost_tagsInput = {
    create?: XOR<defined_tagCreateWithoutPost_tagsInput, defined_tagUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: defined_tagCreateOrConnectWithoutPost_tagsInput
    connect?: defined_tagWhereUniqueInput
  }

  export type postUpdateOneRequiredWithoutPost_tagsNestedInput = {
    create?: XOR<postCreateWithoutPost_tagsInput, postUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: postCreateOrConnectWithoutPost_tagsInput
    upsert?: postUpsertWithoutPost_tagsInput
    connect?: postWhereUniqueInput
    update?: XOR<XOR<postUpdateToOneWithWhereWithoutPost_tagsInput, postUpdateWithoutPost_tagsInput>, postUncheckedUpdateWithoutPost_tagsInput>
  }

  export type defined_tagUpdateOneRequiredWithoutPost_tagsNestedInput = {
    create?: XOR<defined_tagCreateWithoutPost_tagsInput, defined_tagUncheckedCreateWithoutPost_tagsInput>
    connectOrCreate?: defined_tagCreateOrConnectWithoutPost_tagsInput
    upsert?: defined_tagUpsertWithoutPost_tagsInput
    connect?: defined_tagWhereUniqueInput
    update?: XOR<XOR<defined_tagUpdateToOneWithWhereWithoutPost_tagsInput, defined_tagUpdateWithoutPost_tagsInput>, defined_tagUncheckedUpdateWithoutPost_tagsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type post_tagCreateWithoutPostInput = {
    tag: defined_tagCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagUncheckedCreateWithoutPostInput = {
    tag_id: number
  }

  export type post_tagCreateOrConnectWithoutPostInput = {
    where: post_tagWhereUniqueInput
    create: XOR<post_tagCreateWithoutPostInput, post_tagUncheckedCreateWithoutPostInput>
  }

  export type post_tagCreateManyPostInputEnvelope = {
    data: post_tagCreateManyPostInput | post_tagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type post_tagUpsertWithWhereUniqueWithoutPostInput = {
    where: post_tagWhereUniqueInput
    update: XOR<post_tagUpdateWithoutPostInput, post_tagUncheckedUpdateWithoutPostInput>
    create: XOR<post_tagCreateWithoutPostInput, post_tagUncheckedCreateWithoutPostInput>
  }

  export type post_tagUpdateWithWhereUniqueWithoutPostInput = {
    where: post_tagWhereUniqueInput
    data: XOR<post_tagUpdateWithoutPostInput, post_tagUncheckedUpdateWithoutPostInput>
  }

  export type post_tagUpdateManyWithWhereWithoutPostInput = {
    where: post_tagScalarWhereInput
    data: XOR<post_tagUpdateManyMutationInput, post_tagUncheckedUpdateManyWithoutPostInput>
  }

  export type post_tagScalarWhereInput = {
    AND?: post_tagScalarWhereInput | post_tagScalarWhereInput[]
    OR?: post_tagScalarWhereInput[]
    NOT?: post_tagScalarWhereInput | post_tagScalarWhereInput[]
    post_id?: IntFilter<"post_tag"> | number
    tag_id?: IntFilter<"post_tag"> | number
  }

  export type post_tagCreateWithoutTagInput = {
    post: postCreateNestedOneWithoutPost_tagsInput
  }

  export type post_tagUncheckedCreateWithoutTagInput = {
    post_id: number
  }

  export type post_tagCreateOrConnectWithoutTagInput = {
    where: post_tagWhereUniqueInput
    create: XOR<post_tagCreateWithoutTagInput, post_tagUncheckedCreateWithoutTagInput>
  }

  export type post_tagCreateManyTagInputEnvelope = {
    data: post_tagCreateManyTagInput | post_tagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type post_tagUpsertWithWhereUniqueWithoutTagInput = {
    where: post_tagWhereUniqueInput
    update: XOR<post_tagUpdateWithoutTagInput, post_tagUncheckedUpdateWithoutTagInput>
    create: XOR<post_tagCreateWithoutTagInput, post_tagUncheckedCreateWithoutTagInput>
  }

  export type post_tagUpdateWithWhereUniqueWithoutTagInput = {
    where: post_tagWhereUniqueInput
    data: XOR<post_tagUpdateWithoutTagInput, post_tagUncheckedUpdateWithoutTagInput>
  }

  export type post_tagUpdateManyWithWhereWithoutTagInput = {
    where: post_tagScalarWhereInput
    data: XOR<post_tagUpdateManyMutationInput, post_tagUncheckedUpdateManyWithoutTagInput>
  }

  export type postCreateWithoutPost_tagsInput = {
    description: string
    image_url?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    slots: number
    joined: number
    terminate?: boolean | null
  }

  export type postUncheckedCreateWithoutPost_tagsInput = {
    post_id?: number
    description: string
    image_url?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    latitude?: number | null
    longitude?: number | null
    slots: number
    joined: number
    terminate?: boolean | null
  }

  export type postCreateOrConnectWithoutPost_tagsInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutPost_tagsInput, postUncheckedCreateWithoutPost_tagsInput>
  }

  export type defined_tagCreateWithoutPost_tagsInput = {
    tag: string
  }

  export type defined_tagUncheckedCreateWithoutPost_tagsInput = {
    tag_id?: number
    tag: string
  }

  export type defined_tagCreateOrConnectWithoutPost_tagsInput = {
    where: defined_tagWhereUniqueInput
    create: XOR<defined_tagCreateWithoutPost_tagsInput, defined_tagUncheckedCreateWithoutPost_tagsInput>
  }

  export type postUpsertWithoutPost_tagsInput = {
    update: XOR<postUpdateWithoutPost_tagsInput, postUncheckedUpdateWithoutPost_tagsInput>
    create: XOR<postCreateWithoutPost_tagsInput, postUncheckedCreateWithoutPost_tagsInput>
    where?: postWhereInput
  }

  export type postUpdateToOneWithWhereWithoutPost_tagsInput = {
    where?: postWhereInput
    data: XOR<postUpdateWithoutPost_tagsInput, postUncheckedUpdateWithoutPost_tagsInput>
  }

  export type postUpdateWithoutPost_tagsInput = {
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    slots?: IntFieldUpdateOperationsInput | number
    joined?: IntFieldUpdateOperationsInput | number
    terminate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type postUncheckedUpdateWithoutPost_tagsInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    slots?: IntFieldUpdateOperationsInput | number
    joined?: IntFieldUpdateOperationsInput | number
    terminate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type defined_tagUpsertWithoutPost_tagsInput = {
    update: XOR<defined_tagUpdateWithoutPost_tagsInput, defined_tagUncheckedUpdateWithoutPost_tagsInput>
    create: XOR<defined_tagCreateWithoutPost_tagsInput, defined_tagUncheckedCreateWithoutPost_tagsInput>
    where?: defined_tagWhereInput
  }

  export type defined_tagUpdateToOneWithWhereWithoutPost_tagsInput = {
    where?: defined_tagWhereInput
    data: XOR<defined_tagUpdateWithoutPost_tagsInput, defined_tagUncheckedUpdateWithoutPost_tagsInput>
  }

  export type defined_tagUpdateWithoutPost_tagsInput = {
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type defined_tagUncheckedUpdateWithoutPost_tagsInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type post_tagCreateManyPostInput = {
    tag_id: number
  }

  export type post_tagUpdateWithoutPostInput = {
    tag?: defined_tagUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagUncheckedUpdateWithoutPostInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagUncheckedUpdateManyWithoutPostInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagCreateManyTagInput = {
    post_id: number
  }

  export type post_tagUpdateWithoutTagInput = {
    post?: postUpdateOneRequiredWithoutPost_tagsNestedInput
  }

  export type post_tagUncheckedUpdateWithoutTagInput = {
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_tagUncheckedUpdateManyWithoutTagInput = {
    post_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}