// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CollapseOutlinedSVG from '../icons-svg/lib/CollapseOutlined'
import Icon, { type BaseIconProps } from '../components'

const CollapseOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CollapseOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CollapseOutlined.displayName = 'CollapseOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CollapseOutlined)