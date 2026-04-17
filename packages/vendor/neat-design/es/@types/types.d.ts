/** https://github.com/Microsoft/TypeScript/issues/29729 */
import type React from 'react';
export type LiteralUnion<T extends string> = T | (string & Record<string, never>);
export type AnyObject = Record<PropertyKey, any>;
export type CustomComponent<P = AnyObject> = React.ComponentType<P> | string;
export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
