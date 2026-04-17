import Context from './components/Context';

export * from './icons-react';
export { default as createFromIconfontCN } from './components/IconFont';
export { default } from './components/NeatIcon';

export type { NeatIconProps as BaseIconProps } from './components/NeatIcon';

const IconProvider = Context.Provider;
export { IconProvider };
