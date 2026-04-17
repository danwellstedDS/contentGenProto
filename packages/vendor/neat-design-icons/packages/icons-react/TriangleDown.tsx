// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TriangleDownSVG from '../icons-svg/lib/TriangleDown'
import Icon, { type BaseIconProps } from '../components'

const TriangleDown = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TriangleDownSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TriangleDown.displayName = 'TriangleDown'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TriangleDown)