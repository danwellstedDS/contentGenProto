// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoveRowFilledSVG from '../icons-svg/lib/MoveRowFilled'
import Icon, { type BaseIconProps } from '../components'

const MoveRowFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoveRowFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoveRowFilled.displayName = 'MoveRowFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoveRowFilled)