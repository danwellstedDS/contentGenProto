// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ActivitiesOutlinedSVG from '../icons-svg/lib/ActivitiesOutlined'
import Icon, { type BaseIconProps } from '../components'

const ActivitiesOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ActivitiesOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ActivitiesOutlined.displayName = 'ActivitiesOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ActivitiesOutlined)