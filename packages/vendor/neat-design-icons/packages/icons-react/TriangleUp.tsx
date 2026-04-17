// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TriangleUpSVG from '../icons-svg/lib/TriangleUp'
import Icon, { type BaseIconProps } from '../components'

const TriangleUp = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TriangleUpSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TriangleUp.displayName = 'TriangleUp'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TriangleUp)