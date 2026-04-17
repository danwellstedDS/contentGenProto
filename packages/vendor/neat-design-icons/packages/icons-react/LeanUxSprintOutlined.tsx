// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LeanUxSprintOutlinedSVG from '../icons-svg/lib/LeanUxSprintOutlined'
import Icon, { type BaseIconProps } from '../components'

const LeanUxSprintOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LeanUxSprintOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LeanUxSprintOutlined.displayName = 'LeanUxSprintOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LeanUxSprintOutlined)