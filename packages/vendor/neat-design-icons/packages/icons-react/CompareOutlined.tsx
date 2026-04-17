// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CompareOutlinedSVG from '../icons-svg/lib/CompareOutlined'
import Icon, { type BaseIconProps } from '../components'

const CompareOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CompareOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CompareOutlined.displayName = 'CompareOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CompareOutlined)