// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortDescendingOTwoToneSVG from '../icons-svg/lib/SortDescendingOTwoTone'
import Icon, { type BaseIconProps } from '../components'

const SortDescendingOTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={SortDescendingOTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortDescendingOTwoTone.displayName = 'SortDescendingOTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortDescendingOTwoTone)