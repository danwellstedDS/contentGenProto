// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArticleFilledSVG from '../icons-svg/lib/ArticleFilled'
import Icon, { type BaseIconProps } from '../components'

const ArticleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArticleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArticleFilled.displayName = 'ArticleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArticleFilled)