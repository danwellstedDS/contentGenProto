// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoveColumnFilledSVG from '../icons-svg/lib/MoveColumnFilled'
import Icon, { type BaseIconProps } from '../components'

const MoveColumnFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoveColumnFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoveColumnFilled.displayName = 'MoveColumnFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoveColumnFilled)