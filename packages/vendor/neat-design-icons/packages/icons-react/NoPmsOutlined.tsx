// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import NoPmsOutlinedSVG from '../icons-svg/lib/NoPmsOutlined'
import Icon, { type BaseIconProps } from '../components'

const NoPmsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={NoPmsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    NoPmsOutlined.displayName = 'NoPmsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(NoPmsOutlined)