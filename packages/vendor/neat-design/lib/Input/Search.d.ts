/**
 * @file Search.tsx
 * @author rzh(peter.rao@derbysoft.net)
 */
/// <reference types="react" />
import type { InputRef } from 'antd';
import type { SearchProps as AntdSearchProps } from 'antd/lib/input';
import type { SizeType } from '../hooks/useConvertSize';
export type SearchProps = Omit<AntdSearchProps, 'size'> & {
    size?: SizeType;
};
declare const Search: React.ForwardRefExoticComponent<Omit<AntdSearchProps, "size"> & {
    size?: SizeType;
} & React.RefAttributes<InputRef>>;
export default Search;
