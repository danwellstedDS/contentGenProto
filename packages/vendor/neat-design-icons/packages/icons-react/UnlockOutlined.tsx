// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UnlockOutlinedSVG from '../icons-svg/lib/UnlockOutlined'
import Icon, { type BaseIconProps } from '../components'

const UnlockOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UnlockOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UnlockOutlined.displayName = 'UnlockOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UnlockOutlined)