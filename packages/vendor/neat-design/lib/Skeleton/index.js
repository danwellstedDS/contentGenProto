"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Skeleton = _interopRequireDefault(require("./Skeleton"));
var _SkeletonAvatar = _interopRequireDefault(require("./SkeletonAvatar"));
var _SkeletonBar = _interopRequireDefault(require("./SkeletonBar"));
var _SkeletonButton = _interopRequireDefault(require("./SkeletonButton"));
var _SkeletonCard = _interopRequireDefault(require("./SkeletonCard"));
var _SkeletonContent = _interopRequireDefault(require("./SkeletonContent"));
var _SkeletonIcon = _interopRequireDefault(require("./SkeletonIcon"));
var _SkeletonMenu = _interopRequireDefault(require("./SkeletonMenu"));
var _SkeletonNotification = _interopRequireDefault(require("./SkeletonNotification"));
var _SkeletonParagraph = _interopRequireDefault(require("./SkeletonParagraph"));
var _SkeletonTable = _interopRequireDefault(require("./SkeletonTable"));
var _SkeletonTitleBox = _interopRequireDefault(require("./SkeletonTitleBox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Components

var Skeleton = _Skeleton.default;
Skeleton.Paragraph = _SkeletonParagraph.default;
Skeleton.Icon = _SkeletonIcon.default;
Skeleton.Avatar = _SkeletonAvatar.default;
Skeleton.Button = _SkeletonButton.default;
Skeleton.Bar = _SkeletonBar.default;
Skeleton.TitleBox = _SkeletonTitleBox.default;
Skeleton.Notification = _SkeletonNotification.default;
Skeleton.Card = _SkeletonCard.default;
Skeleton.Content = _SkeletonContent.default;
Skeleton.Menu = _SkeletonMenu.default;
Skeleton.Table = _SkeletonTable.default;
var _default = exports.default = Skeleton;