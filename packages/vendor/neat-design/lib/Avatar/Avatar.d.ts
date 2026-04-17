import type { AvatarProps as AntAvatarProps } from 'antd';
import type { GroupProps } from 'antd/lib/avatar';
import type { FC, ForwardRefExoticComponent } from 'react';
type AvatarSizeType = Exclude<AntAvatarProps['size'], 'default'> | 'medium';
export type AvatarProps = Omit<AntAvatarProps, 'size'> & {
    size?: AvatarSizeType;
};
export type AvatarGroupProps = Omit<GroupProps, 'size'> & {
    size?: AvatarSizeType;
};
type CompoundedComponent = ForwardRefExoticComponent<AvatarProps> & {
    Group: FC<AvatarGroupProps>;
};
declare const Avatar: CompoundedComponent;
export default Avatar;
