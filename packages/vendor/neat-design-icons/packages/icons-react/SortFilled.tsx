// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortFilledSVG from '../icons-svg/lib/SortFilled'
import Icon, { type BaseIconProps } from '../components'

const SortFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SortFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortFilled.displayName = 'SortFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortFilled)