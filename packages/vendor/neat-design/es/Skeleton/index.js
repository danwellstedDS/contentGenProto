/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components
import InternalSkeleton from "./Skeleton";
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonBar from "./SkeletonBar";
import SkeletonButton from "./SkeletonButton";
import SkeletonCard from "./SkeletonCard";
import SkeletonContent from "./SkeletonContent";
import SkeletonIcon from "./SkeletonIcon";
import SkeletonMenu from "./SkeletonMenu";
import SkeletonNotification from "./SkeletonNotification";
import SkeletonParagraph from "./SkeletonParagraph";
import SkeletonTable from "./SkeletonTable";
import SkeletonTitleBox from "./SkeletonTitleBox";
var Skeleton = InternalSkeleton;
Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Icon = SkeletonIcon;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Button = SkeletonButton;
Skeleton.Bar = SkeletonBar;
Skeleton.TitleBox = SkeletonTitleBox;
Skeleton.Notification = SkeletonNotification;
Skeleton.Card = SkeletonCard;
Skeleton.Content = SkeletonContent;
Skeleton.Menu = SkeletonMenu;
Skeleton.Table = SkeletonTable;
export default Skeleton;