// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TagOutlinedSVG from '../icons-svg/lib/TagOutlined'
import Icon, { type BaseIconProps } from '../components'

const TagOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TagOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TagOutlined.displayName = 'TagOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TagOutlined)