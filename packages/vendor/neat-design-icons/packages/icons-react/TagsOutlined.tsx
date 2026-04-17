// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TagsOutlinedSVG from '../icons-svg/lib/TagsOutlined'
import Icon, { type BaseIconProps } from '../components'

const TagsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TagsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TagsOutlined.displayName = 'TagsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TagsOutlined)