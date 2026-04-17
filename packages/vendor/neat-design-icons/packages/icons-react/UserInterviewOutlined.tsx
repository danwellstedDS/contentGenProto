// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UserInterviewOutlinedSVG from '../icons-svg/lib/UserInterviewOutlined'
import Icon, { type BaseIconProps } from '../components'

const UserInterviewOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UserInterviewOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UserInterviewOutlined.displayName = 'UserInterviewOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UserInterviewOutlined)