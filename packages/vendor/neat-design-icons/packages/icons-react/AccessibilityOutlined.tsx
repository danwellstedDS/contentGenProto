// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AccessibilityOutlinedSVG from '../icons-svg/lib/AccessibilityOutlined'
import Icon, { type BaseIconProps } from '../components'

const AccessibilityOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AccessibilityOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AccessibilityOutlined.displayName = 'AccessibilityOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AccessibilityOutlined)