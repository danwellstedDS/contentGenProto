// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TroubleshootingFilledSVG from '../icons-svg/lib/TroubleshootingFilled'
import Icon, { type BaseIconProps } from '../components'

const TroubleshootingFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TroubleshootingFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TroubleshootingFilled.displayName = 'TroubleshootingFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TroubleshootingFilled)