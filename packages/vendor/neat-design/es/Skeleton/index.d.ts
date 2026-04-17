/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
import InternalSkeleton from './Skeleton';
import SkeletonAvatar from './SkeletonAvatar';
import SkeletonBar from './SkeletonBar';
import SkeletonButton from './SkeletonButton';
import SkeletonCard from './SkeletonCard';
import SkeletonContent from './SkeletonContent';
import SkeletonIcon from './SkeletonIcon';
import SkeletonMenu from './SkeletonMenu';
import SkeletonNotification from './SkeletonNotification';
import SkeletonParagraph from './SkeletonParagraph';
import SkeletonTable from './SkeletonTable';
import SkeletonTitleBox from './SkeletonTitleBox';
type InternalSkeletonType = typeof InternalSkeleton;
type CompoundedComponent = InternalSkeletonType & {
    Paragraph: typeof SkeletonParagraph;
    Icon: typeof SkeletonIcon;
    Avatar: typeof SkeletonAvatar;
    Button: typeof SkeletonButton;
    Bar: typeof SkeletonBar;
    TitleBox: typeof SkeletonTitleBox;
    Notification: typeof SkeletonNotification;
    Card: typeof SkeletonCard;
    Content: typeof SkeletonContent;
    Menu: typeof SkeletonMenu;
    Table: typeof SkeletonTable;
};
declare const Skeleton: CompoundedComponent;
export type { SkeletonProps } from './Skeleton';
export type { SkeletonAvatarProps } from './SkeletonAvatar';
export type { SkeletonBarProps } from './SkeletonBar';
export type { SkeletonButtonProps } from './SkeletonButton';
export type { SkeletonCardProps } from './SkeletonCard';
export type { SkeletonContentProps } from './SkeletonContent';
export type { SkeletonIconProps } from './SkeletonIcon';
export type { SkeletonMenuProps } from './SkeletonMenu';
export type { SkeletonNotificationProps } from './SkeletonNotification';
export type { SkeletonParagraphProps } from './SkeletonParagraph';
export type { SkeletonTableProps } from './SkeletonTable';
export type { SkeletonTitleBoxProps } from './SkeletonTitleBox';
export default Skeleton;
