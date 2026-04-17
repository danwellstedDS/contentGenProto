// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlusCircleFilledSVG from '../icons-svg/lib/PlusCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const PlusCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlusCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlusCircleFilled.displayName = 'PlusCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlusCircleFilled)