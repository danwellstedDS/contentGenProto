// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortDescendingFTwoToneSVG from '../icons-svg/lib/SortDescendingFTwoTone'
import Icon, { type BaseIconProps } from '../components'

const SortDescendingFTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={SortDescendingFTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortDescendingFTwoTone.displayName = 'SortDescendingFTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortDescendingFTwoTone)