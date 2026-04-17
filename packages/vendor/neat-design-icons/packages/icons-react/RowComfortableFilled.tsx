// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import RowComfortableFilledSVG from '../icons-svg/lib/RowComfortableFilled'
import Icon, { type BaseIconProps } from '../components'

const RowComfortableFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={RowComfortableFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    RowComfortableFilled.displayName = 'RowComfortableFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(RowComfortableFilled)