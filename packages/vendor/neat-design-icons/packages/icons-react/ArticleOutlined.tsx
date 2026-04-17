// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ArticleOutlinedSVG from '../icons-svg/lib/ArticleOutlined'
import Icon, { type BaseIconProps } from '../components'

const ArticleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ArticleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ArticleOutlined.displayName = 'ArticleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ArticleOutlined)