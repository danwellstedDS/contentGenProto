// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TabletHFilledSVG from '../icons-svg/lib/TabletHFilled'
import Icon, { type BaseIconProps } from '../components'

const TabletHFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TabletHFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TabletHFilled.displayName = 'TabletHFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TabletHFilled)