/**
 * @file SkeletonNotification.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import type { FC } from 'react';
import type { InternalSkeletonAvatarProps } from './SkeletonAvatar';
import type { InternalSkeletonButtonProps } from './SkeletonButton';
import type { InternalSkeletonParagraphProps } from './SkeletonParagraph';
import type { InternalSkeletonTitleBoxProps } from './SkeletonTitleBox';
import type { InternalSkeletonComponentProps, SkeletonComponentProps } from './types';
export interface InternalSkeletonNotificationProps extends InternalSkeletonComponentProps {
    avatar?: boolean | InternalSkeletonAvatarProps;
    titleBox?: boolean | InternalSkeletonTitleBoxProps;
    paragraph?: boolean | InternalSkeletonParagraphProps;
    button?: boolean | InternalSkeletonButtonProps;
}
export declare const InternalSkeletonNotification: FC<InternalSkeletonNotificationProps>;
export type SkeletonNotificationProps = InternalSkeletonNotificationProps & SkeletonComponentProps;
declare const SkeletonNotification: FC<SkeletonNotificationProps>;
export default SkeletonNotification;
