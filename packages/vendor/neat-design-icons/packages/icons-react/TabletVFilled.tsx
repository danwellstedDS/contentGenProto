// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TabletVFilledSVG from '../icons-svg/lib/TabletVFilled'
import Icon, { type BaseIconProps } from '../components'

const TabletVFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TabletVFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TabletVFilled.displayName = 'TabletVFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TabletVFilled)