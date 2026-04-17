// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BrochureOutlinedSVG from '../icons-svg/lib/BrochureOutlined'
import Icon, { type BaseIconProps } from '../components'

const BrochureOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BrochureOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BrochureOutlined.displayName = 'BrochureOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BrochureOutlined)