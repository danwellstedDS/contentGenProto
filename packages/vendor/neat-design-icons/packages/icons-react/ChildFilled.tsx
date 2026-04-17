// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ChildFilledSVG from '../icons-svg/lib/ChildFilled'
import Icon, { type BaseIconProps } from '../components'

const ChildFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ChildFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ChildFilled.displayName = 'ChildFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ChildFilled)