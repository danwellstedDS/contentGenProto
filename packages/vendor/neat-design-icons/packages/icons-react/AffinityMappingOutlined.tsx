// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AffinityMappingOutlinedSVG from '../icons-svg/lib/AffinityMappingOutlined'
import Icon, { type BaseIconProps } from '../components'

const AffinityMappingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AffinityMappingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AffinityMappingOutlined.displayName = 'AffinityMappingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AffinityMappingOutlined)