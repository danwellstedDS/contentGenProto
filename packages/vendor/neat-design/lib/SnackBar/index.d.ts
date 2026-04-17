/**
 * @file index.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */
/// <reference types="react" />
declare const SnackBar: React.NamedExoticComponent<React.PropsWithChildren<import("./types").SnackBarProps>>;
export type { BoundsGap, Placement, SnackBarProps } from './types';
export default SnackBar;
