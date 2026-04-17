// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SortAscendingOTwoToneSVG from '../icons-svg/lib/SortAscendingOTwoTone'
import Icon, { type BaseIconProps } from '../components'

const SortAscendingOTwoTone = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={true} ref={ref} component={SortAscendingOTwoToneSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SortAscendingOTwoTone.displayName = 'SortAscendingOTwoTone'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SortAscendingOTwoTone)