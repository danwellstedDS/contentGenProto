// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SyncFilledSVG from '../icons-svg/lib/SyncFilled'
import Icon, { type BaseIconProps } from '../components'

const SyncFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SyncFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SyncFilled.displayName = 'SyncFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SyncFilled)