// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import EmpathyMappingOutlinedSVG from '../icons-svg/lib/EmpathyMappingOutlined'
import Icon, { type BaseIconProps } from '../components'

const EmpathyMappingOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={EmpathyMappingOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    EmpathyMappingOutlined.displayName = 'EmpathyMappingOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(EmpathyMappingOutlined)