// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortAscendingFTwoToneSVG from '../icons-svg/lib/SortAscendingFTwoTone'
import Icon, { type BaseIconProps } from '../components'

const SortAscendingFTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={SortAscendingFTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortAscendingFTwoTone.displayName = 'SortAscendingFTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortAscendingFTwoTone)