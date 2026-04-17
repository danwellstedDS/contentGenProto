// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MeetingOutlinedSVG from '../icons-svg/lib/MeetingOutlined'
import Icon, { type BaseIconProps } from '../components'

const MeetingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MeetingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MeetingOutlined.displayName = 'MeetingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MeetingOutlined)